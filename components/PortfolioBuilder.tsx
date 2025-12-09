"use client";

import { useState } from "react";
import { usePortfolioStore } from "@/store/usePortfolioStore";
import { ArrowLeft, Monitor, Smartphone, PanelLeft } from "lucide-react";
import BuilderSidebar from "./BuilderSidebar";
import SidebarNavigation from "./SidebarNavigation";
import PortfolioTemplate from "./PortfolioTemplate";

export default function PortfolioBuilder() {
  const { viewMode, setViewMode } = usePortfolioStore();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex flex-col h-screen bg-neutral-100 dark:bg-neutral-900">
      <header className="h-16 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 flex items-center justify-between px-6 shrink-0">
        <div className="flex items-center gap-4">
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ease-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-600 disabled:pointer-events-none disabled:opacity-50 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 px-3 py-2 transition-all duration-300"
            onClick={() => alert("u went back")}
          >
            <ArrowLeft size={28} className="pb-1" />
            Back
          </button>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ease-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-600 disabled:pointer-events-none disabled:opacity-50 rounded-md text-gray-500 hover:text-neutral-900 dark:hover:text-white px-3 py-2 transition-all duration-300"
            title="Toggle Sidebar"
          >
            <PanelLeft size={20} />
            <span className="hidden sm:inline">
              {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
            </span>
          </button>
        </div>
        <div className="flex items-center gap-2 bg-neutral-100 dark:bg-neutral-900 p-1 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <button
            onClick={() => setViewMode("desktop")}
            className={`p-2 rounded-md transition-all ${
              viewMode === "desktop"
                ? "bg-white dark:bg-neutral-800 shadow-sm text-neutral-900 dark:text-white"
                : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
            }`}
            title="Desktop View"
          >
            <Monitor size={18} />
          </button>
          <button
            onClick={() => setViewMode("mobile")}
            className={`p-2 rounded-md transition-all ${
              viewMode === "mobile"
                ? "bg-white dark:bg-neutral-800 shadow-sm text-neutral-900 dark:text-white"
                : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
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
          <SidebarNavigation />
          <BuilderSidebar />
        </div>

        <main className="flex-1 flex flex-col">
          <div className="flex-1 overflow-y-auto bg-neutral-100 dark:bg-neutral-900 p-8 flex justify-center">
            <div
              className={`transition-all duration-300 ease-in-out bg-white dark:bg-neutral-950 shadow-xl overflow-scroll ${
                viewMode === "mobile"
                  ? "w-[450px] h-auto rounded-[40px] border-2 border-neutral-800"
                  : "w-full max-w-6xl rounded-3xl border  border-neutral-200 dark:border-neutral-800 "
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
