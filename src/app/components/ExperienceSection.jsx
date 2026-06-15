"use client";

import { Briefcase, Calendar } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";
import GradientBorderCard from "./ui/GradientBorderCard";

const experience = {
  role: "Software Developer Intern",
  company: "Frost Interactive Services Pvt. Ltd.",
  period: "Jul 2024 — Oct 2024",
  highlights: [
    "Designed and developed ACETHLETICS, an inter-college sports application using React Native, MongoDB, and Node.js; drove frontend engineering and cross-functional feature scaling.",
    "Successfully hosted a live sports event, resolving real-world infrastructure challenges involving live scoring and application reliability.",
    "Embraced industry software methodologies including Agile, SCRUM, and modern Product Management tools.",
  ],
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding bg-[#0D0E12]/40">
      <div className="section-container">
        <ScrollReveal className="section-header">
          <p className="section-label">Career Journey</p>
          <h2 className="section-title">Experience</h2>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-3 top-0 hidden h-full w-px bg-gradient-to-b from-[#F5C06A] via-[#F0A8D0] to-transparent sm:block" />

          <ScrollReveal delay={0.1}>
            <div className="relative sm:pl-12">
              <div className="absolute left-1.5 top-8 hidden h-3.5 w-3.5 rounded-full border-2 border-[#F5C06A] bg-[#0B0F19] shadow-[0_0_14px_rgba(245,192,106,0.55)] sm:block" />

              <GradientBorderCard>
                <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F5C06A]/12">
                      <Briefcase className="h-5 w-5 text-[#F5C06A]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#F3F4F6]">{experience.role}</h3>
                      <p className="mt-0.5 text-sm text-[#F0A8D0]">{experience.company}</p>
                    </div>
                  </div>
                  <div className="flex w-fit items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-[#9CA3AF]">
                    <Calendar size={13} className="text-[#F5C06A]" />
                    {experience.period}
                  </div>
                </div>

                <ul className="space-y-3">
                  {experience.highlights.map((point, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm leading-relaxed text-[#9CA3AF] sm:text-[0.9375rem]"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#F5C06A] to-[#F0A8D0]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </GradientBorderCard>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
