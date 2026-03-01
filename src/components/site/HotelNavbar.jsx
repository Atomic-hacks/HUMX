"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";
import { BiMenu } from "react-icons/bi";
import gsap from "gsap";

import { cn } from "../../../lib/utils";

const links = [
  { name: "Home", link: "/" },
  { name: "Our Hotel", link: "/our-hotel" },
  { name: "Rooms", link: "/rooms" },
  { name: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [width, setWidth] = useState("100%");
  const [navOpen, setNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navRootRef = useRef(null);
  const overlayRef = useRef(null);
  const drawerRef = useRef(null);
  const drawerCloseBtnRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newWidth = 100 - scrollPosition / 10;
      setWidth(`${Math.max(newWidth, 84)}%`);
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = navOpen ? "hidden" : "";
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setNavOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [navOpen]);

  useLayoutEffect(() => {
    if (!navRootRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        navRootRef.current,
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
        },
      );
    }, navRootRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!overlayRef.current || !drawerRef.current) return;

    const overlayEl = overlayRef.current;
    const drawerEl = drawerRef.current;

    if (navOpen) {
      // ensure visible before animating
      gsap.set([overlayEl, drawerEl], { clearProps: "display" });

      gsap.fromTo(
        overlayEl,
        { opacity: 0 },
        { opacity: 1, duration: 0.2, ease: "power1.out" },
      );

      gsap.fromTo(
        drawerEl,
        { xPercent: 100, opacity: 0 },
        { xPercent: 0, opacity: 1, duration: 0.45, ease: "power3.out" },
      );

      // focus close button for accessibility
      drawerCloseBtnRef.current?.focus?.();
    } else {
      gsap.to(overlayEl, { opacity: 0, duration: 0.2, ease: "power1.in" });
      gsap.to(drawerEl, {
        xPercent: 100,
        opacity: 0,
        duration: 0.35,
        ease: "power3.in",
      });
    }
  }, [navOpen]);

  return (
    <div ref={navRootRef} className="max-w-7xl mx-auto sticky top-0 z-99 py-5">
      <div
        style={{ width }}
        className={cn(
          "mx-auto max-w-3xl flex h-fit items-center justify-between rounded-full border px-5 py-3.5 backdrop-blur-md transition-all duration-300 md:px-6",
          isScrolled
            ? "border-neutral-300/25 bg-black/20 shadow-[0_8px_20px_rgba(0,0,0,0.15)]"
            : "border-white/10 bg-black/10",
        )}
      >
        <Link
          to="/"
          className="flex items-center gap-2 focus-visible:outline-none"
        >
          <p className="text-2xl sm:text-3xl ">HUMX</p>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex items-center gap-2" aria-label="Primary">
            {links.map((link) => {
              return (
                <NavLink
                  key={link.name}
                  to={link.link}
                  className={({ isActive }) =>
                    cn(
                      "rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/60",
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-white/80 hover:text-white hover:bg-white/5",
                    )
                  }
                >
                  {link.name}
                </NavLink>
              );
            })}
          </nav>

          <Link
            to="/get-started"
            className="focus-visible:outline-none"
          ></Link>
        </div>

        <button
          onClick={() => setNavOpen((prev) => !prev)}
          className="lg:hidden rounded-full p-2 text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/60"
          aria-expanded={navOpen}
          aria-controls="mobile-nav"
          aria-label={
            navOpen ? "Close navigation menu" : "Open navigation menu"
          }
        >
          {navOpen ? <FaXmark size={24} /> : <BiMenu size={24} />}
        </button>
      </div>

      {/* Mobile overlay + drawer (animated with GSAP) */}
      <div
        ref={overlayRef}
        className={cn(
          "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden",
          navOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
        style={{ opacity: 0, display: navOpen ? "block" : "none" }}
        onClick={() => setNavOpen(false)}
        aria-hidden={!navOpen}
      />

      <aside
        ref={drawerRef}
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-full max-w-[360px] border-l border-white/10 bg-black/90 p-6 backdrop-blur-2xl lg:hidden",
          navOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
        style={{
          transform: "translateX(100%)",
          opacity: 0,
          display: navOpen ? "block" : "none",
        }}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end">
            <button
              ref={drawerCloseBtnRef}
              onClick={() => setNavOpen(false)}
              className="rounded-full p-2 text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/60"
              aria-label="Close navigation menu"
            >
              <FaXmark size={24} />
            </button>
          </div>

          <nav
            className="mt-8 flex flex-col gap-2"
            aria-label="Mobile navigation"
          >
            {links.map((link) => {
              return (
                <NavLink
                  key={link.name}
                  to={link.link}
                  className={({ isActive }) =>
                    cn(
                      "rounded-xl px-4 py-3 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/60",
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-white/85 hover:bg-white/5 hover:text-white",
                    )
                  }
                  onClick={() => setNavOpen(false)}
                >
                  {link.name}
                </NavLink>
              );
            })}
          </nav>

          <div className="mt-auto pb-8">
            <Link to="/get-started" onClick={() => setNavOpen(false)} />
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Navbar;
