import { FaCheckCircle } from "react-icons/fa";

const EmailSignup = () => {
    return (
        <main className="">
            <div className="EmailSignupBackgroundImage text-white p-6 flex flex-col gap-9 medium:flex-col items-center">
                <div className="flex flex-col gap-10  medium:w-[500px]">
                    <h1 className="clashdisplayFont text-2xl medium:flex justify-center medium:text-[32px]">Join the club and get the benefits</h1>
                    <p className="satoshiFont text-sm medium:text-lg px-4">Sign up for our newsletter and receive exclusinve offers on new ranges, sales, pop up stores and more</p>

                    <div className="flex flex-col gap-3 medium:flex-row px-4 justify-around">
                        <div className="flex flex-row gap-3 ">
                            <div className="flex items-center"><FaCheckCircle /></div>
                            <p className="satoshiFont text-base">Exclusive offers</p>
                        </div>
                        <div className="flex flex-row gap-3">
                            <div className="flex items-center"><FaCheckCircle /></div>
                            <p className="satoshiFont text-base">Free events</p>
                        </div>
                        <div className="flex flex-row gap-3">
                            <div className="flex items-center"><FaCheckCircle /></div>
                            <p className="satoshiFont text-base">Large discounts</p>
                        </div>

                    </div>

                    <div className="flex flex-row">
                        <form className="flex flex-row medium:w-full">
                            <input type="email" placeholder=" &nbsp; &nbsp; &nbsp; your@email.com" className="w-full h-[50px] satoshiFont text-base" />
                            <button className="satoshiFont text-base bg-[#2A254B] text-white py-3  h-[50px] flex-shrink-0 px-10">Sign up</button>
                        </form>
                    </div>
                </div>


            </div>
        </main>
    )
}

export default EmailSignup;