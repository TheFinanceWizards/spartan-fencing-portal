import React from "react";
import {
  Hammer, HardHat, Calculator, Truck, MessageSquare, Scissors,
  Wrench, Shield, Star, Zap, Grid3x3, Eye
} from "lucide-react";

const ICON_MAP = {
  Hammer, HardHat, Calculator, Truck, MessageSquare, Scissors,
  Wrench, Shield, Star, Zap, Grid3x3, Eye
};

export default function ServiceCard({ service }) {
  const Icon = ICON_MAP[service.icon] || Wrench;

  return (
    <div className="group bg-card border border-border rounded-xl p-7 hover:border-primary/40 hover:shadow-lg transition-all duration-300">
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-base font-black text-foreground uppercase tracking-wide mb-3">
        {service.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {service.description}
      </p>
    </div>
  );
}
