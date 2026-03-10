import { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

// ─── THEME ───────────────────────────────────────────────────────────────────
const GREEN = "#2d6a4f";
const GREEN_DARK = "#1b4332";
const GREEN_LIGHT = "#52b788";
const GOLD = "#b5914a";
const GRAY_BG = "#f5f5f0";

// ─── HELPERS ─────────────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

const stagger = (i) => fadeUp(i * 0.1);

// Placeholder image component using picsum
const Img = ({ src, alt, className, style }) => (
  <img
    src={src}
    alt={alt}
    className={className}
    style={{ objectFit: "cover", ...style }}
  />
);

// Section header used across sections
const SectionHeader = ({ tag, title, sub }) => (
  <div className="text-center mb-10">
    {tag && (
      <p
        className="text-sm tracking-widest uppercase mb-2"
        style={{ color: GREEN_LIGHT }}
      >
        {tag}
      </p>
    )}
    <h2
      className="text-3xl font-bold mb-3"
      style={{ color: GREEN_DARK, fontFamily: "'Playfair Display', serif" }}
    >
      {title}
    </h2>
    {sub && (
      <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
        {sub}
      </p>
    )}
  </div>
);

// ─── NAVBAR ──────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    "Home",
    "About",
    "Rooms",
    "Amenities",
    "Offers",
    "Events",
    "Contact",
  ];

  return (
    <Motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(27,67,50,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <span
          className="text-white font-bold text-xl tracking-wider"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          HUMX
        </span>
        <ul className="hidden md:flex gap-6">
          {links.map((l) => (
            <li key={l}>
              <a
                href="#"
                className="text-white/80 hover:text-white text-sm transition-colors duration-200"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a href="#" className="text-white/80 hover:text-white text-sm">
            🔍
          </a>
          <a href="#" className="text-white/80 hover:text-white text-sm">
            👤
          </a>
          <button
            className="text-sm px-4 py-2 rounded text-white font-medium transition-all"
            style={{ background: GREEN_LIGHT }}
          >
            Book Now
          </button>
        </div>
      </div>
    </Motion.nav>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
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

      <div className="relative max-w-7xl mx-auto px-6 w-full pt-24 pb-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <Motion.p
            {...fadeUp(0.1)}
            className="text-sm tracking-widest uppercase mb-3"
            style={{ color: GREEN_LIGHT }}
          >
            Welcome to HUMX
          </Motion.p>
          <Motion.h1
            {...fadeUp(0.2)}
            className="text-5xl md:text-6xl font-bold leading-tight mb-5"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: GREEN_DARK,
            }}
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
            {["✓ Free Breakfast", "✓ Free WiFi", "✓ Airport Shuttle"].map(
              (f) => (
                <span key={f} className="flex items-center gap-1">
                  {f}
                </span>
              ),
            )}
          </Motion.div>
          <Motion.div {...fadeUp(0.5)} className="flex gap-3">
            <button
              className="px-6 py-3 rounded text-white font-medium text-sm transition-transform hover:scale-105"
              style={{ background: GREEN }}
            >
              Book Your Stay
            </button>
            <button
              className="px-6 py-3 rounded text-sm font-medium border transition-colors hover:bg-white"
              style={{ borderColor: GREEN, color: GREEN }}
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
              className="w-full h-96 object-cover"
            />
          </div>
          {/* Floating card */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 w-52"
          >
            <p className="text-xs text-gray-400 mb-1">Starting from</p>
            <p className="text-2xl font-bold" style={{ color: GREEN_DARK }}>
              $299
              <span className="text-sm font-normal text-gray-400">/night</span>
            </p>
            <div className="flex items-center gap-1 mt-1">
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
            className="grid grid-cols-4 bg-white rounded-t-2xl shadow-lg divide-x divide-gray-100"
          >
            {[
              { num: "150", label: "Luxury Rooms" },
              { num: "5", label: "Restaurants" },
              { num: "24", label: "Hour Service" },
              { num: "98", label: "% Satisfaction" },
            ].map(({ num, label }) => (
              <div key={label} className="py-5 text-center">
                <p
                  className="text-3xl font-bold"
                  style={{
                    color: GREEN_DARK,
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  {num}
                </p>
                <p className="text-xs text-gray-400 mt-1">{label}</p>
              </div>
            ))}
          </Motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── ABOUT ───────────────────────────────────────────────────────────────────
function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Images collage */}
        <Motion.div {...fadeUp(0)} className="relative grid grid-cols-2 gap-4">
          <Img
            src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&q=80"
            alt="Room"
            className="rounded-xl w-full h-56 object-cover"
          />
          <Img
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&q=80"
            alt="Lobby"
            className="rounded-xl w-full h-56 object-cover mt-8"
          />
          <Img
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&q=80"
            alt="Pool"
            className="rounded-xl w-full h-40 object-cover"
          />
          <div
            className="rounded-xl flex items-center justify-center"
            style={{ background: GREEN, height: "10rem" }}
          >
            <div className="text-center text-white">
              <p
                className="text-4xl font-bold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                20+
              </p>
              <p className="text-sm opacity-80">Years of Excellence</p>
            </div>
          </div>
        </Motion.div>

        {/* Text */}
        <div>
          <Motion.p
            {...fadeUp(0.05)}
            className="text-sm tracking-widest uppercase mb-2"
            style={{ color: GREEN_LIGHT }}
          >
            About Us
          </Motion.p>
          <Motion.h2
            {...fadeUp(0.1)}
            className="text-4xl font-bold mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: GREEN_DARK,
            }}
          >
            Welcome to HUMX Resort
          </Motion.h2>
          <Motion.p
            {...fadeUp(0.15)}
            className="text-gray-500 text-sm leading-relaxed mb-4"
          >
            We take great pride in being the finest luxury resort in the heart
            of the city. Our commitment to excellence ensures every guest enjoys
            a uniquely curated experience that goes beyond expectations.
          </Motion.p>
          <Motion.p
            {...fadeUp(0.2)}
            className="text-gray-500 text-sm leading-relaxed mb-8"
          >
            With world-class amenities, exquisite dining, and personalised
            service, HUMX sets the standard for modern luxury hospitality.
          </Motion.p>
          <Motion.div {...fadeUp(0.25)} className="grid grid-cols-3 gap-4 mb-8">
            {[
              ["150", "Rooms"],
              ["98%", "Happy Guests"],
              ["30", "Awards"],
            ].map(([n, l]) => (
              <div
                key={l}
                className="text-center p-3 rounded-lg"
                style={{ background: GRAY_BG }}
              >
                <p className="text-2xl font-bold" style={{ color: GREEN }}>
                  {n}
                </p>
                <p className="text-xs text-gray-400">{l}</p>
              </div>
            ))}
          </Motion.div>
          <Motion.div {...fadeUp(0.3)} className="flex gap-3">
            <button
              className="px-6 py-3 rounded text-white text-sm font-medium"
              style={{ background: GREEN }}
            >
              Book Now
            </button>
            <button
              className="px-6 py-3 rounded text-sm font-medium border"
              style={{ borderColor: GREEN, color: GREEN }}
            >
              Learn More
            </button>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── ROOMS ───────────────────────────────────────────────────────────────────
const rooms = [
  {
    name: "Grand Presidential Suite",
    tag: "Best Seller",
    price: 599,
    size: "120 m²",
    guests: 4,
    beds: 2,
    img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80",
  },
  {
    name: "Deluxe King Room",
    tag: "",
    price: 299,
    size: "60 m²",
    guests: 2,
    beds: 1,
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80",
  },
  {
    name: "Superior Twin Room",
    tag: "",
    price: 249,
    size: "50 m²",
    guests: 2,
    beds: 2,
    img: "https://images.unsplash.com/photo-1562778612-e1e0cda9915c?w=400&q=80",
  },
  {
    name: "Junior Suite",
    tag: "",
    price: 399,
    size: "80 m²",
    guests: 3,
    beds: 1,
    img: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=400&q=80",
  },
  {
    name: "Executive Suite",
    tag: "",
    price: 449,
    size: "90 m²",
    guests: 2,
    beds: 1,
    img: "https://images.unsplash.com/photo-1587985064135-0366536eab42?w=400&q=80",
  },
];

function Rooms() {
  const [featured] = useState(rooms[0]);
  const others = rooms.slice(1);

  return (
    <section className="py-24" style={{ background: GRAY_BG }}>
      <div className="max-w-7xl mx-auto px-6">
        <Motion.div {...fadeUp()}>
          <SectionHeader
            tag="Our Accommodations"
            title="Rooms & Suites"
            sub="Choose from our carefully curated selection of rooms and suites designed for your perfect stay."
          />
        </Motion.div>

        {/* Featured room */}
        <Motion.div
          {...fadeUp(0.1)}
          className="bg-white rounded-2xl overflow-hidden shadow-lg mb-8 flex flex-col md:flex-row"
        >
          <div className="relative md:w-3/5">
            <Img
              src={featured.img}
              alt={featured.name}
              className="w-full h-72 md:h-full object-cover"
            />
            {featured.tag && (
              <span
                className="absolute top-4 left-4 text-xs px-3 py-1 rounded-full text-white font-medium"
                style={{ background: GOLD }}
              >
                {featured.tag}
              </span>
            )}
          </div>
          <div className="p-8 flex flex-col justify-center md:w-2/5">
            <h3
              className="text-2xl font-bold mb-3"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: GREEN_DARK,
              }}
            >
              {featured.name}
            </h3>
            <div className="flex gap-4 text-sm text-gray-400 mb-4">
              <span>📐 {featured.size}</span>
              <span>👤 {featured.guests} Guests</span>
              <span>
                🛏 {featured.beds} Bed{featured.beds > 1 ? "s" : ""}
              </span>
            </div>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Experience unparalleled luxury in our flagship suite, featuring
              panoramic city views, a private terrace, and bespoke furnishings.
            </p>
            <div className="flex items-center justify-between">
              <div>
                <span
                  className="text-3xl font-bold"
                  style={{ color: GREEN_DARK }}
                >
                  ${featured.price}
                </span>
                <span className="text-sm text-gray-400">/night</span>
              </div>
              <button
                className="px-5 py-2.5 rounded text-white text-sm font-medium"
                style={{ background: GREEN }}
              >
                Book Now →
              </button>
            </div>
          </div>
        </Motion.div>

        {/* Other rooms grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {others.map((room, i) => (
            <Motion.div
              key={room.name}
              {...stagger(i)}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow group"
            >
              <div className="overflow-hidden h-44">
                <Img
                  src={room.img}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h4
                  className="font-semibold text-sm mb-1"
                  style={{ color: GREEN_DARK }}
                >
                  {room.name}
                </h4>
                <div className="flex gap-3 text-xs text-gray-400 mb-3">
                  <span>📐 {room.size}</span>
                  <span>👤 {room.guests}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span
                    className="font-bold text-base"
                    style={{ color: GREEN }}
                  >
                    ${room.price}
                    <span className="text-xs text-gray-400 font-normal">
                      /night
                    </span>
                  </span>
                  <div className="flex">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-yellow-400 text-xs">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Motion.div>
          ))}
        </div>

        <Motion.div {...fadeUp(0.3)} className="text-center mt-10">
          <button
            className="px-8 py-3 rounded border text-sm font-medium transition-colors hover:text-white"
            style={{ borderColor: GREEN, color: GREEN }}
          >
            View All Rooms
          </button>
        </Motion.div>
      </div>
    </section>
  );
}

// ─── AMENITIES ───────────────────────────────────────────────────────────────
const amenities = [
  {
    icon: "🏊",
    title: "High Speed Resort Pool",
    desc: "Olympic-size heated pool with poolside bar service and private cabanas for a refreshing escape.",
  },
  {
    icon: "🍽️",
    title: "Rooftop Dining",
    desc: "Savour exquisite cuisine at our rooftop restaurant with panoramic city and skyline views.",
  },
  {
    icon: "🎾",
    title: "Water Rafting",
    desc: "Experience the thrill of guided white-water rafting adventures in pristine natural surroundings.",
  },
  {
    icon: "💪",
    title: "Modern Fitness Center",
    desc: "State-of-the-art gym with personal trainers, yoga studio, and the latest fitness equipment.",
  },
  {
    icon: "🍜",
    title: "Japanese Restaurant",
    desc: "Authentic Japanese cuisine prepared by master chefs using the finest seasonal ingredients.",
  },
  {
    icon: "💆",
    title: "Luxury Spa",
    desc: "Rejuvenate your body and mind with our full-service spa offering holistic treatments and therapies.",
  },
];

function Amenities() {
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
          {amenities.map((a, i) => (
            <Motion.div
              key={a.title}
              {...stagger(i)}
              className="group rounded-2xl overflow-hidden relative cursor-pointer"
              style={{ background: i % 2 === 0 ? "#1b4332" : "#2d6a4f" }}
            >
              <div className="p-6 text-white">
                <div className="text-4xl mb-4">{a.icon}</div>
                <h3 className="font-bold text-lg mb-2">{a.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {a.desc}
                </p>
                <button className="mt-4 text-xs text-white/80 hover:text-white flex items-center gap-1 transition-colors">
                  Read More →
                </button>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Business Traveller",
    text: "An absolutely extraordinary experience. The staff went above and beyond to ensure every detail of my stay was perfect. I'll definitely be returning.",
    avatar: "https://i.pravatar.cc/60?img=1",
  },
  {
    name: "Michael Chen",
    role: "Honeymoon Guest",
    text: "We celebrated our honeymoon here and it was magical. The suite was breathtaking, the food superb, and the service impeccable.",
    avatar: "https://i.pravatar.cc/60?img=3",
  },
  {
    name: "Emily Rodriguez",
    role: "Leisure Traveller",
    text: "From check-in to check-out, everything was flawless. The spa treatments were divine and the pool area is simply stunning.",
    avatar: "https://i.pravatar.cc/60?img=5",
  },
  {
    name: "Rob Thompson",
    role: "Corporate Guest",
    text: "HUMX's conference facilities are world-class. Everything was handled with professionalism and the team made our event a success.",
    avatar: "https://i.pravatar.cc/60?img=7",
  },
];

function Testimonials() {
  return (
    <section className="py-24" style={{ background: GRAY_BG }}>
      <div className="max-w-7xl mx-auto px-6">
        <Motion.div {...fadeUp()}>
          <SectionHeader
            tag="What Guests Say"
            title="Testimonials"
            sub="Hear from our valued guests about their unforgettable experiences at HUMX Resort."
          />
        </Motion.div>
        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
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
                    style={{ color: GREEN_DARK }}
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

// ─── OFFERS ──────────────────────────────────────────────────────────────────
const offers = [
  {
    tag: "New",
    title: "Weekend Getaway",
    subtitle: "2 Nights Stay",
    price: 229,
    img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&q=80",
  },
  {
    tag: "Popular",
    title: "Breakfast Deal",
    subtitle: "Inclusive Package",
    price: 149,
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80",
  },
  {
    tag: "",
    title: "Farmers Dining",
    subtitle: "Organic Experience",
    price: 198,
    img: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=400&q=80",
  },
];

function CountdownTimer() {
  const [time, setTime] = useState({ h: 11, m: 43, s: 22 });
  useEffect(() => {
    const id = setInterval(() => {
      setTime((t) => {
        let { h, m, s } = t;
        s--;
        if (s < 0) {
          s = 59;
          m--;
        }
        if (m < 0) {
          m = 59;
          h--;
        }
        if (h < 0) {
          h = 23;
        }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);
  const pad = (n) => String(n).padStart(2, "0");
  return (
    <div className="flex gap-3">
      {[
        ["Hours", time.h],
        ["Mins", time.m],
        ["Secs", time.s],
      ].map(([l, v]) => (
        <div key={l} className="text-center">
          <div className="bg-white/20 rounded-lg w-14 h-14 flex items-center justify-center text-2xl font-bold text-white">
            {pad(v)}
          </div>
          <p className="text-white/70 text-xs mt-1">{l}</p>
        </div>
      ))}
    </div>
  );
}

function Offers() {
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
          {offers.map((o, i) => (
            <Motion.div
              key={o.title}
              {...stagger(i)}
              className="rounded-2xl overflow-hidden shadow group cursor-pointer"
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
                    style={{ background: o.tag === "New" ? GREEN_LIGHT : GOLD }}
                  >
                    {o.tag}
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3
                  className="font-bold text-base mb-0.5"
                  style={{ color: GREEN_DARK }}
                >
                  {o.title}
                </h3>
                <p className="text-sm text-gray-400 mb-3">{o.subtitle}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xl" style={{ color: GREEN }}>
                    ${o.price}
                    <span className="text-xs text-gray-400 font-normal">
                      /person
                    </span>
                  </span>
                  <button
                    className="text-xs px-4 py-2 rounded text-white"
                    style={{ background: GREEN }}
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
          style={{ background: GREEN_DARK }}
        >
          <div>
            <p className="text-white/60 text-sm mb-1">Limited Time Offer</p>
            <h3
              className="text-white text-xl font-bold"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
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
            style={{ background: GREEN_LIGHT }}
          >
            Grab Now →
          </button>
        </Motion.div>
      </div>
    </section>
  );
}

// ─── CTA BANNER ──────────────────────────────────────────────────────────────
function CtaBanner() {
  return (
    <section className="py-20" style={{ background: GRAY_BG }}>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Motion.p
            {...fadeUp(0)}
            className="text-sm tracking-widest uppercase mb-2"
            style={{ color: GREEN_LIGHT }}
          >
            Exclusive Experience
          </Motion.p>
          <Motion.h2
            {...fadeUp(0.1)}
            className="text-4xl font-bold mb-4 leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: GREEN_DARK,
            }}
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
            {[
              "Personalised concierge service 24/7",
              "Exclusive member discounts up to 40%",
              "Complimentary airport transfers",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span style={{ color: GREEN }}>✓</span>
                {t}
              </li>
            ))}
          </Motion.ul>
          <Motion.div {...fadeUp(0.3)} className="flex gap-3">
            <button
              className="px-6 py-3 rounded text-white text-sm font-medium"
              style={{ background: GREEN }}
            >
              Book Now
            </button>
            <button
              className="px-6 py-3 rounded text-sm font-medium border"
              style={{ borderColor: GREEN, color: GREEN }}
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
            <p className="text-2xl font-bold" style={{ color: GREEN }}>
              25%
            </p>
            <p className="text-xs" style={{ color: GREEN_LIGHT }}>
              OFF
            </p>
          </div>
        </Motion.div>
      </div>
    </section>
  );
}

// ─── EVENTS ──────────────────────────────────────────────────────────────────
const events = [
  {
    title: "Wedding Conference",
    date: "March 15, 2026",
    time: "9:00 AM",
    location: "Grand Ballroom",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80",
  },
  {
    title: "Business Conference",
    date: "March 22, 2026",
    time: "10:00 AM",
    location: "Conference Hall",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80",
  },
  {
    title: "Special Occasions",
    date: "March 28, 2026",
    time: "7:00 PM",
    location: "Rooftop Terrace",
    img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&q=80",
  },
  {
    title: "Live Jazz Night",
    date: "April 2, 2026",
    time: "8:00 PM",
    location: "Lounge Bar",
    img: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&q=80",
  },
  {
    title: "Annual Gala Dinner",
    date: "April 10, 2026",
    time: "6:30 PM",
    location: "Grand Ballroom",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80",
  },
  {
    title: "VIP Gatherings",
    date: "April 18, 2026",
    time: "5:00 PM",
    location: "Private Suite",
    img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&q=80",
  },
];

function Events() {
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
          {events.map((e, i) => (
            <Motion.div
              key={e.title}
              {...stagger(i)}
              className="rounded-2xl overflow-hidden shadow group"
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
                  style={{ color: GREEN_DARK }}
                >
                  {e.title}
                </h3>
                <div className="space-y-1 text-xs text-gray-400">
                  <p>📅 {e.date}</p>
                  <p>🕐 {e.time}</p>
                  <p>📍 {e.location}</p>
                </div>
                <button
                  className="mt-4 text-xs px-4 py-2 rounded border w-full transition-colors hover:text-white hover:bg-opacity-90"
                  style={{ borderColor: GREEN, color: GREEN }}
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

// ─── LOCATION & ACTIVITIES ───────────────────────────────────────────────────
const activities = [
  {
    title: "Stonehenge",
    distance: "2.5 km",
    img: "https://images.unsplash.com/photo-1599833975787-5c143f373c30?w=300&q=80",
  },
  {
    title: "Mountain Hike",
    distance: "5 km",
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=300&q=80",
  },
  {
    title: "City Centre",
    distance: "1.2 km",
    img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=300&q=80",
  },
  {
    title: "Beach Resort",
    distance: "8 km",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&q=80",
  },
  {
    title: "Waterfall Park",
    distance: "12 km",
    img: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=300&q=80",
  },
  {
    title: "Nature Trail",
    distance: "3 km",
    img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&q=80",
  },
];

function LocationActivities() {
  return (
    <section className="py-24" style={{ background: GRAY_BG }}>
      <div className="max-w-7xl mx-auto px-6">
        <Motion.div {...fadeUp()}>
          <SectionHeader
            tag="Explore"
            title="Location & Activities"
            sub="Discover the wonders that surround HUMX Resort — adventure is just a short distance away."
          />
        </Motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Map placeholder */}
          <Motion.div
            {...fadeUp(0.1)}
            className="md:col-span-1 rounded-2xl overflow-hidden shadow"
            style={{ minHeight: "320px" }}
          >
            <div
              className="w-full h-full flex items-center justify-center text-white text-sm"
              style={{ background: GREEN_DARK, minHeight: "320px" }}
            >
              <div className="text-center">
                <div className="text-4xl mb-3">📍</div>
                <p className="font-bold text-lg mb-1">HUMX Resort</p>
                <p className="text-white/60 text-xs">
                  123 Luxury Avenue, City Centre
                </p>
                <button className="mt-4 px-4 py-2 rounded text-xs text-white border border-white/30 hover:bg-white/10 transition-colors">
                  Get Directions
                </button>
              </div>
            </div>
          </Motion.div>
          {/* Activities grid */}
          <div className="md:col-span-2 grid grid-cols-3 gap-4">
            {activities.map((a, i) => (
              <Motion.div
                key={a.title}
                {...stagger(i)}
                className="relative rounded-xl overflow-hidden group cursor-pointer h-36"
              >
                <Img
                  src={a.img}
                  alt={a.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="text-xs font-bold">{a.title}</p>
                  <p className="text-xs text-white/70">{a.distance}</p>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>

        <Motion.div {...fadeUp(0.3)} className="text-center mt-10">
          <button
            className="px-8 py-3 rounded text-white text-sm font-medium"
            style={{ background: GREEN }}
          >
            View All Nearby Attractions →
          </button>
        </Motion.div>
      </div>
    </section>
  );
}

// ─── GALLERY STRIP ────────────────────────────────────────────────────────────
const galleryImgs = [
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=250&q=80",
  "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=250&q=80",
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=250&q=80",
  "https://images.unsplash.com/photo-1559508551-44bff1de756b?w=250&q=80",
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=250&q=80",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=250&q=80",
  "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=250&q=80",
];

function GalleryStrip() {
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
        <div className="grid grid-cols-4 md:grid-cols-7 gap-2">
          {galleryImgs.map((src, i) => (
            <Motion.div
              key={i}
              {...stagger(i)}
              className="rounded-xl overflow-hidden h-24 group cursor-pointer"
            >
              <Img
                src={src}
                alt=""
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────
function Footer() {
  const cols = [
    {
      head: "Quick Links",
      links: ["Home", "About Us", "Rooms", "Amenities", "Offers", "Events"],
    },
    {
      head: "Services",
      links: [
        "Restaurant",
        "Spa & Wellness",
        "Fitness Centre",
        "Conference Hall",
        "Airport Transfer",
      ],
    },
    {
      head: "Contact",
      links: [
        "123 Luxury Avenue",
        "City Centre, NY 10001",
        "+1 (800) 123-4567",
        "info@HUMX.com",
      ],
    },
  ];

  return (
    <footer style={{ background: GREEN_DARK }}>
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <h3
            className="text-white text-2xl font-bold mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            HUMX
          </h3>
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            Redefining luxury hospitality with world-class amenities and
            personalised service since 2005.
          </p>
          <div className="flex gap-3">
            {["f", "t", "in", "ig"].map((s) => (
              <a
                key={s}
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xs transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.head}>
            <h4 className="text-white font-semibold mb-4 text-sm">{c.head}</h4>
            <ul className="space-y-2">
              {c.links.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-white/60 text-sm hover:text-white transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 py-5 text-center text-white/40 text-xs">
        © 2026 HUMX Resort. All rights reserved.
      </div>
    </footer>
  );
}

// ─── APP ─────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Lato:wght@300;400;700&display=swap');
        * { font-family: 'Lato', sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
      `}</style>
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Amenities />
      <Testimonials />
      <Offers />
      <CtaBanner />
      <Events />
      <LocationActivities />
      <GalleryStrip />
      <Footer />
    </>
  );
}
