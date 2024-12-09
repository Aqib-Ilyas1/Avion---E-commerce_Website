import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroBlock from "@/components/HeroBlock";
import Features from "@/components/Features"
import Ceramics from "@/components/Ceramics";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroBlock />
      <Features />
      <Ceramics />
    </div>
  );
}


