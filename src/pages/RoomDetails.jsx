import React, { useEffect } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import HotelFooter from "../components/site/HotelFooter";
import PageHero from "../components/sections/PageHero";
import Card from "../components/ui/Card";
import Container from "../components/ui/Container";
import Divider from "../components/ui/Divider";
import Input from "../components/ui/Input";
import Section from "../components/ui/Section";
import { formatNaira, rooms } from "../data/rooms";
import { useBooking } from "../context/BookingContext";
import { animateSectionReveal, gsap } from "../../lib/animations/gsap";

const GOLD = "var(--sage-accent)";
const CREAM = "var(--sage-bg)";

export default function RoomDetailsPage() {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const room = rooms.find((item) => item.id === roomId);
  const { form, updateField, summary, submitBooking } = useBooking();

  useEffect(() => {
    if (room) updateField("roomId", room.id);
  }, [room, updateField]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".detail-title",
        { y: 34, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
      );
      gsap.utils.toArray("[data-detail-reveal]").forEach((el) => animateSectionReveal(el));
    });
    return () => ctx.revert();
  }, []);

  if (!room) return <Navigate to="/rooms" replace />;

  const handleSubmit = (event) => {
    event.preventDefault();
    const booking = submitBooking();
    navigate(`/confirmation?ref=${booking.reference}`);
  };

  return (
    <div>
      <PageHero image={room.bannerImg} alt={room.name} title={<span className="detail-title">{room.name}</span>} />

      <main className="relative z-20 mt-[360px]">
        <Section className="bg-[var(--sage-surface)] !py-0">
          <Container className="grid lg:grid-cols-2">
            <div className="border-b border-[var(--sage-border)] py-12 lg:border-b-0 lg:border-r lg:py-16" data-detail-reveal>
              <p className="text-xs uppercase tracking-wide text-[var(--sage-kicker)]">{room.category}</p>
              <h2 className="mt-3 text-[clamp(34px,4.8vw,44px)] text-[var(--sage-text)]">Room Details</h2>

              <div className="mt-8 flex flex-wrap gap-8 sm:gap-12">
                <div>
                  <p className="text-xs uppercase tracking-wide text-[var(--sage-kicker)]">Size</p>
                  <p className="mt-1 text-base text-[var(--sage-text)]">{room.size}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-[var(--sage-kicker)]">Capacity</p>
                  <p className="mt-1 text-base text-[var(--sage-text)]">{room.guests}</p>
                </div>
              </div>

              <Divider className="my-8" />

              <p className="max-w-xl text-sm leading-relaxed text-[var(--sage-muted)]/90">{room.longDescription}</p>

              <p className="mt-8 text-xs uppercase tracking-wide text-[var(--sage-kicker)]">Starting at</p>
              <p className="text-[clamp(36px,5vw,44px)] leading-none text-[var(--sage-text)]">
                {formatNaira(room.price)}
              </p>
              <p className="text-sm text-[var(--sage-kicker)]">/ night</p>

              <a
                href="#detail-booking"
                className="mt-8 inline-flex rounded-[var(--ui-radius-pill)] border border-[var(--sage-accent)] bg-[var(--sage-accent)] px-8 py-3 text-sm text-[var(--sage-text)] transition-colors hover:border-[var(--sage-accent-dark)] hover:bg-[var(--sage-accent-dark)] hover:text-white"
              >
                Book This Room
              </a>
            </div>

            <div className="h-[300px] py-0 sm:h-[380px] lg:h-auto" data-detail-reveal>
              <img src={room.detailImg} alt={room.name} className="h-full w-full object-cover" />
            </div>
          </Container>
        </Section>

        <Section id="detail-booking" className="bg-[var(--sage-bg)]">
          <Container>
            <form onSubmit={handleSubmit} className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
              <Card data-detail-reveal>
                <h3 className="text-[clamp(30px,4.4vw,36px)] text-[var(--sage-text)]">Complete Reservation</h3>

                <div className="mt-6 grid gap-4 md:grid-cols-2 text-sm text-[var(--sage-muted)]">
                  <label>
                    Full Name
                    <Input required value={form.name} onChange={(e) => updateField("name", e.target.value)} />
                  </label>
                  <label>
                    Email
                    <Input type="email" required value={form.email} onChange={(e) => updateField("email", e.target.value)} />
                  </label>
                  <label>
                    Check-in
                    <Input type="date" required value={form.checkIn} onChange={(e) => updateField("checkIn", e.target.value)} />
                  </label>
                  <label>
                    Check-out
                    <Input type="date" required value={form.checkOut} onChange={(e) => updateField("checkOut", e.target.value)} />
                  </label>
                  <label>
                    Guests
                    <select
                      value={form.guests}
                      onChange={(e) => updateField("guests", Number(e.target.value))}
                      className="mt-2 w-full rounded-[var(--ui-radius-sm)] border border-[var(--sage-border)] bg-white/70 px-4 py-3 text-sm text-[var(--sage-text)] outline-none"
                    >
                      {[1, 2, 3, 4, 5, 6].map((count) => (
                        <option key={count} value={count}>
                          {count}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label>
                    Room Type
                    <Input disabled value={room.name} className="bg-[var(--sage-surface)]" />
                  </label>
                </div>
              </Card>

              <Card glass data-detail-reveal>
                <h3 className="text-[clamp(30px,4.4vw,34px)] text-[var(--sage-text)]">Price Summary</h3>
                <div className="mt-6 space-y-3 text-sm text-[var(--sage-muted)]">
                  <div className="flex justify-between"><span>Room rate</span><span>{formatNaira(summary.roomRate)}</span></div>
                  <div className="flex justify-between"><span>Nights</span><span>{summary.nights}</span></div>
                  <div className="flex justify-between"><span>Room total</span><span>{formatNaira(summary.roomTotal)}</span></div>
                  <div className="flex justify-between"><span>Service fee</span><span>{formatNaira(summary.serviceFee)}</span></div>
                  <div className="flex justify-between"><span>Taxes</span><span>{formatNaira(summary.taxes)}</span></div>
                </div>

                <Divider className="my-6" />

                <div className="flex items-end justify-between gap-4">
                  <span className="text-sm uppercase tracking-wide text-[var(--sage-kicker)]">Total</span>
                  <p className="text-[clamp(34px,4.8vw,40px)] text-[var(--sage-text)]">{formatNaira(summary.total)}</p>
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full rounded-[var(--ui-radius-pill)] border border-[var(--sage-accent)] bg-[var(--sage-accent)] px-8 py-3 text-sm text-[var(--sage-text)] transition-colors hover:border-[var(--sage-accent-dark)] hover:bg-[var(--sage-accent-dark)] hover:text-white"
                >
                  Confirm Booking
                </button>
                <Link
                  to="/rooms"
                  className="mt-3 block w-full rounded-[var(--ui-radius-pill)] border border-[var(--sage-accent)] px-8 py-3 text-center text-sm text-[var(--sage-accent-dark)] transition-colors hover:bg-[var(--sage-surface)]"
                >
                  Back to Rooms
                </Link>
              </Card>
            </form>
          </Container>
        </Section>

        <HotelFooter />
      </main>
    </div>
  );
}
