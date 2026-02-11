"use client";
import EducationalServicesSlider from "./components/partials/educational-services-slider";
import Hero from "./components/partials/hero";
import Testimonials from "./components/partials/testimonials";
export default function Home() {
  return (
    <div >
      <Hero />
      <EducationalServicesSlider />
      <Testimonials />
    </div>
  );
}
