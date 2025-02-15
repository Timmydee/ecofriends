import styles from "@/styles";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
<div className="flex flex-col lg:flex-row px-12 items-center lg:h-[95vh]">
  <div className="flex-col justify-center lg:justify-start lg:items-start items-center inline-flex text-white py-6 lg:py-0">
    <div className="md:w-full w-[296px]">
      <h2 className="text-[30px] md:text-[57px] font-extrabold font-poppins lg:text-start text-center leading-1">
        
      Shop to Heal the Earth.
      {/* Join us in Creating a Greener  */}
      </h2>
      <p className="lg:w-[532px] text-[18px] md:text-[24px] font-open-sans font-normal w-[100%] lg:text-start text-center my-3">
      We aim to connect conscious shoppers with sustainability makers, offering sustainable products that tell a story of hope and responsibility.
      </p>
    </div>
    
    <div className="lg:px-[54px] px-[34px] pt-4 pb-[17px] mt-2 cursor-pointer bg-yellow-400 hover:bg-yellow-500 rounded-lg justify-center items-center inline-flex">
      <Link href="#survey" className="text-green-800 text-[16px] lg:text-[18px] font-medium font-roboto">
        Take the survey
      </Link>
    </div>
  </div>

  <div className="flex items-center justify-center w-full lg:w-[600px]">
    <Image
      src="/hero2.webp"
      width={700}
      height={700}
      className="max-w-full h-auto object-cover rotate-imag"
      alt="hero"
    />
  </div>
</div>
  )
};

export default Hero;
