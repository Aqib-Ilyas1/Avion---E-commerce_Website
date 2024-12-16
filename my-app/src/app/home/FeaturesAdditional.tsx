import Image from "next/image";

const FeaturesAdditional = () => {
    return (
        <main>
            <div className="p-8 flex flex-col gap-5 medium:flex-row gap-1.5">
                <div className="bg-[#2A254B] p-6 flex flex-col gap-7 medium:flex-1">
                    <h2 className="clashdisplayFont text-xl text-white">It started with a small idea</h2>
                    <p className="satoshiFont text-base text-white ">A global brand with local beginnings, our story began in a small studio in South London in early 2014</p>
                    <button className="satoshiFont text-white text-base bg-[#c8c7cf3a] px-4 py-2">
                        View collection
                    </button>

                </div>

                <div className="medium:flex-1">
                    <Image src={"/Images/FeaAd-image.png"} alt="Additional-Features-Image" width={350} height={259} className="tablet:w-full medium:h-full"/>

                </div>
            </div>
        </main>
    );
}

export default FeaturesAdditional;