import { TbTruckDelivery } from "react-icons/tb";
import { FaRegCircleCheck } from "react-icons/fa6";
import { VscCreditCard } from "react-icons/vsc";
import { FaRecycle } from "react-icons/fa";

const Feature = () => {
    return(
        <main className="clashdisplayFont">
            <div className="p-8 pt-6 flex flex-col gap-8">
                <p className=" w-[190px] text-2xl">What makes our brand different</p>
                <div className="flex flex-col gap-3">
                    <TbTruckDelivery />
                    <p className="text-[16px]">Next day as standard</p>
                    <p className="satoshiFont text-[14px]">Order before 3pm and get your order the next day as standard</p>
                </div>

                <div className="flex flex-col gap-3">
                    <FaRegCircleCheck />
                    <p className="text-[16px]">Made by true artisans</p>
                    <p className="satoshiFont text-[14px]">Hnadmade crafted goods made with real passion and craftmanship</p>
                </div>

                <div className="flex flex-col gap-3">
                    <VscCreditCard />
                    <p className="text-[16px]">Unbeatable prices</p>
                    <p className="satoshiFont text-[14px]">For our material and quality you won&apos;t find better prices anywhere</p>
                </div>

                <div className="flex flex-col gap-3">
                    <FaRecycle />
                    <p className="text-[16px]">Recycled packaging</p>
                    <p className="satoshiFont text-[14px]">We use 100% recycled packaging to ensure our footprint is manageable</p>
                </div>
                
            </div>

        </main>
    )
}

export default Feature;