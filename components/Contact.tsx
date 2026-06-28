"use client";

import Reveal from "./Reveal";
import Overline from "./Overline";
import InstagramIcon from "./InstagramIcon";

const COMMISSION_MAILTO =
  "mailto:kirazeren3@gmail.com" +
  "?subject=" +
  encodeURIComponent("Commission Request — Objectify 3D") +
  "&body=" +
  encodeURIComponent(
    "Hi Eren,\n\nI'd like to commission a piece.\n\n• What it is: \n• Reference image: (attached)\n• Intended size: \n• Deadline (if any): \n\nThanks!"
  );

const howToStart = [
  "Send a reference image or description",
  "Tell us the intended size and finish",
  "We confirm scope, timing, and details",
];

const methods = [
  { label: "Phone", value: "+90 533 038 05 15", href: "tel:+905330380515", icon: "phone" as const },
  { label: "Instagram — Brand", value: "@objectify3d", href: "https://www.instagram.com/objectify3d/", icon: "ig" as const },
  { label: "Instagram — Personal", value: "@erenkiraz8", href: "https://www.instagram.com/erenkiraz8/", icon: "ig" as const },
];

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
        style={{ background: "radial-gradient(ellipse at center, rgba(109,40,217,0.09) 0%, transparent 65%)" }}
      />

      <div
        className="relative mx-auto grid grid-cols-1 md:grid-cols-2 items-start"
        style={{ maxWidth: "1100px", gap: "clamp(2.5rem, 6vw, 5rem)" }}
      >
        {/* Invitation */}
        <div>
          <Reveal>
            <Overline>Contact</Overline>
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
              Reach out with your idea, a reference image, or any questions. Every commission starts with a
              conversation.
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
            <a
              href={COMMISSION_MAILTO}
              className="hero-btn-primary no-underline inline-flex items-center gap-2"
              style={{
                marginTop: "2.25rem",
                padding: "0.95rem 2.1rem",
                background: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
                color: "white",
                fontWeight: 600,
                fontSize: "0.9375rem",
                letterSpacing: "0.02em",
                borderRadius: "9999px",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              Start Your Commission
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <p style={{ marginTop: "0.875rem", fontFamily: "var(--font-mono), monospace", fontSize: "var(--text-caption)", color: "var(--color-faint)" }}>
              or email kirazeren3@gmail.com
            </p>
          </Reveal>
        </div>

        {/* Other channels */}
        <Reveal delay={0.2}>
          <div
            style={{
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--color-line)",
              background: "rgba(255,255,255,0.02)",
              padding: "0.5rem 1.5rem",
            }}
          >
            {methods.map((m) => (
              <a
                key={m.label}
                href={m.href}
                target={m.href.startsWith("http") ? "_blank" : undefined}
                rel={m.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="no-underline flex items-center gap-4"
                style={{
                  padding: "1.4rem 0",
                  borderBottom: "1px solid var(--color-line-soft)",
                  transition: "padding-left 0.25s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.paddingLeft = "0.5rem")}
                onMouseLeave={(e) => (e.currentTarget.style.paddingLeft = "0")}
              >
                <span
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    borderRadius: "10px",
                    background: "rgba(124,58,237,0.12)",
                    border: "1px solid rgba(124,58,237,0.22)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-violet-200)",
                    flexShrink: 0,
                  }}
                >
                  {m.icon === "ig" ? (
                    <InstagramIcon size={18} />
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  )}
                </span>
                <span style={{ minWidth: 0 }}>
                  <span className="overline" style={{ display: "block" }}>
                    {m.label}
                  </span>
                  <span style={{ display: "block", marginTop: "0.2rem", color: "var(--color-bone)", fontSize: "0.9375rem", fontWeight: 500 }}>
                    {m.value}
                  </span>
                </span>
                <svg
                  style={{ marginLeft: "auto", flexShrink: 0, opacity: 0.4 }}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#a78bfa"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
