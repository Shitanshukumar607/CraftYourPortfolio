import Banner from "@/components/Banner";
import FileDropZone from "@/components/FileDropZone";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />

      <main className="grow flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full space-y-12 text-center">
          <Banner />
          <HeroSection />
          <FileDropZone />
        </div>
      </main>
    </div>
  );
}
