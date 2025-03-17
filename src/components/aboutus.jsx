"use client"

import { useState, useEffect } from "react"
import React from 'react';

// Custom Button component to replace @/components/ui/button
const Button = ({ children, size = "md", variant, className = "", ...props }) => {
  const sizeClasses = size === "lg" ? "py-3 px-6 text-lg" : size === "sm" ? "py-1 px-3 text-sm" : "py-2 px-4";
  const variantClasses = variant === "outline" 
    ? "border border-current bg-transparent" 
    : "bg-purple-600 hover:bg-purple-700";
  
  return (
    <button 
      className={`rounded-md font-medium transition-colors ${sizeClasses} ${variantClasses} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

// Custom Badge component
const Badge = ({ children, className = "", ...props }) => {
  return (
    <span 
      className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-semibold ${className}`} 
      {...props}
    >
      {children}
    </span>
  );
};

// Custom icons components
const IconWrapper = ({ children, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

const Code2 = (props) => (
  <IconWrapper {...props}>
    <path d="m18 16 4-4-4-4" />
    <path d="m6 8-4 4 4 4" />
    <path d="m14.5 4-5 16" />
  </IconWrapper>
);

const Trophy = (props) => (
  <IconWrapper {...props}>
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 22V8a4 4 0 0 1 4-4h.5" />
    <path d="M8 22v-7" />
    <path d="M16 22v-7" />
    <path d="M8 15h8" />
  </IconWrapper>
);

const Users = (props) => (
  <IconWrapper {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </IconWrapper>
);

const Zap = (props) => (
  <IconWrapper {...props}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </IconWrapper>
);

const ChevronRight = (props) => (
  <IconWrapper {...props}>
    <polyline points="9 18 15 12 9 6" />
  </IconWrapper>
);

const Terminal = (props) => (
  <IconWrapper {...props}>
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </IconWrapper>
);

// TypewriterCode component
function TypewriterCode() {
  const codeLines = [
    "// Challenge: Find the optimal path in a grid",
    "function solveOptimalPath(grid) {",
    "  const rows = grid.length;",
    "  const cols = grid[0].length;",
    "  const dp = Array(rows).fill().map(() => Array(cols).fill(0));",
    "",
    "  // Initialize the starting point",
    "  dp[0][0] = grid[0][0];",
    "",
    "  // Fill the first row",
    "  for (let j = 1; j < cols; j++) {",
    "    dp[0][j] = dp[0][j-1] + grid[0][j];",
    "  }",
    "",
    "  // Your solution here...",
    "  // Time remaining: 2d 14h 22m",
  ];

  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentLine >= codeLines.length) return;

    const timer = setTimeout(() => {
      if (currentChar < codeLines[currentLine].length) {
        setDisplayedLines((prev) => {
          const newLines = [...prev];
          if (newLines.length <= currentLine) {
            newLines.push("");
          }
          newLines[currentLine] = codeLines[currentLine].substring(0, currentChar + 1);
          return newLines;
        });
        setCurrentChar((prev) => prev + 1);
      } else {
        setCurrentLine((prev) => prev + 1);
        setCurrentChar(0);
      }
    }, 30);

    return () => clearTimeout(timer);
  }, [currentLine, currentChar]);

  return (
    <div className="min-h-[200px]">
      {displayedLines.map((line, index) => (
        <div
          key={index}
          className={
            line.includes("//")
              ? "text-gray-400"
              : line.includes("function")
                ? "text-purple-400"
                : line.includes("Time remaining")
                  ? "text-green-400"
                  : "text-gray-300"
          }
        >
          {line || " "}
        </div>
      ))}
      <div className="h-4 w-2 bg-purple-400 inline-block animate-pulse ml-1"></div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <div className="relative w-full overflow-hidden bg-black text-white">
      {/* Background code pattern */}
      <div className="absolute inset-0 opacity-5">
        <pre className="text-xs sm:text-sm text-green-500 font-mono overflow-hidden h-full">
          {Array(50)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="whitespace-nowrap">
                {`function solve(n) { let dp = Array(n+1).fill(0); dp[0] = 1; for(let i=1; i<=n; i++) { for(let j=i; j<=n; j++) { dp[j] += dp[j-i]; } } return dp[n]; }`}
              </div>
            ))}
        </pre>
      </div>

      {/* Main content */}
      <div className="relative container mx-auto px-4 py-16 md:py-24 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge className="px-3 py-1 bg-purple-900 text-purple-100 hover:bg-purple-800 border-none">
              Beta Access Now Open
            </Badge>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              <span className="block">Code. Compete.</span>
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-amber-500 text-transparent bg-clip-text">
                Conquer.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-xl">
              Join the ultimate coding battleground where you can sharpen your skills, compete with peers, and climb the
              weekly leaderboard to prove your programming prowess.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white border-none">
                Start Coding <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-purple-700 text-purple-300 hover:bg-purple-900/30">
                View Challenges
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-purple-400" />
                <span className="text-gray-300">5K+ Coders</span>
              </div>
              <div className="flex items-center gap-2">
                <Code2 className="h-5 w-5 text-purple-400" />
                <span className="text-gray-300">200+ Challenges</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-purple-400" />
                <span className="text-gray-300">Weekly Contests</span>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Terminal-like editor */}
            <div className="bg-gray-900 rounded-lg border border-gray-700 shadow-2xl overflow-hidden">
              <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <div className="ml-2 text-sm text-gray-400 font-mono">challenge.js</div>
              </div>

              <div className="p-4 font-mono text-sm">
                <div className="flex items-center gap-2 text-gray-400 mb-4">
                  <Terminal className="h-4 w-4" />
                  <span>Weekly Challenge: Algorithmic Showdown</span>
                </div>
                
                <div className="space-y-2">
                  <TypewriterCode />
                </div>
                
                <div className="mt-6 border-t border-gray-700 pt-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Trophy className="h-4 w-4 text-amber-400" />
                    <span className="text-gray-300">KK WAGH College Exclusive</span>
                  </div>
                  <p className="text-xs text-gray-400 mb-3">
                    This leaderboard is exclusively for KK WAGH College students. Verify your college email to participate.
                  </p>
                  <div className="bg-purple-900/30 rounded p-3 border border-purple-800/50">
                    <div className="text-amber-300 mb-1">{'function checkEligibility(student) {'}</div>
                    <div className="pl-4 text-gray-300">{'  if (student.email.endsWith("@kkwagh.edu.in")) {'}</div>
                    <div className="pl-8 text-green-400">{'    return "Eligible for leaderboard";'}</div>
                    <div className="pl-4 text-gray-300">{'  } else {'}</div>
                    <div className="pl-8 text-red-400">{'    return "Contact college admin";'}</div>
                    <div className="pl-4 text-gray-300">{'  }'}</div>
                    <div className="text-amber-300">{'}'}</div>
                  </div>
                  <div className="text-center mt-4">
                    <Button variant="outline" size="sm" className="border-purple-700 text-purple-300 hover:bg-purple-900/30 text-xs">
                      Start Challenge Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 h-24 w-24 bg-purple-600 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute -bottom-8 -left-8 h-32 w-32 bg-amber-500 rounded-full blur-3xl opacity-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
}