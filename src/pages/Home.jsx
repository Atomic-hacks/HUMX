import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import HotelFooter from "../components/site/HotelFooter";
import {
  animateSectionReveal,
  animateStaggerGrid,
  gsap,
  prefersReducedMotion,
} from "../../lib/animations/gsap";
import {
  HomeActivities,
  HomeAmenities,
  HomeFacilities,
  HomeGuestStories,
  HomeLuxuryRooms,
  HomeWelcome,
} from "../components/home/HomeSections";

export default function HomePage() {
  const navigate = useNavigate();
  const navRef = useRef(null);
  const dividerRef = useRef(null);
  const subRef = useRef(null);
  const btnRef = useRef(null);
  const circleRef = useRef(null);
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        navRef.current,
        { y: -40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
      )
        .fromTo(
          ".hero-word",
          { y: 70, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.1, stagger: 0.1 },
          "-=0.4",
        )
        .fromTo(
          dividerRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.8,
            ease: "power2.inOut",
            transformOrigin: "left",
          },
          "-=0.3",
        )
        .fromTo(
          subRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.4",
        )
        .fromTo(
          btnRef.current,
          { x: 30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.7 },
          "-=0.6",
        )
        .fromTo(
          circleRef.current,
          { scale: 0.5, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.9, ease: "back.out(1.4)" },
          "-=0.5",
        );

      if (!prefersReducedMotion()) {
        gsap.to(circleRef.current, {
          y: -10,
          duration: 2.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: 2,
        });
      }

      gsap.utils.toArray("[data-reveal]").forEach((el) => {
        animateSectionReveal(el, { y: 28, duration: 0.78 });
      });
      gsap.utils.toArray("[data-stagger]").forEach((el) => {
        animateStaggerGrid(el);
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef}>
      {/* Navbar — sits at very top */}

      {/* ── HERO (fixed behind scrolling content) ──────────────────────────── */}
      <section
        className="fixed top-0 left-0 right-0 overflow-hidden"
        style={{ height: "100vh" }}
      >
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&q=80"
          alt="HUMX hotel lobby"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Overlay: very light at top, darkens only toward bottom ~40% */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--hero-overlay-top) 0%, var(--hero-overlay-top) 45%, var(--hero-overlay-mid) 72%, var(--hero-overlay-bottom) 100%)",
          }}
        />

        {/* ── Hero title — lower-left, large serif, light weight ── */}
        <div
          className="absolute left-4 z-20 sm:left-6 lg:left-12"
          style={{
            bottom: "22%" /* sits above the divider with breathing room */,
            maxWidth: 560,
          }}
        >
          <h1 className="font-light leading-[1.12] text-white text-[clamp(36px,6vw,68px)] tracking-[-0.01em]">
            {[
              ["Welcome", "to"],
              ["HUMX", "Hotel"],
            ].map((line, li) => (
              <div key={li} className="overflow-hidden">
                <div className="flex flex-wrap gap-[0.3em]">
                  {line.map((word, wi) => (
                    <span key={wi} className="hero-word inline-block">
                      {word}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </h1>
        </div>

        {/* ── Book Your Stay circle — vertically centred between title and divider,
               right-of-centre horizontally (matching screenshot: ~82% from left) ── */}
        <button
          ref={circleRef}
          type="button"
          onClick={() => navigate("/rooms")}
          className="absolute z-40 hidden border-neutral-400/40 bg-white/20 backdrop-blur-md items-center justify-center rounded-full transition-transform duration-300 hover:scale-105 lg:flex"
          style={{
            width: 148,
            height: 148,
            /* Vertically: sits at ~62% from top — between headline and divider */
            top: "57%",
            right: "8%",
            transform: "translateY(-50%)",
            fontSize: 20,
            fontWeight: 500,
            color: "black",
            lineHeight: 1.3,
            boxShadow: "0 8px 40px rgba(0,0,0,0.22)",
            border: "none",
            textAlign: "center",
          }}
        >
          Select
          <br />
          Room
        </button>

        {/* ── Horizontal divider — sits at ~82% from top ── */}
        <div
          ref={dividerRef}
          className="absolute left-4 right-4 z-20 h-px bg-white/40 sm:left-6 sm:right-6 lg:left-12 lg:right-12"
          style={{ bottom: "13%" }}
        />

        {/* ── Bottom row: subtext left | View Rooms pill right ── */}
        <div
          className="absolute left-4 right-4 z-20 flex flex-col items-start justify-between gap-4 sm:left-6 sm:right-6 md:flex-row md:items-end lg:left-12 lg:right-12"
          style={{ bottom: "4%" }}
        >
          <p
            ref={subRef}
            className="max-w-[380px] text-sm leading-relaxed text-white/85"
            style={{ fontWeight: 300 }}
          >
            A city sanctuary defined by elegant rooms, intuitive service, and
            hospitality designed around your pace.
          </p>

          {/* View Rooms pill */}
          <button
            ref={btnRef}
            type="button"
            onClick={() => navigate("/rooms")}
            className="group flex items-center gap-4 rounded-full bg-white py-3 pl-7 pr-3 text-sm"
          >
            View Rooms
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--sage-muted)] text-white transition-colors group">
              <svg
                className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform duration-200"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M2 12L12 2M12 2H4M12 2V10"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </section>

      {/* ── Main content scrolls over fixed hero ───────────────────────────── */}
      <main className="relative z-20 mt-[100vh]">
        <HomeWelcome />
        <HomeActivities />
        <HomeFacilities />
        <HomeGuestStories />
        <HomeAmenities />
        <HomeLuxuryRooms />
        <HotelFooter />
      </main>
    </div>
  );
}
