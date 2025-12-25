"use client";

import React from "react";
import {
  User,
  Brain,
  FolderOpen,
  Briefcase,
  GraduationCap,
  Award,
  Mail,
  Share2,
} from "lucide-react";

interface SidebarNavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function SidebarNavigation({
  activeSection,
  onSectionChange,
}: SidebarNavigationProps) {
  const navItems = [
    { id: "section-personal", icon: User, label: "Personal Info" },
    { id: "section-social", icon: Share2, label: "Social Links" },
    { id: "section-skills", icon: Brain, label: "Skills" },
    { id: "section-projects", icon: FolderOpen, label: "Projects" },
    { id: "section-experience", icon: Briefcase, label: "Experience" },
    { id: "section-education", icon: GraduationCap, label: "Education" },
    { id: "section-achievements", icon: Award, label: "Achievements" },
    { id: "section-contact", icon: Mail, label: "Contact" },
  ];

  return (
    <div className="w-16 shrink-0 border-r border-sidebar-border bg-sidebar flex flex-col items-center py-6 gap-4 shadow-sm">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onSectionChange(item.id)}
          className={`p-3 rounded-2xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
            activeSection === item.id
              ? "bg-sidebar-accent text-sidebar-accent-foreground"
              : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          }`}
          title={item.label}
        >
          <item.icon size={20} />
        </button>
      ))}
    </div>
  );
}
