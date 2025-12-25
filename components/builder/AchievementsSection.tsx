"use client";

import { usePortfolioStore } from "@/store/usePortfolioStore";
import { Eye, EyeOff, Plus, Trash2 } from "lucide-react";

export default function AchievementsSection() {
  const { portfolioData, updateAchievements, toggleSection } =
    usePortfolioStore();

  return (
    <div id="section-achievements">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-foreground">Achievements</h2>
        <div className="flex gap-2">
          <button
            onClick={() => toggleSection("achievements")}
            className="relative group p-1 rounded text-muted-foreground transition duration-200 ease-out hover:bg-accent hover:text-accent-foreground hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            title={
              portfolioData.sections.achievements.enabled
                ? "Hide Section"
                : "Show Section"
            }
          >
            {portfolioData.sections.achievements.enabled ? (
              <Eye size={18} className="text-muted-foreground" />
            ) : (
              <EyeOff size={18} className="text-muted-foreground" />
            )}
          </button>
          <button
            onClick={() =>
              updateAchievements([
                ...portfolioData.sections.achievements.items,
                {
                  title: "Achievement Title",
                  description: "Description",
                },
              ])
            }
            className="relative group p-1 rounded bg-secondary text-secondary-foreground transition duration-200 ease-out hover:bg-secondary/80 hover:shadow-lg hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            title="Add Achievement"
          >
            <Plus size={16} />
            <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-popover px-2 py-1 text-xs text-popover-foreground opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
              Add Achievement
            </span>
          </button>
        </div>
      </div>
      <div className="space-y-4">
        {portfolioData.sections.achievements.items.map((ach, idx) => (
          <div
            key={idx}
            className="p-4 border border-input rounded-lg space-y-3 bg-card text-card-foreground"
          >
            <div className="flex justify-between">
              <input
                type="text"
                value={ach.title}
                onChange={(e) => {
                  const newAchievements = [
                    ...portfolioData.sections.achievements.items,
                  ];
                  newAchievements[idx].title = e.target.value;
                  updateAchievements(newAchievements);
                }}
                className="font-medium bg-transparent w-full text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring rounded transition duration-200"
                placeholder="Title"
              />
              <button
                onClick={() => {
                  const newAchievements =
                    portfolioData.sections.achievements.items.filter(
                      (_, i) => i !== idx
                    );
                  updateAchievements(newAchievements);
                }}
                className="relative group text-destructive transition duration-200 hover:text-destructive/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-destructive rounded"
              >
                <Trash2 size={16} />
                <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-popover px-2 py-1 text-xs text-popover-foreground opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                  Remove Achievement
                </span>
              </button>
            </div>
            <textarea
              value={ach.description}
              onChange={(e) => {
                const newAchievements = [
                  ...portfolioData.sections.achievements.items,
                ];
                newAchievements[idx].description = e.target.value;
                updateAchievements(newAchievements);
              }}
              rows={2}
              className="w-full text-sm bg-background border border-input rounded p-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition duration-200"
              placeholder="Description"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
