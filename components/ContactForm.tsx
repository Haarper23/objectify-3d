"use client";

import { useId, useRef, useState } from "react";

type Status = "idle" | "submitting" | "success";
type Errors = Partial<Record<"name" | "email" | "description", string>>;

const projectTypes = [
  "Custom figure",
  "Personalized gift",
  "Character / fan art",
  "Display / decorative piece",
  "Couple / portrait miniature",
  "Other",
];
const sizes = ["Mini (under 10 cm)", "Standard (10–20 cm)", "Large (20 cm+)", "Not sure yet"];
const budgets = ["Under $100", "$100–$300", "$300–$600", "$600+", "Not sure yet"];

const MAX_FILE_BYTES = 8 * 1024 * 1024; // 8 MB

/**
 * Project inquiry form. Client-side validation, accessible labelling, explicit
 * error/success states, and double-submit protection.
 *
 * NOTE: this is intentionally NOT wired to a backend. `submitInquiry` is the
 * single integration point — drop in a fetch() to an API route, form service
 * (Formspree/Resend/etc.), or email handler there. Until then nothing is sent.
 */
async function submitInquiry(data: FormData): Promise<void> {
  // ── INTEGRATION POINT ──────────────────────────────────────────────
  // e.g. await fetch("/api/inquiry", { method: "POST", body: data });
  // Currently a no-op so the form never claims to transmit data.
  void data;
  return Promise.resolve();
}

export default function ContactForm() {
  const uid = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [fileName, setFileName] = useState<string>("");
  const [fileError, setFileError] = useState<string>("");

  const fid = (name: string) => `${uid}-${name}`;

  function validate(form: HTMLFormElement): Errors {
    const next: Errors = {};
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value.trim();
    const description = (form.elements.namedItem("description") as HTMLTextAreaElement)?.value.trim();

    if (!name) next.name = "Please enter your name.";
    if (!email) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please enter a valid email address.";
    if (!description) next.description = "Tell us a little about your project.";
    else if (description.length < 10) next.description = "A bit more detail helps us quote accurately.";
    return next;
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) {
      setFileName("");
      setFileError("");
      return;
    }
    if (!file.type.startsWith("image/")) {
      setFileError("Please choose an image file.");
      setFileName("");
      e.target.value = "";
      return;
    }
    if (file.size > MAX_FILE_BYTES) {
      setFileError("Image must be under 8 MB.");
      setFileName("");
      e.target.value = "";
      return;
    }
    setFileError("");
    setFileName(file.name);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return; // guard against double submit

    const form = e.currentTarget;
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      // Move focus to the first invalid field for screen-reader / keyboard users.
      const firstKey = Object.keys(found)[0];
      (form.elements.namedItem(firstKey) as HTMLElement | null)?.focus();
      return;
    }

    setStatus("submitting");
    try {
      await submitInquiry(new FormData(form));
      setStatus("success");
      form.reset();
      setFileName("");
    } catch {
      // Keep the user's input; surface a recoverable state.
      setStatus("idle");
      setErrors({ description: "Something went wrong. Please try again." });
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex flex-col items-start"
        style={{
          padding: "clamp(1.75rem, 4vw, 2.5rem)",
          borderRadius: "var(--radius-lg)",
          border: "1px solid rgba(167,139,250,0.35)",
          background: "rgba(124,58,237,0.06)",
        }}
      >
        <span
          aria-hidden
          className="flex items-center justify-center"
          style={{
            width: "2.75rem",
            height: "2.75rem",
            borderRadius: "50%",
            background: "rgba(124,58,237,0.18)",
            border: "1px solid rgba(167,139,250,0.4)",
            color: "var(--color-violet-200)",
            marginBottom: "1.25rem",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </span>
        <h3 className="serif" style={{ fontSize: "1.5rem", fontWeight: 500, color: "var(--color-bone)" }}>
          Request received
        </h3>
        <p style={{ marginTop: "0.75rem", color: "var(--color-mist)", fontSize: "0.9375rem", lineHeight: 1.7, maxWidth: "40ch" }}>
          Thanks — your project request has been received. We&apos;ll get back to you within 1–2 business days.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="hero-btn-ghost"
          style={{
            marginTop: "1.75rem",
            padding: "0.7rem 1.6rem",
            border: "1px solid var(--color-line)",
            color: "var(--color-bone)",
            fontSize: "0.875rem",
            fontWeight: 500,
            borderRadius: "9999px",
            background: "transparent",
            cursor: "pointer",
            transition: "border-color 0.2s ease, color 0.2s ease, background 0.2s ease",
          }}
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      aria-label="Project inquiry"
      style={{
        padding: "clamp(1.5rem, 4vw, 2.5rem)",
        borderRadius: "var(--radius-lg)",
        border: "1px solid var(--color-line)",
        background: "rgba(255,255,255,0.02)",
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "1.25rem" }}>
        {/* Name */}
        <div>
          <label htmlFor={fid("name")} className="field-label">
            Name
          </label>
          <input
            id={fid("name")}
            name="name"
            type="text"
            autoComplete="name"
            className="field-control"
            placeholder="Your name"
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? fid("name-err") : undefined}
          />
          {errors.name && (
            <p id={fid("name-err")} className="field-error" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor={fid("email")} className="field-label">
            Email
          </label>
          <input
            id={fid("email")}
            name="email"
            type="email"
            autoComplete="email"
            className="field-control"
            placeholder="you@example.com"
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? fid("email-err") : undefined}
          />
          {errors.email && (
            <p id={fid("email-err")} className="field-error" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* Project type */}
        <div>
          <label htmlFor={fid("projectType")} className="field-label">
            Project type
          </label>
          <select id={fid("projectType")} name="projectType" className="field-control" defaultValue="">
            <option value="" disabled>
              Select a type
            </option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        {/* Approximate size */}
        <div>
          <label htmlFor={fid("size")} className="field-label">
            Approximate size
          </label>
          <select id={fid("size")} name="size" className="field-control" defaultValue="">
            <option value="" disabled>
              Select a size
            </option>
            {sizes.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        {/* Budget */}
        <div>
          <label htmlFor={fid("budget")} className="field-label">
            Budget range
          </label>
          <select id={fid("budget")} name="budget" className="field-control" defaultValue="">
            <option value="" disabled>
              Select a range
            </option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        {/* Deadline */}
        <div>
          <label htmlFor={fid("deadline")} className="field-label">
            Deadline
          </label>
          <input
            id={fid("deadline")}
            name="deadline"
            type="text"
            className="field-control"
            placeholder="Flexible, or a specific date"
          />
        </div>
      </div>

      {/* Description */}
      <div style={{ marginTop: "1.25rem" }}>
        <label htmlFor={fid("description")} className="field-label">
          Project description
        </label>
        <textarea
          id={fid("description")}
          name="description"
          rows={5}
          className="field-control"
          style={{ resize: "vertical" }}
          placeholder="What would you like made? Characters, references, finish, anything that helps."
          aria-required="true"
          aria-invalid={!!errors.description}
          aria-describedby={errors.description ? fid("description-err") : undefined}
        />
        {errors.description && (
          <p id={fid("description-err")} className="field-error" role="alert">
            {errors.description}
          </p>
        )}
      </div>

      {/* Reference image upload */}
      <div style={{ marginTop: "1.25rem" }}>
        <label htmlFor={fid("reference")} className="field-label">
          Reference image <span style={{ textTransform: "none", letterSpacing: 0 }}>(optional)</span>
        </label>
        <input
          ref={fileRef}
          id={fid("reference")}
          name="reference"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="field-control"
          style={{ cursor: "pointer", padding: "0.6rem 1rem" }}
          aria-describedby={fileError ? fid("reference-err") : fid("reference-hint")}
          aria-invalid={!!fileError}
        />
        {fileError ? (
          <p id={fid("reference-err")} className="field-error" role="alert">
            {fileError}
          </p>
        ) : (
          <p
            id={fid("reference-hint")}
            style={{ marginTop: "0.4rem", fontSize: "0.8125rem", color: "var(--color-faint)" }}
          >
            {fileName ? `Selected: ${fileName}` : "JPG or PNG, up to 8 MB."}
          </p>
        )}
      </div>

      {/* Submit */}
      <div className="flex flex-wrap items-center gap-4" style={{ marginTop: "1.75rem" }}>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="hero-btn-primary no-underline inline-flex items-center gap-2"
          style={{
            padding: "0.95rem 2.1rem",
            background: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
            color: "white",
            fontWeight: 600,
            fontSize: "0.9375rem",
            letterSpacing: "0.02em",
            borderRadius: "9999px",
            border: "none",
            cursor: status === "submitting" ? "wait" : "pointer",
            opacity: status === "submitting" ? 0.7 : 1,
            transition: "transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease",
          }}
        >
          {status === "submitting" ? "Sending…" : "Request a Quote"}
          {status !== "submitting" && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          )}
        </button>
      </div>
    </form>
  );
}
