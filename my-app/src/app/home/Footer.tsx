import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSkype } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";


const Footer = () => {
    return (
        <main>
            <div className="bg-[#2A254B] text-white p-8 flex flex-col gap-9 medium:flex-row">

                <div className="flex  medium:gap-9">

                    <div className="categories flex-1">
                        <ul className="satoshiFont text-sm flex flex-col gap-3">
                            <p className="clashdisplayFont text-base">Categories</p>
                            <li>Crockey</li>
                            <li>Furniture</li>
                            <li>Homeware</li>
                            <li>Plant pots</li>
                            <li>Chairs</li>
                        </ul>
                    </div>

                    <div className="menu flex-1">
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


                {/* end input */}
                <div className="endInput flex flex-col gap-4 flex-1">
                    <p className="clashdisplayFont text-base">Join our mailing list</p>
                    <form className="flex flex-row">
                        <input type="email" placeholder=" &nbsp; &nbsp; &nbsp; your@email.com" className="w-full h-[50px] satoshiFont text-base bg-[#2c2b5f] text-white" />
                        <button className="satoshiFont text-base bg-white text-[#2A254B] py-3  h-[50px] flex-shrink-0 px-10">Sign up</button>
                    </form>

                    {/* <p className="text-[#4E4D93]">______________________________________________</p> */}
                    <p className="satoshiFont text-sm flex justify-center mt-3 medium:hidden">Copyright 2022 Avion LTD</p>
                </div>
            </div>

            {/* Last section */}
            <section className="bg-[#2A254B] text-white mobile:hidden medium:flex">
                <div className="p-8 medium:flex medium:flex-row justify-between w-full">
                    <div className="">
                        <p className="satoshiFont text-sm">Copyright 2022 Avion LTD</p>
                    </div>
                    <div className="flex flex-row gap-5">
                        <FaLinkedin />
                        <FaFacebookSquare />
                        <FaInstagram />
                        <FaSkype />
                        <FaTwitter />
                        <FaPinterest />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Footer;