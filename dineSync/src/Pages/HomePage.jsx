import { Container } from "../master";
import React from "react";

function HomePage() {
  return (
    <Container>
      <section className="text-center flex flex-col items-center mt-12">
        {/* Header z-10 */}
        <div className="absolute z-10 w-[100rem] text-9xl text-left leading-none pointer-events-none">
          ELEVATE YOUR <br />{" "}
          <div className="text-right w-full">DINING EXPERIENCE</div>
        </div>
        {/* Hero Image z-none */}
        <figure 
          className="relative bg-hero-image w-[80%] mt-44 mb-16 h-[50rem] bg-cover before:absolute before:bottom-0 before:h-[150px] before:left-0 before:w-full before:bg-gradient-to-b before:from-black/0 before:via-black/50 before:to-black"
        ></figure>
        {/* arrow */}   
      </section>
    </Container>
  );
}

export default HomePage;
