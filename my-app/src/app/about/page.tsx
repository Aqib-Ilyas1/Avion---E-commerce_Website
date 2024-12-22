import TopHeader from "@/app/about/TopHeader";
import Navbar from "@/app/about/Navbar";
import HeroBlock from "@/app/about/HeroBlock";
import FeaturesAdditional from "@/app/about/FeaturesAdditional";
import GetInTouch from "@/app/about/GetInTouch";
import Features from "@/app/about/Features";
import EmailSignup from "@/app/about/EmailSignup";
import Footer from "@/app/about/Footer";

const AboutPage = () => {
    return (
        <>
            <TopHeader />
            <Navbar />
            <HeroBlock />
            <FeaturesAdditional />
            <GetInTouch />
            <Features />
            <EmailSignup />
            <Footer />
        </>
    )
}

export default AboutPage;