import { motion as Motion } from "framer-motion";
import { fadeUp, stagger } from "../../utils/animations";
import { COLORS, FONTS } from "../../constants/theme";
import { TESTIMONIALS } from "../../constants/content";
import SectionHeader from "./SectionHeader";

export default function Testimonials() {
  return (
    <section className="py-24" style={{ background: COLORS.GRAY_BG }}>
      <div className="max-w-7xl mx-auto px-6">
        <Motion.div {...fadeUp()}>
          <SectionHeader
            tag="What Guests Say"
            title="Testimonials"
            sub="Hear from our valued guests about their unforgettable experiences at HUMX Resort."
          />
        </Motion.div>
        <div className="grid sm:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <Motion.div
              key={t.name}
              {...stagger(i)}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <div className="flex mb-2">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-yellow-400 text-sm">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-5 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p
                    className="font-semibold text-sm"
                    style={{ color: COLORS.GREEN_DARK }}
                  >
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
