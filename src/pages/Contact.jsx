import React from "react";
import HotelFooter from "../components/site/HotelFooter";
import PageHero from "../components/sections/PageHero";
import Card from "../components/ui/Card";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";

const CREAM = "var(--sage-bg)";

export default function ContactPage() {
  return (
    <div style={{ background: CREAM }}>
      <PageHero
        image="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&q=80"
        alt="HUMX contact"
        title="Contact HUMX"
        height={320}
      />

      <main className="relative z-20 mt-[320px]">
        <Section>
          <Container>
            <Card glass className="mx-auto max-w-5xl">
              <h2 className="text-[clamp(30px,4.2vw,38px)] text-[var(--sage-text)]">
                Let us plan your HUMX stay
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[var(--sage-muted)]/90">
                Email: concierge@humxhotel.com · Phone: +234 800 4869 000
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--sage-muted)]/90">
                Address: 18 Ahmadu Bello Way, Victoria Island, Lagos
              </p>
            </Card>
          </Container>
        </Section>
        <HotelFooter />
      </main>
    </div>
  );
}
