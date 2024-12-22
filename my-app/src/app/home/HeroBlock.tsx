import Image from "next/image";
const HeroBlock = () => {
  return (
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
          src="/Images/DandyChair.png"
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
