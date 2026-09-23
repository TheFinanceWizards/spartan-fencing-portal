import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, Plus, Send, Trash2 } from "lucide-react";

const MATERIAL_OPTIONS = [
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
  "Other (describe in notes)",
];

const SHIPPING_OPTIONS = [
  "I have a freight forwarder — pickup at your Fort Lauderdale warehouse",
  "I need help arranging shipping",
  "Not sure yet",
];

const COUNTRY_SUGGESTIONS = [
  "Bahamas", "Jamaica", "Dominican Republic", "Haiti", "Puerto Rico", "Trinidad and Tobago",
  "Barbados", "Cayman Islands", "Turks and Caicos Islands", "Aruba", "Curaçao", "Mexico",
  "Guatemala", "Honduras", "El Salvador", "Nicaragua", "Costa Rica", "Panama", "Belize",
  "Colombia", "Venezuela", "Ecuador", "Peru", "Chile", "Argentina", "Brazil", "Guyana",
  "Suriname", "Canada",
];

const emptyItem = () => ({ material: "", quantity: "" });

const initialForm = {
  name: "", company: "", email: "", phone: "",
  country: "", city: "", shipping: "", timeline: "", notes: "",
};

export default function ExportInquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [items, setItems] = useState([emptyItem()]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const updateItem = (index, field, value) =>
    setItems(items.map((item, i) => (i === index ? { ...item, [field]: value } : item)));
  const addItem = () => setItems([...items, emptyItem()]);
  const removeItem = (index) => setItems(items.filter((_, i) => i !== index));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (items.some((item) => !item.material)) {
      alert("Please choose a material for each line, or remove empty lines.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/export-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, items }),
      });
      if (!res.ok) throw new Error('Failed');
      setSubmitted(true);
    } catch {
      alert('Something went wrong. Please email us at info@spartanfencingsupplies.com or call +1 (954) 316-9889.');
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
          <h3 className="text-xl font-black text-foreground uppercase mb-2">Export Inquiry Received</h3>
          <p className="text-muted-foreground text-sm max-w-sm">
            Our team will review your materials list and destination, then follow up with your export quote.
          </p>
        </div>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm(initialForm);
            setItems([emptyItem()]);
          }}
          className="text-sm text-primary hover:text-primary/80 font-semibold transition-colors"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Destination */}
      <fieldset className="space-y-5">
        <legend className="text-sm font-black text-foreground uppercase tracking-wide mb-4">1. Destination</legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <Label htmlFor="country">Destination Country *</Label>
            <Input id="country" name="country" required list="export-countries" value={form.country} onChange={handleChange} placeholder="e.g. Bahamas" autoComplete="country-name" />
            <datalist id="export-countries">
              {COUNTRY_SUGGESTIONS.map((c) => <option key={c} value={c} />)}
            </datalist>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="city">City or Port of Destination</Label>
            <Input id="city" name="city" value={form.city} onChange={handleChange} placeholder="e.g. Nassau" />
          </div>
        </div>
        <div className="space-y-1.5">
          <Label>Shipping</Label>
          <Select value={form.shipping} onValueChange={(value) => setForm({ ...form, shipping: value })}>
            <SelectTrigger>
              <SelectValue placeholder="How will the order be shipped?" />
            </SelectTrigger>
            <SelectContent>
              {SHIPPING_OPTIONS.map((opt) => (
                <SelectItem key={opt} value={opt}>{opt}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </fieldset>

      {/* Materials */}
      <fieldset className="space-y-4 pt-6 border-t border-border">
        <legend className="text-sm font-black text-foreground uppercase tracking-wide mb-4">2. Materials &amp; Quantities</legend>
        {items.map((item, i) => (
          <div key={i} className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_auto] gap-3 items-end">
            <div className="space-y-1.5">
              <Label>Material *</Label>
              <Select value={item.material} onValueChange={(value) => updateItem(i, "material", value)}>
                <SelectTrigger aria-label={`Material, line ${i + 1}`}>
                  <SelectValue placeholder="Select a material..." />
                </SelectTrigger>
                <SelectContent>
                  {MATERIAL_OPTIONS.map((opt) => (
                    <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor={`quantity-${i}`}>Quantity *</Label>
              <Input
                id={`quantity-${i}`}
                required
                value={item.quantity}
                onChange={(e) => updateItem(i, "quantity", e.target.value)}
                placeholder="e.g. 20 rolls, 500 ft, 40 posts"
              />
            </div>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => removeItem(i)}
              disabled={items.length === 1}
              aria-label={`Remove line ${i + 1}`}
              className="text-muted-foreground hover:text-destructive"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        ))}
        <button
          type="button"
          onClick={addItem}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add another material
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <Label htmlFor="timeline">When do you need it?</Label>
            <Input id="timeline" name="timeline" value={form.timeline} onChange={handleChange} placeholder="e.g. Within 30 days" />
          </div>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="notes">Additional Details</Label>
          <Textarea
            id="notes"
            name="notes"
            value={form.notes}
            onChange={handleChange}
            rows={4}
            placeholder="Heights, gauges, colors, specs, or anything else we should know..."
          />
        </div>
      </fieldset>

      {/* Contact */}
      <fieldset className="space-y-5 pt-6 border-t border-border">
        <legend className="text-sm font-black text-foreground uppercase tracking-wide mb-4">3. Your Contact Information</legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <Label htmlFor="name">Full Name *</Label>
            <Input id="name" name="name" required value={form.name} onChange={handleChange} placeholder="John Smith" autoComplete="name" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="company">Company</Label>
            <Input id="company" name="company" value={form.company} onChange={handleChange} placeholder="Smith Construction Ltd." autoComplete="organization" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <Label htmlFor="email">Email Address *</Label>
            <Input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="john@example.com" autoComplete="email" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="phone">Phone / WhatsApp (with country code)</Label>
            <Input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+1 242 555 0000" autoComplete="tel" />
          </div>
        </div>
      </fieldset>

      <p className="text-xs text-muted-foreground">
        By submitting this form you agree to our{" "}
        <Link to="/terms" className="text-primary hover:underline font-medium">Terms of Service</Link>
        {" "}&amp;{" "}
        <Link to="/privacy" className="text-primary hover:underline font-medium">Privacy Policy</Link>.
      </p>

      <Button type="submit" disabled={loading} className="w-full spartan-cta justify-center !h-12">
        {loading ? "Sending..." : (
          <>
            <Send className="w-4 h-4" />
            Submit Export Inquiry
          </>
        )}
      </Button>
    </form>
  );
}
