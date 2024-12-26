import Image from "next/image";
import Link from "next/link";
import { RiCheckboxBlankLine } from "react-icons/ri";
import { IoMdCheckbox } from "react-icons/io";
const Ceramics = () => {
    return (
        <main>
            <div className="py-4 px-6 medium:flex medium:px-20">

                {/* Filters */}
                <div className="mobile:hidden medium:inline-block medium:w-1/4">
                    <div className="medium:flex medium:flex-col medium:gap-7">
                        <div className="medium:flex medium:flex-col medium:gap-2">
                            <h5 className="clashdisplayFont">Product type</h5>
                            <ul className="satoshiFont text-base">
                                <li className="flex items-center gap-2"><div><RiCheckboxBlankLine /></div>Furniture</li>
                                <li className="flex items-center gap-2"><div><IoMdCheckbox className="text-[#2A254B]" /></div>Homeware</li>
                                <li className="flex items-center gap-2"><div><RiCheckboxBlankLine /></div>Sofas</li>
                                <li className="flex items-center gap-2"><div><RiCheckboxBlankLine /></div>Light fittings</li>
                                <li className="flex items-center gap-2"><div><RiCheckboxBlankLine /></div>Accessories</li>
                            </ul>
                        </div>

                        <div className="medium:flex medium:flex-col medium:gap-2">
                            <h5 className="clashdisplayFont">Price</h5>
                            <ul className="satoshiFont text-base">
                                <li className="flex items-center gap-2"><div><RiCheckboxBlankLine /></div>0 - 100</li>
                                <li className="flex items-center gap-2"><div><RiCheckboxBlankLine /></div>101 - 250</li>
                                <li className="flex items-center gap-2"><div><RiCheckboxBlankLine /></div>250 +</li>
                            </ul>
                        </div>

                        <div className="medium:flex medium:flex-col medium:gap-2">
                            <h5 className="clashdisplayFont">Designer</h5>
                            <ul className="satoshiFont text-base">
                                <li className="flex items-center gap-2"><div><RiCheckboxBlankLine /></div>Robert Smith</li>
                                <li className="flex items-center gap-2"><div><RiCheckboxBlankLine /></div>Liam Gallagher</li>
                                <li className="flex items-center gap-2"><div><RiCheckboxBlankLine /></div>Biggie Smalls</li>
                                <li className="flex items-center gap-2"><div><RiCheckboxBlankLine /></div>Thom Yorke</li>
                            </ul>
                        </div>
                    </div>

                </div>



                {/* Images */}
                <div className="grid grid-cols-2 gap-2 tablet:grid-cols-3 medium:w-3/4 medium:gap-5">
                    {/* Image-1 */}
                    <div>
                        <Link href="/product-detail"><Image src="/Images/DandyChair.png" alt="Dandy Chair" width={173} height={210} className="hover:scale-105 hover:duration-300 medium:w-[300px]" /></Link>
                        <div>
                            <p className="clashdisplayFont text-xl">The Dandy Chair</p>
                            <p className="satoshiFont text-lg">£ 250</p>
                        </div>
                    </div>

                    {/* Image-2 */}
                    <div>
                        <Image src="/Images/VaseSet.png" alt="Vase Set" width={163} height={201} className="medium:w-[300px]" />
                        <div>
                            <p className="clashdisplayFont text-xl">Rustic Vase Set</p>
                            <p className="satoshiFont text-lg">£ 155</p>
                        </div>
                    </div>

                    {/* Image-3 */}
                    <div>
                        <Image src="/Images/LucyLamp.png" alt="Lucy Lamp" width={163} height={201} className="medium:w-[300px]" />
                        <div>
                            <p className="clashdisplayFont text-xl">The Lucy Lamp</p>
                            <p className="satoshiFont text-lg">£ 399</p>
                        </div>
                    </div>

                    {/* Image-4 */}
                    <div>
                        <Image src="/Images/SilkyVase.png" alt="Silky Vase" width={163} height={201} className="medium:w-[300px]" />
                        <div>
                            <p className="clashdisplayFont text-xl">The Silky Vase</p>
                            <p className="satoshiFont text-lg">£ 125</p>
                        </div>
                    </div>

                    {/* Image-5 */}
                    <div>
                        <Image src="/Images/DandyChair-1.png" alt="Dandy Chair" width={173} height={210} className="medium:w-[300px]" />
                        <div>
                            <p className="clashdisplayFont text-xl">The Dandy Chair</p>
                            <p className="satoshiFont text-lg">£ 250</p>
                        </div>
                    </div>

                    {/* Image-6 */}
                    <div>
                        <Image src="/Images/DandyChair-2.png" alt="Vase Set" width={163} height={201} className="medium:w-[300px]" />
                        <div>
                            <p className="clashdisplayFont text-xl">The Dandy Chair</p>
                            <p className="satoshiFont text-lg">£ 155</p>
                        </div>
                    </div>

                    {/* Image-7 */}
                    <div>
                        <Image src="/Images/DandyChair-3.png" alt="Vase Set" width={163} height={201} className="medium:w-[300px]" />
                        <div>
                            <p className="clashdisplayFont text-xl">The Dandy Chair</p>
                            <p className="satoshiFont text-lg">£ 250</p>
                        </div>
                    </div>

                    {/* Image-8 */}
                    <div>
                        <Image src="/Images/LucyLamp-1.png" alt="Lucy Lamp" width={163} height={201} className="medium:w-[300px]" />
                        <div>
                            <p className="clashdisplayFont text-xl">The Lucy Lamp</p>
                            <p className="satoshiFont text-lg">£ 399</p>
                        </div>
                    </div>

                    {/* Image-9 */}
                    <div>
                        <Image src="/Images/LucyLamp-2.png" alt="Lucy Lamp" width={163} height={201} className="medium:w-[300px]" />
                        <div>
                            <p className="clashdisplayFont text-xl">The Lucy Lamp</p>
                            <p className="satoshiFont text-lg">£ 399</p>
                        </div>
                    </div>

                    <button className="satoshiFont text-base mt-7 w-full mobile:hidden medium:grid">Load more</button>

                </div>

                <button className="satoshiFont text-base mt-7 w-full medium:hidden">View collection</button>

            </div>



        </main>
    )
}

export default Ceramics;