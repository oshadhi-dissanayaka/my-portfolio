import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaJava,
  FaDatabase,
  FaCode,
  FaProjectDiagram,
  FaAndroid,
  
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiSpringboot,
  SiMongodb,
  SiPostman,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  
} from "react-icons/si";

/* ===================== DATA ===================== */

const skillGroups = [
  {
    title: "Frontend Development",
    subtitle: "Interfaces & Interactions",
    skills: [
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: <SiCss3 /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
    ],
  },
  {
    title: "Backend Development",
    subtitle: "APIs & Data",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Java", icon: <FaJava /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
    ],
  },
  {
    title: "Tools & Workflow",
    subtitle: "Build & Collaboration",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Figma", icon: <FaFigma /> },
      { name: "VS Code", icon: <FaCode /> },           
      { name: "Android Studio", icon: <FaAndroid /> },
      
    ],
    
  },
  {
    title: "Engineering Practices",
    subtitle: "Architecture & Quality",
    skills: [
      { name: "Clean Code", icon: <FaCode /> },
      { name: "MVC Architecture", icon: <FaProjectDiagram /> },
      { name: "RESTful Design", icon: <FaDatabase /> },
      { name: "Version Control", icon: <FaGitAlt /> },
      { name: "Problem Solving", icon: <FaCode /> },
    ],
  },
];

/* ===================== ANIMATIONS ===================== */

const cardReveal = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const skillItem = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

/* ===================== COMPONENT ===================== */

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-36
                 bg-[#020617]
                 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-28"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-400 mb-5">
            Skills & Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Technology Stack
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-slate-400 leading-relaxed">
            Practical technologies and engineering practices used to build
            reliable, scalable and maintainable applications.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-14">
          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              variants={cardReveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative rounded-3xl p-10
                         bg-white/5 backdrop-blur-xl
                         border border-white/10
                         transition-all duration-300
                         hover:-translate-y-2
                         hover:shadow-[0_25px_60px_-25px_rgba(56,189,248,0.25)]"
            >
              <h3 className="text-2xl font-semibold text-white">
                {group.title}
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                {group.subtitle}
              </p>

              <motion.div
                variants={{ show: { transition: { staggerChildren: 0.08 } } }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-8 flex flex-wrap gap-4"
              >
                {group.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    variants={skillItem}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3
                               px-4 py-2 rounded-xl
                               border border-white/10
                               bg-white/5"
                  >
                    <span className="text-cyan-400 text-lg">
                      {skill.icon}
                    </span>
                    <span className="text-sm font-medium text-slate-200">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
