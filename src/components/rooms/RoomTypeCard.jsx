import React from "react";
import { Link } from "react-router-dom";
import { formatNaira } from "../../data/rooms";

export default function RoomTypeCard({ room, className = "", compact = false }) {
  return (
    <Link
      to={`/rooms/${room.id}`}
      className={`group relative block overflow-hidden rounded-[var(--ui-radius-md)] border border-[var(--sage-border)]/45 shadow-[var(--ui-shadow-soft)] ${className}`}
      style={{ height: compact ? 420 : 500 }}
    >
      <img
        src={room.thumbImg}
        alt={room.name}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/38 to-transparent opacity-95" />

      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--sage-accent)]">{room.category}</p>
        <h3
          className="mt-1 text-white"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(30px,4.2vw,36px)", fontWeight: 400, lineHeight: 1 }}
        >
          {room.name}
        </h3>

        <p className="mt-2 max-h-0 overflow-hidden text-xs leading-relaxed text-white/85 transition-all duration-500 group-hover:max-h-24">
          {room.description}
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-white/90">
          <span>{room.size} · {room.guests}</span>
          <span>{formatNaira(room.price)} / night</span>
        </div>
      </div>
    </Link>
  );
}
