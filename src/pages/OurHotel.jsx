import React, { useEffect } from "react";
import HotelFooter from "../components/site/HotelFooter";
import PageHero from "../components/sections/PageHero";
import Card from "../components/ui/Card";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import SectionHeader from "../components/ui/SectionHeader";
import { animateStaggerGrid, gsap } from "../../lib/animations/gsap";

const CREAM = "var(--sage-bg)";

export default function OurHotelPage() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const grid = document.querySelector("[data-hotel-grid]");
      if (grid) animateStaggerGrid(grid);
    });
    return () => ctx.revert();
  }, []);

  return (
    <div style={{ background: CREAM }}>
      <PageHero
        image="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1920&q=80"
        alt="HUMX hotel"
        title="Our Hotel"
      />

      <main className="relative z-20 mt-[360px]" style={{ background: CREAM }}>
        <Section>
          <Container>
            <SectionHeader
              title="Intentional Luxury, Personal Hospitality"
              subtitle="Every floor at HUMX is crafted around calm textures, layered lighting, and discreet service."
            />

            <div className="grid gap-5 md:grid-cols-2" data-hotel-grid>
              <Card interactive className="ui-stagger-item">
                <h3 className="text-[clamp(30px,4.2vw,38px)] text-[var(--sage-text)]">Intentional Luxury</h3>
                <p className="mt-4 text-sm leading-relaxed text-[var(--sage-muted)]/90">
                  Every floor at HUMX is designed around calm textures, layered lighting, and discreet
                  service to deliver timeless comfort.
                </p>
              </Card>
              <Card interactive className="ui-stagger-item" glass>
                <h3 className="text-[clamp(30px,4.2vw,38px)] text-[var(--sage-text)]">Personal Hospitality</h3>
                <p className="mt-4 text-sm leading-relaxed text-[var(--sage-muted)]/90">
                  From check-in to departure, our team shapes each stay around your rhythm with
                  seamless support.
                </p>
              </Card>
            </div>
          </Container>
        </Section>
        <HotelFooter />
      </main>
    </div>
  );
}
