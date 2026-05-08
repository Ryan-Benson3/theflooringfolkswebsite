import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import ServiceAreas from "@/components/ServiceAreas";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Pricing />
      <ServiceAreas />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
