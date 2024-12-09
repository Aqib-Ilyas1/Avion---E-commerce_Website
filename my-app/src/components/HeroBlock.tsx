import Image from "next/image";
const HeroBlock = () => {
    return (
        // <main className="h-[528px] flex flex-row pt-24 px-24 mobile:w-full mobile:p-0 mobile:h-[500px]">
        //     {/* Left section with Text */}
        //     <div className="h-[520px] bg-[#2A254B] w-[760px] mobile:w-full mobile:h-[500px] laptop:h-[520px]">
        //         <div className="text-white h-[177px] flex flex-col p-8 gap-6 tablet:flex tablet:items-center laptop:flex">
        //             <h2 className="clashdisplayFont h-[177px] w-[435px] text-[32px] mobile:w-[300px]">The furniture brand for the future, with timeless designs</h2>
        //             <button className="clashdisplayFont text-white text-base bg-[#c8c7cf3a] px-4 py-4 max-w-36 mobile:hidden laptop:flex">View collection</button>
                    
        //         </div>

        //         <div className="w-[592px] h-[356px] content-end p-8 mobile:w-full mobile:flex mobile:flex-col mobile:gap-10 tablet:flex tablet:items-center">
        //             <p className="clashdisplayFont text-white text-lg w-[590px] mobile:w-[300px]">A new era in eco friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors and a beautiful way to display things digitally using modern web technologies.</p>
        //             <button className="clashdisplayFont text-white text-base bg-[#c8c7cf3a] px-4 py-4  mobile:w-[300px] laptop:hidden">View collection</button>
        //         </div>

        //     </div>

        //     {/* Right Section- Chair Image */}
        //     <div className="flex h-[520px] mobile:hidden">
        //         <Image src="/Right-Image.png" alt="image" width={520} height={520} className="mobile:hidden"/>
        //     </div>
        // </main>

        <main className="flex flex-row laptop:pt-24 laptop:px-24 h-[528px] mobile:flex-col mobile:h-auto laptop:flex laptop:flex-row ">
        {/* Left Section */}
        <div className="bg-[#2A254B] w-[760px] h-[520px] flex flex-col justify-between p-8 mobile:w-full mobile:h-auto laptop:w-[720px]">
          {/* Heading and Button */}
          <div className="text-white flex flex-col gap-6">
            <h2 className="clashdisplayFont text-[32px] w-[435px] mobile:w-full mobile:text-center">
              The furniture brand for the future, with timeless designs
            </h2>
            <button className="clashdisplayFont text-white text-base bg-[#c8c7cf3a] px-4 py-2 w-fit mobile:hidden">
              View collection
            </button>
          </div>
  
          {/* Description and Button */}
          <div className="text-white flex flex-col gap-6 mobile:items-center">
            <p className="clashdisplayFont text-lg w-[590px] mobile:w-full text-center">
              A new era in eco-friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors, and a beautiful way to display things digitally using modern web technologies.
            </p>
            <button className="clashdisplayFont text-white text-base bg-[#c8c7cf3a] px-4 py-2 w-fit mobile:block hidden">
              View collection
            </button>
          </div>
        </div>
  
        {/* Right Section */}
        <div className="flex items-center justify-center  mobile:hidden laptop:flex">
          <Image
            src="/DandyChair.png"
            alt="Chair"
            width={520}
            height={520}
            className="object-contain"
          />
        </div>
      </main>
    );
}

export default HeroBlock;
