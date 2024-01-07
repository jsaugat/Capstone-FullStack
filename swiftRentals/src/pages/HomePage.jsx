import Container from "../components/Container/Container";
import React from "react";

function HomePage() {
  return (
    <Container>
      <section className="w-full flex items-center justify-around">
        {/* HERO Text */}
        <div className="text-left w-[50rem] space-y-8">
          <div>
            <h1 className="text-8xl font-medium font-montreal text-left leading-[6.5rem]">
              Discover the Home
              <br />
              That Fits You Best
            </h1>
          </div>
          <h3 className="text-[1.9rem] leading-tight">
            Effortlessly find your dream home with our user-friendly platform.
            Your perfect living space is just a click away.
          </h3>
        </div>
          {/* HERO Image */}
          <div
            style={{ backgroundPosition: "40% 20%" }}
            className="bg-hero-image bg-cover bg-center w-[45rem] h-[50rem] rounded-t-full"
          ></div>
      </section>

      {/* Services */}
      <section></section>
    </Container>
  );
}

export default HomePage;
