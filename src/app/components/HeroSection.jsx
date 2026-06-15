"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin } from "lucide-react";
import MagneticButton from "./ui/MagneticButton";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HeroSection() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="profile"
      className="section-padding-hero flex min-h-[calc(100dvh-var(--nav-offset))] items-center"
    >
      <div className="section-container">
        <div className="flex w-full flex-col items-center gap-[var(--stack-gap)] lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="relative shrink-0"
          >
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#F5C06A] via-[#F0A8D0] to-[#C9B8FF] opacity-50 blur-xl" />
            <div className="relative h-52 w-52 overflow-hidden rounded-full border-2 border-white/10 sm:h-60 sm:w-60 lg:h-64 lg:w-64">
              <Image
                src="/assests/profile.jpeg"
                alt="Sai Vinay Bolloju"
                width={256}
                height={256}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-4 flex-1 text-center lg:max-w-xl lg:text-left xl:max-w-2xl"
          >
            <motion.p
              variants={fadeUp}
              className="mb-2 text-xs font-medium uppercase tracking-widest text-[#9CA3AF] sm:text-sm"
            >
              Hi, I&apos;m
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className=" text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
            >
              <span className="gradient-text">Sai Vinay</span> Bolloju
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-base leading-relaxed text-[#9CA3AF] sm:text-lg"
            >
              Software Developer Intern | Full-Stack &amp; Mobile Developer
              specializing in building high-performance applications.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mb-6 flex flex-wrap justify-center gap-3 lg:justify-start"
            >
           <MagneticButton size="sm" variant="primary" onClick={() => open("https://www.github.com/saivinaybolloju")}>
              View My Work
            </MagneticButton>
              
              <MagneticButton
                size="sm"
                variant="ghost"
                className="px-6"
                onClick={() => scrollTo("#contact")}
              >
                Let&apos;s Connect
              </MagneticButton>

            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex justify-center gap-3 lg:justify-start"
            >
              {[
                { icon: Github, href: "https://github.com/saivinaybolloju", label: "GitHub" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/vinay-bolloju-9b7680278/",
                  label: "LinkedIn",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="hover-accent flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#9CA3AF]"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
