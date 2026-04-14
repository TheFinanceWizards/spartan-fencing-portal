import React, { useState } from "react";
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
  "Wood Fencing & Hardware",
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
    name: "", company: "", email: "", phone: "", product: "", projectType: "", message: ""
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSelect = (value) => setForm({ ...form, product: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission — in production, replace with your preferred form service
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
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
          onClick={() => { setSubmitted(false); setForm({ name: "", company: "", email: "", phone: "", product: "", projectType: "", message: "" }); }}
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
