"use client";

import { usePortfolioStore } from "@/store/usePortfolioStore";
import { Eye, EyeOff } from "lucide-react";

export default function ContactSection() {
  const { portfolioData, updateContact, toggleSection } = usePortfolioStore();

  return (
    <div id="section-contact">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-neutral-200">Contact Info</h2>
        <button
          onClick={() => toggleSection("contact")}
          className="relative group p-1 rounded text-neutral-400 transition duration-200 ease-out hover:bg-neutral-800 hover:text-neutral-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500"
          title={
            portfolioData.sections.contact.enabled
              ? "Hide Section"
              : "Show Section"
          }
        >
          {portfolioData.sections.contact.enabled ? (
            <Eye size={18} className="text-neutral-400" />
          ) : (
            <EyeOff size={18} className="text-neutral-400" />
          )}
        </button>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="text"
            value={portfolioData.sections.contact.email}
            onChange={(e) => updateContact({ email: e.target.value })}
            className="w-full px-3 py-2 border border-neutral-200 dark:border-neutral-800 rounded-md bg-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input
            type="text"
            value={portfolioData.sections.contact.phone || ""}
            onChange={(e) => updateContact({ phone: e.target.value })}
            className="w-full px-3 py-2 border border-neutral-200 dark:border-neutral-800 rounded-md bg-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Location</label>
          <input
            type="text"
            value={portfolioData.sections.contact.location}
            onChange={(e) => updateContact({ location: e.target.value })}
            className="w-full px-3 py-2 border border-neutral-200 dark:border-neutral-800 rounded-md bg-transparent"
          />
        </div>
      </div>
    </div>
  );
}
