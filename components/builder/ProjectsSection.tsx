"use client";

import { usePortfolioStore } from "@/store/usePortfolioStore";
import { Eye, EyeOff, Plus, Trash2 } from "lucide-react";

export default function ProjectsSection() {
  const { portfolioData, updateProjects, toggleSection } = usePortfolioStore();

  return (
    <div id="section-projects">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-foreground">Featured Projects</h2>
        <div className="flex gap-2">
          <button
            onClick={() => toggleSection("projects")}
            className="relative group p-1 rounded text-muted-foreground transition duration-200 ease-out hover:bg-accent hover:text-accent-foreground hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            title={
              portfolioData.sections.projects.enabled
                ? "Hide Section"
                : "Show Section"
            }
          >
            {portfolioData.sections.projects.enabled ? (
              <Eye size={18} className="text-muted-foreground" />
            ) : (
              <EyeOff size={18} className="text-muted-foreground" />
            )}
          </button>
          <button
            onClick={() =>
              updateProjects([
                ...portfolioData.sections.projects.items,
                {
                  title: "New Project",
                  description: "Project description",
                  tags: ["Tag1", "Tag2"],
                  previewUrl: "#",
                  repoUrl: "#",
                },
              ])
            }
            className="relative group p-1 rounded bg-secondary text-secondary-foreground transition duration-200 ease-out hover:bg-secondary/80 hover:shadow-lg hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            title="Add Project"
          >
            <Plus size={16} />
            <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-popover px-2 py-1 text-xs text-popover-foreground opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
              Add Project
            </span>
          </button>
        </div>
      </div>
      <div className="space-y-4">
        {portfolioData.sections.projects.items.map((project, idx) => (
          <div
            key={idx}
            className="p-4 border border-input rounded-lg space-y-3 bg-card text-card-foreground"
          >
            <div className="flex justify-between">
              <input
                type="text"
                value={project.title}
                onChange={(e) => {
                  const newProjects = [
                    ...portfolioData.sections.projects.items,
                  ];
                  newProjects[idx].title = e.target.value;
                  updateProjects(newProjects);
                }}
                className="font-medium bg-transparent w-full text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring rounded transition duration-200"
                placeholder="Project Title"
              />
              <button
                onClick={() => {
                  const newProjects =
                    portfolioData.sections.projects.items.filter(
                      (_, i) => i !== idx
                    );
                  updateProjects(newProjects);
                }}
                className="relative group text-destructive transition duration-200 hover:text-destructive/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-destructive rounded"
              >
                <Trash2 size={16} />
                <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-popover px-2 py-1 text-xs text-popover-foreground opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                  Remove Project
                </span>
              </button>
            </div>
            <textarea
              value={project.description}
              onChange={(e) => {
                const newProjects = [...portfolioData.sections.projects.items];
                newProjects[idx].description = e.target.value;
                updateProjects(newProjects);
              }}
              rows={2}
              className="w-full text-sm bg-background border border-input rounded p-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition duration-200"
              placeholder="Description"
            />
            <input
              type="text"
              value={project.tags.join(", ")}
              onChange={(e) => {
                const newProjects = [...portfolioData.sections.projects.items];
                newProjects[idx].tags = e.target.value
                  .split(",")
                  .map((t) => t.trim());
                updateProjects(newProjects);
              }}
              className="w-full text-sm bg-neutral-900 border border-neutral-800 rounded p-2 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-700 focus:border-neutral-700 transition duration-200"
              placeholder="Tags (comma separated)"
            />
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                value={project.repoUrl}
                onChange={(e) => {
                  const newProjects = [
                    ...portfolioData.sections.projects.items,
                  ];
                  newProjects[idx].repoUrl = e.target.value;
                  updateProjects(newProjects);
                }}
                className="text-sm bg-neutral-900 border border-neutral-800 rounded p-2 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-700 focus:border-neutral-700 transition duration-200"
                placeholder="Repo URL"
              />
              <input
                type="text"
                value={project.previewUrl}
                onChange={(e) => {
                  const newProjects = [
                    ...portfolioData.sections.projects.items,
                  ];
                  newProjects[idx].previewUrl = e.target.value;
                  updateProjects(newProjects);
                }}
                className="text-sm bg-neutral-900 border border-neutral-800 rounded p-2 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-700 focus:border-neutral-700 transition duration-200"
                placeholder="Preview URL"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
