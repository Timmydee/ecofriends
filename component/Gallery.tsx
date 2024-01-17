"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles";
import Link from "next/link";

const imagesArrays = [
  [
    "/show18.webp",
    "/show17.webp",
    "/show16.webp",
    "/show22.webp",
    "/green1.webp",
    // "/green2.webp",
    "/green3.webp",
    "/green4.webp",
    "/green5.webp",
    // "/green6.webp",
    
  ],
  [

    "/eco2.webp",
    "/eco3.webp",
    "/eco5.webp",
    "/eco6.webp",
    "/show15.webp",
    "/show2.webp",
  ],
  [
    "/show16.webp",
    "/show15.webp",
    "/green3.webp",
    "/green4.webp",
    "/green5.webp",
    "/show2.webp",
    "/eco2.webp",
    "/eco3.webp",
    "/eco5.webp",
    "/eco6.webp",
    "/show17.webp",
    "/show16.webp",

  ],
];

const Options = [
  "Stylish Clothing",
  "Home Essentials",
  // "Other Categories",
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number>(0);

  const handleClick = (index: number) => {
    setSelectedImage(index);
  };

  const selectedOption: string[] = imagesArrays[selectedImage];

  return (
    <div className="w-full">
      <div className="px-12 py-6">
        <h2
          className={`${styles.h2Style} text-center text-white lg:text-3xl text-2xl font-bold pb-2`}
        >
          Our Sustainable Showcase
        </h2>
        <h5
          className={`${styles.h5Style} text-center text-lg lg:text-xl pb-5 text-white`}
        >
          Get Ready to Shop with Purpose!
        </h5>

        <div className="flex justify-center items-center space-x-4 pb-6">
          {Options.map((option, index) => (
            <div key={index} className="">
              <button
                className={`bg-green-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring focus:border-green-700 ${selectedImage === index ? "focus:bg-green-800":""}`}
                onClick={() => handleClick(index)}
              >
                {option}
              </button>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2">
          {selectedOption.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`image-${index}`}
              width={300}
              height={50}
              style={{ objectFit: 'cover', width: '100%', height: '96%' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
