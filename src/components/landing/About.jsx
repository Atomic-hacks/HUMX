import { motion as Motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";
import { COLORS, FONTS } from "../../constants/theme";
import Img from "./Img";

export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {" "}
        {/* Text */}
        <div>
          <Motion.p
            {...fadeUp(0.05)}
            className="text-sm tracking-widest uppercase mb-2"
            style={{ color: COLORS.GREEN_LIGHT }}
          >
            About Us
          </Motion.p>
          <Motion.h2 {...fadeUp(0.1)} className="text-4xl font-bold mb-4">
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
                style={{ background: COLORS.GRAY_BG }}
              >
                <p
                  className="text-2xl font-bold"
                  style={{ color: COLORS.GREEN }}
                >
                  {n}
                </p>
                <p className="text-xs text-gray-400">{l}</p>
              </div>
            ))}
          </Motion.div>
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
        {/* Images collage */}
        <Motion.div {...fadeUp(0)} className="relative gap-4">
          <div className="relative ">
            <div className="relative w-[90%] h-80">
              <Img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&q=80"
                alt="Lobby"
                className="rounded-xl w-full object-cover mt-8"
              />
              <div
                className="top-2 right-2 rounded-full absolute flex items-center justify-center px-4 py-12"
                style={{ background: COLORS.GREEN }}
              >
                <div className="text-center text-white">
                  <p className="text-2xl font-bold">20+</p>
                  <p className="opacity-80 text-xs">Years of Excellence</p>
                </div>
              </div>
            </div>

            <Img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&q=80"
              alt="Pool"
              className="absolute -bottom-36 -left-20 rounded-xl w-72 h-60 object-cover"
            />
          </div>
        </Motion.div>
      </div>
    </section>
  );
}
