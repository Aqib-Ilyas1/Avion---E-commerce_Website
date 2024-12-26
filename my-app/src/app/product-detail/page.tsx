import TopHeader from "@/app/product-detail/TopHeader";
import Navbar from "@/app/product-detail/Navbar";
import ProductDetails from "@/app/product-detail/ProductDetails";
import Ceramics from "@/app/product-detail/Ceramics";
import Features from "@/app/product-detail/Features";
import EmailSignup from "@/app/product-detail/EmailSignup";
import Footer from "@/app/product-detail/Footer";

export default function product(){
    return(
        <>
        <TopHeader />
        <Navbar />
        <ProductDetails />
        <Ceramics />
        <Features />
        <EmailSignup />
        <Footer />
        </>
    )
}