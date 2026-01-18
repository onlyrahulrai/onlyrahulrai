import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { pathname: "/", name: "Home" },
  { pathname: "/about", name: "About" },
  { pathname: "/resume", name: "Resume" },
  { pathname: "/portfolio", name: "Portfolio" },
  { pathname: "/contact", name: "Contact" },
];

const Header = () => {
  const location = useLocation();
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const onOpenMenu = () => {
    setIsOpen(true);
  };

  const onCloseMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    onCloseMenu();
  }, [location]);

  /* -----------------------------
     Crisp Chat Theme Color
  ----------------------------- */
  useEffect(() => {
    const applyTheme = () => {
      window.$crisp.push(["config", "color:theme", "rgb(3 145 122)"]);
    };

    if (window.$crisp) {
      applyTheme();
      window.$crisp.push(["on", "session:loaded", applyTheme]);
    }
  }, []);

  return (
    <header className="fixed top-4 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div
          className="flex items-center justify-between
                 rounded-full bg-white/90 backdrop-blur-md
                 shadow-md px-6 py-2"
        >
          {/* Logo */}
          <Link
            to="/"
            className="text-base font-semibold tracking-tight text-[#00947c]"
            style={{ fontFamily: "cursive" }}
          >
            Rahul Rai
          </Link>

          {/* Navigation (INLINE – no box) */}
          <nav className="hidden lg:flex items-center gap-6" ref={navRef}>
            {links.map((link, key) => {
              const isActive = link.pathname === location.pathname;
              return (
                <Link
                  key={key}
                  to={link.pathname}
                  className={`text-sm font-medium transition
                ${
                  isActive
                    ? "text-[#00947c]"
                    : "text-slate-700 hover:text-slate-900"
                }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Primary CTA */}
            <a
              href="/assets/documents/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center
             rounded-full px-4 py-1.5 text-sm font-semibold
             text-white bg-[#00947c]
             hover:bg-[#007f6a] transition"
            >
              Resume
            </a>

            {/* Mobile toggle */}
            <button
              className="lg:hidden text-xl text-slate-700"
              onClick={isOpen ? onCloseMenu : onOpenMenu}
            >
              <i className={`bi ${isOpen ? "bi-x" : "bi-list"}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu (separate, clean) */}
        {isOpen && (
          <div className="lg:hidden mt-3 rounded-2xl bg-white shadow-md px-6 py-4">
            <ul className="flex flex-col gap-4">
              {links.map((link, key) => {
                const isActive = (link.pathname === location.pathname);

                return (
                  <li key={key}>
                    <Link
                      to={link.pathname}
                      className={`block text-sm font-medium ${
                        isActive
                          ? "text-[#00947c]"
                          : "text-slate-700 hover:text-slate-900"
                      }`}
                      onClick={onCloseMenu}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
