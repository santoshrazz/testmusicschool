import Footer from "@/Components/Footer/Footer";
import Webinars from "@/Components/Future_Webinars/Webinars";
import { HeroSection } from "@/Components/HeroSection/HeroSection";
import { Mask_Reveal } from "@/Components/Mask_Reveal/Mask_Reveal";
import Courses from "@/Components/Our_Courses/Courses";
import { BackgroundBoxesDemo } from "@/Components/Our_Instructor/Instructor";
import { GridBackground } from "@/Components/TestiMonal/Grid_Background";
import { WhyChooseUs } from "@/Components/WhyChooseUs/WhyChooseUs";
export default function Home() {
  return (
    <>
      <HeroSection />
      <Mask_Reveal />
      <Courses />
      <WhyChooseUs />
      <GridBackground />
      <Webinars />
      <BackgroundBoxesDemo />
      <Footer />
    </>
  );
}
