"use client";

import { usePortfolioStore } from "@/store/usePortfolioStore";
import { Eye, EyeOff, Plus, Trash2 } from "lucide-react";

export default function EducationSection() {
  const { portfolioData, updateEducation, toggleSection } = usePortfolioStore();

  return (
    <div id="section-education">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-foreground">Education</h2>
        <div className="flex gap-2">
          <button
            onClick={() => toggleSection("education")}
            className="relative group p-1 rounded text-muted-foreground transition duration-200 ease-out hover:bg-accent hover:text-accent-foreground hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            title={
              portfolioData.sections.education.enabled
                ? "Hide Section"
                : "Show Section"
            }
          >
            {portfolioData.sections.education.enabled ? (
              <Eye size={18} className="text-muted-foreground" />
            ) : (
              <EyeOff size={18} className="text-muted-foreground" />
            )}
          </button>
          <button
            onClick={() =>
              updateEducation([
                ...portfolioData.sections.education.items,
                {
                  institution: "Institution",
                  degree: "Degree",
                  period: "Period",
                },
              ])
            }
            className="relative group p-1 rounded bg-secondary text-secondary-foreground transition duration-200 ease-out hover:bg-secondary/80 hover:shadow-lg hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            title="Add Education"
          >
            <Plus size={16} />
            <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-popover px-2 py-1 text-xs text-popover-foreground opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
              Add Education
            </span>
          </button>
        </div>
      </div>
      <div className="space-y-4">
        {portfolioData.sections.education.items.map((edu, idx) => (
          <div
            key={idx}
            className="p-4 border border-input rounded-lg space-y-3 bg-card text-card-foreground"
          >
            <div className="flex justify-between">
              <input
                type="text"
                value={edu.institution}
                onChange={(e) => {
                  const newEducation = [
                    ...portfolioData.sections.education.items,
                  ];
                  newEducation[idx].institution = e.target.value;
                  updateEducation(newEducation);
                }}
                className="font-medium bg-transparent w-full text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring rounded transition duration-200"
                placeholder="Institution"
              />
              <button
                onClick={() => {
                  const newEducation =
                    portfolioData.sections.education.items.filter(
                      (_, i) => i !== idx
                    );
                  updateEducation(newEducation);
                }}
                className="relative group text-destructive transition duration-200 hover:text-destructive/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-destructive rounded"
              >
                <Trash2 size={16} />
                <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-popover px-2 py-1 text-xs text-popover-foreground opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                  Remove Education
                </span>
              </button>
            </div>
            <input
              type="text"
              value={edu.degree}
              onChange={(e) => {
                const newEducation = [
                  ...portfolioData.sections.education.items,
                ];
                newEducation[idx].degree = e.target.value;
                updateEducation(newEducation);
              }}
              className="w-full text-sm bg-background border border-input rounded p-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition duration-200"
              placeholder="Degree"
            />
            <input
              type="text"
              value={edu.period}
              onChange={(e) => {
                const newEducation = [
                  ...portfolioData.sections.education.items,
                ];
                newEducation[idx].period = e.target.value;
                updateEducation(newEducation);
              }}
              className="w-full text-sm bg-background border border-input rounded p-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition duration-200"
              placeholder="Period"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
