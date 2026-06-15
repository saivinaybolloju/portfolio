"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Copy, Check } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";
import GradientBorderCard from "./ui/GradientBorderCard";
import MagneticButton from "./ui/MagneticButton";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "bollojulucky11@gmail.com",
    href: "mailto:bollojulucky11@gmail.com",
    copyable: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 6301580910",
    href: "tel:+916301580910",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Hyderabad, India",
  },
];

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/saivinaybolloju" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vinay-bolloju-9b7680278/",
  },
];

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleCopy = async () => {
    await navigator.clipboard.writeText("bollojulucky11@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));

    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:bollojulucky11@gmail.com?subject=${subject}&body=${body}`;

    setLoading(false);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <ScrollReveal className="section-header">
          <p className="section-label">Reach Out</p>
          <h2 className="section-title">Let&apos;s Build Something Together</h2>
        </ScrollReveal>

        <div className="content-grid lg:grid-cols-2 lg:items-start">
          <div className="section-body">
            <ScrollReveal delay={0.1}>
              <p className="text-base leading-relaxed text-[#9CA3AF] sm:text-lg">
                I&apos;m open to full-time roles, freelance collaborations, and technical
                discussions. Whether you&apos;re a recruiter or a fellow engineer — let&apos;s
                connect and create something impactful.
              </p>
            </ScrollReveal>

            <div className="flex flex-col gap-3">
              {contactInfo.map((item, i) => (
                <ScrollReveal key={item.label} delay={0.12 + i * 0.04}>
                  <GradientBorderCard>
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F5C06A]/12">
                        <item.icon className="h-4 w-4 text-[#F5C06A]" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="mb-0.5 text-[0.6875rem] uppercase tracking-wide text-[#9CA3AF]">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm font-medium text-[#F3F4F6] transition-colors hover:text-[#F5C06A]"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-[#F3F4F6]">{item.value}</p>
                        )}
                      </div>
                      {item.copyable && (
                        <button
                          onClick={handleCopy}
                          aria-label="Copy email"
                          className="hover-accent flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 text-[#9CA3AF]"
                        >
                          {copied ? <Check size={15} /> : <Copy size={15} />}
                        </button>
                      )}
                    </div>
                  </GradientBorderCard>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.25}>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="hover-accent flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#9CA3AF]"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.15} className="h-full">
            <GradientBorderCard className="h-full">
              <form onSubmit={handleSubmit} className="form-stack">
                <div className="form-field">
                  <input
                    id="name"
                    type="text"
                    placeholder=" "
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  <label htmlFor="name">Name</label>
                </div>

                <div className="form-field">
                  <input
                    id="email"
                    type="email"
                    placeholder=" "
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                  <label htmlFor="email">Email</label>
                </div>

                <div className="form-field">
                  <textarea
                    id="message"
                    rows={5}
                    placeholder=" "
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                  <label htmlFor="message">Message</label>
                </div>

                <div className="flex flex-col items-start gap-3 pt-1">
                  <MagneticButton
                    type="submit"
                    variant="primary"
                    loading={loading}
                    disabled={loading}
                  >
                    Send Message
                  </MagneticButton>
                  {sent && (
                    <p className="text-sm text-[#F5C06A]">
                      Message ready — your email client should open shortly.
                    </p>
                  )}
                </div>
              </form>
            </GradientBorderCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
