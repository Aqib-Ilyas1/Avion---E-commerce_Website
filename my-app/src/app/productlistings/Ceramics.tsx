import Image from "next/image";
import Link from "next/link";
const Ceramics = () => {
    return (
            <main>
                <div className="py-4 px-6 medium:px-28">
                    {/* Images */}
                    <div className="grid grid-cols-2 gap-2 tablet:flex medium:flex flex-row medium:justify-center medium:gap-5">
                        {/* Image-1 */}
                        <div>
                            <Link href="/product-detail"><Image src="/Images/DandyChair.png" alt="Dandy Chair" width={173} height={210} className="hover:scale-105 hover:duration-300"/></Link>
                            <div>
                                <p className="clashdisplayFont text-xl">The Dandy Chair</p>
                                <p className="satoshiFont text-lg">£ 250</p>
                            </div>
                        </div>

                        {/* Image-2 */}
                        <div>
                            <Image src="/Images/VaseSet.png" alt="Vase Set" width={163} height={201} />
                            <div>
                                <p className="clashdisplayFont text-xl">Rustic Vase Set</p>
                                <p className="satoshiFont text-lg">£ 155</p>
                            </div>
                        </div>

                        {/* Image-3 */}
                        <div>
                            <Image src="/Images/LucyLamp.png" alt="Lucy Lamp" width={163} height={201} />
                            <div>
                                <p className="clashdisplayFont text-xl">The Lucy Lamp</p>
                                <p className="satoshiFont text-lg">£ 399</p>
                            </div>
                        </div>

                        {/* Image-4 */}
                        <div>
                                <Image src="/Images/SilkyVase.png" alt="Silky Vase" width={163} height={201} />
                                <div>
                                    <p className="clashdisplayFont text-xl">The Silky Vase</p>
                                    <p className="satoshiFont text-lg">£ 125</p>
                                </div>
                        </div>

                        {/* Image-5 */}
                        <div>
                            <Image src="/Images/DandyChair-1.png" alt="Dandy Chair" width={173} height={210} />
                            <div>
                                <p className="clashdisplayFont text-xl">The Dandy Chair</p>
                                <p className="satoshiFont text-lg">£ 250</p>
                            </div>
                        </div>

                        {/* Image-6 */}
                        <div>
                            <Image src="/Images/DandyChair-2.png" alt="Vase Set" width={163} height={201} />
                            <div>
                                <p className="clashdisplayFont text-xl">The Dandy Chair</p>
                                <p className="satoshiFont text-lg">£ 155</p>
                            </div>
                        </div>

                        {/* Image-7 */}
                        <div>
                            <Image src="/Images/DandyChair-3.png" alt="Vase Set" width={163} height={201} />
                            <div>
                                <p className="clashdisplayFont text-xl">The Dandy Chair</p>
                                <p className="satoshiFont text-lg">£ 250</p>
                            </div>
                        </div>

                        {/* Image-8 */}
                        <div>
                            <Image src="/Images/LucyLamp-1.png" alt="Lucy Lamp" width={163} height={201} />
                            <div>
                                <p className="clashdisplayFont text-xl">The Lucy Lamp</p>
                                <p className="satoshiFont text-lg">£ 399</p>
                            </div>
                        </div>

                        {/* Image-9 */}
                        <div>
                            <Image src="/Images/LucyLamp-2.png" alt="Lucy Lamp" width={163} height={201} />
                            <div>
                                <p className="clashdisplayFont text-xl">The Lucy Lamp</p>
                                <p className="satoshiFont text-lg">£ 399</p>
                            </div>
                        </div>

                    </div>

                    <button className="satoshiFont text-base mt-7 w-full">View collection</button>
                </div>
            </main>
    )
}

export default Ceramics;