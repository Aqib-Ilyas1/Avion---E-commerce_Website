import { TbTruckDelivery } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";

const TopHeader = () => {
    return (
        <main>
            <div className="bg-[#2A254B] px-5 flex items-center gap-2 justify-between tablet:h-[40px] ">
                <div className="flex items-center gap-1.5 w-full justify-center ">
                    <div><TbTruckDelivery className="text-white" /></div>
                    <p className="text-white satoshiFont text-sm"> Free Delivery on all orders over £50 with code easter checkout </p>
                </div>


                <div>
                    <RxCross2 className="text-white" />

                </div>

            </div>

        </main>
    )
}

export default TopHeader;