import { FileUser } from "lucide-react";

export default function Banner() {
  return (
    <div className="w-full flex justify-center mt-4 px-4">
      <div className="flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-amber-500/10 border border-amber-500/30 backdrop-blur-sm text-[#EAEAEA]">
        <FileUser size={16} strokeWidth={2} />
        <span className="text-xs font-medium leading-none text-amber-400 md:text-sm pt-0.5">
          Create stunning portfolios from your resume in seconds!
        </span>
      </div>
    </div>
  );
}
