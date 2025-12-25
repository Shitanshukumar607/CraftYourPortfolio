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
          <h2 className="text-lg font-bold text-neutral-200">Personal Info</h2>
          <button
            onClick={() => toggleSection("hero")}
            className="relative group p-1 rounded text-neutral-400 transition duration-200 ease-out hover:bg-neutral-800 hover:text-neutral-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500"
            title={
              portfolioData.sections.hero.enabled
                ? "Hide Section"
                : "Show Section"
            }
          >
            {portfolioData.sections.hero.enabled ? (
              <Eye size={18} className="text-neutral-400" />
            ) : (
              <EyeOff size={18} className="text-neutral-400" />
            )}
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-neutral-300">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={portfolioData.settings.name}
              onChange={handleSettingsChange}
              className="w-full px-3 py-2 border border-neutral-800 rounded-md bg-neutral-900 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-700 focus:border-neutral-700 transition duration-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-neutral-300">
              Professional Title
            </label>
            <input
              type="text"
              name="title"
              value={portfolioData.settings.title}
              onChange={handleSettingsChange}
              className="w-full px-3 py-2 border border-neutral-800 rounded-md bg-neutral-900 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-700 focus:border-neutral-700 transition duration-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-neutral-300">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={portfolioData.settings.location}
              onChange={handleSettingsChange}
              className="w-full px-3 py-2 border border-neutral-800 rounded-md bg-neutral-900 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-700 focus:border-neutral-700 transition duration-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-neutral-300">
              Profile Image URL
            </label>
            <input
              type="text"
              name="profileImage"
              value={portfolioData.settings.profileImage}
              onChange={handleSettingsChange}
              className="w-full px-3 py-2 border border-neutral-800 rounded-md bg-neutral-900 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-700 focus:border-neutral-700 transition duration-200"
              placeholder="https://example.com/image.jpg"
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-bold text-neutral-200 mb-4">
          Short Summary
        </h2>
        <textarea
          name="summary"
          value={portfolioData.settings.summary}
          onChange={handleSettingsChange}
          rows={4}
          className="w-full px-3 py-2 border border-neutral-800 rounded-md bg-neutral-900 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-700 focus:border-neutral-700 transition duration-200 resize-none"
        />
      </div>
    </>
  );
}
