import TopHeader from "@/app/product-listing/TopHeader";
import Navbar from "@/app/product-listing/Navbar";
import ProductDetails from "@/app/product-listing/ProductDetails";
import Ceramics from "@/app/product-listing/Ceramics";
import Features from "@/app/product-listing/Features";
import EmailSignup from "@/app/product-listing/EmailSignup";
import Footer from "@/app/product-listing/Footer";

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