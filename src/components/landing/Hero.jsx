import { motion as Motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { fadeUp } from "../../utils/animations";
import { COLORS, FONTS } from "../../constants/theme";
import { HERO_FEATURES, HERO_STATS } from "../../constants/content";
import Img from "./Img";
import { div } from "framer-motion/client";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#e8ede9" }}
    >
      {/* BG split */}
      <div
        className="absolute right-0 top-0 w-1/2 h-full"
        style={{ background: "#d4e6da" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 w-full  pb-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <Motion.p
            {...fadeUp(0.1)}
            className="text-sm tracking-widest uppercase mb-3"
            style={{ color: COLORS.GREEN_LIGHT }}
          >
            Welcome to HUMX
          </Motion.p>
          <Motion.h1
            {...fadeUp(0.2)}
            className="text-5xl md:text-6xl font-bold leading-tight mb-5"
          >
            Luxury Redefined in Every Stay
          </Motion.h1>
          <Motion.p
            {...fadeUp(0.3)}
            className="text-gray-600 mb-8 leading-relaxed text-sm max-w-md"
          >
            Nestled in the heart of the city, HUMX Resort offers an unparalleled
            experience of comfort, elegance, and world-class hospitality for
            every discerning traveller.
          </Motion.p>
          <Motion.div
            {...fadeUp(0.4)}
            className="flex flex-wrap gap-4 mb-8 text-sm text-gray-600"
          >
            {HERO_FEATURES.map(({ title, icon }) => (
              <span key={title} className="flex items-center gap-2">
                {icon}
                {title}
              </span>
            ))}
          </Motion.div>
          <Motion.div {...fadeUp(0.5)} className="flex gap-3">
            <button
              className="px-6 py-3 rounded text-white font-medium text-sm transition-transform hover:scale-105"
              style={{ background: COLORS.GREEN }}
            >
              Book Your Stay
            </button>
            <button
              className="px-6 py-3 rounded text-sm font-medium border transition-colors hover:bg-white"
              style={{ borderColor: COLORS.GREEN, color: COLORS.GREEN }}
            >
              Explore Rooms
            </button>
          </Motion.div>
        </div>

        {/* Right – hotel image card */}
        <Motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <Img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=700&q=80"
              alt="Hotel"
              className="w-full h-[500px] object-cover"
            />
          </div>
          {/* Floating card */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="absolute -bottom-12 -right-14 bg-white rounded-xl shadow-xl p-4 w-72"
          >
            <p className="text-xs text-gray-400 mb-1">Exceptional Experience</p>
            <p
              className="text-lg font-bold"
              style={{ color: COLORS.GREEN_DARK }}
            >
              "Absolutely stunning hotel! The service was impeccable and the
              views breathtaking."
            </p>
            <div className="flex items-center gap-1 mt-1">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img src="/profile.jpg" alt="profile" />
              </div>
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xs">
                  ★
                </span>
              ))}
              <span className="text-xs text-gray-400 ml-1">4.9 (2.4k)</span>
            </div>
          </Motion.div>
        </Motion.div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="max-w-7xl mx-auto px-6">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-4 bg-white divide-x divide-gray-100"
          >
            {HERO_STATS.map(({ num, label }) => (
              <div key={label} className="py-5 text-center">
                <p className="text-3xl font-bold">{num}</p>
                <p className="text-xs text-gray-400 mt-1">{label}</p>
              </div>
            ))}
          </Motion.div>
        </div>
      </div>
    </section>
  );
}
