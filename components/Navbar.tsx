import Link from "next/link";
import { atSignCircle } from "@lucide/lab";
import { Bug, Icon } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-background border-b border-border-subtle">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-sm flex items-center justify-center">
          <Icon iconNode={atSignCircle} size={24} color="white" />
        </div>
        <Link
          className="text-lg font-bold text-slate-800 dark:text-neutral-100 pt-1"
          href="/"
        >
          Craft <span className="text-amber-400">Your</span> Portfolio
        </Link>
      </div>

      <div className="flex items-center gap-6 text-sm font-medium text-gray-400">
        <Link
          href="/about"
          className="hover:text-white transition-colors duration-200"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="hover:text-white transition-colors duration-200"
        >
          Contact
        </Link>

        <div className="h-4 w-px bg-[#2A2A2A]"></div>

        <button className="flex items-center gap-2 hover:text-white transition-colors duration-200 group">
          <Bug className="w-5 h-5 text-yellow-500/80 group-hover:text-yellow-500 transition-colors" />
          <span>Report an issue</span>
        </button>
      </div>
    </nav>
  );
}
