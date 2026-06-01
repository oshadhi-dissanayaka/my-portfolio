import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#020617] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* GRID */}
        <div className="grid lg:grid-cols-3 gap-16">

          {/* LEFT */}
          <div>
            <h2 className="text-3xl font-semibold text-white">
              Oshadhi<span className="text-cyan-400">.</span>
            </h2>

            <p className="mt-6 text-sm text-gray-400 leading-relaxed max-w-md">
              IT Undergraduate and aspiring Software Engineer focused on
              building scalable, clean, and user-centric applications using
              modern technologies.
            </p>

            <div className="mt-6 w-14 h-[2px] bg-cyan-400 rounded-full" />
          </div>

          {/* CENTER */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.35em] text-gray-300 mb-8">
              Quick Links
            </h3>

            <ul className="space-y-4 text-sm">
              {[
                "Overview",
                "Background",
                "Technical Skills",
                "Projects",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                    className="text-gray-400 hover:text-cyan-400 transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.35em] text-gray-300 mb-8">
              Connect
            </h3>

            <div className="flex gap-4 mb-6">

              {/* GitHub */}
              <a
                href="https://github.com/oshadhi-dissanayaka"
                target="_blank"
                className="social-icon github"
              >
                <FaGithub size={18} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/www.linkedin.com/in/oshadhi-d
"
                target="_blank"
                className="social-icon linkedin"
              >
                <FaLinkedin size={18} />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/oshadhi_dissanayake_"
                target="_blank"
                className="social-icon instagram"
              >
                <FaInstagram size={18} />
              </a>

              {/* Email */}
              <a
                href="mailto:oshadidissanayaka2002@gmail.com"
                className="social-icon mail"
              >
                <FaEnvelope size={18} />
              </a>
            </div>

            <p className="text-sm text-gray-400 max-w-md leading-relaxed">
              Open to internships, collaborations, and global software
              engineering opportunities.
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-14 h-px bg-white/10" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Oshadhi Dissanayake
          </p>

          <p className="text-xs text-gray-500">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>

      {/* ICON STYLES */}
      <style jsx>{`
        .social-icon {
          width: 46px;
          height: 46px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #cbd5f5;
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          transform: translateY(-6px) scale(1.05);
        }

        /* REAL BRAND COLORS */
        .github:hover {
          color: #ffffff;
          background: #0f172a;
        }

        .linkedin:hover {
          color: #ffffff;
          background: #0a66c2;
        }

        .mail:hover {
          color: #ffffff;
          background: #22d3ee;
        }

        .instagram:hover {
          color: #ffffff;
          background: linear-gradient(
            45deg,
            #feda75,
            #fa7e1e,
            #d62976,
            #962fbf,
            #4f5bd5
          );
        }
      `}</style>
    </footer>
  );
}
