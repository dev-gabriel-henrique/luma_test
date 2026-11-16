import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Categories from "@/components/sections/Categories";
import Community from "@/components/sections/Community";
import Contact from "@/components/sections/Contact";
import FeaturedCourse from "@/components/sections/FeaturedCourse";
import FinalCTA from "@/components/sections/FinalCTA";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonial from "@/components/sections/Testimonial";

export default function Home() {
  return (
    <>
    
      <Header />
      <main className="flex-1">
        <Hero />
        <Categories />
        <FeaturedCourse />
        <HowItWorks />
        <Testimonial />
        <Community />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
