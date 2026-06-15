"use client";

import ScrollReveal from "./ui/ScrollReveal";
import GradientBorderCard from "./ui/GradientBorderCard";
import { Award, Medal } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "JavaScript", "Python", "SQL", "HTML", "CSS", "C"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React", "Node.js", "Express.js", "Next.js", "Expo"],
  },
  {
    title: "Databases & Tools",
    skills: [
      "MySQL",
      "Firebase",
      "MongoDB",
      "Git",
      "GitHub",
      "VS Code",
      "Google Cloud Platform",
      "Power BI",
      "Postman",
    ],
  },
];

const certifications = [
  {
    title: "Data Structures and Algorithms",
    issuer: "SmartInterviews",
    badge: "Bronze",
    icon: Medal,
    accent: "from-[#CD7F32] to-[#8B4513]",
  },
  {
    title: "Java Elite",
    issuer: "NPTEL — IIT Ropar",
    badge: "Elite",
    icon: Award,
    accent: "from-[#F5C06A] to-[#E8A849]",
  },
  {
    title: "Python Elite Silver",
    issuer: "NPTEL — IIT Kharagpur",
    badge: "Silver",
    icon: Award,
    accent: "from-[#C0C0C0] to-[#808080]",
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        <ScrollReveal className="section-header">
          <p className="section-label">Technical Arsenal</p>
          <h2 className="section-title">Skills &amp; Certifications</h2>
        </ScrollReveal>

        <div className="section-body">
          <div className="content-grid sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((cat, i) => (
              <ScrollReveal key={cat.title} delay={i * 0.08} className="h-full">
                <GradientBorderCard className="h-full">
                  <h3 className="mb-4 text-base font-semibold text-[#F3F4F6]">{cat.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-[#9CA3AF] transition-all duration-300 hover:border-[#F5C06A]/40 hover:bg-[#F5C06A]/10 hover:text-[#F5C06A]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </GradientBorderCard>
              </ScrollReveal>
            ))}
          </div>

          <div>
            <ScrollReveal>
              <h3 className="section-subtitle">Certifications</h3>
            </ScrollReveal>

            <div className="content-grid sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert, i) => (
                <ScrollReveal key={cert.title} delay={i * 0.08} className="h-full">
                  <div className="gradient-border-card glass-panel h-full p-[var(--card-pad)] transition-transform duration-300 hover:scale-[1.02]">
                    <div
                      className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${cert.accent}`}
                    >
                      <cert.icon className="h-5 w-5 text-white" />
                    </div>
                    <span
                      className={`mb-3 inline-block rounded-full bg-gradient-to-r ${cert.accent} px-2.5 py-0.5 text-[0.6875rem] font-bold uppercase tracking-wide text-white`}
                    >
                      {cert.badge}
                    </span>
                    <h4 className="mb-1 text-sm font-semibold text-[#F3F4F6]">{cert.title}</h4>
                    <p className="text-xs leading-relaxed text-[#9CA3AF]">{cert.issuer}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
