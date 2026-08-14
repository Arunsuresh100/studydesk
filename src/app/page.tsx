"use client";

import Link from "next/link";
import { useUser } from "@/context/UserContext";

export default function LandingPage() {
  const { user, setShowOnboardingModal } = useUser();

  const handleActionClick = () => {
    setShowOnboardingModal(true);
  };

  return (
    <div className="flex flex-col bg-white text-black selection:bg-black selection:text-white font-sans overflow-x-hidden h-[calc(100vh-4rem)]">
      <main className="flex-1 flex flex-col items-center justify-center w-full">
        {/* Hero Section */}
        <section className="w-full px-4 sm:px-6 md:px-8 py-10 md:py-16">
          <div className="max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div className="flex flex-col items-start text-left max-w-2xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-5 leading-[1.1] text-black">
                The minimalist<br />
                <span className="text-gray-500">study companion.</span>
              </h1>
              <p className="text-base md:text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
                A focused environment for college students to manage notes, past papers, syllabi, and video playlists without the visual noise.
              </p>
              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                {user ? (
                  <>
                    <Link href={`/course/${encodeURIComponent(user.course)}`}>
                      <button className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-4 text-base sm:text-lg font-medium transition-colors cursor-pointer shadow-sm">
                        View My Subjects
                      </button>
                    </Link>
                    <button 
                      onClick={handleActionClick}
                      className="bg-white text-black hover:bg-gray-100 border border-gray-200 rounded-full px-8 py-4 text-base sm:text-lg font-medium transition-colors cursor-pointer shadow-sm"
                    >
                      Change Course
                    </button>
                  </>
                ) : (
                  <button 
                    onClick={handleActionClick}
                    className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-4 text-base sm:text-lg font-medium transition-colors cursor-pointer shadow-sm"
                  >
                    Select Your Course
                  </button>
                )}
              </div>
            </div>
            {/* Right Image */}
            <div className="w-full flex items-center justify-center lg:justify-end">
              <img
                src="https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-learn-clipart-character-studying-in-the-library-by-a-boy-with-vector-png-image_6803624.png"
                alt="Student studying in library"
                className="w-full max-w-lg object-contain"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="py-4 text-center text-sm text-gray-500 w-full bg-white">
        <p>StudyDesk &copy; {new Date().getFullYear()}. Minimalist study companion.</p>
      </footer>
    </div>
  );
}
