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
      items: [],
    },
    projects: {
      enabled: true,
      title: "Featured Projects",
      items: [],
    },
    education: {
      enabled: true,
      title: "Education",
      items: [],
    },
    achievements: {
      enabled: true,
      title: "Achievements & Certifications",
      items: [],
    },
    contact: {
      enabled: true,
      title: "Contact",
      email: "hello@example.com",
      phone: null,
      location: "San Francisco, CA",
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
}));
