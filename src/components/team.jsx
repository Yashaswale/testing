import React from 'react';
import { Github, Linkedin } from "lucide-react";

export function Team() {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Lead Developer",
      image: "https://source.unsplash.com/200x200/?portrait?1", // Using Unsplash for placeholder images
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Priya Sharma",
      role: "UI/UX Designer",
      image: "https://source.unsplash.com/200x200/?portrait?2",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "John Doe",
      role: "Backend Developer",
      image: "https://source.unsplash.com/200x200/?portrait?3",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Sarah Wilson",
      role: "Project Manager",
      image: "https://source.unsplash.com/200x200/?portrait?4",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    }
  ];

  return (
    <footer className="w-full bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Meet Our Team</h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-gray-900 rounded-lg overflow-hidden border border-gray-800 transition-all duration-300 hover:border-purple-700 hover:shadow-lg hover:shadow-purple-900/20"
            >
              <div className="aspect-square w-full relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                <h3 className="font-bold text-white text-lg">{member.name}</h3>
                <p className="text-purple-300 text-sm">{member.role}</p>

                <div className="flex justify-center gap-3 mt-2 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label={`${member.name}'s GitHub`}
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} KK WAGH Coding Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 