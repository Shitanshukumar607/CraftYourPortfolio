import { FileUser } from "lucide-react";

export default function Banner() {
  return (
    <div className="w-full flex justify-center mt-4 px-4">
      <div className="flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm text-foreground">
        <FileUser size={16} strokeWidth={2} className="text-primary" />
        <span className="text-xs font-medium leading-none text-primary md:text-sm">
          Create stunning portfolios from your resume in seconds!
        </span>
      </div>
    </div>
  );
}
