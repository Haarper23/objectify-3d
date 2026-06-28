import InstagramIcon from "./InstagramIcon";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Gallery", href: "#gallery" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Studio", href: "#studio" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--color-ink-900)",
        borderTop: "1px solid var(--color-line-soft)",
        padding: "clamp(3.5rem, 7vw, 5.5rem) 1.5rem 3rem",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1180px" }}>
        {/* Closing line */}
        <div
          className="flex flex-col md:flex-row md:items-end md:justify-between"
          style={{ gap: "2rem", paddingBottom: "3rem", borderBottom: "1px solid var(--color-line-soft)" }}
        >
          <p
            className="serif"
            style={{
              fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
              fontWeight: 400,
              lineHeight: 1.2,
              letterSpacing: "-0.015em",
              color: "var(--color-bone)",
              maxWidth: "520px",
            }}
          >
            Made by hand.{" "}
            <span style={{ fontStyle: "italic", color: "var(--color-violet-200)" }}>Shipped worldwide.</span>
          </p>
          <a
            href="#contact"
            className="no-underline inline-flex items-center gap-2 self-start"
            style={{
              padding: "0.8rem 1.9rem",
              border: "1px solid var(--color-line)",
              color: "var(--color-bone)",
              fontSize: "0.875rem",
              fontWeight: 500,
              borderRadius: "9999px",
            }}
          >
            Start a Commission
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Columns */}
        <div
          className="flex flex-col md:flex-row md:items-center md:justify-between"
          style={{ gap: "2rem", paddingTop: "2.5rem" }}
        >
          {/* Wordmark */}
          <div className="flex items-center gap-2.5">
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
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-7 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="footer-nav-link no-underline"
                style={{ fontSize: "0.8125rem", fontWeight: 500, letterSpacing: "0.02em" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex gap-4">
            <a href="https://www.instagram.com/objectify3d/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Objectify 3D on Instagram">
              <InstagramIcon size={18} />
            </a>
            <a href="https://www.instagram.com/erenkiraz8/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Eren Kiraz on Instagram">
              <InstagramIcon size={18} />
            </a>
          </div>
        </div>

        <p style={{ marginTop: "2.5rem", fontFamily: "var(--font-mono), monospace", fontSize: "var(--text-caption)", color: "var(--color-faint)" }}>
          © {year} Objectify 3D · Mehmet Eren Kiraz
        </p>
      </div>
    </footer>
  );
}
