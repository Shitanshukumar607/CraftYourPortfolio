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
        <h2 className="text-lg font-bold text-foreground">Social Links</h2>
        <button
          onClick={() => toggleSection("social")}
          className="relative group p-1 rounded text-muted-foreground transition duration-200 ease-out hover:bg-accent hover:text-accent-foreground hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          title={
            portfolioData.sections.social.enabled
              ? "Hide Section"
              : "Show Section"
          }
        >
          {portfolioData.sections.social.enabled ? (
            <Eye size={18} className="text-muted-foreground" />
          ) : (
            <EyeOff size={18} className="text-muted-foreground" />
          )}
        </button>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1 text-foreground">
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
            className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition duration-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-foreground">
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
            className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition duration-200"
          />
        </div>
      </div>
    </div>
  );
}
