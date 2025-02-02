"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PRODUCT } from "../../../dataTypes/products";
import { client } from "@/sanity/lib/client";
import { ALLProducts, FirstFourProducts } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";




const Ceramics = () => {

    const [product, setProduct] = useState<PRODUCT[]>([])

    useEffect(() => {
        const fetchProducts = async () => {
            const res: PRODUCT[] = await client.fetch(FirstFourProducts)
            setProduct(res)
        }
        fetchProducts()
    }, [])

    return (
        <main>
            <div className="py-4 px-6 medium:px-28">
                <p className="clashdisplayFont text-xl mb-3">New Ceramic</p>



                {/* Images */}
                <div className="grid grid-cols-2 gap-2 tablet:flex medium:flex flex-row medium:justify-center medium:gap-5">

                    {product.map((product) => (

                        <div key={product._id}>
                            {product.image && (
                                <Link href={`/product-detail/${product.slug.current}`}><Image src={urlFor(product.image).url()}
                                    alt="image" width={163} height={163} className="hover:scale-105 hover:duration-300" /></Link>
                            )}

                            <div>
                                <p className="clashdisplayFont text-xl">{product.name}</p>
                                <p className="satoshiFont text-lg">£ {product.price}</p>
                            </div>
                        </div>
                    )
                    )}

                    {/* Image-1 */}
                    {/* <div>
                        <Link href="/product-detail"><Image src="/Images/DandyChair.png" alt="Dandy Chair" width={173} height={210} className="hover:scale-105 hover:duration-300" /></Link>
                        <div>
                            <p className="clashdisplayFont text-xl">The Dandy Chair</p>
                            <p className="satoshiFont text-lg">£ 250</p>
                        </div>
                    </div> */}

                    {/* Image-2 */}
                    {/* <div>
                        <Image src="/Images/VaseSet.png" alt="Vase Set" width={163} height={201} />
                        <div>
                            <p className="clashdisplayFont text-xl">Rustic Vase Set</p>
                            <p className="satoshiFont text-lg">£ 155</p>
                        </div>
                    </div> */}

                    {/* Image-3 */}
                    {/* <div>
                        <Image src="/Images/LucyLamp.png" alt="Lucy Lamp" width={163} height={201} />
                        <div>
                            <p className="clashdisplayFont text-xl">The Lucy Lamp</p>
                            <p className="satoshiFont text-lg">£ 399</p>
                        </div>
                    </div> */}

                    {/* Image-4 */}
                    {/* <div>
                        <Image src="/Images/SilkyVase.png" alt="Silky Vase" width={163} height={201} />
                        <div>
                            <p className="clashdisplayFont text-xl">The Silky Vase</p>
                            <p className="satoshiFont text-lg">£ 125</p>
                        </div>
                    </div> */}

                    {/* Image-5 */}
                    {/* <div>
                        <Image src="/Images/DandyChair.png" alt="Dandy Chair" width={173} height={210} />
                        <div>
                            <p className="clashdisplayFont text-xl">The Dandy Chair</p>
                            <p className="satoshiFont text-lg">£ 250</p>
                        </div>
                    </div> */}

                    {/* Image-6 */}
                    {/* <div>
                        <Image src="/Images/VaseSet.png" alt="Vase Set" width={163} height={201} />
                        <div>
                            <p className="clashdisplayFont text-xl">Rustic Vase Set</p>
                            <p className="satoshiFont text-lg">£ 155</p>
                        </div>
                    </div> */}



                </div>

                <button className="satoshiFont text-base mt-7 w-full">View collection</button>
            </div>
        </main>
    )
}

export default Ceramics;