"use client";

import {
  Award,
  Building,
  Calendar,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Moon,
  Sun,
} from "lucide-react";

export interface PortfolioData {
  fullName: string;
  title: string;
  location: string;
  summary: string;
  imageUrl: string;
  skills: string[];
  socialLinks: {
    github: string;
    linkedin: string;
    email: string;
  };
}

interface PortfolioTemplateProps {
  data?: PortfolioData;
  viewMode: "desktop" | "mobile";
}

const PortfolioTemplate = ({ data, viewMode }: PortfolioTemplateProps) => {
  const {
    fullName = "John Doe",
    title = "Full Stack Developer",
    location = "San Francisco, CA",
    summary = "I build accessible, pixel-perfect, performant, and web experiences. Passionate about creating software that solves real-world problems and delights users.",
    imageUrl = "",
    skills = [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Tailwind CSS",
      "PostgreSQL",
      "GraphQL",
      "Docker",
      "AWS",
    ],
    socialLinks = {
      github: "#",
      linkedin: "#",
      email: "mailto:hello@example.com",
    },
  } = data || {};

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="overflow-scroll bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-300 font-sans selection:bg-neutral-200 dark:selection:bg-neutral-800">
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-neutral-950/80 border-b border-neutral-200 dark:border-neutral-800">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="font-bold text-xl tracking-tighter">Portfolio</div>

            {viewMode === "desktop" && (
              <div className="flex items-center gap-8 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                {[
                  "Home",
                  "Skills",
                  "Projects",
                  "Experience",
                  "Education",
                  "Contact",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="hover:text-neutral-900 dark:hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        <main className="max-w-5xl mx-auto px-6 py-12 space-y-24">
          <section id="home" className="pt-10 space-y-6">
            <div className="space-y-2">
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt={fullName}
                  className="w-32 h-32 rounded-full object-cover mb-4 border-2 border-neutral-200 dark:border-neutral-800"
                />
              )}
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                {fullName}
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
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  className="p-2 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
                >
                  <Github size={24} />
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  className="p-2 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
                >
                  <Linkedin size={24} />
                </a>
              )}
              {socialLinks.email && (
                <a
                  href={
                    socialLinks.email.startsWith("mailto:")
                      ? socialLinks.email
                      : `mailto:${socialLinks.email}`
                  }
                  className="p-2 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
                >
                  <Mail size={24} />
                </a>
              )}
            </div>
          </section>

          <section id="skills" className="space-y-8">
            <h3 className="text-2xl font-bold border-b border-neutral-200 dark:border-neutral-800 pb-4">
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 rounded-md text-sm font-medium border border-neutral-200 dark:border-neutral-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section id="projects" className="space-y-8">
            <h3 className="text-2xl font-bold border-b border-neutral-200 dark:border-neutral-800 pb-4">
              Featured Projects
            </h3>
            <div className="grid gap-10">
              {[1, 2].map((project) => (
                <div key={project} className="group space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        Project Title {project}
                      </h4>
                      <p className="text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
                        A concise description of the project, highlighting the
                        key features, the problem it solves, and the
                        technologies used. Keep it clear and impactful.
                      </p>
                    </div>
                    <div className="flex gap-3 shrink-0">
                      <a
                        href="#"
                        className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
                        title="View Code"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href="#"
                        className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
                        title="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {["React", "Tailwind", "Node.js"].map((tag) => (
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

          <section id="experience" className="space-y-8">
            <h3 className="text-2xl font-bold border-b border-neutral-200 dark:border-neutral-800 pb-4">
              Work Experience
            </h3>
            <div className="space-y-10">
              {[1, 2].map((job) => (
                <div
                  key={job}
                  className="relative pl-8 border-l border-neutral-200 dark:border-neutral-800"
                >
                  <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></div>
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h4 className="text-lg font-bold">
                        Senior Frontend Engineer
                      </h4>
                      <div className="flex items-center gap-1 text-sm text-neutral-500 dark:text-neutral-500 font-mono">
                        <Calendar size={14} />
                        <span>2022 - Present</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 text-sm">
                      <Building size={14} />
                      <span>Tech Company Inc.</span>
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      Led the development of the main product dashboard.
                      Improved performance by 40%. Mentored junior developers
                      and implemented best practices for code quality.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="education" className="space-y-8">
            <h3 className="text-2xl font-bold border-b border-neutral-200 dark:border-neutral-800 pb-4">
              Education
            </h3>
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between gap-2">
                <div>
                  <h4 className="text-lg font-bold">
                    Bachelor of Science in Computer Science
                  </h4>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    University of Technology
                  </p>
                </div>
                <div className="flex items-center gap-1 text-sm text-neutral-500 dark:text-neutral-500 font-mono whitespace-nowrap">
                  <Calendar size={14} />
                  <span>2018 - 2022</span>
                </div>
              </div>
            </div>
          </section>

          <section id="achievements" className="space-y-8">
            <h3 className="text-2xl font-bold border-b border-neutral-200 dark:border-neutral-800 pb-4">
              Achievements & Certifications
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50"
                >
                  <div className="flex items-start gap-4">
                    <Award
                      className="shrink-0 text-neutral-600 dark:text-neutral-400"
                      size={24}
                    />
                    <div>
                      <h4 className="font-bold mb-2">
                        AWS Certified Solutions Architect
                      </h4>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        Validated expertise in designing distributed systems on
                        AWS.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="contact" className="space-y-8">
            <h3 className="text-2xl font-bold border-b border-neutral-200 dark:border-neutral-800 pb-4">
              Get In Touch
            </h3>
            <div className="text-center space-y-6">
              <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
                I'm currently looking for new opportunities. Whether you have a
                question or just want to say hi, I'll try my best to get back to
                you!
              </p>
              <a
                href="mailto:hello@example.com"
                className="inline-block px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold rounded-full hover:opacity-90 transition-opacity"
              >
                Say Hello
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default PortfolioTemplate;
