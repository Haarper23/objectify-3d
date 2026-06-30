import Reveal from "./Reveal";
import Overline from "./Overline";
import InstagramIcon from "./InstagramIcon";
import ContactForm from "./ContactForm";
import { contactContent, contactInfo } from "@/src/data/site-content";

type Method = { label: string; value: string; href: string; icon: "mail" | "ig"; external?: boolean };

const methods: Method[] = [
  { label: "E-posta", value: contactInfo.email, href: `mailto:${contactInfo.email}`, icon: "mail" },
  {
    label: contactInfo.instagramBrand.label,
    value: contactInfo.instagramBrand.label,
    href: contactInfo.instagramBrand.href,
    icon: "ig",
    external: true,
  },
  {
    label: contactInfo.instagramPersonal.label,
    value: contactInfo.instagramPersonal.label,
    href: contactInfo.instagramPersonal.href,
    icon: "ig",
    external: true,
  },
];

function MethodIcon({ icon }: { icon: "mail" | "ig" }) {
  if (icon === "ig") return <InstagramIcon size={16} />;
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 px-5 md:py-32 md:px-8"
      style={{ background: "var(--color-surface)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, rgba(255,255,255,0.03) 0%, transparent 65%)" }}
      />

      <div
        className="relative mx-auto grid grid-cols-1 lg:grid-cols-2 items-start"
        style={{ maxWidth: "1100px", gap: "clamp(2.5rem, 6vw, 5rem)" }}
      >
        {/* Invitation + direct contact */}
        <div>
          <Reveal>
            <Overline>{contactContent.overline}</Overline>
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
                color: "var(--color-text-primary)",
              }}
            >
              {contactContent.title}{" "}
              <span style={{ fontStyle: "italic", color: "var(--color-text-secondary)" }}>{contactContent.accent}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p style={{ marginTop: "1.5rem", maxWidth: "440px", color: "var(--color-text-secondary)", fontSize: "var(--text-lead)", lineHeight: 1.75 }}>
              {contactContent.lead}
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <ol style={{ marginTop: "2rem", listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {contactContent.steps.map((step, i) => (
                <li key={step} style={{ display: "flex", gap: "0.875rem", alignItems: "baseline" }}>
                  <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: "var(--text-caption)", color: "var(--color-text-secondary)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span style={{ color: "var(--color-text-secondary)", fontSize: "0.9375rem" }}>{step}</span>
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
                {contactContent.directHeading}
              </span>
              {methods.map((m) => (
                <a
                  key={m.label}
                  href={m.href}
                  target={m.external ? "_blank" : undefined}
                  rel={m.external ? "noopener noreferrer" : undefined}
                  className="muted-link no-underline inline-flex items-center gap-3"
                  style={{ padding: "0.6rem 0", fontSize: "0.9375rem" }}
                >
                  <span style={{ color: "var(--color-text-secondary)", display: "flex" }}>
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
