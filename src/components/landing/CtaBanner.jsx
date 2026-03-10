import { motion as Motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { fadeUp } from "../../utils/animations";
import { COLORS, FONTS } from "../../constants/theme";
import { CTA_FEATURES } from "../../constants/content";
import Img from "./Img";

export default function CtaBanner() {
  return (
    <section className="py-20" style={{ background: COLORS.GRAY_BG }}>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Motion.p
            {...fadeUp(0)}
            className="text-sm tracking-widest uppercase mb-2"
            style={{ color: COLORS.GREEN_LIGHT }}
          >
            Exclusive Experience
          </Motion.p>
          <Motion.h2
            {...fadeUp(0.1)}
            className="text-4xl font-bold mb-4 leading-tight"
          >
            Experience Luxury Like Never Before
          </Motion.h2>
          <Motion.p
            {...fadeUp(0.2)}
            className="text-gray-500 text-sm leading-relaxed mb-6"
          >
            Immerse yourself in an unrivalled luxury experience that combines
            breathtaking surroundings with bespoke service. Let us craft your
            perfect stay from the moment you arrive.
          </Motion.p>
          <Motion.ul
            {...fadeUp(0.25)}
            className="text-sm text-gray-600 mb-6 space-y-2"
          >
            {CTA_FEATURES.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <FaCheckCircle size={16} color={COLORS.GREEN} />
                {t}
              </li>
            ))}
          </Motion.ul>
          <Motion.div {...fadeUp(0.3)} className="flex gap-3">
            <button
              className="px-6 py-3 rounded text-white text-sm font-medium"
              style={{ background: COLORS.GREEN }}
            >
              Book Now
            </button>
            <button
              className="px-6 py-3 rounded text-sm font-medium border"
              style={{ borderColor: COLORS.GREEN, color: COLORS.GREEN }}
            >
              Learn More
            </button>
          </Motion.div>
        </div>
        <Motion.div {...fadeUp(0.1)} className="relative">
          <Img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=700&q=80"
            alt="Hotel exterior"
            className="rounded-2xl w-full h-80 object-cover shadow-xl"
          />
          <div className="absolute top-4 right-4 bg-white rounded-xl p-3 shadow-lg text-center">
            <p className="text-xs text-gray-400">Discount</p>
            <p className="text-2xl font-bold" style={{ color: COLORS.GREEN }}>
              25%
            </p>
            <p className="text-xs" style={{ color: COLORS.GREEN_LIGHT }}>
              OFF
            </p>
          </div>
        </Motion.div>
      </div>
    </section>
  );
}
