"use client";

import Image from "next/image";
import { ExternalLink, Download } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";
import GradientBorderCard from "./ui/GradientBorderCard";

const projects = [
  {
    title: "WanderVault App",
    image: "/assests/wandervault1.jpg",
    stack: ["React Native", "Firebase", "Gemini AI", "Google Maps API", "Expo"],
    description:
      "AI-powered mobile travel planner generating personalized trip itineraries via Gemini AI; leverages Firebase BaaS for serverless security rules and Google Maps/Places APIs for dynamic location searching.",
    links: [
      { label: "Source Code", href: "https://github.com/saivinaybolloju/WanderVault", external: true },
      { label: "APK Download", href: "/assests/wandervault.apk", download: true },
    ],
  },
  {
    title: "WhatsApp Automation",
    image: "/assests/wasappauto.png",
    stack: ["Python", "Selenium", "SQLite", "PyWhatKit", "Chrome WebDriver"],
    description:
      "Automated personalized bulk message delivery across contacts using Selenium Chrome WebDriver, utilizing SQLite for dynamic contact-message mappings.",
    links: [
      { label: "Source Code", href: "https://github.com/saivinaybolloju/whatsappautomation", external: true },
    ],
  },
  {
    title: "TEDxACEEC Master Data Console",
    image: null,
    stack: ["Python", "Data Pipelines", "Deduplication"],
    description:
      "Engineered data consolidation pipelines to merge complex event application files into a single master repository, deduplicating records securely via unique email IDs. (Jan 2026)",
    links: [],
    badge: "Jan 2026",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding bg-[#0D0E12]/40">
      <div className="section-container">
        <ScrollReveal className="section-header">
          <p className="section-label">Featured Work</p>
          <h2 className="section-title">Projects</h2>
        </ScrollReveal>

        <div className="content-grid sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.08} className="h-full">
              <GradientBorderCard noPadding className="flex h-full flex-col overflow-hidden">
                {project.image ? (
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="flex h-44 items-center justify-center bg-gradient-to-br from-[#161B26] to-[#0B0F19]">
                    <span className="bg-gradient-to-r from-[#F5C06A] to-[#C9B8FF] bg-clip-text text-3xl font-bold text-transparent">
                      TEDx
                    </span>
                  </div>
                )}

                <div className="flex flex-1 flex-col p-[var(--card-pad)]">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <h3 className="text-base font-semibold leading-snug text-[#F3F4F6]">
                      {project.title}
                    </h3>
                    {project.badge && (
                      <span className="shrink-0 rounded-full border border-[#C9B8FF]/30 bg-[#C9B8FF]/10 px-2.5 py-0.5 text-[0.6875rem] text-[#C9B8FF]">
                        {project.badge}
                      </span>
                    )}
                  </div>

                  <p className="mb-4 flex-1 text-sm leading-relaxed text-[#9CA3AF]">
                    {project.description}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/[0.06] bg-white/[0.04] px-2 py-1 text-[0.6875rem] text-[#9CA3AF]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.links.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.links.map((link) =>
                        link.external ? (
                          <button
                            key={link.label}
                            onClick={() => window.open(link.href, "_blank")}
                            className="hover-accent inline-flex h-9 items-center gap-1.5 rounded-full border border-white/10 px-4 text-xs font-medium text-[#9CA3AF]"
                          >
                            <ExternalLink size={13} />
                            {link.label}
                          </button>
                        ) : (
                          <a
                            key={link.label}
                            href={link.href}
                            download
                            className="hover-accent inline-flex h-9 items-center gap-1.5 rounded-full border border-white/10 px-4 text-xs font-medium text-[#9CA3AF]"
                          >
                            <Download size={13} />
                            {link.label}
                          </a>
                        )
                      )}
                    </div>
                  )}
                </div>
              </GradientBorderCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
