import { motion as Motion } from "framer-motion";
import {
  FiMapPin,
  FiClock,
  FiStar,
  FiSun,
  FiCamera,
  FiMap,
  FiBriefcase,
  FiCoffee,
  FiArrowRight,
} from "react-icons/fi";
import {
  MdOutlineTrain,
  MdOutlineLocalAirport,
  MdOutlineDirectionsCar,
  MdOutlineExplore,
} from "react-icons/md";
import { PiBuildingApartment, PiBicycle } from "react-icons/pi";
import { TbMusic, TbBuildingStore } from "react-icons/tb";
import { fadeUp, stagger } from "../../utils/animations";
import { COLORS, FONTS } from "../../constants/theme";
import SectionHeader from "./SectionHeader";
import Img from "./Img";

const LOCATION_CARDS = [
  {
    title: "Entertainment Quarter",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
    distance: "2 min walk",
    distanceIcon: TbMusic,
    tags: [
      { icon: FiClock, label: "Open 24/7" },
      { icon: FiStar, label: "4.8 Rating" },
    ],
    img: "/hotel4.jpg",
  },
  {
    title: "Waterfront Marina",
    desc: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    distance: "5 min drive",
    distanceIcon: MdOutlineDirectionsCar,
    tags: [
      { icon: FiSun, label: "Scenic Views" },
      { icon: FiCamera, label: "Photo Spot" },
    ],
    img: "/hotel3.jpg",
  },
  {
    title: "Historic Quarter",
    desc: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute.",
    distance: "10 min walk",
    distanceIcon: PiBuildingApartment,
    tags: [
      { icon: FiMap, label: "Guided Tours" },
      { icon: PiBicycle, label: "Bike Friendly" },
    ],
    img: "/hotel1.jpg",
  },
  {
    title: "Premium Shopping Plaza",
    desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
    distance: "3 min walk",
    distanceIcon: TbBuildingStore,
    tags: [
      { icon: FiBriefcase, label: "Tax Free" },
      { icon: FiCoffee, label: "Cafés Inside" },
    ],
    img: "/hotel2.jpg",
  },
];

const BENEFITS = [
  {
    icon: MdOutlineTrain,
    title: "Public Transport Hub",
    sub: "Metro station 200m away",
  },
  {
    icon: MdOutlineLocalAirport,
    title: "Airport Connection",
    sub: "Direct shuttle every 30 min",
  },
  {
    icon: MdOutlineDirectionsCar,
    title: "Valet Parking",
    sub: "Complimentary for guests",
  },
  {
    icon: MdOutlineExplore,
    title: "City Center Access",
    sub: "Walking distance to main attractions",
  },
];

export default function LocationActivities() {
  return (
    <section className="py-24" style={{ background: COLORS.GRAY_BG }}>
      <div className="max-w-7xl mx-auto px-6">
        <Motion.div {...fadeUp()}>
          <SectionHeader
            tag="Explore"
            title="Location & Activities"
            sub="Discover the wonders that surround our resort — adventure is just a short distance away."
          />
        </Motion.div>

        {/* 3-col layout: 2 cards left + right panel */}
        <div className="grid lg:grid-cols-3 gap-5">
          {/* Left: 2x2 activity cards */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-5">
            {LOCATION_CARDS.map((card, i) => {
              const DistIcon = card.distanceIcon;
              return (
                <Motion.div
                  key={card.title}
                  {...stagger(i)}
                  className="bg-white rounded-2xl overflow-hidden"
                  style={{ boxShadow: "0 1px 8px rgba(0,0,0,0.07)" }}
                >
                  {/* Image with distance pill */}
                  <div className="relative" style={{ height: 175 }}>
                    <Img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Distance pill top-right */}
                    <span
                      className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                      style={{
                        background: "rgba(255,255,255,0.92)",
                        color: "#333",
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      <DistIcon size={13} />
                      {card.distance}
                    </span>
                  </div>

                  {/* Card body */}
                  <div className="p-5">
                    <h4
                      className="font-bold mb-2"
                      style={{
                        fontFamily: "'Courier New', monospace",
                        fontSize: 15,
                        color: "#1a1a1a",
                      }}
                    >
                      {card.title}
                    </h4>
                    <p
                      className="leading-relaxed mb-4"
                      style={{ color: "#999", fontSize: 13 }}
                    >
                      {card.desc}
                    </p>
                    {/* Tags */}
                    <div className="flex gap-4">
                      {card.tags.map((t) => {
                        const TagIcon = t.icon;
                        return (
                          <span
                            key={t.label}
                            className="flex items-center gap-1.5"
                            style={{ color: "#777", fontSize: 12 }}
                          >
                            <TagIcon size={13} />
                            {t.label}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </Motion.div>
              );
            })}
          </div>

          {/* Right: Prime Location Benefits panel */}
          <Motion.div
            {...fadeUp(0.2)}
            className="rounded-2xl flex flex-col p-7"
            style={{ background: "#2d5a3d" }}
          >
            {/* Pin icon circle */}
            <div
              className="flex items-center justify-center rounded-full mx-auto mb-5"
              style={{
                width: 64,
                height: 64,
                background: "rgba(255,255,255,0.12)",
              }}
            >
              <FiMapPin size={28} color="rgba(255,255,255,0.7)" />
            </div>

            <h3
              className="text-white text-center font-bold mb-3"
              style={{
                fontFamily: "'Courier New', monospace",
                fontSize: 20,
              }}
            >
              Prime Location Benefits
            </h3>
            <p
              className="text-center mb-6 leading-relaxed"
              style={{ color: "rgba(255,255,255,0.65)", fontSize: 13 }}
            >
              Maecenas faucibus mollis interdum. Nulla vitae elit libero, a
              pharetra augue.
            </p>

            {/* Benefit rows */}
            <div className="flex flex-col gap-3 flex-1">
              {BENEFITS.map((b) => {
                const BIcon = b.icon;
                return (
                  <div
                    key={b.title}
                    className="flex items-center gap-4 rounded-xl px-4 py-3"
                    style={{ background: "rgba(255,255,255,0.10)" }}
                  >
                    <div
                      className="flex items-center justify-center rounded-lg flex-shrink-0"
                      style={{
                        width: 38,
                        height: 38,
                        background: "rgba(255,255,255,0.12)",
                      }}
                    >
                      <BIcon size={18} color="rgba(255,255,255,0.85)" />
                    </div>
                    <div>
                      <p
                        className="font-semibold text-white"
                        style={{ fontSize: 13 }}
                      >
                        {b.title}
                      </p>
                      <p
                        style={{ color: "rgba(255,255,255,0.6)", fontSize: 12 }}
                      >
                        {b.sub}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA button */}
            <button
              className="mt-6 w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2"
              style={{ background: "white", color: "#2d5a3d" }}
            >
              View Full Location Guide <FiArrowRight size={14} />
            </button>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}
