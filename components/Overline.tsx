/** Editorial eyebrow: hairline rule + mono uppercase label. */
export default function Overline({
  children,
  align = "left",
}: {
  children: React.ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div
      className="flex items-center gap-3"
      style={{ justifyContent: align === "center" ? "center" : "flex-start" }}
    >
      <span
        aria-hidden
        className="h-px w-8"
        style={{ background: "linear-gradient(to right, transparent, var(--color-text-muted))" }}
      />
      <span className="overline">{children}</span>
      {align === "center" && (
        <span
          aria-hidden
          className="h-px w-8"
          style={{ background: "linear-gradient(to left, transparent, var(--color-text-muted))" }}
        />
      )}
    </div>
  );
}
