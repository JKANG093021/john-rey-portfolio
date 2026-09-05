"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, LoaderCircle, Send, ShieldCheck } from "lucide-react";

type FormState = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setState("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
          workType: formData.get("workType"),
          message: formData.get("message"),
          website: formData.get("website"),
        }),
      });

      const payload = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(payload.message || "Unable to send your message.");

      form.reset();
      setState("success");
      setFeedback(payload.message || "Message sent. A confirmation email is on its way.");
    } catch (error) {
      setState("error");
      setFeedback(error instanceof Error ? error.message : "Unable to send your message right now.");
    }
  }

  return (
    <form className="contact-form-card" onSubmit={handleSubmit}>
      <div className="contact-form-heading">
        <div>
          <p className="contact-form-kicker">Project inquiry</p>
          <h3>Tell me what you need help with.</h3>
        </div>
        <span className="auto-reply-badge"><ShieldCheck size={15} /> Auto-reply enabled</span>
      </div>

      <div className="contact-form-grid">
        <label>
          <span>Your name</span>
          <input name="name" type="text" autoComplete="name" maxLength={80} required placeholder="Your name" />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" maxLength={120} required placeholder="you@company.com" />
        </label>
      </div>

      <div className="contact-form-grid">
        <label>
          <span>Company <small>(optional)</small></span>
          <input name="company" type="text" autoComplete="organization" maxLength={100} placeholder="Company / business" />
        </label>
        <label>
          <span>Type of support</span>
          <select name="workType" defaultValue="Hourly technical support" required>
            <option>Hourly technical support</option>
            <option>Part-time Technical VA</option>
            <option>Project-based development</option>
            <option>Website maintenance / bug fix</option>
            <option>Automation / API integration</option>
            <option>Other</option>
          </select>
        </label>
      </div>

      <label>
        <span>How can I help?</span>
        <textarea
          name="message"
          rows={6}
          minLength={15}
          maxLength={2500}
          required
          placeholder="Tell me about your website/system, the main problem, and what outcome you need."
        />
      </label>

      <label className="website-trap" aria-hidden="true">
        Website
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>

      <button className="primary-button contact-submit" type="submit" disabled={state === "sending"}>
        {state === "sending" ? <LoaderCircle className="spin" size={18} /> : <Send size={18} />}
        {state === "sending" ? "Sending..." : "Send inquiry"}
      </button>

      <p className="contact-form-note">
        Your inquiry goes directly to John Rey. You&apos;ll receive an automatic confirmation after a successful submission.
      </p>

      {feedback && (
        <div className={`form-feedback ${state === "success" ? "success" : "error"}`} role="status">
          {state === "success" && <CheckCircle2 size={18} />}
          <span>{feedback}</span>
        </div>
      )}
    </form>
  );
}
