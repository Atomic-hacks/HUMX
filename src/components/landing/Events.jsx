import { motion as Motion } from "framer-motion";
import { MdDateRange, MdSchedule, MdLocationOn } from "react-icons/md";
import { fadeUp, stagger } from "../../utils/animations";
import { COLORS, FONTS } from "../../constants/theme";
import { EVENTS } from "../../constants/content";
import SectionHeader from "./SectionHeader";
import Img from "./Img";

export default function Events() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <Motion.div {...fadeUp()}>
          <SectionHeader
            tag="Upcoming"
            title="Events"
            sub="Join us for an array of curated events that celebrate culture, cuisine, and community."
          />
        </Motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EVENTS.map((e, i) => (
            <Motion.div
              key={e.title}
              {...stagger(i)}
              className="rounded-2xl overflow-hidden shadow group hover:shadow-lg transition-shadow"
            >
              <div className="relative h-44 overflow-hidden">
                <Img
                  src={e.img}
                  alt={e.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-4">
                <h3
                  className="font-bold text-base mb-2"
                  style={{ color: COLORS.GREEN_DARK }}
                >
                  {e.title}
                </h3>
                <div className="space-y-1 text-xs text-gray-400 mb-4">
                  <p className="flex items-center gap-2">
                    <MdDateRange size={14} /> {e.date}
                  </p>
                  <p className="flex items-center gap-2">
                    <MdSchedule size={14} /> {e.time}
                  </p>
                  <p className="flex items-center gap-2">
                    <MdLocationOn size={14} /> {e.location}
                  </p>
                </div>
                <button
                  className="text-xs px-4 py-2 rounded border w-full transition-colors hover:text-white"
                  style={{ borderColor: COLORS.GREEN, color: COLORS.GREEN }}
                >
                  Learn More
                </button>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
