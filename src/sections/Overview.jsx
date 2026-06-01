import { motion } from "framer-motion";
import profile from "../assets/profile.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#020617]
                 text-white overflow-hidden"
    >
      {/* ===== Soft Ambient Glow ===== */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            Designing & <br />
            <span className="text-cyan-400">Developing</span> Digital
            Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-slate-400 max-w-xl"
          >
            I’m{" "}
            <span className="text-slate-200 font-medium">
              Oshadhi Dissanayake
            </span>
            , a 3rd Year IT Undergraduate at SLIIT passionate about designing and developing modern digital solutions. I focus on building clean, scalable, and user-friendly web and mobile applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-10 flex gap-5"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-medium hover:bg-cyan-400 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-slate-700 text-slate-300 hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              Contact
            </a>
          </motion.div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="relative flex justify-center items-center">
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            {/* Glow Ring */}
            <div className="absolute inset-0 rounded-3xl bg-cyan-400/20 blur-2xl scale-110" />

            {/* Image Card */}
            <div className="relative bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
              <img
                src={profile}
                alt="Oshadhi Dissanayake"
                className="
                  w-72 h-80 md:w-80 md:h-96
                  object-cover
                  rounded-2xl
                  border border-white/10
                  shadow-lg
                  contrast-110
                  brightness-105
                "
              />

              {/* Label */}
              <div
                className="absolute -bottom-5 left-1/2 -translate-x-1/2
                           px-5 py-2 rounded-full
                           bg-[#020617] border border-white/10
                           text-sm text-cyan-400 shadow-md"
              >
                IT Undergraduate
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
