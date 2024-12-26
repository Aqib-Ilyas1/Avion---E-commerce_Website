import Image from "next/image";
const ProductDetails = () => {
    return (
        <>
            <main className="medium:pt-7">
                <div className="medium:px-12 medium:grid medium:grid-cols-2 ">
                    <div>
                        <Image src={"/Images/DandyChair.png"} alt="Product-Image" width={1000} height={750} className="w-full tablet:h-[500px] medium:h-full" />
                    </div>

                    <div className="p-5 flex flex-col gap-8">

                        <div className="flex flex-col gap-2">
                            <h1 className="clashdisplayFont text-2xl">The Dandy Chair</h1>
                            <h1 className="clashdisplayFont text-xl">£ 250</h1>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h1 className="clashdisplayFont text-lg">Product Description</h1>
                            <p className="satoshiFont text-sm">A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.</p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h1 className="clashdisplayFont text-base">Dimensions</h1>
                            <div className="flex justify-between tablet:justify-around">
                                <div className="flex flex-col gap-2">
                                    <p className="clashdisplayFont text-sm">Height</p>
                                    <p className="satoshiFont text-sm">110 cm</p>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <p className="clashdisplayFont text-sm">Width</p>
                                    <p className="satoshiFont text-sm">75 cm</p>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <p className="clashdisplayFont text-sm">Depth</p>
                                    <p className="satoshiFont text-sm">50 cm</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h1 className="clashdisplayFont text-base">Quantity</h1>
                            <div className="flex justify-center"><h1 className="satoshiFont text-base">1</h1></div>
                        </div>

                        <div className="flex flex-col gap-2.5 pt-4">
                            <div className="flex justify-center"><h1 className="satoshiFont text-base">Save to favorites</h1></div>
                            <div className="flex justify-center bg-[#2A254B] py-2.5"><button className="satoshiFont text-base text-white">Add to cart</button></div>
                        </div>

                    </div>
                </div>
            </main>
        </>
    );
}

export default ProductDetails;
