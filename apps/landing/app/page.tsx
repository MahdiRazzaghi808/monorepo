"use client";
import Footer from "./components/layout/footer";
import CTA from "./components/partials/cta";
import EducationalServicesSlider from "./components/partials/educational-services-slider";
import Hero from "./components/partials/hero";
import Pricing from "./components/partials/pricing";
import Testimonials from "./components/partials/testimonials";
export default function Home() {
  return (
    <div >
      <Hero />
      <div className="container">
        <EducationalServicesSlider />
        <Pricing />
        <Testimonials />
        <CTA />
      </div>
    </div>
  );
}
