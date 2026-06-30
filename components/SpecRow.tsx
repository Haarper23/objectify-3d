/** Mono spec line — middot-separated fabrication details. Sells craft. */
export default function SpecRow({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  return (
    <p
      className={className}
      style={{
        fontFamily: "var(--font-mono), ui-monospace, monospace",
        fontSize: "var(--text-caption)",
        letterSpacing: "0.04em",
        color: "var(--color-text-muted)",
        lineHeight: 1.6,
      }}
    >
      {items.map((item, i) => (
        <span key={item}>
          {i > 0 && <span style={{ color: "var(--color-text-muted)", margin: "0 0.6em" }}>·</span>}
          {item}
        </span>
      ))}
    </p>
  );
}
