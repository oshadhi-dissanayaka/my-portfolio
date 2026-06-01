import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-36 bg-[#020617]
                 text-slate-100 overflow-hidden"
    >
      {/* Ambient background blobs */}
      <motion.div
        className="absolute -top-64 right-[-220px] w-[520px] h-[520px]"
        animate={{ x: [0, -30, 20, 0], y: [0, 30, -20, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-[-260px] left-[-220px] w-[520px] h-[520px]"
        animate={{ x: [0, 30, -20, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-400 mb-4">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Get In Touch
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-slate-400 text-sm leading-relaxed">
            Interested in collaboration, internships, or opportunities?
            Feel free to reach out — I’m always open to meaningful discussions.
          </p>
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-14 items-start">
          {/* LEFT INFO CARD */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-slate-900/60 backdrop-blur-xl
                       border border-slate-800
                       rounded-3xl p-10"
          >
            <h3 className="text-lg font-medium text-white mb-10">
              Contact Information
            </h3>

            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700">
                  <FaEnvelope className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Email</p>
                  <p className="text-white text-sm font-medium break-all">
                    oshadidissanayaka2002@gmail.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700">
                  <FaPhoneAlt className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Phone</p>
                  <p className="text-white text-sm font-medium">
                    076 022 4314
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700">
                  <FaMapMarkerAlt className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Location</p>
                  <p className="text-white text-sm font-medium">
                    523/A, Kumbaloluwa, Veyangoda
                  </p>
                </div>
              </div>
            </div>

            {/* SOCIAL LINKS */}
            <div className="flex gap-6 mt-12">
              <a
                href="https://github.com/oshadhi-dissanayaka"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl
                           border border-slate-700
                           text-slate-400
                           hover:border-slate-500 transition"
              >
                <FaGithub
                  size={18}
                  className="group-hover:text-white transition"
                />
              </a>

              <a
                href="https://linkedin.com/in/www.linkedin.com/in/oshadhi-d"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl
                           border border-slate-700
                           text-slate-400
                           hover:border-[#0A66C2]/60 transition"
              >
                <FaLinkedin
                  size={18}
                  className="group-hover:text-[#0A66C2] transition"
                />
              </a>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-slate-900/60 backdrop-blur-xl
                       border border-slate-800
                       rounded-3xl p-12"
          >
            <div className="space-y-7">
              <div>
                <label className="text-xs text-slate-400">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full mt-2 px-4 py-3 rounded-xl
                             bg-slate-950 border border-slate-700
                             text-white placeholder-slate-500
                             focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs text-slate-400">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@email.com"
                  className="w-full mt-2 px-4 py-3 rounded-xl
                             bg-slate-950 border border-slate-700
                             text-white placeholder-slate-500
                             focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs text-slate-400">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full mt-2 px-4 py-3 rounded-xl
                             bg-slate-950 border border-slate-700
                             text-white placeholder-slate-500
                             focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl
                           bg-cyan-400 text-slate-950 font-semibold
                           hover:bg-cyan-300 transition"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
