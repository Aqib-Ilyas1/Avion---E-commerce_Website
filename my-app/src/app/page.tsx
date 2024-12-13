import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroBlock from "@/components/HeroBlock";
import Features from "@/components/Features"
import Ceramics from "@/components/Ceramics";
import FeaturesAdditional from "@/components/FeaturesAdditional";
import EmailSignup from "@/components/EmailSignup";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroBlock />
      <Features />
      <Ceramics />
      <FeaturesAdditional />
      <EmailSignup />
    </>
  );
}


