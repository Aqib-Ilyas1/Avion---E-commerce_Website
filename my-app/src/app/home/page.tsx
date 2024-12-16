import Image from "next/image";
import Navbar from "@/app/home/Navbar";
import HeroBlock from "@/components/HeroBlock";
import Features from "@/app/home/Features"
import Ceramics from "@/app/home/Ceramics";
import FeaturesAdditional from "@/app/home/FeaturesAdditional";
import EmailSignup from "@/app/home/EmailSignup";
import Footer from "@/components/Footer";

export default function HomeComponent() {
  return (
    <>
      <Navbar />
      <HeroBlock />
      <Features />
      <Ceramics />
      <FeaturesAdditional />
      <EmailSignup />
      <Footer />
    </>
  );
}