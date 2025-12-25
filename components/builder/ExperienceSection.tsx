"use client";

import { usePortfolioStore } from "@/store/usePortfolioStore";
import { Eye, EyeOff, Plus, Trash2 } from "lucide-react";

export default function ExperienceSection() {
  const { portfolioData, updateExperience, toggleSection } =
    usePortfolioStore();

  return (
    <div id="section-experience">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-neutral-200">Work Experience</h2>
        <div className="flex gap-2">
          <button
            onClick={() => toggleSection("experience")}
            className="relative group p-1 rounded text-neutral-400 transition duration-200 ease-out hover:bg-neutral-800 hover:text-neutral-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500"
            title={
              portfolioData.sections.experience.enabled
                ? "Hide Section"
                : "Show Section"
            }
          >
            {portfolioData.sections.experience.enabled ? (
              <Eye size={18} className="text-neutral-400" />
            ) : (
              <EyeOff size={18} className="text-neutral-400" />
            )}
          </button>
          <button
            onClick={() =>
              updateExperience([
                ...portfolioData.sections.experience.items,
                {
                  company: "Company Name",
                  role: "Role",
                  period: "Period",
                  description: "Description",
                },
              ])
            }
            className="relative group p-1 rounded bg-neutral-800 text-neutral-200 transition duration-200 ease-out hover:bg-neutral-700 hover:shadow-lghover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500"
            title="Add Experience"
          >
            <Plus size={16} />
            <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-neutral-900/90 px-2 py-1 text-xs text-neutral-100 opacity-0 shadow-lg shadow-sky-900/20 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
              Add Experience
            </span>
          </button>
        </div>
      </div>
      <div className="space-y-4">
        {portfolioData.sections.experience.items.map((exp, idx) => (
          <div
            key={idx}
            className="p-4 border border-neutral-800 rounded-lg space-y-3 bg-neutral-900 "
          >
            <div className="flex justify-between">
              <input
                type="text"
                value={exp.role}
                onChange={(e) => {
                  const newExperience = [
                    ...portfolioData.sections.experience.items,
                  ];
                  newExperience[idx].role = e.target.value;
                  updateExperience(newExperience);
                }}
                className="font-medium bg-transparent w-full text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-700 rounded transition duration-200"
                placeholder="Role"
              />
              <button
                onClick={() => {
                  const newExperience =
                    portfolioData.sections.experience.items.filter(
                      (_, i) => i !== idx
                    );
                  updateExperience(newExperience);
                }}
                className="relative group text-red-400 transition duration-200 hover:text-red-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 rounded"
              >
                <Trash2 size={16} />
                <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-neutral-900/90 px-2 py-1 text-xs text-neutral-100 opacity-0 shadow-lg shadow-red-900/20 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                  Remove Experience
                </span>
              </button>
            </div>
            <input
              type="text"
              value={exp.company}
              onChange={(e) => {
                const newExperience = [
                  ...portfolioData.sections.experience.items,
                ];
                newExperience[idx].company = e.target.value;
                updateExperience(newExperience);
              }}
              className="w-full text-sm bg-neutral-900 border border-neutral-800 rounded p-2 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-700 focus:border-neutral-700 transition duration-200"
              placeholder="Company"
            />
            <input
              type="text"
              value={exp.period}
              onChange={(e) => {
                const newExperience = [
                  ...portfolioData.sections.experience.items,
                ];
                newExperience[idx].period = e.target.value;
                updateExperience(newExperience);
              }}
              className="w-full text-sm bg-neutral-900 border border-neutral-800 rounded p-2 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-700 focus:border-neutral-700 transition duration-200"
              placeholder="Period"
            />
            <textarea
              value={exp.description}
              onChange={(e) => {
                const newExperience = [
                  ...portfolioData.sections.experience.items,
                ];
                newExperience[idx].description = e.target.value;
                updateExperience(newExperience);
              }}
              rows={2}
              className="w-full text-sm bg-neutral-900 border border-neutral-800 rounded p-2 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-700 focus:border-neutral-700 transition duration-200"
              placeholder="Description"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
