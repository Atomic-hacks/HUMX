import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import HotelFooter from "../components/site/HotelFooter";
import HotelNavbar from "../components/site/HotelNavbar";
import Card from "../components/ui/Card";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import { ButtonLink } from "../components/ui/Button";
import { formatNaira, rooms } from "../data/rooms";
import { useBooking } from "../context/BookingContext";
import { animateSectionReveal, gsap } from "../../lib/animations/gsap";

const GOLD = "var(--sage-accent)";
const CREAM = "var(--sage-bg)";

export default function BookingConfirmationPage() {
  const [searchParams] = useSearchParams();
  const { bookings, confirmation } = useBooking();
  const ref = searchParams.get("ref");

  const booking = bookings.find((item) => item.reference === ref) ?? confirmation;
  const room = booking ? rooms.find((item) => item.id === booking.roomId) : null;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const target = document.querySelector("[data-confirm-card]");
      if (target) animateSectionReveal(target, { y: 30, duration: 0.9, start: "top 94%" });
    });
    return () => ctx.revert();
  }, []);

  if (!booking) {
    return (
      <div style={{ background: CREAM, minHeight: "100vh" }}>
        <div className="relative h-20 sm:h-24">
          <HotelNavbar tone="dark" />
        </div>

        <Section className="!pt-4">
          <Container>
            <Card interactive className="mx-auto max-w-3xl" data-confirm-card>
              <h1 className="text-[clamp(36px,4.8vw,44px)] text-[var(--sage-text)]">No booking found</h1>
              <p className="mt-4 text-sm text-[var(--sage-muted)]/90">
                We could not locate a recent reservation. Start by selecting a room.
              </p>
              <div className="mt-8">
                <ButtonLink to="/rooms" variant="primary" size="lg">
                  Choose Room
                </ButtonLink>
              </div>
            </Card>
          </Container>
        </Section>
        <HotelFooter />
      </div>
    );
  }

  return (
    <div style={{ background: CREAM, minHeight: "100vh" }}>
      <div className="relative h-20 sm:h-24">
        <HotelNavbar tone="dark" />
      </div>

      <Section className="!pt-4">
        <Container>
          <Card interactive className="mx-auto max-w-4xl" data-confirm-card>
            <p className="text-xs uppercase tracking-wider text-[var(--sage-kicker)]">Booking Confirmed</p>
            <h1 className="text-[clamp(38px,5vw,48px)] leading-[1.1] text-[var(--sage-text)]">
              Your HUMX stay is reserved.
            </h1>

            <div className="mt-8 grid gap-4 border border-[var(--sage-border)] px-5 py-6 text-sm text-[var(--sage-muted)] md:grid-cols-2 sm:px-6">
              <p><span className="text-[var(--sage-kicker)]">Reference:</span> <strong>{booking.reference}</strong></p>
              <p><span className="text-[var(--sage-kicker)]">Room:</span> {room?.name ?? booking.roomId}</p>
              <p><span className="text-[var(--sage-kicker)]">Dates:</span> {booking.checkIn} to {booking.checkOut}</p>
              <p><span className="text-[var(--sage-kicker)]">Guests:</span> {booking.guests}</p>
              <p><span className="text-[var(--sage-kicker)]">Booked by:</span> {booking.name}</p>
              <p><span className="text-[var(--sage-kicker)]">Total:</span> {formatNaira(booking.total)}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to="/booking/view" variant="primary" size="lg" style={{ background: GOLD }}>
                View Bookings
              </ButtonLink>
              <Link
                to="/rooms"
                className="inline-flex items-center justify-center rounded-[var(--ui-radius-pill)] border border-[var(--sage-accent)] px-8 py-3 text-sm text-[var(--sage-accent-dark)] transition-colors hover:bg-[var(--sage-bg)]"
              >
                Browse Rooms
              </Link>
            </div>
          </Card>
        </Container>
      </Section>
      <HotelFooter />
    </div>
  );
}
