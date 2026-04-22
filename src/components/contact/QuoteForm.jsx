import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, Send } from "lucide-react";

const PRODUCT_OPTIONS = [
  "Chain Link Fencing",
  "Privacy & Sight Block Screens",
  "Ornamental Iron & Aluminum",
  "Wood Fence Hardware & Accessories",
  "Vinyl & PVC Fencing",
  "Pipes & Tubes",
  "Gates & Gate Frames",
  "Dura Fence (Metal Board)",
  "Temporary & Construction Fencing",
  "Barbed Wire & Razor Wire",
  "Fittings, Hardware & Accessories",
  "Welded Wire & Mesh Panels",
  "Multiple / Not Sure Yet",
];

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "",
    product: "", projectType: "", message: "",
    smsMarketingConsent: false,
    smsTransactionalConsent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };
  const handleSelect = (value) => setForm({ ...form, product: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed');
      setSubmitted(true);
    } catch {
      alert('Something went wrong. Please call us directly at (954) 316-9889.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-5">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-black text-foreground uppercase mb-2">Quote Request Received</h3>
          <p className="text-muted-foreground text-sm max-w-sm">
            Our team will review your project and respond within one business day with pricing and specifications.
          </p>
        </div>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ name: "", company: "", email: "", phone: "", product: "", projectType: "", message: "", smsMarketingConsent: false, smsTransactionalConsent: false });
          }}
          className="text-sm text-primary hover:text-primary/80 font-semibold transition-colors"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <Label htmlFor="name">Full Name *</Label>
          <Input id="name" name="name" required value={form.name} onChange={handleChange} placeholder="John Smith" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="company">Company</Label>
          <Input id="company" name="company" value={form.company} onChange={handleChange} placeholder="Smith Fence Co." />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <Label htmlFor="email">Email Address *</Label>
          <Input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="john@example.com" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="(555) 000-0000" />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label>Product Category</Label>
        <Select onValueChange={handleSelect}>
          <SelectTrigger>
            <SelectValue placeholder="Select a product type..." />
          </SelectTrigger>
          <SelectContent>
            {PRODUCT_OPTIONS.map((opt) => (
              <SelectItem key={opt} value={opt}>{opt}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="projectType">Project Type</Label>
        <Input id="projectType" name="projectType" value={form.projectType} onChange={handleChange} placeholder="e.g. Residential backyard, commercial perimeter, job site..." />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">Project Details *</Label>
        <Textarea
          id="message"
          name="message"
          required
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us about your project — dimensions, quantities, timeline, any special requirements..."
        />
      </div>

      {/* SMS Consent Checkboxes — A2P Compliant */}
      <div className="space-y-4 pt-2 border-t border-border">
        <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
          Text Message Consent (Optional)
        </p>

        {/* Marketing SMS */}
        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="relative flex-shrink-0 mt-0.5">
            <input
              type="checkbox"
              name="smsMarketingConsent"
              id="smsMarketingConsent"
              checked={form.smsMarketingConsent}
              onChange={handleChange}
              className="sr-only peer"
            />
            <div className="w-5 h-5 rounded border-2 border-border peer-checked:bg-primary peer-checked:border-primary group-hover:border-primary/60 transition-colors flex items-center justify-center">
              {form.smsMarketingConsent && (
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
          </div>
          <span className="text-xs text-muted-foreground leading-relaxed">
            I consent to receive <strong className="text-foreground/80">marketing text messages</strong> from
            Spartan Fencing Supplies at the phone number provided. These may include promotions, special offers,
            and product announcements. Frequency may vary. Message &amp; data rates may apply.
            Text <strong>HELP</strong> for assistance, reply <strong>STOP</strong> to opt out.
          </span>
        </label>

        {/* Transactional SMS */}
        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="relative flex-shrink-0 mt-0.5">
            <input
              type="checkbox"
              name="smsTransactionalConsent"
              id="smsTransactionalConsent"
              checked={form.smsTransactionalConsent}
              onChange={handleChange}
              className="sr-only peer"
            />
            <div className="w-5 h-5 rounded border-2 border-border peer-checked:bg-primary peer-checked:border-primary group-hover:border-primary/60 transition-colors flex items-center justify-center">
              {form.smsTransactionalConsent && (
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
          </div>
          <span className="text-xs text-muted-foreground leading-relaxed">
            I consent to receive <strong className="text-foreground/80">non-marketing text messages</strong> from
            Spartan Fencing Supplies about my order updates, quote status, appointment reminders, and other
            service notifications. Frequency may vary. Message &amp; data rates may apply.
            Text <strong>HELP</strong> for assistance, reply <strong>STOP</strong> to opt out.
          </span>
        </label>

        <p className="text-xs text-muted-foreground">
          By submitting this form you agree to our{" "}
          <Link to="/terms" className="text-primary hover:underline font-medium">Terms of Service</Link>
          {" "}&amp;{" "}
          <Link to="/privacy" className="text-primary hover:underline font-medium">Privacy Policy</Link>.
          Consent to receive texts is not required to purchase from us.
        </p>
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full spartan-cta justify-center !h-12"
      >
        {loading ? "Sending..." : (
          <>
            <Send className="w-4 h-4" />
            Submit Quote Request
          </>
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        We typically respond within 1 business day. No spam, ever.
      </p>
    </form>
  );
}
