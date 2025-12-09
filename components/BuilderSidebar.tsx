"use client";

import React from "react";
import { Plus, Trash2, Eye, EyeOff } from "lucide-react";
import { usePortfolioStore } from "@/store/usePortfolioStore";

export default function BuilderSidebar() {
  const {
    portfolioData,
    updateSettings,
    updateSocialLink,
    updateSkills,
    updateProjects,
    updateExperience,
    updateEducation,
    updateAchievements,
    updateContact,
    toggleSection,
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
    <aside className="w-[420px] shrink-0 border-r border-rose-900/40 bg-linear-to-b from-[#080217] via-[#040a1f] to-[#01040e] shadow-[0_35px_70px_rgba(8,145,178,0.2)] overflow-y-auto">
      <div className="p-6 space-y-8 text-neutral-100">
        <div id="section-personal">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-rose-200">Personal Info</h2>
            <button
              onClick={() => toggleSection("hero")}
              className="relative group p-1 rounded text-neutral-400 transition duration-200 ease-out hover:bg-rose-500/10 hover:text-rose-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
              title={
                portfolioData.sections.hero.enabled
                  ? "Hide Section"
                  : "Show Section"
              }
            >
              {portfolioData.sections.hero.enabled ? (
                <Eye size={18} className="text-sky-300" />
              ) : (
                <EyeOff size={18} className="text-sky-300" />
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
                className="w-full px-3 py-2 border border-neutral-800/60 rounded-md bg-neutral-900/60 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition duration-200"
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
                className="w-full px-3 py-2 border border-neutral-800/60 rounded-md bg-neutral-900/60 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition duration-200"
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
                className="w-full px-3 py-2 border border-neutral-800/60 rounded-md bg-neutral-900/60 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition duration-200"
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
                className="w-full px-3 py-2 border border-neutral-800/60 rounded-md bg-neutral-900/60 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition duration-200"
                placeholder="https://example.com/image.jpg"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold text-rose-200 mb-4">
            Short Summary
          </h2>
          <textarea
            name="summary"
            value={portfolioData.settings.summary}
            onChange={handleSettingsChange}
            rows={4}
            className="w-full px-3 py-2 border border-neutral-800/60 rounded-md bg-neutral-900/60 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition duration-200 resize-none"
          />
        </div>

        <div id="section-social">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-rose-200">Social Links</h2>
            <button
              onClick={() => toggleSection("social")}
              className="relative group p-1 rounded text-neutral-400 transition duration-200 ease-out hover:bg-rose-500/10 hover:text-rose-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
              title={
                portfolioData.sections.social.enabled
                  ? "Hide Section"
                  : "Show Section"
              }
            >
              {portfolioData.sections.social.enabled ? (
                <Eye size={18} className="text-sky-300" />
              ) : (
                <EyeOff size={18} className="text-sky-300" />
              )}
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-neutral-300">
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
                className="w-full px-3 py-2 border border-neutral-800/60 rounded-md bg-neutral-900/60 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus-border-sky-500 transition duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-neutral-300">
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
                className="w-full px-3 py-2 border border-neutral-800/60 rounded-md bg-neutral-900/60 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition duration-200"
              />
            </div>
          </div>
        </div>

        <div id="section-skills">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-rose-200">Skills</h2>
            <button
              onClick={() => toggleSection("skills")}
              className="relative group p-1 rounded text-neutral-400 transition duration-200 ease-out hover:bg-rose-500/10 hover:text-rose-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
              title={
                portfolioData.sections.about.skills.enabled
                  ? "Hide Section"
                  : "Show Section"
              }
            >
              {portfolioData.sections.about.skills.enabled ? (
                <Eye size={18} className="text-sky-300" />
              ) : (
                <EyeOff size={18} className="text-sky-300" />
              )}
            </button>
          </div>
          <p className="text-xs text-sky-300/80 mb-2">Comma separated list</p>
          <textarea
            name="skills"
            value={portfolioData.sections.about.skills.items.join(", ")}
            onChange={handleSkillsChange}
            rows={4}
            className="w-full px-3 py-2 border border-neutral-800/60 rounded-md bg-neutral-900/60 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition duration-200 resize-none"
          />
        </div>

        <div id="section-projects">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-rose-200">
              Featured Projects
            </h2>
            <div className="flex gap-2">
              <button
                onClick={() => toggleSection("projects")}
                className="relative group p-1 rounded text-neutral-400 transition duration-200 ease-out hover:bg-rose-500/10 hover:text-rose-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                title={
                  portfolioData.sections.projects.enabled
                    ? "Hide Section"
                    : "Show Section"
                }
              >
                {portfolioData.sections.projects.enabled ? (
                  <Eye size={18} className="text-sky-300" />
                ) : (
                  <EyeOff size={18} className="text-sky-300" />
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
                className="relative group p-1 rounded bg-amber-500/10 text-amber-200 transition duration-200 ease-out hover:bg-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                title="Add Project"
              >
                <Plus size={16} />
                <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-neutral-900/90 px-2 py-1 text-xs text-neutral-100 opacity-0 shadow-lg shadow-sky-900/20 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                  Add Project
                </span>
              </button>
            </div>
          </div>
          <div className="space-y-4">
            {portfolioData.sections.projects.items.map((project, idx) => (
              <div
                key={idx}
                className="p-4 border border-neutral-800/70 rounded-lg space-y-3 bg-neutral-900/40 shadow-inner shadow-amber-900/10"
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
                    className="font-medium bg-transparent w-full text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500/60 rounded transition duration-200"
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
                    className="relative group text-red-400 transition duration-200 hover:text-red-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 rounded"
                  >
                    <Trash2 size={16} />
                    <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-neutral-900/90 px-2 py-1 text-xs text-neutral-100 opacity-0 shadow-lg shadow-red-900/20 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                      Remove Project
                    </span>
                  </button>
                </div>
                <textarea
                  value={project.description}
                  onChange={(e) => {
                    const newProjects = [
                      ...portfolioData.sections.projects.items,
                    ];
                    newProjects[idx].description = e.target.value;
                    updateProjects(newProjects);
                  }}
                  rows={2}
                  className="w-full text-sm bg-neutral-900/60 border border-neutral-800/60 rounded p-2 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition duration-200"
                  placeholder="Description"
                />
                <input
                  type="text"
                  value={project.tags.join(", ")}
                  onChange={(e) => {
                    const newProjects = [
                      ...portfolioData.sections.projects.items,
                    ];
                    newProjects[idx].tags = e.target.value
                      .split(",")
                      .map((t) => t.trim());
                    updateProjects(newProjects);
                  }}
                  className="w-full text-sm bg-neutral-900/60 border border-neutral-800/60 rounded p-2 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition duration-200"
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
                    className="text-sm bg-neutral-900/60 border border-neutral-800/60 rounded p-2 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition duration-200"
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
                    className="text-sm bg-neutral-900/60 border border-neutral-800/60 rounded p-2 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition duration-200"
                    placeholder="Preview URL"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="section-experience">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-rose-200">Work Experience</h2>
            <div className="flex gap-2">
              <button
                onClick={() => toggleSection("experience")}
                className="relative group p-1 rounded text-neutral-400 transition duration-200 ease-out hover:bg-rose-500/10 hover:text-rose-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                title={
                  portfolioData.sections.experience.enabled
                    ? "Hide Section"
                    : "Show Section"
                }
              >
                {portfolioData.sections.experience.enabled ? (
                  <Eye size={18} className="text-sky-300" />
                ) : (
                  <EyeOff size={18} className="text-sky-300" />
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
                className="relative group p-1 rounded bg-amber-500/10 text-amber-200 transition duration-200 ease-out hover:bg-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
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
                className="p-4 border border-neutral-800/70 rounded-lg space-y-3 bg-neutral-900/40 shadow-inner shadow-amber-900/10"
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
                    className="font-medium bg-transparent w-full text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500/60 rounded transition duration-200"
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
                  className="w-full text-sm bg-neutral-900/60 border border-neutral-800/60 rounded p-2 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition duration-200"
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
                  className="w-full text-sm bg-neutral-900/60 border border-neutral-800/60 rounded p-2 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition duration-200"
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
                  className="w-full text-sm bg-neutral-900/60 border border-neutral-800/60 rounded p-2 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition duration-200"
                  placeholder="Description"
                />
              </div>
            ))}
          </div>
        </div>

        <div id="section-education">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-rose-200">Education</h2>
            <div className="flex gap-2">
              <button
                onClick={() => toggleSection("education")}
                className="relative group p-1 rounded text-neutral-400 transition duration-200 ease-out hover:bg-rose-500/10 hover:text-rose-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                title={
                  portfolioData.sections.education.enabled
                    ? "Hide Section"
                    : "Show Section"
                }
              >
                {portfolioData.sections.education.enabled ? (
                  <Eye size={18} className="text-sky-300" />
                ) : (
                  <EyeOff size={18} className="text-sky-300" />
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
                className="relative group p-1 rounded bg-amber-500/10 text-amber-200 transition duration-200 ease-out hover:bg-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                title="Add Education"
              >
                <Plus size={16} />
                <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-neutral-900/90 px-2 py-1 text-xs text-neutral-100 opacity-0 shadow-lg shadow-amber-900/20 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                  Add Education
                </span>
              </button>
            </div>
          </div>
          <div className="space-y-4">
            {portfolioData.sections.education.items.map((edu, idx) => (
              <div
                key={idx}
                className="p-4 border border-neutral-800/70 rounded-lg space-y-3 bg-neutral-900/40 shadow-inner shadow-amber-900/10"
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
                    className="font-medium bg-transparent w-full text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500/60 rounded transition duration-200"
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
                    className="relative group text-red-400 transition duration-200 hover:text-red-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 rounded"
                  >
                    <Trash2 size={16} />
                    <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-neutral-900/90 px-2 py-1 text-xs text-neutral-100 opacity-0 shadow-lg shadow-red-900/20 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
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
                  className="w-full text-sm bg-neutral-900/60 border border-neutral-800/60 rounded p-2 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition duration-200"
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
                  className="w-full text-sm bg-neutral-900/60 border border-neutral-800/60 rounded p-2 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition duration-200"
                  placeholder="Period"
                />
              </div>
            ))}
          </div>
        </div>

        <div id="section-achievements">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-rose-200">Achievements</h2>
            <div className="flex gap-2">
              <button
                onClick={() => toggleSection("achievements")}
                className="relative group p-1 rounded text-neutral-400 transition duration-200 ease-out hover:bg-rose-500/10 hover:text-rose-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                title={
                  portfolioData.sections.achievements.enabled
                    ? "Hide Section"
                    : "Show Section"
                }
              >
                {portfolioData.sections.achievements.enabled ? (
                  <Eye size={18} className="text-sky-300" />
                ) : (
                  <EyeOff size={18} className="text-sky-300" />
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
                className="relative group p-1 rounded bg-amber-500/10 text-amber-200 transition duration-200 ease-out hover:bg-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                title="Add Achievement"
              >
                <Plus size={16} />
                <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-neutral-900/90 px-2 py-1 text-xs text-neutral-100 opacity-0 shadow-lg shadow-amber-900/20 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                  Add Achievement
                </span>
              </button>
            </div>
          </div>
          <div className="space-y-4">
            {portfolioData.sections.achievements.items.map((ach, idx) => (
              <div
                key={idx}
                className="p-4 border border-neutral-800/70 rounded-lg space-y-3 bg-neutral-900/40 shadow-inner shadow-amber-900/10"
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
                    className="font-medium bg-transparent w-full text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500/60 rounded transition duration-200"
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
                    className="relative group text-red-400 transition duration-200 hover:text-red-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 rounded"
                  >
                    <Trash2 size={16} />
                    <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-neutral-900/90 px-2 py-1 text-xs text-neutral-100 opacity-0 shadow-lg shadow-red-900/20 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
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
                  className="w-full text-sm bg-neutral-900/60 border border-neutral-800/60 rounded p-2 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition duration-200"
                  placeholder="Description"
                />
              </div>
            ))}
          </div>
        </div>

        <div id="section-contact">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-rose-200">Contact Info</h2>
            <button
              onClick={() => toggleSection("contact")}
              className="relative group p-1 rounded text-neutral-400 transition duration-200 ease-out hover:bg-rose-500/10 hover:text-rose-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
              title={
                portfolioData.sections.contact.enabled
                  ? "Hide Section"
                  : "Show Section"
              }
            >
              {portfolioData.sections.contact.enabled ? (
                <Eye size={18} className="text-sky-300" />
              ) : (
                <EyeOff size={18} className="text-sky-300" />
              )}
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="text"
                value={portfolioData.sections.contact.email}
                onChange={(e) => updateContact({ email: e.target.value })}
                className="w-full px-3 py-2 border border-neutral-200 dark:border-neutral-800 rounded-md bg-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                type="text"
                value={portfolioData.sections.contact.phone || ""}
                onChange={(e) => updateContact({ phone: e.target.value })}
                className="w-full px-3 py-2 border border-neutral-200 dark:border-neutral-800 rounded-md bg-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Location</label>
              <input
                type="text"
                value={portfolioData.sections.contact.location}
                onChange={(e) => updateContact({ location: e.target.value })}
                className="w-full px-3 py-2 border border-neutral-200 dark:border-neutral-800 rounded-md bg-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
