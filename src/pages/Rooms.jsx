import React, { useEffect } from "react";
import RoomTypeCard from "../components/rooms/RoomTypeCard";
import HotelFooter from "../components/site/HotelFooter";
import PageHero from "../components/sections/PageHero";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import SectionHeader from "../components/ui/SectionHeader";
import { ButtonLink } from "../components/ui/Button";
import { rooms } from "../data/rooms";
import { animateStaggerGrid, gsap } from "../../lib/animations/gsap";

const CREAM = "var(--sage-bg)";

export default function RoomsPage() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".rooms-banner-title",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.22 },
      );
      const grid = document.querySelector("[data-rooms-grid]");
      if (grid) animateStaggerGrid(grid);
    });
    return () => ctx.revert();
  }, []);

  return (
    <div style={{ background: CREAM }}>
      <PageHero
        image="https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=1920&q=80"
        alt="HUMX rooms"
        title={<span className="rooms-banner-title">HUMX Room Types</span>}
        subtitle="Regular, Deluxe, Suite, Presidential"
      />

      <main className="relative z-20 mt-[360px]" style={{ background: CREAM }}>
        <Section>
          <Container>
            <SectionHeader
              title="Available Rooms"
              action={
                <ButtonLink to="/booking/view" variant="secondary">
                  View My Bookings
                </ButtonLink>
              }
            />

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2" data-rooms-grid>
              {rooms.map((room) => (
                <RoomTypeCard key={room.id} room={room} className="ui-stagger-item" />
              ))}
            </div>

            <p className="mt-8 text-sm text-[var(--sage-muted)]/90">
              Click any room to view full details and book that exact room type.
            </p>
          </Container>
        </Section>

        <HotelFooter />
      </main>
    </div>
  );
}
