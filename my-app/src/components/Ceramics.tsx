import Image from "next/image";
const Ceramics = () => {
    return (
            <main>
                <div className="py-4 px-6">
                    <p className="clashdisplayFont text-xl mb-3">New Ceramic</p>
                    {/* Images */}
                    <div className="grid grid-cols-2 gap-2">
                        {/* Image-1 */}
                        <div>
                            <Image src="/Images/DandyChair.png" alt="Dandy Chair" width={173} height={210} />
                            <div>
                                <p className="clashdisplayFont text-xl">The Dandy Chair</p>
                                <p className="satoshiFont text-lg">€ 250</p>
                            </div>
                        </div>

                        {/* Image-2 */}
                        <div>
                            <Image src="/Images/VaseSet.png" alt="Vase Set" width={163} height={201} />
                            <div>
                                <p className="clashdisplayFont text-xl">Rustic Vase Set</p>
                                <p className="satoshiFont text-lg">€ 155</p>
                            </div>
                        </div>

                        {/* Image-3 */}
                        <div>
                            <Image src="/Images/LucyLamp.png" alt="Lucy Lamp" width={163} height={201} />
                            <div>
                                <p className="clashdisplayFont text-xl">The Lucy Lamp</p>
                                <p className="satoshiFont text-lg">€ 399</p>
                            </div>
                        </div>

                        {/* Image-4 */}
                        <div>
                                <Image src="/Images/SilkyVase.png" alt="Silky Vase" width={163} height={201} />
                                <div>
                                    <p className="clashdisplayFont text-xl">The Silky Vase</p>
                                    <p className="satoshiFont text-lg">€ 125</p>
                                </div>
                        </div>

                    </div>

                    <button className="satoshiFont text-base mt-7 w-full">View collection</button>
                </div>
            </main>
    )
}

export default Ceramics;