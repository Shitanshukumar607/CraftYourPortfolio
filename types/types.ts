export interface PortfolioSettings {
  name: string;
  title: string;
  location: string;
  summary: string;
  profileImage: string;
}

export interface CTAButton {
  text: string;
  url: string;
}

export interface HeroSection {
  enabled: boolean;
  ctaButtons: CTAButton[];
}

export interface SkillsSection {
  enabled: boolean;
  title: string;
  items: string[];
}

export interface AboutSection {
  enabled: boolean;
  skills: SkillsSection;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface ExperienceSection {
  enabled: boolean;
  title: string;
  items: ExperienceItem[];
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  previewUrl: string;
  repoUrl: string;
}

export interface ProjectsSection {
  enabled: boolean;
  title: string;
  items: ProjectItem[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
}

export interface EducationSection {
  enabled: boolean;
  title: string;
  items: EducationItem[];
}

export interface AchievementItem {
  title: string;
  description: string;
}

export interface AchievementsSection {
  enabled: boolean;
  title: string;
  items: AchievementItem[];
}

export interface ContactSection {
  enabled: boolean;
  title: string;
  email: string;
  phone: string | null;
  location: string;
}

export interface SocialItem {
  platform: string;
  url: string;
  icon: string;
}

export interface SocialSection {
  enabled: boolean;
  items: SocialItem[];
}

export interface PortfolioSections {
  hero: HeroSection;
  about: AboutSection;
  experience: ExperienceSection;
  projects: ProjectsSection;
  education: EducationSection;
  achievements: AchievementsSection;
  contact: ContactSection;
  social: SocialSection;
}

export interface NavigationItem {
  name: string;
  url: string;
}

export interface PortfolioNavigation {
  enabled: boolean;
  items: NavigationItem[];
}

export interface PortfolioFooter {
  enabled: boolean;
  copyright: string;
}

export interface PortfolioData {
  settings: PortfolioSettings;
  sections: PortfolioSections;
  navigation: PortfolioNavigation;
  footer: PortfolioFooter;
}
