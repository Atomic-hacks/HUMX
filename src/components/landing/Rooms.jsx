import { useState } from "react";
import { MdSquareFoot } from "react-icons/md";
import {
  FiUsers,
  FiWifi,
  FiMonitor,
  FiCoffee,
  FiWind,
  FiMapPin,
  FiPhone,
  FiStar,
  FiHome,
} from "react-icons/fi";
import { TbAirConditioning, TbWaveSine, TbDiamond } from "react-icons/tb";
import { LuRefrigerator } from "react-icons/lu";
import {
  MdWorkOutline,
  MdLocationCity,
  MdFamilyRestroom,
  MdChildCare,
} from "react-icons/md";
import { PiBuildingApartment } from "react-icons/pi";
import { LuFlower2 } from "react-icons/lu";
import { motion as Motion } from "framer-motion";
import { fadeUp, stagger } from "../../utils/animations";
import { COLORS, FONTS } from "../../constants/theme";
import SectionHeader from "./SectionHeader";
import Img from "./Img";

const ROOMS_DATA = [
  {
    name: "Grand Presidential Suite",
    tag: "PRESIDENTIAL",
    price: 649,
    guests: 6,
    size: "180m²",
    floor: "Top Floor",
    rating: 5,
    ratingLabel: "Excellence",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    amenities: [
      { icon: "wifi", label: "Premium WIFI" },
      { icon: "tv", label: "Smart TV" },
      { icon: "coffee", label: "Coffee Bar" },
      { icon: "climate", label: "Climate Control" },
    ],
    img: "/hotel4.jpg",
  },
  {
    name: "Executive Business Room",
    price: 329,
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
    features: [
      { icon: "work", label: "Work Space" },
      { icon: "city", label: "City Views" },
    ],
    img: "/hotel1.jpg",
  },
  {
    name: "Garden View Deluxe",
    price: 269,
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
    features: [
      { icon: "garden", label: "Garden View" },
      { icon: "terrace", label: "Private Terrace" },
    ],
    img: "/hotel2.jpg",
  },
  {
    name: "Family Comfort Suite",
    price: 419,
    description:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates.",
    features: [
      { icon: "family", label: "Family Space" },
      { icon: "kids", label: "Kids Area" },
    ],
    img: "/hotel3.jpg",
  },
];

const GRID_ROOMS = [
  {
    name: "Classic Double",
    price: 189,
    img: "/hotel1.jpg",
    icons: [FiWifi, FiMonitor, FiPhone],
  },
  {
    name: "Superior King",
    price: 249,
    img: "/hotel2.jpg",
    icons: [FiWifi, FiCoffee, TbAirConditioning],
  },
  {
    name: "Premium Ocean View",
    price: 359,
    img: "/hotel3.jpg",
    icons: [TbWaveSine, LuRefrigerator, FiPhone],
  },
  {
    name: "Luxury Penthouse",
    price: 1199,
    img: "/hotel4.jpg",
    icons: [FiStar, FiHome, TbDiamond],
  },
];

function AmenityIcon({ icon }) {
  const size = 16;
  switch (icon) {
    case "wifi":
      return <FiWifi size={size} />;
    case "tv":
      return <FiMonitor size={size} />;
    case "coffee":
      return <FiCoffee size={size} />;
    case "climate":
      return <FiWind size={size} />;
    case "work":
      return <MdWorkOutline size={size} />;
    case "city":
      return <MdLocationCity size={size} />;
    case "garden":
      return <LuFlower2 size={size} />;
    case "terrace":
      return <PiBuildingApartment size={size} />;
    case "family":
      return <MdFamilyRestroom size={size} />;
    case "kids":
      return <MdChildCare size={size} />;
    default:
      return null;
  }
}

export default function Rooms() {
  const [featured] = useState(ROOMS_DATA[0]);
  const others = ROOMS_DATA.slice(1);

  return (
    <section className="py-24" style={{ background: "#f8f8f6" }}>
      <div className="max-w-7xl mx-auto px-6">
        <Motion.div {...fadeUp()}>
          <SectionHeader
            tag="Our Accommodations"
            title="Rooms & Suites"
            sub="Choose from our carefully curated selection of rooms and suites designed for your perfect stay."
          />
        </Motion.div>

        {/* Main layout: large featured left + sidebar right */}
        <Motion.div {...fadeUp(0.1)} className="flex gap-5">
          {/* ── Featured Room ── */}
          <div
            className="bg-white rounded-2xl overflow-hidden shadow-md flex-1"
            style={{ minWidth: 0 }}
          >
            {/* Hero image */}
            <div className="relative" style={{ height: 340 }}>
              <Img
                src="/hotel4.jpg"
                alt={featured.name}
                className="w-full h-full object-cover"
              />

              {/* Tag pill top-left */}
              {featured.tag && (
                <span
                  className="absolute top-4 left-4 px-3 py-1 rounded-full font-semibold tracking-widest"
                  style={{
                    background: "white",
                    color: "#1a1a1a",
                    fontSize: 11,
                    letterSpacing: "0.08em",
                  }}
                >
                  {featured.tag}
                </span>
              )}

              {/* Info pills bottom-left */}
              <div className="absolute bottom-4 left-4 flex gap-2">
                <span
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{
                    background: "rgba(255,255,255,0.92)",
                    color: "#333",
                  }}
                >
                  <FiUsers size={13} /> {featured.guests} Guests
                </span>
                <span
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{
                    background: "rgba(255,255,255,0.92)",
                    color: "#333",
                  }}
                >
                  <MdSquareFoot size={13} /> {featured.size}
                </span>
                <span
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{
                    background: "rgba(255,255,255,0.92)",
                    color: "#333",
                  }}
                >
                  <FiMapPin size={13} /> {featured.floor}
                </span>
              </div>
            </div>

            {/* Text content */}
            <div className="p-7">
              {/* Title row + stars */}
              <div className="flex items-start justify-between mb-3">
                <h3
                  className="text-3xl font-light"
                  style={{
                    fontFamily: "'Georgia', serif",
                    color: "#1a1a1a",
                    letterSpacing: "-0.3px",
                  }}
                >
                  {featured.name}
                </h3>
                <div className="flex flex-col items-end" style={{ gap: 2 }}>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} style={{ color: "#f5b942", fontSize: 17 }}>
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-gray-400">
                    5.0 {featured.ratingLabel}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "#888", maxWidth: 580 }}
              >
                {featured.description}
              </p>

              {/* Amenities row */}
              <div
                className="flex gap-8 pb-6 mb-6"
                style={{ borderBottom: "1px solid #efefef" }}
              >
                {featured.amenities.map((a) => (
                  <div
                    key={a.label}
                    className="flex items-center gap-2 text-sm"
                    style={{ color: "#666" }}
                  >
                    <AmenityIcon icon={a.icon} />
                    <span>{a.label}</span>
                  </div>
                ))}
              </div>

              {/* Price + CTA */}
              <div className="flex items-center justify-between">
                <div className="flex items-baseline gap-0.5">
                  <span className="text-sm text-gray-400">$</span>
                  <span
                    className="font-bold"
                    style={{ fontSize: 42, color: "#1a1a1a", lineHeight: 1 }}
                  >
                    {featured.price}
                  </span>
                  <span className="text-sm text-gray-400 ml-1">per night</span>
                </div>
                <button
                  className="px-7 py-3 rounded-lg text-white text-sm font-medium"
                  style={{ background: "#2d5a3d" }}
                >
                  Reserve Suite
                </button>
              </div>
            </div>
          </div>

          {/* ── Sidebar: stacked room cards ── */}
          <div
            className="flex flex-col gap-4"
            style={{ width: 350, flexShrink: 0 }}
          >
            {others.map((room, i) => (
              <Motion.div
                key={room.name}
                {...stagger(i)}
                className="bg-white rounded-xl overflow-hidden shadow-sm flex"
                style={{ minHeight: 140 }}
              >
                {/* Thumbnail */}
                <div style={{ width: 100, flexShrink: 0 }}>
                  <Img
                    src={room.img}
                    alt={room.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Card body */}
                <div className="p-4 flex flex-col justify-between flex-1 min-w-0">
                  <div>
                    <h4
                      className="font-semibold text-sm mb-1"
                      style={{ color: "#1a1a1a" }}
                    >
                      {room.name}
                    </h4>
                    <p
                      className="leading-snug mb-2"
                      style={{ color: "#999", fontSize: 11 }}
                    >
                      {room.description}
                    </p>
                    {/* Feature tags */}
                    <div className="flex gap-3 mb-2">
                      {room.features.map((f) => (
                        <span
                          key={f.label}
                          className="flex items-center gap-1"
                          style={{ color: "#aaa", fontSize: 11 }}
                        >
                          <AmenityIcon icon={f.icon} />
                          {f.label}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price + Book button */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-0.5">
                      <span
                        className="font-bold text-base"
                        style={{ color: "#1a1a1a" }}
                      >
                        ${room.price}
                      </span>
                      <span className="text-gray-400" style={{ fontSize: 11 }}>
                        /night
                      </span>
                    </div>
                    <button
                      className="px-4 py-1.5 rounded border text-xs font-medium"
                      style={{ borderColor: "#d0d0d0", color: "#333" }}
                    >
                      Book
                    </button>
                  </div>
                </div>
              </Motion.div>
            ))}
          </div>
        </Motion.div>
      </div>
      <section className="my-20 ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {GRID_ROOMS.map((room, i) => (
              <Motion.div
                key={room.name}
                {...stagger(i)}
                className="flex flex-col items-center"
              >
                {/* Image */}
                <div
                  className="w-full rounded-xl overflow-hidden mb-4"
                  style={{ aspectRatio: "4/3" }}
                >
                  <Img
                    src={room.img}
                    alt={room.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name */}
                <p
                  className="text-sm font-normal mb-2 text-center"
                  style={{ color: "#1a1a1a" }}
                >
                  {room.name}
                </p>

                {/* Price */}
                <p className="mb-3 text-center">
                  <span
                    className="font-semibold"
                    style={{ color: "#4ab5a0", fontSize: 17 }}
                  >
                    ${room.price.toLocaleString()}
                  </span>
                  <span style={{ color: "#4ab5a0", fontSize: 12 }}>/night</span>
                </p>

                {/* Icons */}
                <div className="flex gap-4">
                  {room.icons.map((Icon, j) => (
                    <Icon key={j} size={17} style={{ color: "#aaa" }} />
                  ))}
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
