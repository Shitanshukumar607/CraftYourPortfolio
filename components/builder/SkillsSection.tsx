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
        <h2 className="text-lg font-bold text-foreground">Skills</h2>
        <button
          onClick={() => toggleSection("skills")}
          className="relative group p-1 rounded text-muted-foreground transition duration-200 ease-out hover:bg-accent hover:text-accent-foreground hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          title={
            portfolioData.sections.about.skills.enabled
              ? "Hide Section"
              : "Show Section"
          }
        >
          {portfolioData.sections.about.skills.enabled ? (
            <Eye size={18} className="text-muted-foreground" />
          ) : (
            <EyeOff size={18} className="text-muted-foreground" />
          )}
        </button>
      </div>
      <p className="text-xs text-muted-foreground/80 mb-2">
        Comma separated list
      </p>
      <textarea
        name="skills"
        value={portfolioData.sections.about.skills.items.join(", ")}
        onChange={handleSkillsChange}
        rows={4}
        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition duration-200 resize-none"
      />
    </div>
  );
}
