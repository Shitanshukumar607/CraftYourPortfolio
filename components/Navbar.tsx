import Link from "next/link";
import { atSignCircle } from "@lucide/lab";
import { Bug, Icon } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-background border-b border-border">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-sm flex items-center justify-center">
          <Icon iconNode={atSignCircle} size={24} className="text-foreground" />
        </div>
        <Link className="text-lg font-bold text-foreground pt-1" href="/">
          Craft <span className="text-primary">Your</span> Portfolio
        </Link>
      </div>

      <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
        <Link
          href="/about"
          className="hover:text-foreground transition-colors duration-200"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="hover:text-foreground transition-colors duration-200"
        >
          Contact
        </Link>

        <div className="h-4 w-px bg-border"></div>

        <button className="flex items-center gap-2 hover:text-foreground transition-colors duration-200 group">
          <Bug className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          <span>Report an issue</span>
        </button>
      </div>
    </nav>
  );
}
