import Navbar from "@/app/productlistings/Navbar"
import ProductPageHeader from "@/app/productlistings/ProductPageHeader";
import Filters from "@/app/productlistings/Filters";
import Ceramics from "@/app/productlistings/Ceramics";
import Footer from "@/app/productlistings/Footer";
const productlistings = () => {
    return (
        <>
            <Navbar />
            <ProductPageHeader />
            <Filters />
            <Ceramics />
            <Footer />
        </>
    )
}

export default productlistings;