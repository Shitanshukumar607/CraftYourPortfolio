"use client";

import React from "react";
import PortfolioTemplate from "./PortfolioTemplate";
import { ArrowLeft, Monitor, Smartphone } from "lucide-react";
import { usePortfolioStore } from "@/store/usePortfolioStore";

export default function PortfolioBuilder() {
  const {
    portfolioData,
    viewMode,
    setViewMode,
    updateSettings,
    updateSocialLink,
    updateSkills,
  } = usePortfolioStore();

  const handleSettingsChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    updateSettings({ [name]: value });
  };

  const handleSocialChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    platform: string
  ) => {
    const { value } = e.target;
    updateSocialLink(platform, value);
  };

  const handleSkillsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    updateSkills(value.split(",").map((skill) => skill.trim()));
  };

  return (
    <div className="flex flex-col h-screen bg-neutral-100 dark:bg-neutral-900">
      <header className="h-16 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 flex items-center justify-between px-6 shrink-0">
        <button
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ease-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-600 disabled:pointer-events-none disabled:opacity-50 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 px-3 py-2 transition-all duration-300"
          onClick={() => alert("u went back")}
        >
          <ArrowLeft size={28} className="pb-1" />
          Back
        </button>
        <div className="flex items-center gap-2 bg-neutral-100 dark:bg-neutral-900 p-1 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <button
            onClick={() => setViewMode("desktop")}
            className={`p-2 rounded-md transition-all ${
              viewMode === "desktop"
                ? "bg-white dark:bg-neutral-800 shadow-sm text-neutral-900 dark:text-white"
                : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
            }`}
            title="Desktop View"
          >
            <Monitor size={18} />
          </button>
          <button
            onClick={() => setViewMode("mobile")}
            className={`p-2 rounded-md transition-all ${
              viewMode === "mobile"
                ? "bg-white dark:bg-neutral-800 shadow-sm text-neutral-900 dark:text-white"
                : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
            }`}
            title="Mobile View"
          >
            <Smartphone size={18} />
          </button>
        </div>
      </header>

      <div className="flex h-screen overflow-hidden">
        <aside className="w-[420px] shrink-0 border-r border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 overflow-y-auto">
          <div className="p-6 space-y-8">
            <div>
              <h2 className="text-lg font-bold mb-4">Personal Info</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={portfolioData.settings.name}
                    onChange={handleSettingsChange}
                    className="w-full px-3 py-2 border border-neutral-200 dark:border-neutral-800 rounded-md bg-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Professional Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={portfolioData.settings.title}
                    onChange={handleSettingsChange}
                    className="w-full px-3 py-2 border border-neutral-200 dark:border-neutral-800 rounded-md bg-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={portfolioData.settings.location}
                    onChange={handleSettingsChange}
                    className="w-full px-3 py-2 border border-neutral-200 dark:border-neutral-800 rounded-md bg-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Profile Image URL
                  </label>
                  <input
                    type="text"
                    name="profileImage"
                    value={portfolioData.settings.profileImage}
                    onChange={handleSettingsChange}
                    className="w-full px-3 py-2 border border-neutral-200 dark:border-neutral-800 rounded-md bg-transparent"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-bold mb-4">Short Summary</h2>
              <textarea
                name="summary"
                value={portfolioData.settings.summary}
                onChange={handleSettingsChange}
                rows={4}
                className="w-full px-3 py-2 border border-neutral-200 dark:border-neutral-800 rounded-md bg-transparent resize-none"
              />
            </div>

            <div>
              <h2 className="text-lg font-bold mb-4">Social Links</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
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
                    className="w-full px-3 py-2 border border-neutral-200 dark:border-neutral-800 rounded-md bg-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
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
                    className="w-full px-3 py-2 border border-neutral-200 dark:border-neutral-800 rounded-md bg-transparent"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-bold mb-4">Skills</h2>
              <p className="text-xs text-neutral-500 mb-2">
                Comma separated list
              </p>
              <textarea
                name="skills"
                value={portfolioData.sections.about.skills.items.join(", ")}
                onChange={handleSkillsChange}
                rows={4}
                className="w-full px-3 py-2 border border-neutral-200 dark:border-neutral-800 rounded-md bg-transparent resize-none"
              />
            </div>
          </div>
        </aside>

        <main className="flex-1 flex flex-col">
          {/* Preview Canvas */}
          <div className="flex-1 overflow-y-auto bg-neutral-100 dark:bg-neutral-900 p-8 flex justify-center">
            <div
              className={`transition-all duration-300 ease-in-out bg-white dark:bg-neutral-950 shadow-xl overflow-scroll ${
                viewMode === "mobile"
                  ? "w-[450px] h-auto rounded-[40px] border-2 border-neutral-800"
                  : "w-full max-w-6xl rounded-3xl border  border-neutral-200 dark:border-neutral-800 "
              }`}
            >
              <div
                className={`w-full ${
                  viewMode === "mobile" ? "rounded-4xl" : ""
                }`}
              >
                <div className={viewMode === "mobile" ? "origin-top" : ""}>
                  <PortfolioTemplate />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
