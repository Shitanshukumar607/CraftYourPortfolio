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
          onClick={() => scrollToSection(item.id)}
          className="p-3 rounded-2xl text-sky-300/70 hover:bg-rose-500/15 hover:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/60 shadow-inner shadow-sky-900/20"
          title={item.label}
        >
          <item.icon size={20} />
        </button>
      ))}
    </div>
  );
}
