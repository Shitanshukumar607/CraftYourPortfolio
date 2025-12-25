"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePortfolioStore } from "@/store/usePortfolioStore";
import { ArrowLeft, Monitor, Smartphone, PanelLeft } from "lucide-react";
import BuilderSidebar from "./BuilderSidebar";
import SidebarNavigation from "./SidebarNavigation";
import PortfolioTemplate from "./PortfolioTemplate";

export default function PortfolioBuilder() {
  const router = useRouter();
  const { viewMode, setViewMode } = usePortfolioStore();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("section-personal");

  return (
    <div className="flex flex-col h-screen text-foreground bg-background">
      <header className="h-16 border-b border-border backdrop-blur-xl flex items-center justify-between px-6 shrink-0 shadow-sm">
        <div className="flex items-center gap-4">
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ease-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent px-3 py-2 transition-all duration-300"
            onClick={() => router.back()}
          >
            <ArrowLeft size={28} className="pb-1 text-primary" />
            Back
          </button>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ease-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent px-3 py-2 transition-all duration-300"
            title="Toggle Sidebar"
          >
            <PanelLeft size={20} />
            <span className="hidden sm:inline">
              {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
            </span>
          </button>
        </div>
        <div className="flex items-center gap-2 bg-card border border-border p-1 rounded-2xl shadow-sm">
          <button
            onClick={() => setViewMode("desktop")}
            className={`p-2 rounded-xl transition-all ${
              viewMode === "desktop"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-accent"
            }`}
            title="Desktop View"
          >
            <Monitor size={18} />
          </button>
          <button
            onClick={() => setViewMode("mobile")}
            className={`p-2 rounded-xl transition-all ${
              viewMode === "mobile"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-accent"
            }`}
            title="Mobile View"
          >
            <Smartphone size={18} />
          </button>
        </div>
      </header>

      <div className="flex h-screen overflow-hidden">
        <div
          className={`flex transition-all duration-300 ease-in-out overflow-hidden ${
            isSidebarOpen ? "w-[484px] opacity-100" : "w-0 opacity-0"
          }`}
        >
          <SidebarNavigation
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />
          <BuilderSidebar activeSection={activeSection} />
        </div>

        <main className="flex-1 flex flex-col bg-muted/30">
          <div className="flex-1 overflow-y-auto p-8 flex justify-center">
            <div
              className={`transition-all duration-300 ease-in-out overflow-scroll border border-border bg-background ${
                viewMode === "mobile"
                  ? "w-[450px] h-auto rounded-[40px] border-4 border-foreground/10"
                  : "w-full max-w-6xl rounded-3xl"
              }`}
            >
              <div
                className={`w-full ${
                  viewMode === "mobile" ? "rounded-4xl" : ""
                }`}
              >
                <div className={viewMode === "mobile" ? "origin-top" : ""}>
                  <PortfolioTemplate />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
