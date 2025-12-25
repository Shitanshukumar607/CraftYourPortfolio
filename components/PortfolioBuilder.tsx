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

  return (
    <div className="flex flex-col h-screen text-neutral-100">
      <header className="h-16 border-b border-rose-900/40 backdrop-blur-xl flex items-center justify-between px-6 shrink-0 shadow-lg shadow-sky-900/10">
        <div className="flex items-center gap-4">
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ease-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-rose-500/60 disabled:pointer-events-none disabled:opacity-50 rounded-md text-rose-200/80 hover:text-white hover:bg-rose-500/20 px-3 py-2 transition-all duration-300"
            onClick={() => router.back()}
          >
            <ArrowLeft size={28} className="pb-1 text-sky-300" />
            Back
          </button>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ease-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-500/60 disabled:pointer-events-none disabled:opacity-50 rounded-md text-sky-200/80 hover:text-white hover:bg-sky-500/10 px-3 py-2 transition-all duration-300"
            title="Toggle Sidebar"
          >
            <PanelLeft size={20} />
            <span className="hidden sm:inline">
              {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
            </span>
          </button>
        </div>
        <div className="flex items-center gap-2 bg-[#050b1f]/80 border border-sky-900/50 p-1 rounded-2xl shadow-inner shadow-rose-900/10">
          <button
            onClick={() => setViewMode("desktop")}
            className={`p-2 rounded-xl transition-all ${
              viewMode === "desktop"
                ? "bg-linear-to-r from-rose-500/30 to-sky-500/30 text-white shadow-lg shadow-rose-900/30"
                : "text-neutral-400 hover:text-white hover:bg-white/5"
            }`}
            title="Desktop View"
          >
            <Monitor size={18} />
          </button>
          <button
            onClick={() => setViewMode("mobile")}
            className={`p-2 rounded-xl transition-all ${
              viewMode === "mobile"
                ? "bg-linear-to-r from-rose-500/30 to-sky-500/30 text-white shadow-lg shadow-rose-900/30"
                : "text-neutral-400 hover:text-white hover:bg-white/5"
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
          <div className="flex-1 overflow-y-auto p-8 flex justify-center">
            <div
              className={`transition-all duration-300 ease-in-out bg-[#050b1a]/90 backdrop-blur-xl shadow-[0_25px_60px_rgba(15,23,42,0.55)] overflow-scroll border border-sky-900/40 ${
                viewMode === "mobile"
                  ? "w-[450px] h-auto rounded-[40px] border-2 border-rose-900/50"
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
