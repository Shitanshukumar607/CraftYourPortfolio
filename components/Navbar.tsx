import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-background border-b border-gray-800">
      <div className="text-xl font-bold text-foreground">ResumeCraft</div>
      <div className="space-x-4">
        <Link
          href="/about"
          className="text-gray-400 hover:text-white transition-colors"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="text-gray-400 hover:text-white transition-colors"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
