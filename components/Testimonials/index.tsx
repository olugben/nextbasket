import React from "react";
import TestimonialDetails from "./TestimonialDetails";
import Gallery from "./Gallery";

const Testimonials = () => {
  return (
    <div className="md:mt-[190px] mt-[183px] lg:mt-[258px] flex flex-col md:flex-row gap-[40px] p-[28px] md:p-2 w-full max-w-[900px] mx-auto">
      <TestimonialDetails />
      <Gallery />
    </div>
  );
};

export default Testimonials;
