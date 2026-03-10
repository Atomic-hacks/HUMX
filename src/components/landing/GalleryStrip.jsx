import { useRef } from "react";
import { motion as Motion } from "framer-motion";
import { FiEye, FiImage } from "react-icons/fi";
import { TbLayoutGrid } from "react-icons/tb";
import { fadeUp, stagger } from "../../utils/animations";
import { COLORS } from "../../constants/theme";
import SectionHeader from "./SectionHeader";
import Img from "./Img";
import { GALLERY_IMAGES } from "../../constants/content";

export default function GalleryStrip() {
  const scrollRef = useRef(null);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <Motion.div {...fadeUp()}>
          <SectionHeader
            tag="Our Gallery"
            title="Photo Gallery"
            sub="A glimpse into the world of HUMX."
          />
        </Motion.div>

        {/* Scrollable carousel row */}
        <Motion.div
          {...fadeUp(0.1)}
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-2"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            cursor: "grab",
          }}
          onMouseDown={(e) => {
            const el = scrollRef.current;
            el.dataset.dragging = "false";
            el.dataset.startX = e.pageX - el.offsetLeft;
            el.dataset.scrollLeft = el.scrollLeft;
            el.style.cursor = "grabbing";
          }}
          onMouseMove={(e) => {
            const el = scrollRef.current;
            if (!el.dataset.startX) return;
            el.dataset.dragging = "true";
            const x = e.pageX - el.offsetLeft;
            const walk = (x - el.dataset.startX) * 1.2;
            el.scrollLeft = el.dataset.scrollLeft - walk;
          }}
          onMouseUp={() => {
            const el = scrollRef.current;
            el.style.cursor = "grab";
            delete el.dataset.startX;
          }}
          onMouseLeave={() => {
            const el = scrollRef.current;
            if (el) {
              el.style.cursor = "grab";
              delete el.dataset.startX;
            }
          }}
        >
          {GALLERY_IMAGES.map((src, i) => (
            <Motion.div
              key={i}
              {...stagger(i)}
              className="relative flex-shrink-0 rounded-2xl overflow-hidden group"
              style={{
                width: 240,
                height: 260,
              }}
              onClick={() => {
                // Only navigate if not dragging
                if (scrollRef.current?.dataset.dragging !== "true") {
                  window.location.href = "/gallery";
                }
              }}
            >
              <Img
                src={src}
                alt=""
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Dark overlay on hover */}
              <div
                className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center"
                style={{ background: "rgba(0,0,0,0.38)" }}
              >
                <div
                  className="flex items-center justify-center rounded-full"
                  style={{
                    width: 48,
                    height: 48,
                    background: "rgba(255,255,255,0.92)",
                  }}
                >
                  <FiEye size={20} style={{ color: "#2d5a3d" }} />
                </div>
              </div>
            </Motion.div>
          ))}
        </Motion.div>

        {/* CTA button */}
        <Motion.div {...fadeUp(0.3)} className="flex justify-center mt-10">
          <a
            href="/gallery"
            className="flex items-center gap-2.5 px-7 py-3.5 rounded-full text-white text-sm font-medium transition-opacity hover:opacity-90"
            style={{ background: "#2d5a3d" }}
          >
            <TbLayoutGrid size={16} />
            Discover Our Full Gallery
          </a>
        </Motion.div>
      </div>
    </section>
  );
}
