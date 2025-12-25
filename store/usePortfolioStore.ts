import { create } from "zustand";
import { PortfolioData } from "@/types/types";

interface PortfolioStore {
  portfolioData: PortfolioData;
  viewMode: "desktop" | "mobile";
  setViewMode: (mode: "desktop" | "mobile") => void;
  setPortfolioData: (data: PortfolioData) => void;
  updateSettings: (settings: Partial<PortfolioData["settings"]>) => void;
  updateSocialLink: (platform: string, url: string) => void;
  updateSkills: (skills: string[]) => void;
  updateProjects: (
    items: PortfolioData["sections"]["projects"]["items"]
  ) => void;
  updateExperience: (
    items: PortfolioData["sections"]["experience"]["items"]
  ) => void;
  updateEducation: (
    items: PortfolioData["sections"]["education"]["items"]
  ) => void;
  updateAchievements: (
    items: PortfolioData["sections"]["achievements"]["items"]
  ) => void;
  updateContact: (
    contact: Partial<PortfolioData["sections"]["contact"]>
  ) => void;
  toggleSection: (section: keyof PortfolioData["sections"] | "skills") => void;
}

const defaultData: PortfolioData = {
  settings: {
    name: "John Doe",
    title: "Full Stack Developer",
    location: "San Francisco, CA",
    summary:
      "I build accessible, pixel-perfect, performant, and web experiences. Passionate about creating software that solves real-world problems and delights users.",
    profileImage: "",
  },
  sections: {
    hero: {
      enabled: true,
      ctaButtons: [
        { text: "Get In Touch", url: "mailto:hello@example.com" },
        { text: "View Resume", url: "#" },
      ],
    },
    about: {
      enabled: true,
      skills: {
        enabled: true,
        title: "Technical Skills",
        items: [
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
      },
    },
    experience: {
      enabled: true,
      title: "Work Experience",
      items: [
        {
          company: "TechCorp Solutions",
          role: "Senior Full Stack Developer",
          period: "01/2022 - Present",
          description:
            "Lead development of scalable web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions. Mentored junior developers and implemented best practices for code quality.",
        },
        {
          company: "StartupXYZ",
          role: "Frontend Developer",
          period: "06/2020 - 12/2021",
          description:
            "Built responsive user interfaces using React and TypeScript. Worked closely with designers to implement pixel-perfect designs. Optimized application performance and improved user experience metrics by 40%.",
        },
      ],
    },
    projects: {
      enabled: true,
      title: "Featured Projects",
      items: [
        {
          title: "E-Commerce Platform",
          description:
            "Built a full-featured e-commerce platform with React, Node.js, and PostgreSQL. Includes user authentication, payment processing, and admin dashboard with real-time analytics.",
          tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
          previewUrl: "https://demo-ecommerce.example.com",
          repoUrl: "https://github.com/username/ecommerce-platform",
        },
        {
          title: "Task Management App",
          description:
            "Developed a collaborative task management application with real-time updates using Socket.io. Features include team collaboration, file sharing, and progress tracking.",
          tags: ["React", "Socket.io", "MongoDB", "Express"],
          previewUrl: "https://taskapp-demo.example.com",
          repoUrl: "https://github.com/username/task-management",
        },
        {
          title: "Weather Dashboard",
          description:
            "Created a responsive weather dashboard that displays current conditions and forecasts. Integrated with multiple weather APIs and includes location-based services.",
          tags: ["JavaScript", "Weather API", "Charts.js", "CSS Grid"],
          previewUrl: "https://weather-dashboard.example.com",
          repoUrl: "https://github.com/username/weather-dashboard",
        },
        {
          title: "Portfolio Website",
          description:
            "Designed and developed a modern portfolio website with smooth animations and responsive design. Built with React and deployed on Vercel with continuous integration.",
          tags: ["React", "Framer Motion", "Tailwind CSS", "Vercel"],
          previewUrl: "https://portfolio.example.com",
          repoUrl: "https://github.com/username/portfolio",
        },
      ],
    },
    education: {
      enabled: true,
      title: "Education",
      items: [
        {
          institution: "University of California, Berkeley",
          degree: "Bachelor of Science in Computer Science",
          period: "09/2016 - 06/2020",
        },
        {
          institution: "FreeCodeCamp",
          degree: "Full Stack Web Development Certification",
          period: "01/2019 - 12/2019",
        },
        {
          institution: "Coursera",
          degree: "Machine Learning Specialization",
          period: "06/2021 - 12/2021",
        },
      ],
    },
    achievements: {
      enabled: true,
      title: "Achievements & Certifications",
      items: [
        {
          title: "AWS Certified Developer",
          description:
            "Achieved AWS Developer Associate certification demonstrating expertise in developing and maintaining applications on AWS.",
        },
        {
          title: "Tech Innovation Award",
          description:
            "Received company-wide recognition for developing an innovative solution that improved system performance by 60%.",
        },
        {
          title: "Open Source Contributor",
          description:
            "Active contributor to popular open source projects with 500+ GitHub stars and multiple merged pull requests.",
        },
        {
          title: "Hackathon Winner",
          description:
            "Won first place at the Bay Area Tech Hackathon for developing a sustainability-focused mobile application.",
        },
      ],
    },
    contact: {
      enabled: true,
      title: "Contact",
      email: "hello@example.com",
      phone: null,
    },
    social: {
      enabled: true,
      items: [
        { platform: "github", url: "#", icon: "github" },
        { platform: "linkedin", url: "#", icon: "linkedin" },
      ],
    },
  },
  navigation: {
    enabled: true,
    items: [
      { name: "Home", url: "#home" },
      { name: "Skills", url: "#skills" },
      { name: "Projects", url: "#projects" },
      { name: "Experience", url: "#experience" },
      { name: "Education", url: "#education" },
      { name: "Contact", url: "#contact" },
    ],
  },
  footer: {
    enabled: true,
    copyright: "© 2025 John Doe. All rights reserved.",
  },
};

export const usePortfolioStore = create<PortfolioStore>((set) => ({
  portfolioData: defaultData,
  viewMode: "desktop",
  setViewMode: (mode) => set({ viewMode: mode }),
  setPortfolioData: (data) => set({ portfolioData: data }),
  updateSettings: (newSettings) =>
    set((state) => ({
      portfolioData: {
        ...state.portfolioData,
        settings: { ...state.portfolioData.settings, ...newSettings },
      },
    })),
  updateSocialLink: (platform, url) =>
    set((state) => ({
      portfolioData: {
        ...state.portfolioData,
        sections: {
          ...state.portfolioData.sections,
          social: {
            ...state.portfolioData.sections.social,
            items: state.portfolioData.sections.social.items.map((item) =>
              item.platform === platform ? { ...item, url } : item
            ),
          },
        },
      },
    })),
  updateSkills: (skills) =>
    set((state) => ({
      portfolioData: {
        ...state.portfolioData,
        sections: {
          ...state.portfolioData.sections,
          about: {
            ...state.portfolioData.sections.about,
            skills: {
              ...state.portfolioData.sections.about.skills,
              items: skills,
            },
          },
        },
      },
    })),
  updateProjects: (items) =>
    set((state) => ({
      portfolioData: {
        ...state.portfolioData,
        sections: {
          ...state.portfolioData.sections,
          projects: {
            ...state.portfolioData.sections.projects,
            items,
          },
        },
      },
    })),
  updateExperience: (items) =>
    set((state) => ({
      portfolioData: {
        ...state.portfolioData,
        sections: {
          ...state.portfolioData.sections,
          experience: {
            ...state.portfolioData.sections.experience,
            items,
          },
        },
      },
    })),
  updateEducation: (items) =>
    set((state) => ({
      portfolioData: {
        ...state.portfolioData,
        sections: {
          ...state.portfolioData.sections,
          education: {
            ...state.portfolioData.sections.education,
            items,
          },
        },
      },
    })),
  updateAchievements: (items) =>
    set((state) => ({
      portfolioData: {
        ...state.portfolioData,
        sections: {
          ...state.portfolioData.sections,
          achievements: {
            ...state.portfolioData.sections.achievements,
            items,
          },
        },
      },
    })),
  updateContact: (contact) =>
    set((state) => ({
      portfolioData: {
        ...state.portfolioData,
        sections: {
          ...state.portfolioData.sections,
          contact: {
            ...state.portfolioData.sections.contact,
            ...contact,
          },
        },
      },
    })),
  toggleSection: (section) =>
    set((state) => {
      if (section === "skills") {
        return {
          portfolioData: {
            ...state.portfolioData,
            sections: {
              ...state.portfolioData.sections,
              about: {
                ...state.portfolioData.sections.about,
                skills: {
                  ...state.portfolioData.sections.about.skills,
                  enabled: !state.portfolioData.sections.about.skills.enabled,
                },
              },
            },
          },
        };
      }

      const sectionKey = section as keyof PortfolioData["sections"];
      return {
        portfolioData: {
          ...state.portfolioData,
          sections: {
            ...state.portfolioData.sections,
            [sectionKey]: {
              ...state.portfolioData.sections[sectionKey],
              enabled: !state.portfolioData.sections[sectionKey].enabled,
            },
          },
        },
      };
    }),
}));
