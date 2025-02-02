import { client } from "@/sanity/lib/client"
import { PRODUCT } from "../../../../dataTypes/products"
import { groq } from "next-sanity"
import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"

import TopHeader from "@/app/product-detail/TopHeader";
import Navbar from "@/app/product-detail/Navbar";
import Ceramics from "@/app/product-detail/Ceramics";
import Features from "@/app/product-detail/Features";
import EmailSignup from "@/app/product-detail/EmailSignup";
import Footer from "@/app/product-detail/Footer";


interface ProductProps {
    params: Promise<{ slug: string }>
}

async function getProduct(slug: string): Promise<PRODUCT> {
    return client.fetch(
        groq`*[_type == "product" && slug.current == $slug][0]{
        name,
        price,
        description,
        dimensions,
        image,
        quantity
        }`, { slug }
    )
}

export default async function ProductPage({ params }: ProductProps) {
    const { slug } = await params;
    const product = await getProduct(slug);
    console.log(product)
    return (

        <div>
            <TopHeader />
            <Navbar />
            <main className="medium:pt-7">
                <div className="medium:px-12 medium:grid medium:grid-cols-2 ">
                    <div>
                        {product.image && (
                            <Image src={urlFor(product.image).url()}
                                alt="image" width={1000} height={750} className="w-full tablet:h-[500px] medium:h-full" />
                        )
                        }

                    </div>

                    <div className="p-5 flex flex-col gap-8">

                        <div className="flex flex-col gap-2">
                            <h1 className="clashdisplayFont text-2xl">{product.name}</h1>
                            <h1 className="clashdisplayFont text-xl">£ {product.price}</h1>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h1 className="clashdisplayFont text-lg">Product Description</h1>
                            <p className="satoshiFont text-sm">{product.description}</p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h1 className="clashdisplayFont text-base">Dimensions</h1>
                            <div className="flex justify-between tablet:justify-around">
                                <div className="flex flex-col gap-2">
                                    <p className="clashdisplayFont text-sm">Height</p>
                                    <p className="satoshiFont text-sm">{product.dimensions.height}</p>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <p className="clashdisplayFont text-sm">Width</p>
                                    <p className="satoshiFont text-sm">{product.dimensions.width}</p>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <p className="clashdisplayFont text-sm">Depth</p>
                                    <p className="satoshiFont text-sm">{product.dimensions.depth}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h1 className="clashdisplayFont text-base">Quantity</h1>
                            <div className="flex justify-center"><h1 className="satoshiFont text-base">{product.quantity}</h1></div>
                        </div>

                        <div className="flex flex-col gap-2.5 pt-4">
                            <div className="flex justify-center"><h1 className="satoshiFont text-base">Save to favorites</h1></div>
                            <div className="flex justify-center bg-[#2A254B] py-2.5"><button className="satoshiFont text-base text-white">Add to cart</button></div>
                        </div>

                    </div>
                </div>
            </main>

            <Ceramics />
            <Features />
            <EmailSignup />
            <Footer />
        </div>
    )
}




