"use client";

import React from "react";
import { Eye, EyeOff } from "lucide-react";
import { usePortfolioStore } from "@/store/usePortfolioStore";

export default function SocialSection() {
  const { portfolioData, updateSocialLink, toggleSection } =
    usePortfolioStore();

  const handleSocialChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    platform: string
  ) => {
    const { value } = e.target;
    updateSocialLink(platform, value);
  };

  return (
    <div id="section-social">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-neutral-200">Social Links</h2>
        <button
          onClick={() => toggleSection("social")}
          className="relative group p-1 rounded text-neutral-400 transition duration-200 ease-out hover:bg-neutral-800 hover:text-neutral-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500"
          title={
            portfolioData.sections.social.enabled
              ? "Hide Section"
              : "Show Section"
          }
        >
          {portfolioData.sections.social.enabled ? (
            <Eye size={18} className="text-neutral-400" />
          ) : (
            <EyeOff size={18} className="text-neutral-400" />
          )}
        </button>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1 text-neutral-300">
            GitHub URL
          </label>
          <input
            type="text"
            value={
              portfolioData.sections.social.items.find(
                (i) => i.platform === "github"
              )?.url || ""
            }
            onChange={(e) => handleSocialChange(e, "github")}
            className="w-full px-3 py-2 border border-neutral-800 rounded-md bg-neutral-900 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-700 focus-border-sky-500 transition duration-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-neutral-300">
            LinkedIn URL
          </label>
          <input
            type="text"
            value={
              portfolioData.sections.social.items.find(
                (i) => i.platform === "linkedin"
              )?.url || ""
            }
            onChange={(e) => handleSocialChange(e, "linkedin")}
            className="w-full px-3 py-2 border border-neutral-800 rounded-md bg-neutral-900 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-700 focus:border-neutral-700 transition duration-200"
          />
        </div>
      </div>
    </div>
  );
}
