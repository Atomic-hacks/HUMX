import React, { useEffect, useRef } from "react";
import { rooms } from "../../data/rooms";
import RoomTypeCard from "../rooms/RoomTypeCard";
import Badge from "../ui/Badge";
import Card from "../ui/Card";
import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import { ButtonLink } from "../ui/Button";

const GOLD = "var(--sage-accent)";

const amenities = [
  {
    title: "Premium Linens",
    desc: "Enjoy restful nights on a plush king-sized bed with premium sheets and layered comfort.",
    icon: "✦",
  },
  {
    title: "Spacious Living Area",
    desc: "Relax in a generously sized space with designer furnishings and quiet lighting.",
    icon: "◆",
  },
  {
    title: "Private Dining",
    desc: "Host intimate meals in a dedicated dining setting with discreet room service.",
    icon: "◈",
  },
  {
    title: "Kitchenette",
    desc: "A compact modern kitchenette for quick meals, coffee, and in-room flexibility.",
    icon: "◉",
  },
  {
    title: "Marble Bathroom",
    desc: "Unwind with a rain shower, spa-grade fixtures, and a calm stone palette.",
    icon: "❖",
  },
  {
    title: "Fast Wi-Fi + Smart TV",
    desc: "Stay connected and entertained with high-speed internet and modern streaming.",
    icon: "✧",
  },
];

export function HomeWelcome() {
  return (
    <Section className="bg-[var(--sage-surface)]">
      <Container>
        <div data-reveal>
          <SectionHeader
            align="center"
            title="Welcome to The World of Luxury and Comfort"
            subtitle="Experience a stay where every detail is tuned for calm, elegance, and effortless hospitality."
          />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2" data-stagger>
          <article className="ui-stagger-item overflow-hidden rounded-[var(--ui-radius-md)] shadow-[var(--ui-shadow-strong)]">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1400&q=80"
              alt="Hotel exterior"
              className="h-[300px] w-full object-cover md:h-[420px]"
            />
          </article>
          <article className="ui-stagger-item overflow-hidden rounded-[var(--ui-radius-md)] shadow-[var(--ui-shadow-strong)]">
            <img
              src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1400&q=80"
              alt="Hotel lounge"
              className="h-[300px] w-full object-cover md:h-[420px]"
            />
          </article>
        </div>
      </Container>
    </Section>
  );
}

export function HomeActivities() {
  return (
    <Section id="activities" className="bg-[var(--sage-bg)]">
      <Container className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div data-reveal>
          <Badge>Curated Experiences</Badge>
          <h2 className="mt-5 text-[clamp(36px,4.8vw,44px)] leading-[1.12] text-[var(--sage-text)]">
            Special Activities
            <br />
            in our Hotel
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-[var(--sage-muted)]/90">
            Discover a realm where opulence meets tranquility, and every moment feels intentional.
          </p>
          <div className="mt-8">
            <ButtonLink to="/our-hotel" variant="secondary" size="lg">
              Learn More
            </ButtonLink>
          </div>
        </div>

        <div className="relative h-[400px] sm:h-[460px] lg:h-[520px]" data-reveal>
          <div className="absolute inset-y-0 right-0 w-[74%] overflow-hidden rounded-[var(--ui-radius-md)] shadow-[var(--ui-shadow-strong)]">
            <img
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80"
              alt="Ocean diving"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="ui-glass absolute z-10 overflow-hidden p-0" style={{ width: "54%", top: "5%", bottom: "5%", left: "4%" }}>
            <img
              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=700&q=80"
              alt="Overwater bungalow"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function HomeFacilities() {
  const trackRef = useRef(null);

  const facilities = [
    {
      title: "Infinity Pool Deck",
      desc: "Sunset-facing pool with private cabanas and evening service.",
      image: "https://images.unsplash.com/photo-1576675784201-0e142b423952?w=1200&q=80",
    },
    {
      title: "Signature Spa",
      desc: "Thermal rituals and bespoke wellness treatments for deep reset.",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=80",
    },
    {
      title: "Private Dining",
      desc: "Chef-led tasting experiences in intimate, curated spaces.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
    },
    {
      title: "Grand Lounge",
      desc: "Elegant social spaces for tea, cocktails, and quiet work.",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80",
    },
    {
      title: "Fitness Studio",
      desc: "Modern equipment and guided sessions with professional trainers.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80",
    },
  ];

  const loopItems = [...facilities, ...facilities];

  useEffect(() => {
    if (document.getElementById("marquee-style")) return;
    const style = document.createElement("style");
    style.id = "marquee-style";
    style.textContent = `
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .facility-track {
        animation: marquee 32s linear infinite;
      }
      .facility-track:hover {
        animation-play-state: paused;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <Section className="overflow-hidden bg-[var(--sage-bg)]">
      <Container>
        <div data-reveal>
          <SectionHeader align="center" title="Our Facilities and Services" />
        </div>
      </Container>

      <div className="overflow-hidden" data-reveal>
        <div ref={trackRef} className="facility-track flex w-max gap-5 px-4 sm:px-6 lg:px-8">
          {loopItems.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className="relative shrink-0 overflow-hidden rounded-[var(--ui-radius-md)] shadow-[var(--ui-shadow-strong)]"
              style={{ width: 300, height: 350 }}
            >
              <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-5 pb-5 pt-14 text-left">
                <h3 className="text-[21px] leading-none text-white">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-white/85">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function HomeGuestStories() {
  const stories = [
    { quote: "A seamless, calm stay from check-in to check-out.", guest: "Guest 1" },
    { quote: "The suite design and service were exceptional.", guest: "Guest 2" },
    { quote: "Beautiful atmosphere with refined attention to detail.", guest: "Guest 3" },
  ];

  return (
    <Section className="bg-[var(--sage-surface)]">
      <Container>
        <div data-reveal>
          <SectionHeader
            title="Guest Stories"
            action={
              <ButtonLink to="/rooms" variant="secondary" size="lg">
                Choose Room
              </ButtonLink>
            }
          />
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3" data-stagger>
          {stories.map(({ quote, guest }) => (
            <Card key={guest} glass interactive className="ui-stagger-item p-8">
              <p className="text-[34px] leading-none" style={{ color: GOLD }}>
                "
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--sage-muted)]/90">{quote}</p>
              <p className="mt-6 text-xs uppercase tracking-wider text-[var(--sage-kicker)]">{guest}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function HomeAmenities() {
  return (
    <Section className="bg-[var(--sage-bg)]">
      <Container>
        <div data-reveal>
          <SectionHeader align="center" title="Room Amenities" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" data-stagger>
          {amenities.map((amenity) => (
            <Card key={amenity.title} glass interactive className="ui-stagger-item text-center">
              <p className="mb-6 text-3xl text-[var(--sage-accent)]">{amenity.icon}</p>
              <h3 className="mb-4 text-xl text-[var(--sage-text)]">{amenity.title}</h3>
              <p className="text-sm leading-relaxed text-[var(--sage-muted)]/90">{amenity.desc}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function HomeLuxuryRooms() {
  return (
    <Section id="rooms" className="bg-[var(--sage-surface)]">
      <Container>
        <div data-reveal>
          <SectionHeader
            title="Our Luxury Rooms"
            action={
              <ButtonLink to="/rooms" variant="secondary">
                View All Rooms
              </ButtonLink>
            }
          />
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2" data-stagger>
          {rooms.slice(0, 4).map((room) => (
            <RoomTypeCard key={room.id} room={room} className="ui-stagger-item rounded-[var(--ui-radius-md)] shadow-[var(--ui-shadow-soft)]" />
          ))}
        </div>
      </Container>
    </Section>
  );
}
