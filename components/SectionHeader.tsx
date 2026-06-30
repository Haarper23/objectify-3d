import Reveal from "./Reveal";
import Overline from "./Overline";

/**
 * Editorial section header: overline + serif display heading (with an optional
 * italic accent word) + optional lead. Replaces the repeated gradient-clipped
 * centered headers. Left-aligned by default.
 */
export default function SectionHeader({
  overline,
  title,
  accent,
  lead,
  align = "left",
  id,
  className,
}: {
  overline: string;
  title: string;
  accent?: string;
  lead?: string;
  align?: "left" | "center";
  id?: string;
  className?: string;
}) {
  const isCenter = align === "center";
  return (
    <div
      className={className}
      style={{
        textAlign: isCenter ? "center" : "left",
        maxWidth: isCenter ? "640px" : undefined,
        margin: isCenter ? "0 auto" : undefined,
      }}
    >
      <Reveal>
        <Overline align={align}>{overline}</Overline>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          id={id}
          className="serif"
          style={{
            marginTop: "1.25rem",
            fontSize: "var(--text-h2)",
            fontWeight: 500,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "var(--color-text-primary)",
          }}
        >
          {title}
          {accent && (
            <>
              {" "}
              <span style={{ fontStyle: "italic", color: "var(--color-text-secondary)" }}>
                {accent}
              </span>
            </>
          )}
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.16}>
          <p
            style={{
              marginTop: "1.25rem",
              maxWidth: "560px",
              marginLeft: isCenter ? "auto" : undefined,
              marginRight: isCenter ? "auto" : undefined,
              color: "var(--color-mist)",
              fontSize: "var(--text-lead)",
              lineHeight: 1.7,
            }}
          >
            {lead}
          </p>
        </Reveal>
      )}
    </div>
  );
}
