import { Container } from "../master";
import React from "react";

function HomePage() {
  const sectionStyle = "sticky top-[95.7px] h-[80vh] w-full rounded-[30px]";
  const lastSectionStyle = "top-[95.7px] h-[80vh] w-full rounded-[30px]"
  return (
    <Container className="relative space-y-5">
      <section
        className={`${sectionStyle} text-center flex flex-col items-center h-fit`}
      >
        {/* Header z-10 */}
        <div className="absolute z-10 w-[100rem] text-9xl text-left leading-none pointer-events-none">
          ELEVATE YOUR <br />{" "}
          <div className="text-right w-full">DINING EXPERIENCE</div>
        </div>
        {/* Hero Image z-none */}
        <figure className="relative bg-hero-image w-[80%] mt-44 mb-16 h-[50rem] bg-cover before:absolute before:bottom-0 before:h-[150px] before:left-0 before:w-full before:bg-gradient-to-b before:from-black/0 before:via-black/50 before:to-black"></figure>
        {/* arrow */}
      </section>
      <section className={`${sectionStyle}  bg-white`}></section>
      <section className={`${sectionStyle}  bg-blue-300`}></section>
      <section className={`${lastSectionStyle}  bg-red-400`}></section>
    </Container>
  );
}

export default HomePage;
