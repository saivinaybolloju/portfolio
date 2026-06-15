"use client";

import { GraduationCap, Code2 } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";
import GradientBorderCard from "./ui/GradientBorderCard";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <ScrollReveal className="section-header">
          <p className="section-label">Get to Know More</p>
          <h2 className="section-title">About Me</h2>
        </ScrollReveal>

        <div className="section-body">
          <ScrollReveal delay={0.1}>
            <p className="max-w-3xl text-base leading-relaxed text-[#9CA3AF] sm:text-lg">
              I&apos;m a passionate software developer with hands-on experience building
              full-stack and mobile applications. From architecting React Native sports
              platforms to engineering AI-powered travel planners, I thrive at the
              intersection of clean code, user experience, and real-world problem solving.
            </p>
          </ScrollReveal>

          <div className="content-grid sm:grid-cols-2">
            <ScrollReveal delay={0.15} className="h-full">
              <GradientBorderCard className="h-full">
                <Code2 className="mb-3 h-7 w-7 text-[#F5C06A]" />
                <h3 className="mb-1 text-base font-semibold text-[#F3F4F6]">Experience</h3>
                <p className="text-sm leading-relaxed text-[#9CA3AF]">
                  Full-Stack &amp; Mobile Development
                </p>
              </GradientBorderCard>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="h-full">
              <GradientBorderCard className="h-full">
                <GraduationCap className="mb-3 h-7 w-7 text-[#C9B8FF]" />
                <h3 className="mb-1 text-base font-semibold text-[#F3F4F6]">Education</h3>
                <p className="text-sm leading-relaxed text-[#9CA3AF]">
                  Computer Science Engineering
                </p>
              </GradientBorderCard>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
