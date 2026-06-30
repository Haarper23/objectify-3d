import Link from "next/link";
import InstagramIcon from "./InstagramIcon";
import BackToTop from "./BackToTop";
import { brand, contactInfo, footerContent } from "@/src/data/site-content";

type Social = { label: string; value: string; href: string; external: boolean; icon: "mail" | "ig" };

const socials: Social[] = [
  { label: "E-posta", value: contactInfo.email, href: `mailto:${contactInfo.email}`, external: false, icon: "mail" },
  {
    label: contactInfo.instagramBrand.label,
    value: contactInfo.instagramBrand.label,
    href: contactInfo.instagramBrand.href,
    external: true,
    icon: "ig",
  },
  {
    label: contactInfo.instagramPersonal.label,
    value: contactInfo.instagramPersonal.label,
    href: contactInfo.instagramPersonal.href,
    external: true,
    icon: "ig",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--color-ink-900)",
        borderTop: "1px solid var(--color-line-soft)",
        padding: "clamp(4rem, 9vw, 7rem) 1.5rem 3rem",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1180px" }}>
        {/* Large closing CTA */}
        <div className="flex flex-col items-start" style={{ gap: "2rem" }}>
          <Link
            href="/#contact"
            className="serif no-underline"
            style={{
              fontSize: "clamp(2.25rem, 7vw, 5rem)",
              fontWeight: 500,
              lineHeight: 1.04,
              letterSpacing: "-0.025em",
              color: "var(--color-text-primary)",
              maxWidth: "16ch",
            }}
          >
            {footerContent.ctaTitle}{" "}
            <span style={{ fontStyle: "italic", color: "var(--color-text-secondary)" }}>{footerContent.ctaAccent}</span>
          </Link>
          <Link
            href="/#contact"
            className="btn-primary no-underline inline-flex items-center gap-2"
            style={{
              padding: "0.95rem 2.1rem",
              fontSize: "0.9375rem",
              fontWeight: 600,
              letterSpacing: "0.02em",
              borderRadius: "9999px",
            }}
          >
            {footerContent.ctaButton}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "var(--color-line-soft)", margin: "clamp(3rem, 7vw, 5rem) 0 2.5rem" }} />

        {/* Bottom bar */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Wordmark + tagline */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2.5 no-underline w-fit">
              <span
                className="flex items-center justify-center"
                style={{ width: "2rem", height: "2rem", background: "var(--color-surface-elevated)", border: "1px solid var(--color-line)", borderRadius: "7px" }}
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z" stroke="var(--color-text-primary)" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M8 1V15M2 4.5L14 11.5M14 4.5L2 11.5" stroke="var(--color-text-primary)" strokeWidth="1" strokeOpacity="0.45" />
                </svg>
              </span>
              <span className="serif" style={{ fontSize: "1rem", fontWeight: 500, color: "var(--color-text-secondary)" }}>
                {brand.nameLead} <span style={{ color: "var(--color-text-primary)", fontStyle: "italic" }}>{brand.nameAccent}</span>
              </span>
            </Link>
            <span
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: "var(--text-caption)",
                letterSpacing: "0.04em",
                color: "var(--color-text-muted)",
              }}
            >
              {footerContent.tagline}
            </span>
          </div>

          {/* Contact / social */}
          <div className="flex flex-col gap-2.5">
            <span className="overline" style={{ marginBottom: "0.4rem" }}>
              {footerContent.elsewhere}
            </span>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.external ? "_blank" : undefined}
                rel={s.external ? "noopener noreferrer" : undefined}
                className="footer-nav-link no-underline inline-flex items-center gap-2.5 w-fit"
                style={{ fontSize: "0.9375rem" }}
              >
                {s.icon === "ig" && <InstagramIcon size={15} />}
                {s.value}
              </a>
            ))}
          </div>

          {/* Back to top */}
          <BackToTop
            className="footer-nav-link inline-flex items-center gap-2 w-fit"
            style={{
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              fontFamily: "var(--font-mono), monospace",
              fontSize: "var(--text-caption)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          />
        </div>

        <p style={{ marginTop: "3.5rem", fontFamily: "var(--font-mono), monospace", fontSize: "var(--text-caption)", color: "var(--color-text-muted)" }}>
          © {year} {brand.name}
        </p>
      </div>
    </footer>
  );
}
