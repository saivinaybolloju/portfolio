const LEETCODE_GRAPHQL = "https://leetcode.com/graphql/";

const PROFILE_QUERY = `
  query getUserProfile($username: String!) {
    matchedUser(username: $username) {
      username
      profile {
        realName
        ranking
        userAvatar
        reputation
      }
      submitStats: submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
        }
        totalSubmissionNum {
          difficulty
          count
        }
      }
      badges {
        id
        name
        icon
        creationDate
      }
      languageProblemCount {
        languageName
        problemsSolved
      }
    }
    userContestRanking(username: $username) {
      attendedContestsCount
      rating
      globalRanking
      totalParticipants
      topPercentage
    }
    userContestRankingHistory(username: $username) {
      attended
      rating
      ranking
      contest {
        title
        startTime
      }
    }
    allQuestionsCount {
      difficulty
      count
    }
  }
`;

function countByDifficulty(stats, difficulty) {
  return stats?.find((s) => s.difficulty === difficulty)?.count ?? 0;
}

export async function fetchLeetCodeProfile(username) {
  const res = await fetch(LEETCODE_GRAPHQL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: PROFILE_QUERY,
      variables: { username },
    }),
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`LeetCode API responded with ${res.status}`);
  }

  const json = await res.json();

  if (json.errors?.length) {
    throw new Error(json.errors[0].message);
  }

  const user = json.data?.matchedUser;
  if (!user) {
    throw new Error(`User "${username}" not found`);
  }

  const acStats = user.submitStats?.acSubmissionNum ?? [];
  const totalStats = user.submitStats?.totalSubmissionNum ?? [];
  const questionCounts = json.data?.allQuestionsCount ?? [];
  const contest = json.data?.userContestRanking;
  const history = (json.data?.userContestRankingHistory ?? []).filter((h) => h.attended);

  const solved = countByDifficulty(acStats, "All");
  const attempting = countByDifficulty(totalStats, "All") - solved;

  return {
    username: user.username,
    name: user.profile?.realName ?? user.username,
    avatar: user.profile?.userAvatar ?? null,
    rank: user.profile?.ranking ?? null,
    reputation: user.profile?.reputation ?? 0,
    solved,
    attempting: Math.max(attempting, 0),
    totalQuestions: countByDifficulty(questionCounts, "All"),
    difficulty: {
      easy: {
        solved: countByDifficulty(acStats, "Easy"),
        total: countByDifficulty(questionCounts, "Easy"),
      },
      medium: {
        solved: countByDifficulty(acStats, "Medium"),
        total: countByDifficulty(questionCounts, "Medium"),
      },
      hard: {
        solved: countByDifficulty(acStats, "Hard"),
        total: countByDifficulty(questionCounts, "Hard"),
      },
    },
    contest: contest
      ? {
          rating: Math.round(contest.rating),
          globalRanking: contest.globalRanking,
          totalParticipants: contest.totalParticipants,
          attended: contest.attendedContestsCount,
          topPercentage: contest.topPercentage,
        }
      : null,
    ratingHistory: history.map((h) => ({
      rating: Math.round(h.rating),
      date: h.contest?.startTime
        ? new Date(h.contest.startTime * 1000).toISOString()
        : null,
      title: h.contest?.title ?? "",
    })),
    badges: (user.badges ?? [])
      .slice()
      .sort((a, b) => new Date(b.creationDate) - new Date(a.creationDate)),
    languages: (user.languageProblemCount ?? [])
      .slice()
      .sort((a, b) => b.problemsSolved - a.problemsSolved),
    profileUrl: `https://leetcode.com/u/${user.username}/`,
  };
}
