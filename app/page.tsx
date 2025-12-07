import Navbar from "@/components/Navbar";
import FileDropZone from "@/components/FileDropZone";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <main className="grow flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-3xl w-full space-y-8 text-center">
          <div>
            <h1 className="text-4xl font-extrabold text-foreground sm:text-5xl md:text-6xl">
              Transform Your Resume
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Drop your resume in the drag zone and it will generate a portfolio
              in seconds.
            </p>
          </div>

          <FileDropZone />
        </div>
      </main>

      <footer className="bg-background border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          &copy; {new Date().getFullYear()} ResumeCraft. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
