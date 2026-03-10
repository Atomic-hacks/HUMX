import { motion as Motion } from "framer-motion";
import { FiWifi, FiCheckCircle } from "react-icons/fi";
import { TbDroplet } from "react-icons/tb";
import { PiCarLight } from "react-icons/pi";
import { fadeUp, stagger } from "../../utils/animations";

import SectionHeader from "./SectionHeader";
import Img from "./Img";

const ICON_MAP = {
  wifi: FiWifi,
  pool: TbDroplet,
  valet: PiCarLight,
};

// Fallback static data if AMENITIES doesn't match the new shape
const DEFAULT_AMENITIES = [
  {
    icon: "wifi",
    title: "High-Speed Internet",
    desc: "Complimentary wireless internet access throughout the hotel premises with enterprise-grade security and unlimited bandwidth for all your connectivity needs.",
    tags: ["24/7 Available", "High Speed"],
    img: "/hotel1.jpg",
  },
  {
    icon: "pool",
    title: "Rooftop Pool",
    desc: "Luxurious rooftop swimming pool with breathtaking city skyline views. Features heated water, poolside service, and premium lounging areas for ultimate relaxation.",
    tags: ["Heated Pool", "City Views"],
    img: "/hotel2.jpg",
  },
  {
    icon: "valet",
    title: "Valet Parking",
    desc: "Premium valet parking service with secure underground facility. Professional attendants ensure your vehicle is safely parked and readily available upon request.",
    tags: ["Secure", "Valet Service"],
    img: "/hotel3.jpg",
  },
];

export default function Amenities() {
  const items = DEFAULT_AMENITIES;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <Motion.div {...fadeUp()}>
          <SectionHeader
            tag="What We Offer"
            title="Amenities"
            sub="Indulge in our world-class facilities designed to make your stay truly extraordinary and memorable."
          />
        </Motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((a, i) => {
            const IconComponent = ICON_MAP[a.icon] || FiWifi;
            return (
              <Motion.div
                key={a.title}
                {...stagger(i)}
                className="rounded-2xl overflow-hidden"
                style={{
                  boxShadow: "0 1px 8px rgba(0,0,0,0.08)",
                  background: "#fff",
                }}
              >
                {/* Image with dark overlay + centered icon */}
                <div className="relative" style={{ height: 210 }}>
                  <Img
                    src={a.img}
                    alt={a.title}
                    className="w-full h-full object-cover"
                  />
                  {/* dark overlay */}
                  <div
                    className="absolute inset-0"
                    style={{ background: "rgba(40,50,55,0.38)" }}
                  />
                  {/* centered icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <IconComponent size={48} color="white" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6">
                  <h3
                    className="font-bold mb-3"
                    style={{
                      fontFamily: "'Courier New', monospace",
                      fontSize: 19,
                      color: "#1a1a1a",
                      letterSpacing: "-0.2px",
                    }}
                  >
                    {a.title}
                  </h3>
                  <p
                    className="leading-relaxed mb-5"
                    style={{ color: "#888", fontSize: 14 }}
                  >
                    {a.desc}
                  </p>

                  {/* Tags row */}
                  <div className="flex gap-5">
                    {a.tags.map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center gap-1.5"
                        style={{ color: "#555", fontSize: 13 }}
                      >
                        <FiCheckCircle size={15} style={{ color: "#555" }} />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
