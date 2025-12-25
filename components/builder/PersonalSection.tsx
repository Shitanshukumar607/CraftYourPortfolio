"use client";

import { usePortfolioStore } from "@/store/usePortfolioStore";
import { Eye, EyeOff } from "lucide-react";
import React from "react";

export default function PersonalSection() {
  const { portfolioData, updateSettings, toggleSection } = usePortfolioStore();

  const handleSettingsChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    updateSettings({ [name]: value });
  };

  return (
    <>
      <div id="section-personal">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-foreground">Personal Info</h2>
          <button
            onClick={() => toggleSection("hero")}
            className="relative group p-1 rounded text-muted-foreground transition duration-200 ease-out hover:bg-accent hover:text-accent-foreground hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            title={
              portfolioData.sections.hero.enabled
                ? "Hide Section"
                : "Show Section"
            }
          >
            {portfolioData.sections.hero.enabled ? (
              <Eye size={18} className="text-muted-foreground" />
            ) : (
              <EyeOff size={18} className="text-muted-foreground" />
            )}
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-foreground">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={portfolioData.settings.name}
              onChange={handleSettingsChange}
              className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition duration-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-foreground">
              Professional Title
            </label>
            <input
              type="text"
              name="title"
              value={portfolioData.settings.title}
              onChange={handleSettingsChange}
              className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition duration-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-foreground">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={portfolioData.settings.location}
              onChange={handleSettingsChange}
              className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition duration-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-foreground">
              Profile Image URL
            </label>
            <input
              type="text"
              name="profileImage"
              value={portfolioData.settings.profileImage}
              onChange={handleSettingsChange}
              className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition duration-200"
              placeholder="https://example.com/image.jpg"
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-bold text-foreground mb-4">
          Short Summary
        </h2>
        <textarea
          name="summary"
          value={portfolioData.settings.summary}
          onChange={handleSettingsChange}
          rows={4}
          className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition duration-200 resize-none"
        />
      </div>
    </>
  );
}
