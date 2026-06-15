"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ExternalLink, Trophy, Target, Medal, Code2, Loader2 } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";

const DIFFICULTY_COLORS = {
  easy: { fill: "#00B8A3", track: "rgba(0,184,163,0.15)" },
  medium: { fill: "#FFA116", track: "rgba(255,161,22,0.15)" },
  hard: { fill: "#EF4743", track: "rgba(239,71,67,0.15)" },
};

function formatRank(n) {
  if (n == null) return "—";
  return n.toLocaleString("en-IN");
}

function DifficultyBar({ label, solved, total, colorKey }) {
  const pct = total ? Math.min((solved / total) * 100, 100) : 0;
  const colors = DIFFICULTY_COLORS[colorKey];

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-xs">
        <span className="font-medium text-[#D1D5DB]">{label}</span>
        <span className="text-[#9CA3AF]">
          {solved}/{total}
        </span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full" style={{ background: colors.track }}>
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${pct}%`, background: colors.fill }}
        />
      </div>
    </div>
  );
}

function SolvedRing({ solved, total, attempting }) {
  const pct = total ? (solved / total) * 100 : 0;
  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (pct / 100) * circumference;

  return (
    <div className="relative flex h-36 w-36 shrink-0 items-center justify-center">
      <svg className="h-full w-full -rotate-90" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
        <circle
          cx="60"
          cy="60"
          r="54"
          fill="none"
          stroke="url(#lc-ring-gradient)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-1000"
        />
        <defs>
          <linearGradient id="lc-ring-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00B8A3" />
            <stop offset="50%" stopColor="#FFA116" />
            <stop offset="100%" stopColor="#EF4743" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-2xl font-bold text-[#F3F4F6]">{solved}</span>
        <span className="text-[0.65rem] text-[#9CA3AF]">/{total} Solved</span>
        {attempting > 0 && (
          <span className="mt-1 text-[0.625rem] text-[#6B7280]">{attempting} Attempting</span>
        )}
      </div>
    </div>
  );
}

function RatingChart({ history }) {
  if (!history?.length) {
    return (
      <div className="flex h-24 items-center justify-center text-xs text-[#6B7280]">
        No contest history
      </div>
    );
  }

  const points = history.slice(-24);
  const ratings = points.map((p) => p.rating);
  const min = Math.min(...ratings) - 30;
  const max = Math.max(...ratings) + 30;
  const range = max - min || 1;
  const w = 280;
  const h = 80;
  const pad = 4;

  const coords = points.map((p, i) => {
    const x = pad + (i / Math.max(points.length - 1, 1)) * (w - pad * 2);
    const y = h - pad - ((p.rating - min) / range) * (h - pad * 2);
    return `${x},${y}`;
  });

  const startYear = points[0]?.date ? new Date(points[0].date).getFullYear() : "";
  const endYear = points[points.length - 1]?.date
    ? new Date(points[points.length - 1].date).getFullYear()
    : "";

  return (
    <div>
      <svg viewBox={`0 0 ${w} ${h}`} className="h-24 w-full" preserveAspectRatio="none">
        <polyline
          fill="none"
          stroke="#FFA116"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          points={coords.join(" ")}
        />
      </svg>
      <div className="mt-1 flex justify-between text-[0.625rem] text-[#6B7280]">
        <span>{startYear}</span>
        <span>{endYear}</span>
      </div>
    </div>
  );
}

function TopPercentileBar({ topPercentage }) {
  const pct = topPercentage ?? 0;
  const marker = Math.min(Math.max(pct, 2), 98);

  return (
    <div className="mt-4">
      <div className="relative h-28 w-full">
        <div className="absolute bottom-0 left-0 right-0 flex h-24 items-end justify-between gap-0.5 px-1">
          {Array.from({ length: 20 }).map((_, i) => {
            const height = 20 + Math.sin(i * 0.5) * 15 + (i % 3) * 8;
            const isMarker = Math.abs((i / 19) * 100 - marker) < 6;
            return (
              <div
                key={i}
                className="flex-1 rounded-t-sm transition-colors"
                style={{
                  height: `${height}%`,
                  background: isMarker ? "#FFA116" : "rgba(255,255,255,0.08)",
                }}
              />
            );
          })}
        </div>
      </div>
      <p className="text-center text-[0.6875rem] text-[#9CA3AF]">
        Top {pct.toFixed(2)}% of contest participants
      </p>
    </div>
  );
}

function DashboardSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,240px)_1fr]">
        <div className="h-80 rounded-xl bg-white/[0.04]" />
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="h-48 rounded-xl bg-white/[0.04]" />
          <div className="h-48 rounded-xl bg-white/[0.04]" />
          <div className="h-52 rounded-xl bg-white/[0.04] sm:col-span-2 lg:col-span-1" />
          <div className="h-52 rounded-xl bg-white/[0.04]" />
        </div>
      </div>
    </div>
  );
}

export default function LeetCodeSection() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    fetch("/api/leetcode")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load LeetCode stats");
        return res.json();
      })
      .then(setData)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="leetcode" className="section-padding bg-[#0D0E12]/40">
      <div className="section-container">
        <ScrollReveal className="section-header">
          <p className="section-label">Problem Solving</p>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="section-title">LeetCode Dashboard</h2>
            {data?.profileUrl && (
              <a
                href={data.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-accent inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-[#9CA3AF]"
              >
                View on LeetCode
                <ExternalLink size={13} />
              </a>
            )}
          </div>
        </ScrollReveal>

        {loading && (
          <div className="flex flex-col items-center gap-4 py-8">
            <Loader2 className="h-6 w-6 animate-spin text-[#F5C06A]" />
            <DashboardSkeleton />
          </div>
        )}

        {error && (
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 px-5 py-4 text-sm text-red-300">
            {error}
          </div>
        )}

        {data && !loading && (
          <div className="grid gap-4 lg:grid-cols-[minmax(0,260px)_1fr]">
            {/* Profile sidebar */}
            <ScrollReveal className="h-full">
              <div className="gradient-border-card glass-panel h-full p-[var(--card-pad)]">
                <div className="flex flex-col items-center text-center">
                  {data.avatar && (
                    <div className="relative mb-4 h-20 w-20 overflow-hidden rounded-lg border border-white/10">
                      <Image
                        src={data.avatar}
                        alt={data.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                  )}
                  <h3 className="text-base font-semibold text-[#F3F4F6]">{data.name}</h3>
                  <p className="mt-0.5 text-sm text-[#9CA3AF]">@{data.username}</p>
                  <p className="mt-3 text-xs text-[#6B7280]">
                    Rank{" "}
                    <span className="font-semibold text-[#D1D5DB]">{formatRank(data.rank)}</span>
                  </p>
                </div>

                <div className="mt-6 space-y-3 border-t border-white/[0.06] pt-5">
                  <p className="text-[0.6875rem] font-semibold uppercase tracking-wider text-[#6B7280]">
                    Languages
                  </p>
                  {data.languages.slice(0, 5).map((lang) => (
                    <div key={lang.languageName} className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-[#D1D5DB]">
                        <Code2 size={14} className="text-[#F5C06A]" />
                        {lang.languageName}
                      </span>
                      <span className="text-[#9CA3AF]">{lang.problemsSolved}</span>
                    </div>
                  ))}
                </div>

                {data.reputation > 0 && (
                  <div className="mt-5 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2.5 text-center">
                    <p className="text-[0.625rem] uppercase tracking-wider text-[#6B7280]">
                      Reputation
                    </p>
                    <p className="text-lg font-bold text-[#F5C06A]">{data.reputation}</p>
                  </div>
                )}
                {data.views > 0 && (
                  <div className="mt-5 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2.5 text-center">
                    <p className="text-[0.625rem] uppercase tracking-wider text-[#6B7280]">
                      Reputation
                    </p>
                    <p className="text-lg font-bold text-[#F5C06A]">{data.reputation}</p>
                  </div>
                )}
              </div>
            </ScrollReveal>

            {/* Stats grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {/* Contest rating */}
              <ScrollReveal delay={0.05}>
                <div className="gradient-border-card glass-panel h-full p-[var(--card-pad)]">
                  <div className="mb-3 flex items-center gap-2">
                    <Trophy size={16} className="text-[#FFA116]" />
                    <span className="text-xs font-medium text-[#9CA3AF]">Contest Rating</span>
                  </div>
                  <p className="text-3xl font-bold text-[#F3F4F6]">
                    {data.contest?.rating?.toLocaleString() ?? "—"}
                  </p>
                  {data.contest && (
                    <p className="mt-1 text-xs text-[#6B7280]">
                      Global Ranking{" "}
                      <span className="text-[#9CA3AF]">
                        {formatRank(data.contest.globalRanking)} /{" "}
                        {formatRank(data.contest.totalParticipants)}
                      </span>
                    </p>
                  )}
                  <p className="mt-0.5 text-xs text-[#6B7280]">
                    Attended{" "}
                    <span className="text-[#9CA3AF]">{data.contest?.attended ?? 0}</span> contests
                  </p>
                  <div className="mt-4">
                    <RatingChart history={data.ratingHistory} />
                  </div>
                </div>
              </ScrollReveal>

              {/* Top percentage */}
              <ScrollReveal delay={0.1}>
                <div className="gradient-border-card glass-panel h-full p-[var(--card-pad)]">
                  <div className="mb-1 flex items-center gap-2">
                    <Target size={16} className="text-[#FFA116]" />
                    <span className="text-xs font-medium text-[#9CA3AF]">Top Percentage</span>
                  </div>
                  <p className="text-3xl font-bold text-[#F3F4F6]">
                    {data.contest?.topPercentage != null
                      ? `${data.contest.topPercentage.toFixed(2)}%`
                      : "—"}
                  </p>
                  <TopPercentileBar topPercentage={data.contest?.topPercentage} />
                </div>
              </ScrollReveal>

              {/* Solved problems */}
              <ScrollReveal delay={0.15}>
                <div className="gradient-border-card glass-panel h-full p-[var(--card-pad)] sm:col-span-2 lg:col-span-1">
                  <p className="mb-4 text-xs font-medium text-[#9CA3AF]">Solved Problems</p>
                  <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center">
                    <SolvedRing
                      solved={data.solved}
                      total={data.totalQuestions}
                      attempting={data.attempting}
                    />
                    <div className="w-full flex-1 space-y-3">
                      <DifficultyBar
                        label="Easy"
                        solved={data.difficulty.easy.solved}
                        total={data.difficulty.easy.total}
                        colorKey="easy"
                      />
                      <DifficultyBar
                        label="Med."
                        solved={data.difficulty.medium.solved}
                        total={data.difficulty.medium.total}
                        colorKey="medium"
                      />
                      <DifficultyBar
                        label="Hard"
                        solved={data.difficulty.hard.solved}
                        total={data.difficulty.hard.total}
                        colorKey="hard"
                      />
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Badges */}
              <ScrollReveal delay={0.2}>
                <div className="gradient-border-card glass-panel h-full p-[var(--card-pad)]">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Medal size={16} className="text-[#F5C06A]" />
                      <span className="text-xs font-medium text-[#9CA3AF]">Badges</span>
                    </div>
                    <span className="rounded-full bg-white/[0.06] px-2 py-0.5 text-xs text-[#9CA3AF]">
                      {data.badges.length}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {data.badges.map((badge) => (
                      <div
                        key={badge.id}
                        className="group relative flex h-14 w-14 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.02] transition-transform hover:scale-105"
                        title={badge.name}
                      >
                        <Image
                          src={badge.icon}
                          alt={badge.name}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                  {data.badges[0] && (
                    <p className="mt-4 text-[0.6875rem] text-[#6B7280]">
                      Most Recent:{" "}
                      <span className="text-[#9CA3AF]">
                        {data.badges[0].name} · {data.badges[0].creationDate}
                      </span>
                    </p>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
