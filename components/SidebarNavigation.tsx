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

export default function SidebarNavigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "section-personal", icon: User, label: "Personal Info" },
    { id: "section-social", icon: Share2, label: "Social Links" },
    { id: "section-skills", icon: Brain, label: "Skills" },
    { id: "section-experience", icon: Briefcase, label: "Experience" },
    { id: "section-education", icon: GraduationCap, label: "Education" },
    { id: "section-projects", icon: FolderOpen, label: "Projects" },
    { id: "section-achievements", icon: Award, label: "Achievements" },
    { id: "section-contact", icon: Mail, label: "Contact" },
  ];

  return (
    <div className="w-16 shrink-0 border-r border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 flex flex-col items-center py-6 gap-4">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className="p-3 rounded-xl text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white transition-all"
          title={item.label}
        >
          <item.icon size={20} />
        </button>
      ))}
    </div>
  );
}
