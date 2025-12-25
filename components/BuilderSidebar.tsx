import AchievementsSection from "./builder/AchievementsSection";
import ContactSection from "./builder/ContactSection";
import EducationSection from "./builder/EducationSection";
import ExperienceSection from "./builder/ExperienceSection";
import PersonalSection from "./builder/PersonalSection";
import ProjectsSection from "./builder/ProjectsSection";
import SkillsSection from "./builder/SkillsSection";
import SocialSection from "./builder/SocialSection";

interface BuilderSidebarProps {
  activeSection: string;
}

export default function BuilderSidebar({ activeSection }: BuilderSidebarProps) {
  return (
    <aside className="w-[420px] shrink-0 border-r border-sidebar-border bg-sidebar overflow-y-auto">
      <div className="p-6 space-y-8 text-sidebar-foreground">
        {activeSection === "section-personal" && <PersonalSection />}
        {activeSection === "section-social" && <SocialSection />}
        {activeSection === "section-skills" && <SkillsSection />}
        {activeSection === "section-projects" && <ProjectsSection />}
        {activeSection === "section-experience" && <ExperienceSection />}
        {activeSection === "section-education" && <EducationSection />}
        {activeSection === "section-achievements" && <AchievementsSection />}
        {activeSection === "section-contact" && <ContactSection />}
      </div>
    </aside>
  );
}
