import Banner from "@/components/Banner";
import FileDropZone from "@/components/FileDropZone";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />
      <Banner />

      <main className="grow flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-[1100px] w-full space-y-12 text-center">
          <div>
            <h1 className="text-xl md:text-3xl lg:text-4xl font-medium mb-3 md:mb-4 tracking-tight leading-[1.2] md:leading-[1.2] lg:leading-[1.2] max-w-3xl mx-auto px-2">
              Turn Your Resume into a Portfolio in seconds
            </h1>
            <h2 className="text-xs md:text-base lg:text-lg font-normal mb-8 md:mb-10 text-muted-foreground leading-[1.6] md:leading-[1.6] lg:leading-[1.6] max-w-2xl mx-auto px-2">
              Showcase your resume with a beautifully generated portfolio,
              because your journey deserves more than a resume.
            </h2>
          </div>

          <FileDropZone />
        </div>
      </main>
    </div>
  );
}
