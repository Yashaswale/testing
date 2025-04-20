"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";

export function BackgroundBeamsDemo() {
  return (
    <div id="waitlist" className="h-[40rem] w-full  bg-black relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-800 text-center font-sans font-bold">
          Join the waitlist
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Welcome to KK WAGH Coding Platform, your gateway to excellence in programming.
          We offer a comprehensive learning environment with hands-on coding challenges,
          real-world projects, and personalized mentorship. Whether you're diving into
          competitive programming, working on college projects, or preparing for
          technical interviews, we're here to support your coding journey.
        </p>
        
        <div className="flex justify-center items-center mt-6">
          <button 
            className="relative z-10 px-6 py-2.5 rounded-lg 
            bg-gradient-to-b from-neutral-200 to-neutral-600 
            text-[#0a0a0a] font-medium text-base
            transition-all duration-500 ease-out transform 
            hover:scale-105 hover:shadow-[0_0_20px_rgba(229,229,229,0.2)]
            hover:from-neutral-100 hover:to-neutral-500
            active:scale-95
            focus:outline-none focus:ring-2 focus:ring-neutral-400"
          >
            Register Now
          </button>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
