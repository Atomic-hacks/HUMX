import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { BookingProvider } from "./context/BookingContext";
import HomePage from "./pages/Home";
import RoomsPage from "./pages/Rooms";
import RoomDetailsPage from "./pages/RoomDetails";
import BookingPage from "./pages/Booking";
import ViewBookingsPage from "./pages/ViewBookings";
import BookingConfirmationPage from "./pages/BookingConfirmation";
import OurHotelPage from "./pages/OurHotel";
import ContactPage from "./pages/Contact";
import Navbar from "./components/site/HotelNavbar";

export default function App() {
  return (
    <BookingProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/our-hotel" element={<OurHotelPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/rooms/:roomId" element={<RoomDetailsPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/booking/view" element={<ViewBookingsPage />} />
        <Route path="/confirmation" element={<BookingConfirmationPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BookingProvider>
  );
}
