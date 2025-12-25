"use client";

import { usePortfolioStore } from "@/store/usePortfolioStore";
import { Eye, EyeOff } from "lucide-react";
import React from "react";

export default function SkillsSection() {
  const { portfolioData, updateSkills, toggleSection } = usePortfolioStore();

  const handleSkillsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    updateSkills(value.split(",").map((skill) => skill.trim()));
  };

  return (
    <div id="section-skills">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-neutral-200">Skills</h2>
        <button
          onClick={() => toggleSection("skills")}
          className="relative group p-1 rounded text-neutral-400 transition duration-200 ease-out hover:bg-neutral-800 hover:text-neutral-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500"
          title={
            portfolioData.sections.about.skills.enabled
              ? "Hide Section"
              : "Show Section"
          }
        >
          {portfolioData.sections.about.skills.enabled ? (
            <Eye size={18} className="text-neutral-400" />
          ) : (
            <EyeOff size={18} className="text-neutral-400" />
          )}
        </button>
      </div>
      <p className="text-xs text-neutral-400/80 mb-2">Comma separated list</p>
      <textarea
        name="skills"
        value={portfolioData.sections.about.skills.items.join(", ")}
        onChange={handleSkillsChange}
        rows={4}
        className="w-full px-3 py-2 border border-neutral-800 rounded-md bg-neutral-900 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-700 focus:border-neutral-700 transition duration-200 resize-none"
      />
    </div>
  );
}
