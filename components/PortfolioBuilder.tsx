"use client";

import React from "react";
import PortfolioTemplate from "./PortfolioTemplate";
import { ArrowLeft, Monitor, Smartphone, Plus, Trash2 } from "lucide-react";
import { usePortfolioStore } from "@/store/usePortfolioStore";

export default function PortfolioBuilder() {
  const {
    portfolioData,
    viewMode,
    setViewMode,
    updateSettings,
    updateSocialLink,
    updateSkills,
    updateProjects,
    updateExperience,
    updateEducation,
    updateAchievements,
    updateContact,
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

            {/* Contact Section */}
            <div>
              <h2 className="text-lg font-bold mb-4">Contact Info</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="text"
                    value={portfolioData.sections.contact.email}
                    onChange={(e) => updateContact({ email: e.target.value })}
                    className="w-full px-3 py-2 border border-neutral-200 dark:border-neutral-800 rounded-md bg-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Phone
                  </label>
                  <input
                    type="text"
                    value={portfolioData.sections.contact.phone || ""}
                    onChange={(e) => updateContact({ phone: e.target.value })}
                    className="w-full px-3 py-2 border border-neutral-200 dark:border-neutral-800 rounded-md bg-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    value={portfolioData.sections.contact.location}
                    onChange={(e) =>
                      updateContact({ location: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-neutral-200 dark:border-neutral-800 rounded-md bg-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Achievements Section */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold">Achievements</h2>
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

            {/* Education Section */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold">Education</h2>
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

            {/* Work Experience Section */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold">Work Experience</h2>
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

            {/* Projects Section */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold">Featured Projects</h2>
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
