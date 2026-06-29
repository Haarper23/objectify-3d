import Link from "next/link";
import InstagramIcon from "./InstagramIcon";
import BackToTop from "./BackToTop";

// TODO: replace with the studio's real GitHub URL when available.
const GITHUB_URL = "https://github.com/objectify3d";
const INSTAGRAM_URL = "https://www.instagram.com/objectify3d/";
const EMAIL = "kirazeren3@gmail.com";

const socials = [
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, external: false },
  { label: "Instagram", value: "@objectify3d", href: INSTAGRAM_URL, external: true },
  { label: "GitHub", value: "objectify3d", href: GITHUB_URL, external: true },
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
              color: "var(--color-bone)",
              maxWidth: "16ch",
            }}
          >
            Have an idea in mind?{" "}
            <span style={{ fontStyle: "italic", color: "var(--color-violet-200)" }}>Let&apos;s make it real.</span>
          </Link>
          <Link
            href="/#contact"
            className="hero-btn-primary no-underline inline-flex items-center gap-2"
            style={{
              padding: "0.95rem 2.1rem",
              background: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
              color: "white",
              fontSize: "0.9375rem",
              fontWeight: 600,
              letterSpacing: "0.02em",
              borderRadius: "9999px",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
          >
            Start a Project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "var(--color-line-soft)", margin: "clamp(3rem, 7vw, 5rem) 0 2.5rem" }} />

        {/* Bottom bar */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Wordmark + shipping */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2.5 no-underline w-fit">
              <span
                className="flex items-center justify-center"
                style={{ width: "2rem", height: "2rem", background: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)", borderRadius: "7px" }}
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M8 1V15M2 4.5L14 11.5M14 4.5L2 11.5" stroke="white" strokeWidth="1" strokeOpacity="0.5" />
                </svg>
              </span>
              <span className="serif" style={{ fontSize: "1rem", fontWeight: 500, color: "var(--color-mist)" }}>
                Objectify <span style={{ color: "var(--color-violet-200)", fontStyle: "italic" }}>3D</span>
              </span>
            </Link>
            <span
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: "var(--text-caption)",
                letterSpacing: "0.04em",
                color: "var(--color-faint)",
              }}
            >
              Custom 3D printed pieces · Shipping worldwide
            </span>
          </div>

          {/* Contact / social */}
          <div className="flex flex-col gap-2.5">
            <span className="overline" style={{ marginBottom: "0.4rem" }}>
              Elsewhere
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
                {s.label === "Instagram" && <InstagramIcon size={15} />}
                {s.label === "GitHub" && (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.21 3.44 9.63 8.21 11.19.6.11.82-.25.82-.57 0-.28-.01-1.02-.02-2-3.34.71-4.04-1.58-4.04-1.58-.55-1.36-1.34-1.73-1.34-1.73-1.09-.73.08-.72.08-.72 1.21.08 1.84 1.22 1.84 1.22 1.07 1.8 2.81 1.28 3.5.98.11-.76.42-1.28.76-1.58-2.67-.3-5.47-1.31-5.47-5.81 0-1.28.47-2.33 1.23-3.15-.12-.3-.53-1.51.12-3.15 0 0 1.01-.32 3.3 1.2.96-.26 1.98-.39 3-.4 1.02.01 2.04.14 3 .4 2.28-1.52 3.29-1.2 3.29-1.2.65 1.64.24 2.85.12 3.15.77.82 1.23 1.87 1.23 3.15 0 4.51-2.81 5.5-5.49 5.79.43.36.81 1.09.81 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.69.82.57C20.56 21.91 24 17.5 24 12.29 24 5.78 18.63.5 12 .5z" />
                  </svg>
                )}
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

        <p style={{ marginTop: "3.5rem", fontFamily: "var(--font-mono), monospace", fontSize: "var(--text-caption)", color: "var(--color-faint)" }}>
          © {year} Objectify 3D · Mehmet Eren Kiraz
        </p>
      </div>
    </footer>
  );
}
