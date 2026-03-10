import { motion as Motion } from "framer-motion";
import { fadeUp, stagger } from "../../utils/animations";
import { COLORS, FONTS } from "../../constants/theme";
import { OFFERS } from "../../constants/content";
import SectionHeader from "./SectionHeader";
import Img from "./Img";
import CountdownTimer from "./CountdownTimer";

export default function Offers() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <Motion.div {...fadeUp()}>
          <SectionHeader
            tag="Special Deals"
            title="Offers"
            sub="Take advantage of our exclusive packages and promotions for an even more memorable stay."
          />
        </Motion.div>
        <div className="grid sm:grid-cols-3 gap-6 mb-8">
          {OFFERS.map((o, i) => (
            <Motion.div
              key={o.title}
              {...stagger(i)}
              className="rounded-2xl overflow-hidden shadow group cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <Img
                  src={o.img}
                  alt={o.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {o.tag && (
                  <span
                    className="absolute top-3 left-3 text-xs px-3 py-1 rounded-full text-white font-medium"
                    style={{
                      background:
                        o.tag === "New" ? COLORS.GREEN_LIGHT : COLORS.GOLD,
                    }}
                  >
                    {o.tag}
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3
                  className="font-bold text-base mb-0.5"
                  style={{ color: COLORS.GREEN_DARK }}
                >
                  {o.title}
                </h3>
                <p className="text-sm text-gray-400 mb-3">{o.subtitle}</p>
                <div className="flex items-center justify-between">
                  <span
                    className="font-bold text-xl"
                    style={{ color: COLORS.GREEN }}
                  >
                    ${o.price}
                    <span className="text-xs text-gray-400 font-normal">
                      /person
                    </span>
                  </span>
                  <button
                    className="text-xs px-4 py-2 rounded text-white"
                    style={{ background: COLORS.GREEN }}
                  >
                    Explore
                  </button>
                </div>
              </div>
            </Motion.div>
          ))}
        </div>

        {/* Countdown banner */}
        <Motion.div
          {...fadeUp(0.2)}
          className="rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: COLORS.GREEN_DARK }}
        >
          <div>
            <p className="text-white/60 text-sm mb-1">Limited Time Offer</p>
            <h3 className="text-white text-xl font-bold" style={{}}>
              Get 30% Off on Luxury Suites
            </h3>
            <p className="text-white/60 text-sm mt-1">
              Book now and save big on our premium suites before this deal
              expires!
            </p>
          </div>
          <CountdownTimer />
          <button
            className="px-6 py-3 rounded text-sm font-medium text-white whitespace-nowrap"
            style={{ background: COLORS.GREEN_LIGHT }}
          >
            Grab Now →
          </button>
        </Motion.div>
      </div>
    </section>
  );
}
