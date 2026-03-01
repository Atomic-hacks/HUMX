import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function animateSectionReveal(target, options = {}) {
  if (!target || prefersReducedMotion()) return;

  const { y = 26, duration = 0.8, start = "top 85%" } = options;

  gsap.fromTo(
    target,
    { y, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration,
      ease: "power3.out",
      scrollTrigger: {
        trigger: target,
        start,
      },
    },
  );
}

export function animateStaggerGrid(target, itemSelector = ".ui-stagger-item", options = {}) {
  if (!target || prefersReducedMotion()) return;

  const items = target.querySelectorAll(itemSelector);
  if (!items.length) return;

  const { y = 20, duration = 0.6, stagger = 0.08, start = "top 86%" } = options;

  gsap.fromTo(
    items,
    { y, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration,
      stagger,
      ease: "power3.out",
      scrollTrigger: {
        trigger: target,
        start,
      },
    },
  );
}

export function animateCardHover(target) {
  if (!target || prefersReducedMotion()) return () => {};

  const onEnter = () => {
    gsap.to(target, {
      y: -4,
      duration: 0.22,
      ease: "power2.out",
      boxShadow: "0 18px 38px rgba(16, 28, 21, 0.14)",
    });
  };

  const onLeave = () => {
    gsap.to(target, {
      y: 0,
      duration: 0.22,
      ease: "power2.out",
      boxShadow: "0 12px 30px rgba(18, 33, 24, 0.1)",
    });
  };

  target.addEventListener("mouseenter", onEnter);
  target.addEventListener("mouseleave", onLeave);

  return () => {
    target.removeEventListener("mouseenter", onEnter);
    target.removeEventListener("mouseleave", onLeave);
  };
}

export function clearScrollTriggers() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
}

export { gsap, ScrollTrigger };
