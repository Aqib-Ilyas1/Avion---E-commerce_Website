import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSkype } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";


const Footer = () => {
    return (
        <main>
            <div className="bg-[#2A254B] text-white p-8 flex flex-col gap-9 medium:flex-row medium:px-14 medium:justify-between">
                <div className="flex flex-row justify-between tablet:justify-around medium:gap-5">

                    <div className="flex flex-col gap-5">
                        <h1 className="clashdisplayFont text-4xl">Avion</h1>
                        <ul className="satoshiFont text-sm flex flex-col gap-3">
                            <li>21 New York Street</li>
                            <li>New York City</li>
                            <li>United States of America</li>
                            <li>432 34</li>
                        </ul>
                    </div>

                    <div>
                        <h1 className="clashdisplayFont text-base mt-3 mb-5">Social Links</h1>
                        <div className="flex flex-col gap-7 medium:flex medium:flex-row">
                            <div className="flex gap-9">
                                <FaLinkedin />
                                <FaFacebookSquare />
                                <FaInstagram />
                            </div>

                            <div className="flex gap-9">
                                <FaSkype />
                                <FaTwitter />
                                <FaPinterest />
                            </div>

                        </div>
                    </div>
                </div>

                <div className="menu pr-5 mobile:hidden medium:inline-block">
                    <ul className="satoshiFont text-sm flex flex-col gap-3">
                        <p className="clashdisplayFont text-base">Menu</p>
                        <li>New arrivals</li>
                        <li>Best sellers</li>
                        <li>Recently viewed</li>
                        <li>Popular this week</li>
                        <li><button className="hover:bg-sky-700 transition ease-in"><a href="/productlistings">All products</a></button></li>
                    </ul>
                </div>

                <div className="categories mobile:hidden medium:inline-block">
                        <ul className="satoshiFont text-sm flex flex-col gap-3">
                            <p className="clashdisplayFont text-base">Categories</p>
                            <li>Crockey</li>
                            <li>Furniture</li>
                            <li>Homeware</li>
                            <li>Plant pots</li>
                            <li>Chairs</li>
                        </ul>
                    </div>

                <div className="flex justify-between tablet:justify-around">
                    <div className="ourCompany ">
                        <ul className="satoshiFont text-sm flex flex-col gap-3">
                            <p className="clashdisplayFont text-base">Our company</p>
                            <li><button className="hover:bg-sky-700 transition ease-in"><a href="/about">About us</a></button></li>
                            <li>Vacancies</li>
                            <li>Contact us</li>
                            <li>Privacy</li>
                            <li>Return policy</li>
                        </ul>
                    </div>

                    <div className="menu pr-5 medium:hidden">
                        <ul className="satoshiFont text-sm flex flex-col gap-3">
                            <p className="clashdisplayFont text-base">Menu</p>
                            <li>New arrivals</li>
                            <li>Best sellers</li>
                            <li>Recently viewed</li>
                            <li>Popular this week</li>
                            <li>All products</li>
                        </ul>
                    </div>
                </div>


                <div>
                    {/* <p className="text-[#4E4D93]">______________________________________________</p> */}
                    <p className="satoshiFont text-sm flex justify-center mt-3 medium:hidden">Copyright 2022 Avion LTD</p>
                </div>
            </div>

            {/* Last section */}
            <section className="bg-[#2A254B] text-white mobile:hidden medium:flex medium:px-14">
                <div className="py-8 medium:flex medium:flex-row justify-between w-full">
                    <div className="">
                        <p className="satoshiFont text-sm">Copyright 2022 Avion LTD</p>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default Footer;