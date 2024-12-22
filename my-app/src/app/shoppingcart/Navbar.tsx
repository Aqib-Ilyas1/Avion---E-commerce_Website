import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
    return (
        <main className="h-[132px] w-full mobile:h-[69px]">
            {/* Title with icons */}
            <div className="h-[70px] flex items-center">
                <div className="flex-auto min-w-12 p-8 mobile:hidden medium:inline-block"><CiSearch /></div>
                <p className="clashdisplayFont flex-auto justify-center text-2xl mobile:ml-5">Avion</p>

                <div className="flex gap-6 p-8 items-center">
                    <button className="hover:bg-[#726E8D] transition ease-in rounded-lg p-3"><a href="/shoppingcart"><IoCartOutline className="mobile:hidden medium:inline-block hover:text-white" /></a></button>
                    <CiSearch className="medium:hidden" />
                    <RxHamburgerMenu className="medium:hidden" />
                    <FaRegCircleUser className="mobile:hidden medium:inline-block" />
                </div>
            </div>

            {/* Nav links */}
            <div className="h-[61px] flex items-center justify-center">
                <ul className="flex items-center gap-8 text-[#726E8D] text-base mobile:hidden medium:flex">
                    <li>Plant pots</li>
                    <li>Ceramics</li>
                    <li>Tables</li>
                    <li>Chairs</li>
                    <li>Crockery</li>
                    <li className="tablet:hidden laptop:inline-block">Tableware</li>
                    <li className="tablet:hidden laptop:inline-block">Cutlery</li>
                </ul>

            </div>
        </main>
    );
}

export default Navbar;