import Image from "next/image";
import Link from "next/link";
const Ceramics = () => {
    return (
            <main>
                <div className="py-4 px-6 pt-8 medium:px-28 ">
                    <p className="clashdisplayFont text-xl mb-3">You might also like</p>
                    {/* Images */}
                    <div className="grid grid-cols-2 gap-2 tablet:grid tablet:grid-cols-3 laptop:grid laptop:grid-cols-4">
                        {/* Image-1 */}
                        <div>
                            <Link href="/product-listing"><Image src="/Images/DandyChair.png" alt="Dandy Chair" width={173} height={210} className="hover:scale-105 hover:duration-300"/></Link>
                            <div>
                                <p className="clashdisplayFont text-xl">The Dandy Chair</p>
                                <p className="satoshiFont text-lg">£ 250</p>
                            </div>
                        </div>

                        {/* Image-2 */}
                        <div className="tablet:grid-cols-4">
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
                            <Image src="/Images/DandyChair.png" alt="Dandy Chair" width={173} height={210} />
                            <div>
                                <p className="clashdisplayFont text-xl">The Dandy Chair</p>
                                <p className="satoshiFont text-lg">£ 250</p>
                            </div>
                        </div>

                        {/* Image-6 */}
                        <div>
                            <Image src="/Images/VaseSet.png" alt="Vase Set" width={163} height={201} />
                            <div>
                                <p className="clashdisplayFont text-xl">Rustic Vase Set</p>
                                <p className="satoshiFont text-lg">£ 155</p>
                            </div>
                        </div>

                    </div>

                    <button className="satoshiFont text-base mt-7 w-full">View collection</button>
                </div>
            </main>
    )
}

export default Ceramics;