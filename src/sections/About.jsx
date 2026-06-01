import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaDownload,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiSpringboot,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen px-6 lg:px-24 py-28
                 bg-[#020617]
                 text-white overflow-hidden"
    >
      {/* ===== CONTENT ===== */}
      <div className="relative z-10 grid lg:grid-cols-2 gap-24 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-cyan-400 tracking-widest text-sm uppercase">
            About Me
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-extrabold leading-tight">
  Hello, I’m{" "}
  <span className="text-cyan-40">
    Oshadhi Dissanayake
  </span>
</h2>

<p className="mt-6 text-slate-300 leading-relaxed max-w-xl">
  I am currently pursuing a{" "}
  <span className="text-cyan-400 font-medium">
    BSc (Hons) in Information & Communication Technology
  </span>{" "}
  specializing in{" "}
  <span className="text-white font-medium">
    Information Technology at SLIIT
  </span>
  , where I am building a strong foundation in modern software
  development and digital technologies.
</p>

<p className="mt-4 text-slate-300 leading-relaxed max-w-xl">
  My core interests lie in{" "}
  <span className="text-white font-medium">
    Full Stack Web Development
  </span>
  ,{" "}
  <span className="text-white font-medium">
    Frontend Development
  </span>
  , and{" "}
  <span className="text-white font-medium">
    UI/UX Design
  </span>
  . I enjoy creating responsive and user-friendly applications
  while focusing on delivering clean, scalable, and visually
  engaging digital experiences.
</p>

<p className="mt-4 text-slate-400 leading-relaxed max-w-xl">
  By combining technical development skills with a
  design-oriented mindset, I aim to build{" "}
  <span className="text-white font-medium">
    efficient, user-centric digital solutions
  </span>{" "}
  that provide both functionality and a smooth user experience.
</p>

          {/* DOWNLOAD CV */}
          <div className="mt-10">
            <a
              href="/Oshadhi Dissanayaka.pdf"
              download
              className="inline-flex items-center gap-3 px-8 py-4
                         rounded-full font-medium
                         bg-cyan-500 text-black
                         hover:bg-cyan-400
                         transition-all duration-300
                         shadow-lg shadow-cyan-500/30"
            >
              <FaDownload />
              Download CV
            </a>
          </div>
        </motion.div>

        {/* RIGHT – TECH STACK */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative rounded-3xl p-10
                     bg-white/5 backdrop-blur-2xl
                     border border-white/10"
        >
          <h3 className="text-xl font-semibold mb-3">
            Tech Stack
          </h3>

          <p className="text-sm text-slate-400 mb-10 max-w-md">
            Technologies and tools I use to build modern,
            scalable applications.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            <TechCard icon={<FaReact />} name="React" color="cyan" />
            <TechCard icon={<SiJavascript />} name="JavaScript" color="yellow" />
            <TechCard icon={<SiTailwindcss />} name="Tailwind CSS" color="cyan" />
            <TechCard icon={<FaNodeJs />} name="Node.js" color="green" />
            <TechCard icon={<SiSpringboot />} name="Spring Boot" color="emerald" />
            <TechCard icon={<SiMongodb />} name="MongoDB" color="lime" />
            <TechCard icon={<FaFigma />} name="Figma" color="pink" />
            <TechCard icon={<FaGitAlt />} name="Git" color="orange" />
            <TechCard icon={<SiPostgresql />} name="PostgreSQL" color="blue" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

/* ================= TECH CARD ================= */

function TechCard({ icon, name, color }) {
  const colors = {
    cyan: "text-cyan-400 shadow-cyan-500/20",
    yellow: "text-yellow-400 shadow-yellow-500/20",
    green: "text-green-400 shadow-green-500/20",
    emerald: "text-emerald-400 shadow-emerald-500/20",
    lime: "text-lime-400 shadow-lime-500/20",
    pink: "text-pink-400 shadow-pink-500/20",
    orange: "text-orange-400 shadow-orange-500/20",
    blue: "text-blue-400 shadow-blue-500/20",
  };

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`flex flex-col items-center justify-center gap-3
                  p-6 rounded-2xl bg-white/5
                  border border-white/10
                  shadow-lg ${colors[color]}`}
    >
      <div className="text-4xl">
        {icon}
      </div>
      <p className="text-sm tracking-wide text-slate-200">
        {name}
      </p>
    </motion.div>
  );
}
