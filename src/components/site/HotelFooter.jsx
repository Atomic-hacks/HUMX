import React from "react";
import { Link } from "react-router-dom";
import Container from "../ui/Container";

const GOLD = "var(--sage-accent)";
const CREAM = "var(--sage-bg)";

export default function HotelFooter() {
  return (
    <footer id="contact">
      <div className="relative h-[190px] overflow-hidden sm:h-[220px]">
        <img
          src="https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=1920&q=60"
          alt="HUMX lobby"
          className="h-full w-full object-cover object-center"
          style={{ filter: "brightness(0.55)" }}
        />
        <div className="absolute inset-0 flex items-center px-4 sm:px-6 lg:px-12">
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(44px, 7vw, 96px)",
              fontWeight: 400,
              color: GOLD,
              letterSpacing: "-0.02em",
            }}
          >
            HUMX
          </h2>
        </div>
        <Link
          to="/rooms"
          className="absolute right-4 top-1/2 hidden h-[118px] w-[118px] -translate-y-1/2 items-center justify-center rounded-full text-center transition-transform hover:scale-105 md:flex"
          style={{
            background: "rgba(180, 201, 186, 0.94)",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 16,
            fontWeight: 500,
            color: "var(--sage-text)",
            lineHeight: 1.3,
          }}
        >
          Select
          <br />
          Room
        </Link>
      </div>

      <div className="grid grid-cols-1" style={{ background: CREAM }}>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="px-4 py-10 sm:px-6 lg:border-r lg:border-[var(--sage-border)] lg:px-12">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="mb-5 text-xs uppercase tracking-wider" style={{ color: "var(--sage-kicker)", fontWeight: 400 }}>
                  Pages
                </p>
                <Link to="/" className="mb-3 block text-sm hover:underline" style={{ color: "var(--sage-muted)", fontWeight: 300 }}>Home</Link>
                <Link to="/our-hotel" className="mb-3 block text-sm hover:underline" style={{ color: "var(--sage-muted)", fontWeight: 300 }}>Our Hotel</Link>
                <Link to="/rooms" className="mb-3 block text-sm hover:underline" style={{ color: "var(--sage-muted)", fontWeight: 300 }}>Rooms</Link>
                <Link to="/contact" className="mb-3 block text-sm hover:underline" style={{ color: "var(--sage-muted)", fontWeight: 300 }}>Contact</Link>
              </div>
              <div>
                <p className="mb-5 text-xs uppercase tracking-wider" style={{ color: "var(--sage-kicker)", fontWeight: 400 }}>
                  Booking
                </p>
                <Link to="/rooms" className="mb-3 block text-sm hover:underline" style={{ color: "var(--sage-muted)", fontWeight: 300 }}>Choose Room</Link>
                <Link to="/booking/view" className="mb-3 block text-sm hover:underline" style={{ color: "var(--sage-muted)", fontWeight: 300 }}>My Bookings</Link>
              </div>
            </div>
          </div>

          <div className="bg-[var(--sage-surface)]/85 backdrop-blur-sm px-4 py-10 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
              <div>
                <p className="mb-3 text-xs uppercase tracking-wider" style={{ color: "var(--sage-kicker)", fontWeight: 400 }}>Email</p>
                <p className="mb-8 text-sm" style={{ color: "var(--sage-text)", fontWeight: 400 }}>concierge@humxhotel.com</p>
                <p className="mb-3 text-xs uppercase tracking-wider" style={{ color: "var(--sage-kicker)", fontWeight: 400 }}>Phone</p>
                <p className="text-sm" style={{ color: "var(--sage-text)", fontWeight: 400 }}>+234 800 4869 000</p>
              </div>
              <div>
                <p className="mb-3 text-xs uppercase tracking-wider" style={{ color: "var(--sage-kicker)", fontWeight: 400 }}>Address</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--sage-text)", fontWeight: 400 }}>
                  18 Ahmadu Bello Way
                  <br />
                  Victoria Island
                  <br />
                  Lagos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Container className="flex flex-col items-start justify-between gap-3 border-t border-[var(--sage-border)] bg-[var(--sage-surface)] px-4 py-5 sm:flex-row sm:items-center sm:px-6 lg:px-12">
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 400, color: "var(--sage-text)" }}>
          HUMX
        </p>
        <div className="flex items-center gap-6 text-sm" style={{ color: "var(--sage-muted)", fontWeight: 300 }}>
          {['Instagram', 'X', 'Facebook'].map((social) => (
            <a key={social} href="#" className="hover:underline">{social}</a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
