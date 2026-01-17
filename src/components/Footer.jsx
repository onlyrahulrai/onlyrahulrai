const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
        {/* Copyright */}
        <div>
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-slate-700">Rahul Rai</span>. All
          rights reserved.
        </div>

        {/* Credits */}
        <div className="flex items-center gap-1">
          Designed & Managed by
          <a
            href="https://www.linkedin.com/in/onlyrahulrai/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#00947c] hover:underline"
          >
            Rahul Rai
          </a>
          <span aria-hidden>💚</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
