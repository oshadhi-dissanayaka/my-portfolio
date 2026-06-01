import { motion } from "framer-motion";
import MERNImage from "../assets/MERN.png";
import JAVAImage from "../assets/JAVA.png";
import FIGMAImage from "../assets/FIGMA.png";
import FITBUDDYImage from "../assets/FITBUDDY.png";
import WellnessPearlImage from "../assets/WellnessPearl.png";
import StudentSuccessImage from "../assets/StudentSuccess.png";
import CampusImage from "../assets/Campus.png";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaFigma,
} from "react-icons/fa";

const projects = [
  {
    title: "Student Success Platform",
    description:
      "An AI-powered web-based platform designed to improve university students' productivity, collaboration, career preparation, and academic success through smart team matching, ATS resume analysis, collaboration tools, and AI academic support.",
    tech: [
      "React",
      "Spring Boot",
      "Java 17",
      "Spring AI",
      "Neon",
      "OpenAI GPT-4",
    ],
    note: "AI-Powered Academic & Career Success Platform",
    type: "web",
    image: StudentSuccessImage,
    frontend: "https://github.com/Sachintha-p/Student_succes_platform-frontend-.git",
    backend: "https://github.com/Sachintha-p/Student-Success-Platform-Core.git",
    live: "https://student-succes-platform-frontend.vercel.app/",
  },
  
  {
    title: "Central Pet Care Management System",
    description:
      "A full-stack MERN web application developed to manage pet adoption, service bookings, and e-commerce functionality with a responsive user interface.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    note: "Deployed on Vercel & Render",
    type: "web",
    image: MERNImage,
    frontend: "https://github.com/Central-Pet-Care/Central-Pet-Care-Frontend",
    backend: "https://github.com/Central-Pet-Care/Central-Pet-Care-Backend",
    live: "https://central-pet-care-frontend.vercel.app/",
  },
  {
  title: "Smart Campus Operations Hub",
  description:
    "A full-stack university operations management platform developed using React and Spring Boot to manage campus resources, bookings, maintenance tickets, notifications, and secure role-based authentication.",
  tech: [
    "React",
    "Spring Boot",
    "Java",
    "Neon",
    "REST API",
    "OAuth 2.0",
    "Redux",
  ],
  note: "Full-Stack Campus Management System",
  type: "web",
  image: CampusImage,
  github: "https://github.com/Sachintha-p/it3030-paf-2026-smart-campus-group124.git",
  live: "#",
},
  {
    title: "Online Vehicle Service & Fuel Station Management System",
    description:
      "A Java-based web application built using MVC architecture to manage vehicle services, fuel logs, bookings, staff, and user operations.",
    tech: ["Java", "Servlets", "JSP", "MySQL", "MVC"],
    note: "Academic Project",
    type: "web",
    image: JAVAImage,
    github:
      "https://github.com/oshadhi-dissanayaka/Online-Vehicle-Service-and-Fuel-Station-Management-System-main",
    
  },

  

  {
    title: "FitBuddy – Fitness Mobile App UI/UX Design",
    description:
      "A mobile application UI designed in Figma focusing on fitness tracking, workout planning, and user motivation with clean layouts and intuitive navigation.",
    tech: ["Figma", "UI Design"],
    note: "Figma Mobile Application UI / UX Project",
    type: "mobile-ui",
    image: FIGMAImage,
    figma:
      "https://www.figma.com/design/1DUpTxiOFRFvuL8ADcsAmR/Untitled?node-id=0-1&t=p9J4CxSlnA4gM6sE-1",
    live: "https://www.figma.com/proto/1DUpTxiOFRFvuL8ADcsAmR/Untitled?node-id=0-1&t=p9J4CxSlnA4gM6sE-1",
  },
  {
    title: "FitBuddy – Android Fitness Mobile Application",
    description:
      "A native Android fitness application developed using Android Studio to manage workouts, track activity, and monitor fitness progress.",
    tech: ["Android Studio", "XML Layouts"],
    note: "Native Android Mobile Application",
    type: "android",
    image: FITBUDDYImage,
    github: "https://github.com/oshadhi-dissanayaka/Fitness-Tracker",
    
  },
  {
    title: "Habit Tracker – WellnessPearl",
    description:
      "A native Android mobile application developed using Kotlin to track daily habits using SharedPreferences with reminders and progress tracking.",
    tech: ["Android Studio", "Kotlin", "SharedPreferences", "UI/Markup: XML"],
    note: "Android Mobile Application (Kotlin)",
    type: "android",
    image: WellnessPearlImage,
    github: "https://github.com/oshadhi-dissanayaka/WellnessTracker",
    
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-36 bg-[#020617] text-slate-100 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-400 mb-4">
            Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Academic, Mobile & UI/UX Projects
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-slate-400 leading-relaxed">
            A curated collection of academic systems, UI/UX designs, and native
            Android applications showcasing my software engineering skills.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.06 }}
              whileHover={{ y: -6 }}
              className="rounded-3xl p-8 bg-slate-900/60 backdrop-blur-xl
                         border border-slate-800
                         hover:shadow-[0_25px_60px_-25px_rgba(56,189,248,0.25)]
                         transition"
            >
              {/* IMAGE */}
              <div className="relative h-44 rounded-xl mb-6 overflow-hidden border border-slate-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/25" />
              </div>

              {/* CONTENT */}
              <h3 className="text-lg font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                {project.description}
              </p>

              <p className="mt-3 text-xs text-cyan-400">
                {project.note}
              </p>

              {/* TECH */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full
                               border border-slate-700
                               text-slate-300 bg-slate-800/60"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* LINKS */}
              <div className="mt-6 flex flex-wrap gap-5 text-sm">

                {/* LIVE DEMO (ALL PROJECTS) */}
                {project.live && project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-cyan-400 hover:underline"
                  >
                    <FaExternalLinkAlt size={12} /> Live Demo
                  </a>
                )}

                {/* FIGMA */}
                {project.type === "mobile-ui" && (
                  <a
                    href={project.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-pink-400 hover:underline"
                  >
                    <FaFigma size={14} /> Figma
                  </a>
                )}

                {/* FRONTEND */}
                {project.frontend && (
                  <a
                    href={project.frontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:underline"
                  >
                    <FaGithub size={14} /> Frontend
                  </a>
                )}

                {/* BACKEND */}
                {project.backend && (
                  <a
                    href={project.backend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-green-400 hover:underline"
                  >
                    <FaGithub size={14} /> Backend
                  </a>
                )}

                {/* GENERAL GITHUB */}
                {project.github && project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-400 hover:text-white"
                  >
                    <FaGithub size={14} /> GitHub
                  </a>
                )}

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}