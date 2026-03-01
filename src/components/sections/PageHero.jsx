import React from "react";
import HotelNavbar from "../site/HotelNavbar";

export default function PageHero({ image, alt, title, subtitle, height = 360 }) {
  return (
    <section
      className="fixed left-0 right-0 top-0 z-0 overflow-hidden"
      style={{ height }}
    >
      <img src={image} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
      <HotelNavbar tone="light" />
      <div className="absolute bottom-8 left-4 sm:left-6 lg:left-12">
        <h1 className="text-[clamp(40px,5vw,62px)] font-light text-white">{title}</h1>
        {subtitle ? <p className="mt-2 text-sm text-white/85">{subtitle}</p> : null}
      </div>
    </section>
  );
}
