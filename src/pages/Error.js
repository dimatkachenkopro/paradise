import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <Hero>
      <Banner title="404 Error" subtitle="page not found">
        <Link to="/paradise" className="btn-primary">
          back to home page
        </Link>
      </Banner>
    </Hero>
  );
}
