import React, { useEffect } from "react";
import HotelFooter from "../components/site/HotelFooter";
import HotelNavbar from "../components/site/HotelNavbar";
import Card from "../components/ui/Card";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import { ButtonLink } from "../components/ui/Button";
import { formatNaira, rooms } from "../data/rooms";
import { useBooking } from "../context/BookingContext";
import { animateStaggerGrid, gsap } from "../../lib/animations/gsap";

const CREAM = "var(--sage-bg)";

export default function ViewBookingsPage() {
  const { bookings } = useBooking();
  const recent = bookings.slice(0, 6);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const grid = document.querySelector("[data-bookings-grid]");
      if (grid) animateStaggerGrid(grid);
    });
    return () => ctx.revert();
  }, [bookings.length]);

  return (
    <div style={{ background: CREAM, minHeight: "100vh" }}>
      <div className="relative h-20 sm:h-24">
        <HotelNavbar tone="dark" />
      </div>

      <Section className="!pt-4">
        <Container>
          <p className="text-xs uppercase tracking-wider text-[var(--sage-kicker)]">Reservations</p>
          <h1 className="text-[clamp(38px,5vw,50px)] leading-[1.05] text-[var(--sage-text)]">
            Recent HUMX Bookings
          </h1>

          {recent.length === 0 ? (
            <Card className="mt-8 max-w-2xl">
              <p className="text-sm text-[var(--sage-muted)]/90">
                No bookings yet. Start with a room selection.
              </p>
              <div className="mt-6">
                <ButtonLink to="/rooms" variant="primary" size="lg">
                  Browse Rooms
                </ButtonLink>
              </div>
            </Card>
          ) : (
            <div className="mt-8 grid gap-4" data-bookings-grid>
              {recent.map((booking) => {
                const room = rooms.find((item) => item.id === booking.roomId);
                return (
                  <Card key={booking.reference} className="ui-stagger-item">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-[var(--sage-kicker)]">
                          {booking.reference}
                        </p>
                        <h2 className="text-[clamp(28px,4.2vw,32px)] text-[var(--sage-text)]">
                          {room?.name ?? booking.roomId}
                        </h2>
                        <p className="text-sm text-[var(--sage-muted)]/90">
                          {booking.checkIn} to {booking.checkOut} · {booking.guests} guests
                        </p>
                      </div>
                      <p className="text-[clamp(32px,4.6vw,38px)] text-[var(--sage-text)]">
                        {formatNaira(booking.total)}
                      </p>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}
        </Container>
      </Section>
      <HotelFooter />
    </div>
  );
}
