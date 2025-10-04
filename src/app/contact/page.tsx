"use client";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function onSubmit(formData: FormData) {
    setStatus("submitting");
    try {
      const entries = Array.from(formData.entries());
      const payload: Record<string, string> = Object.fromEntries(
        entries.map(([key, value]) => [key, typeof value === "string" ? value : String(value)])
      );
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="max-w-3xl mx-auto container-padded py-16">
      <h1 className="text-3xl md:text-4xl font-bold">Request a Consultation</h1>
      <p className="text-[var(--muted)] mt-2">Tell us about your project and goals.</p>

      <form
        action={onSubmit}
        className="card p-6 mt-8 grid gap-4"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm">Name</label>
            <input required name="name" className="w-full mt-1 bg-transparent border border-[var(--border)] rounded-md p-2" />
          </div>
          <div>
            <label className="text-sm">Email</label>
            <input required type="email" name="email" className="w-full mt-1 bg-transparent border border-[var(--border)] rounded-md p-2" />
          </div>
        </div>
        <div>
          <label className="text-sm">Company</label>
          <input name="company" className="w-full mt-1 bg-transparent border border-[var(--border)] rounded-md p-2" />
        </div>
        <div>
          <label className="text-sm">Sector</label>
          <select name="sector" className="w-full mt-1 bg-transparent border border-[var(--border)] rounded-md p-2">
            <option>Railway</option>
            <option>Highway</option>
            <option>Buildings</option>
            <option>Automotive</option>
          </select>
        </div>
        <div>
          <label className="text-sm">Message</label>
          <textarea required name="message" rows={5} className="w-full mt-1 bg-transparent border border-[var(--border)] rounded-md p-2" />
        </div>
        <button className="btn btn-primary" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending..." : "Submit"}
        </button>
        {status === "success" && <p className="text-green-400 text-sm">Thanks — we’ll get back to you.</p>}
        {status === "error" && <p className="text-red-400 text-sm">Something went wrong. Please email info@isv.example.com.</p>}
      </form>
    </div>
  );
}


