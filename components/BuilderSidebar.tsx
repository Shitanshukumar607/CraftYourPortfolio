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
    <aside className="w-[420px] shrink-0 border-r border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 overflow-y-auto">
      <div className="p-6 space-y-8">
        <div id="section-personal">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Personal Info</h2>
            <button
              onClick={() => toggleSection("hero")}
              className="p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded"
              title={
                portfolioData.sections.hero.enabled
                  ? "Hide Section"
                  : "Show Section"
              }
            >
              {portfolioData.sections.hero.enabled ? (
                <Eye size={18} />
              ) : (
                <EyeOff size={18} />
              )}
            </button>
          </div>
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
              <label className="block text-sm font-medium mb-1">Location</label>
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

        <div id="section-social">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Social Links</h2>
            <button
              onClick={() => toggleSection("social")}
              className="p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded"
              title={
                portfolioData.sections.social.enabled
                  ? "Hide Section"
                  : "Show Section"
              }
            >
              {portfolioData.sections.social.enabled ? (
                <Eye size={18} />
              ) : (
                <EyeOff size={18} />
              )}
            </button>
          </div>
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

        <div id="section-skills">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Skills</h2>
            <button
              onClick={() => toggleSection("skills")}
              className="p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded"
              title={
                portfolioData.sections.about.skills.enabled
                  ? "Hide Section"
                  : "Show Section"
              }
            >
              {portfolioData.sections.about.skills.enabled ? (
                <Eye size={18} />
              ) : (
                <EyeOff size={18} />
              )}
            </button>
          </div>
          <p className="text-xs text-neutral-500 mb-2">Comma separated list</p>
          <textarea
            name="skills"
            value={portfolioData.sections.about.skills.items.join(", ")}
            onChange={handleSkillsChange}
            rows={4}
            className="w-full px-3 py-2 border border-neutral-200 dark:border-neutral-800 rounded-md bg-transparent resize-none"
          />
        </div>

        <div id="section-projects">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Featured Projects</h2>
            <div className="flex gap-2">
              <button
                onClick={() => toggleSection("projects")}
                className="p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded"
                title={
                  portfolioData.sections.projects.enabled
                    ? "Hide Section"
                    : "Show Section"
                }
              >
                {portfolioData.sections.projects.enabled ? (
                  <Eye size={18} />
                ) : (
                  <EyeOff size={18} />
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
                className="p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
          <div className="space-y-4">
            {portfolioData.sections.projects.items.map((project, idx) => (
              <div
                key={idx}
                className="p-4 border border-neutral-200 dark:border-neutral-800 rounded-lg space-y-3"
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
                    className="font-medium bg-transparent w-full"
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
                    className="text-red-500 hover:text-red-600"
                  >
                    <Trash2 size={16} />
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
                  className="w-full text-sm bg-transparent border border-neutral-200 dark:border-neutral-800 rounded p-2"
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
                  className="w-full text-sm bg-transparent border border-neutral-200 dark:border-neutral-800 rounded p-2"
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
                    className="text-sm bg-transparent border border-neutral-200 dark:border-neutral-800 rounded p-2"
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
                    className="text-sm bg-transparent border border-neutral-200 dark:border-neutral-800 rounded p-2"
                    placeholder="Preview URL"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="section-experience">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Work Experience</h2>
            <div className="flex gap-2">
              <button
                onClick={() => toggleSection("experience")}
                className="p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded"
                title={
                  portfolioData.sections.experience.enabled
                    ? "Hide Section"
                    : "Show Section"
                }
              >
                {portfolioData.sections.experience.enabled ? (
                  <Eye size={18} />
                ) : (
                  <EyeOff size={18} />
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
                className="p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
          <div className="space-y-4">
            {portfolioData.sections.experience.items.map((exp, idx) => (
              <div
                key={idx}
                className="p-4 border border-neutral-200 dark:border-neutral-800 rounded-lg space-y-3"
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
                    className="font-medium bg-transparent w-full"
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
                    className="text-red-500 hover:text-red-600"
                  >
                    <Trash2 size={16} />
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
                  className="w-full text-sm bg-transparent border border-neutral-200 dark:border-neutral-800 rounded p-2"
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
                  className="w-full text-sm bg-transparent border border-neutral-200 dark:border-neutral-800 rounded p-2"
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
                  className="w-full text-sm bg-transparent border border-neutral-200 dark:border-neutral-800 rounded p-2"
                  placeholder="Description"
                />
              </div>
            ))}
          </div>
        </div>

        <div id="section-education">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Education</h2>
            <div className="flex gap-2">
              <button
                onClick={() => toggleSection("education")}
                className="p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded"
                title={
                  portfolioData.sections.education.enabled
                    ? "Hide Section"
                    : "Show Section"
                }
              >
                {portfolioData.sections.education.enabled ? (
                  <Eye size={18} />
                ) : (
                  <EyeOff size={18} />
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
                className="p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
          <div className="space-y-4">
            {portfolioData.sections.education.items.map((edu, idx) => (
              <div
                key={idx}
                className="p-4 border border-neutral-200 dark:border-neutral-800 rounded-lg space-y-3"
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
                    className="font-medium bg-transparent w-full"
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
                    className="text-red-500 hover:text-red-600"
                  >
                    <Trash2 size={16} />
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
                  className="w-full text-sm bg-transparent border border-neutral-200 dark:border-neutral-800 rounded p-2"
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
                  className="w-full text-sm bg-transparent border border-neutral-200 dark:border-neutral-800 rounded p-2"
                  placeholder="Period"
                />
              </div>
            ))}
          </div>
        </div>

        <div id="section-achievements">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Achievements</h2>
            <div className="flex gap-2">
              <button
                onClick={() => toggleSection("achievements")}
                className="p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded"
                title={
                  portfolioData.sections.achievements.enabled
                    ? "Hide Section"
                    : "Show Section"
                }
              >
                {portfolioData.sections.achievements.enabled ? (
                  <Eye size={18} />
                ) : (
                  <EyeOff size={18} />
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
                className="p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
          <div className="space-y-4">
            {portfolioData.sections.achievements.items.map((ach, idx) => (
              <div
                key={idx}
                className="p-4 border border-neutral-200 dark:border-neutral-800 rounded-lg space-y-3"
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
                    className="font-medium bg-transparent w-full"
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
                    className="text-red-500 hover:text-red-600"
                  >
                    <Trash2 size={16} />
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
                  className="w-full text-sm bg-transparent border border-neutral-200 dark:border-neutral-800 rounded p-2"
                  placeholder="Description"
                />
              </div>
            ))}
          </div>
        </div>

        <div id="section-contact">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Contact Info</h2>
            <button
              onClick={() => toggleSection("contact")}
              className="p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded"
              title={
                portfolioData.sections.contact.enabled
                  ? "Hide Section"
                  : "Show Section"
              }
            >
              {portfolioData.sections.contact.enabled ? (
                <Eye size={18} />
              ) : (
                <EyeOff size={18} />
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
