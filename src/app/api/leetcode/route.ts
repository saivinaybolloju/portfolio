import { NextResponse } from "next/server";
import { fetchLeetCodeProfile } from "@/lib/leetcode";

const USERNAME = process.env.LEETCODE_USERNAME ?? "bollojuvinay";

export async function GET() {
  try {
    const profile = await fetchLeetCodeProfile(USERNAME);
    return NextResponse.json(profile);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to fetch LeetCode data";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
