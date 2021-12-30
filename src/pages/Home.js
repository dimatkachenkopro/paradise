import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import ServicesContainer from "../components/ServicesContainer";
import FeaturedRooms from "../components/FeaturedRooms";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at $499"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <ServicesContainer />
      <FeaturedRooms />
    </>
  );
}
