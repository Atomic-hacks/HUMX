
import Navbar from "./components/layout/Navbar";
import Hero from "./components/landing/Hero";
import About from "./components/landing/About";
import Rooms from "./components/landing/Rooms";
import Amenities from "./components/landing/Amenities";
import Testimonials from "./components/landing/Testimonials";
import Offers from "./components/landing/Offers";
import CtaBanner from "./components/landing/CtaBanner";
import Events from "./components/landing/Events";
import LocationActivities from "./components/landing/LocationActivities";
import GalleryStrip from "./components/landing/GalleryStrip";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Amenities />
      <Testimonials />
      <Offers />
      <CtaBanner />
      <Events />
      <LocationActivities />
      <GalleryStrip />
      <Footer />
    </>
  );
}
