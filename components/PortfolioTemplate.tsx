"use client";

import { usePortfolioStore } from "@/store/usePortfolioStore";
import {
  Award,
  Building,
  Calendar,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";

const PortfolioTemplate = () => {
  const { portfolioData, viewMode } = usePortfolioStore();

  if (!portfolioData) {
    return <div className="p-10 text-center">No data available</div>;
  }

  const { settings, sections, navigation, footer } = portfolioData;
  const { name, title, location, summary, profileImage } = settings;
  const {
    hero,
    about,
    experience,
    projects,
    education,
    achievements,
    contact,
    social,
  } = sections;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="overflow-scroll bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-300 font-sans selection:bg-neutral-200 dark:selection:bg-neutral-800">
        {navigation.enabled && (
          <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-neutral-950/80 border-b border-neutral-200 dark:border-neutral-800">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
              <div className="font-bold text-xl tracking-tighter">
                Portfolio
              </div>

              {viewMode === "desktop" && (
                <div className="flex items-center gap-8 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                  {navigation.items.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.url.replace("#", ""))}
                      className="hover:text-neutral-900 dark:hover:text-white transition-colors"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>
        )}

        <main className="max-w-5xl mx-auto px-6 py-12 space-y-24">
          {hero.enabled && (
            <section id="home" className="pt-10 space-y-6">
              <div className="space-y-2">
                {profileImage && (
                  <img
                    src={profileImage}
                    alt={name}
                    className="w-32 h-32 rounded-full object-cover mb-4 border-2 border-neutral-200 dark:border-neutral-800"
                  />
                )}
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  {name}
                </h1>
                <h2 className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 font-medium">
                  {title}
                </h2>
              </div>

              <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-500">
                <MapPin size={18} />
                <span>{location}</span>
              </div>

              <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300 max-w-2xl">
                {summary}
              </p>

              <div className="flex gap-4 pt-4">
                {social.enabled &&
                  social.items.map((item) => {
                    if (item.platform === "github") {
                      return (
                        <a
                          key={item.platform}
                          href={item.url}
                          className="p-2 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
                        >
                          <Github size={24} />
                        </a>
                      );
                    }
                    if (item.platform === "linkedin") {
                      return (
                        <a
                          key={item.platform}
                          href={item.url}
                          className="p-2 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
                        >
                          <Linkedin size={24} />
                        </a>
                      );
                    }
                    return null;
                  })}
                {contact.enabled && contact.email && (
                  <a
                    href={`mailto:${contact.email}`}
                    className="p-2 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
                  >
                    <Mail size={24} />
                  </a>
                )}
              </div>
              <div className="flex gap-4 pt-4">
                {hero.ctaButtons.map((btn, idx) => (
                  <a
                    key={idx}
                    href={btn.url}
                    className={`px-6 py-3 rounded-full font-medium transition-colors ${
                      idx === 0
                        ? "bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
                        : "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700"
                    }`}
                  >
                    {btn.text}
                  </a>
                ))}
              </div>
            </section>
          )}

          {about.enabled && about.skills.enabled && (
            <section id="skills" className="space-y-8">
              <h3 className="text-2xl font-bold border-b border-neutral-200 dark:border-neutral-800 pb-4">
                {about.skills.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {about.skills.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 rounded-md text-sm font-medium border border-neutral-200 dark:border-neutral-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}

          {projects.enabled && (
            <section id="projects" className="space-y-8">
              <h3 className="text-2xl font-bold border-b border-neutral-200 dark:border-neutral-800 pb-4">
                {projects.title}
              </h3>
              <div className="grid gap-10">
                {projects.items.map((project, idx) => (
                  <div key={idx} className="group space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h4>
                        <p className="text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      <div className="flex gap-3 shrink-0">
                        {project.repoUrl && (
                          <a
                            href={project.repoUrl}
                            className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
                            title="View Code"
                          >
                            <Github size={20} />
                          </a>
                        )}
                        {project.previewUrl && (
                          <a
                            href={project.previewUrl}
                            className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
                            title="Live Demo"
                          >
                            <ExternalLink size={20} />
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-2 py-1 bg-neutral-50 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 rounded border border-neutral-100 dark:border-neutral-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {experience.enabled && (
            <section id="experience" className="space-y-8">
              <h3 className="text-2xl font-bold border-b border-neutral-200 dark:border-neutral-800 pb-4">
                {experience.title}
              </h3>
              <div className="space-y-10">
                {experience.items.map((job, idx) => (
                  <div
                    key={idx}
                    className="relative pl-8 border-l border-neutral-200 dark:border-neutral-800"
                  >
                    <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></div>
                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <h4 className="text-lg font-bold">{job.role}</h4>
                        <div className="flex items-center gap-1 text-sm text-neutral-500 dark:text-neutral-500 font-mono">
                          <Calendar size={14} />
                          <span>{job.period}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 text-sm">
                        <Building size={14} />
                        <span>{job.company}</span>
                      </div>
                      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {job.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {education.enabled && (
            <section id="education" className="space-y-8">
              <h3 className="text-2xl font-bold border-b border-neutral-200 dark:border-neutral-800 pb-4">
                {education.title}
              </h3>
              <div className="space-y-6">
                {education.items.map((edu, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row justify-between gap-2"
                  >
                    <div>
                      <h4 className="text-lg font-bold">{edu.degree}</h4>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-neutral-500 dark:text-neutral-500 font-mono whitespace-nowrap">
                      <Calendar size={14} />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {achievements.enabled && (
            <section id="achievements" className="space-y-8">
              <h3 className="text-2xl font-bold border-b border-neutral-200 dark:border-neutral-800 pb-4">
                {achievements.title}
              </h3>
              <div className="grid gap-6 md:grid-cols-2">
                {achievements.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50"
                  >
                    <div className="flex items-start gap-4">
                      <Award
                        className="shrink-0 text-neutral-600 dark:text-neutral-400"
                        size={24}
                      />
                      <div>
                        <h4 className="font-bold mb-2">{item.title}</h4>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {contact.enabled && (
            <section id="contact" className="space-y-8">
              <h3 className="text-2xl font-bold border-b border-neutral-200 dark:border-neutral-800 pb-4">
                {contact.title}
              </h3>
              <div className="text-center space-y-6">
                <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
                  I'm currently looking for new opportunities. Whether you have
                  a question or just want to say hi, I'll try my best to get
                  back to you!
                </p>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-block px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold rounded-full hover:opacity-90 transition-opacity"
                >
                  Say Hello
                </a>
              </div>
            </section>
          )}
        </main>

        {footer.enabled && (
          <footer className="py-8 text-center text-neutral-500 dark:text-neutral-500 text-sm border-t border-neutral-200 dark:border-neutral-800">
            {footer.copyright}
          </footer>
        )}
      </div>
    </div>
  );
};

export default PortfolioTemplate;
