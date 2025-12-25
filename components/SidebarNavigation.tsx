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
    <div className="w-16 shrink-0 border-r border-rose-900/40 bg-linear-to-b from-[#08051a] via-[#05041a] to-[#02030b] flex flex-col items-center py-6 gap-4 shadow-lg shadow-sky-900/10">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onSectionChange(item.id)}
          className={`p-3 rounded-2xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 ${
            activeSection === item.id
              ? "bg-neutral-800 text-white"
              : "text-neutral-400 hover:bg-neutral-800 hover:text-white"
          }`}
          title={item.label}
        >
          <item.icon size={20} />
        </button>
      ))}
    </div>
  );
}
