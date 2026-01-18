import { Button } from "reactstrap";
import { Github, Linkedin, Play, Sparkles } from "lucide-react";
import useTypingText from "../hooks/useTypingText";
import { Link } from "react-router-dom";

export default function Home() {
  const typedText = useTypingText("Web, Mobile & Cloud Solutions");

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative min-h-[calc(100vh-0px)] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,148,124,0.18),transparent_60%)]" />

        <div className="relative z-10 max-w-5xl px-6 text-center">
          {/* availability badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-slate-200 bg-white/80 backdrop-blur text-sm text-slate-600 shadow-sm mt-12">
            <span className="relative flex items-center justify-center">
              {/* Outer Ring */}
              <span className="absolute h-4 w-4 rounded-full border border-[#00947c] opacity-70"></span>

              {/* Animated Dot */}
              <span className="h-2 w-2 rounded-full bg-[#00947c] animate-breathe"></span>
            </span>
            Available for opportunities
          </div>

          {/* heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900">
            Building Scalable{" "}
            <span className="text-3xl md:text-5xl lg:text-6xl block bg-gradient-to-r from-[#00947c] via-[#00b39a] to-[#007f6a] bg-clip-text text-transparent">
              {typedText}
            </span>
          </h1>

          {/* intro */}
          <p className="mt-6 text-lg md:text-xl text-slate-600">
            Hi, I’m{" "}
            <span className="font-semibold text-slate-900">Rahul Rai</span>
          </p>

          <p className="mt-2 text-slate-500">
            Full-Stack Engineer • Web • Mobile • Cloud
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              tag={Link}
              to="/portfolio"
              className="!rounded-xl !px-8 !py-3 text-base font-semibold 
             bg-gradient-to-r from-[#00947c] to-[#007f6a] 
             border-0 shadow-lg hover:shadow-xl 
             hover:scale-105 transition-all text-white"
            >
              View Projects
            </Button>

            <Button
              tag={Link}
              to="/contact"
              outline
              className="!rounded-xl !px-8 !py-3 text-base font-semibold border-slate-300 
             text-slate-700 
             hover:!text-slate-900 
             hover:bg-slate-100 
             transition-all"
            >
              Contact Me
            </Button>
          </div>

          {/* social icons */}
          <div className="mt-8 flex items-center justify-center gap-4">
            {[
              {
                icon: Github,
                href: "https://github.com/onlyrahulrai",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/onlyrahulrai/",
                label: "LinkedIn",
              },
              {
                icon: Play,
                href: "https://play.google.com/store/apps/developer?id=onlyrahulrai&hl=en_IN",
                label: "Google Play Store",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  title={item.label}
                  className="group p-3 rounded-full border border-slate-200 bg-white/80 
                   hover:bg-slate-100 hover:border-[#00947c]/40 
                   transition hover:-translate-y-0.5 hover:shadow-md transition-all"
                >
                  <Icon className="h-5 w-5 text-slate-700" />
                </a>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col items-center gap-2 text-center">
            <Sparkles className="h-5 w-5 text-[#00947c]/70" />
            <span className="text-sm text-slate-500">
              Let’s build something meaningful
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
