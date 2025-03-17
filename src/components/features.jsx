import React, { useState } from "react";
import {
  Trophy,
  Code,
  BrainCircuit,
  Building,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Sparkles,
  Lightbulb,
} from "lucide-react";
import { motion } from "framer-motion";

// Custom Button component to replace @/components/ui/button
const Button = ({ children, className = "", ...props }) => {
  return (
    <button 
      className={`flex items-center justify-center px-4 py-2 rounded-md font-medium transition-colors ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export function Features() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 0,
      title: "Weekly Coding Contests",
      icon: <Trophy className="h-8 w-8 text-amber-400" />,
      description:
        "Compete in weekly coding challenges featuring real questions from placement rounds of companies visiting KK WAGH.",
      benefits: [
        "Practice with actual interview questions",
        "Track your progress on the leaderboard",
        "Prepare for placements with real-world problems",
        "Compete with peers and build your reputation",
      ],
      cta: "Join This Week's Contest",
      visual: (
        <div className="relative h-full w-full bg-gray-900 rounded-lg p-4 border border-purple-900/50 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-500/10 rounded-full -ml-12 -mb-12"></div>

          <div className="relative z-10 space-y-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-amber-400" />
                <h4 className="font-semibold text-white">Weekly Leaderboard</h4>
              </div>
              <span className="text-xs text-purple-300 bg-purple-900/30 px-2 py-1 rounded">Week 12</span>
            </div>

            {[
              { name: "Rahul M.", points: 850, solved: "5/5", company: "Amazon" },
              { name: "Priya S.", points: 780, solved: "5/5", company: "Microsoft" },
              { name: "Arjun K.", points: 720, solved: "4/5", company: "Google" },
              { name: "Neha P.", points: 650, solved: "4/5", company: "Adobe" },
            ].map((student, idx) => (
              <div
                key={idx}
                className={`flex items-center justify-between p-3 rounded-md ${
                  idx === 0
                    ? "bg-gradient-to-r from-amber-900/30 to-amber-700/10 border border-amber-700/30"
                    : "bg-gray-800/50 border border-gray-700/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      idx === 0
                        ? "bg-amber-500 text-black"
                        : idx === 1
                          ? "bg-gray-300 text-black"
                          : idx === 2
                            ? "bg-amber-700 text-white"
                            : "bg-gray-600 text-white"
                    }`}
                  >
                    {idx + 1}
                  </div>
                  <div>
                    <p className="font-medium text-white">{student.name}</p>
                    <p className="text-xs text-gray-400">Questions: {student.solved}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-purple-300">{student.points} pts</p>
                  <p className="text-xs text-gray-400">{student.company} set</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    // Add the remaining features here (Company-Specific DSA Paths and Campus-Specific Aptitude Tests)
    // ... Copy the rest of the features array from the original code
  ];

  const currentFeature = features[activeFeature];

  return (
    <section className="w-full bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Placement Preparation, <span className="text-purple-400">Simplified</span>
          </h2>
          <p className="text-gray-400 md:text-lg">
            Our platform is specifically designed for KK WAGH students, focusing on exactly what you need to ace your
            campus placements.
          </p>
        </div>

        {/* Feature tabs */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => setActiveFeature(feature.id)}
              className={`flex flex-col items-center text-center p-6 rounded-lg transition-all duration-300 ${
                activeFeature === feature.id
                  ? "bg-gray-800 border-2 border-purple-600"
                  : "bg-gray-900/50 border border-gray-800 hover:bg-gray-800/70"
              }`}
            >
              <div
                className={`p-3 rounded-full mb-4 ${activeFeature === feature.id ? "bg-purple-900/30" : "bg-gray-800"}`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description.split(" ").slice(0, 10).join(" ")}...</p>
            </button>
          ))}
        </div>

        {/* Feature details */}
        <motion.div
          key={activeFeature}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center"
        >
          <div className="order-2 md:order-1">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3">
              {currentFeature.icon}
              {currentFeature.title}
            </h3>
            <p className="text-gray-300 mb-6">{currentFeature.description}</p>

            <div className="space-y-3 mb-8">
              {currentFeature.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>

            <Button className="bg-purple-600 hover:bg-purple-700 text-white border-none">
              {currentFeature.cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="order-1 md:order-2 h-[400px] md:h-[450px]">{currentFeature.visual}</div>
        </motion.div>
      </div>
    </section>
  );
} 