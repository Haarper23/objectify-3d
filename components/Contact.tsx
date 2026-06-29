"use client";

import Reveal from "./Reveal";
import Overline from "./Overline";
import InstagramIcon from "./InstagramIcon";
import ContactForm from "./ContactForm";

const howToStart = [
  "Send a reference image or description",
  "Tell us the intended size and finish",
  "We confirm scope, timing, and details",
];

const methods = [
  { label: "Email", value: "kirazeren3@gmail.com", href: "mailto:kirazeren3@gmail.com", icon: "mail" as const },
  { label: "Phone", value: "+90 533 038 05 15", href: "tel:+905330380515", icon: "phone" as const },
  { label: "Instagram", value: "@objectify3d", href: "https://www.instagram.com/objectify3d/", icon: "ig" as const },
];

function MethodIcon({ icon }: { icon: "mail" | "phone" | "ig" }) {
  if (icon === "ig") return <InstagramIcon size={16} />;
  if (icon === "mail")
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    );
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 px-5 md:py-32 md:px-8"
      style={{ background: "var(--color-ink-700)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, rgba(109,40,217,0.08) 0%, transparent 65%)" }}
      />

      <div
        className="relative mx-auto grid grid-cols-1 lg:grid-cols-2 items-start"
        style={{ maxWidth: "1100px", gap: "clamp(2.5rem, 6vw, 5rem)" }}
      >
        {/* Invitation + direct contact */}
        <div>
          <Reveal>
            <Overline>Start a Project</Overline>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              className="serif"
              style={{
                marginTop: "1.25rem",
                fontSize: "var(--text-h2)",
                fontWeight: 500,
                lineHeight: 1.06,
                letterSpacing: "-0.02em",
                color: "var(--color-bone)",
              }}
            >
              Have an Idea?{" "}
              <span style={{ fontStyle: "italic", color: "var(--color-violet-200)" }}>Let&apos;s Make It Real.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p style={{ marginTop: "1.5rem", maxWidth: "440px", color: "var(--color-mist)", fontSize: "var(--text-lead)", lineHeight: 1.75 }}>
              Tell us about your piece and we&apos;ll come back with scope, timing, and a quote. Every
              commission starts with a conversation.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <ol style={{ marginTop: "2rem", listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {howToStart.map((step, i) => (
                <li key={step} style={{ display: "flex", gap: "0.875rem", alignItems: "baseline" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-mono), monospace",
                      fontSize: "var(--text-caption)",
                      color: "var(--color-violet)",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span style={{ color: "var(--color-mist)", fontSize: "0.9375rem" }}>{step}</span>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={0.32}>
            <div
              className="flex flex-col"
              style={{ marginTop: "2.25rem", paddingTop: "1.75rem", borderTop: "1px solid var(--color-line-soft)", gap: "0.25rem" }}
            >
              <span className="overline" style={{ marginBottom: "0.5rem" }}>
                Or reach us directly
              </span>
              {methods.map((m) => (
                <a
                  key={m.label}
                  href={m.href}
                  target={m.href.startsWith("http") ? "_blank" : undefined}
                  rel={m.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="no-underline inline-flex items-center gap-3"
                  style={{
                    padding: "0.6rem 0",
                    color: "var(--color-mist)",
                    fontSize: "0.9375rem",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-violet-200)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-mist)")}
                >
                  <span style={{ color: "var(--color-violet-200)", display: "flex" }}>
                    <MethodIcon icon={m.icon} />
                  </span>
                  {m.value}
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Project inquiry form */}
        <Reveal delay={0.2}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
