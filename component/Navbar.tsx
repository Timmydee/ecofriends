"use client";
import styles from "@/styles";
import React, { useState } from "react";
import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [toggle, settoggle] = useState(false);

  const handleClick = () => {
    settoggle((prev) => !prev);
  };
  return (
    <div className={`${styles.innerWidth} relative z-20 shadow-lg `}>
      <div className={` ${styles.flexBetween} lg:px-12 px-5 py-2  `}>
        <div className="lg:font-bold font-bold font-mono leading-none">
          <h3 className="text-white lg:text-xl text-base">Eco</h3>
          <h3 className="pl-3 text-yellow-500 lg:text-xl text-base ">Friends</h3>
        </div>
        <div
          className={`text-l font-normal text-white lg:flex hidden space-x-10`}
        >
          <div>
            <Link href="/" className="hover:text-yellow-600">
              Home
            </Link>
          </div>
          <div>
            <Link href="/" className="hover:text-yellow-500">
              About
            </Link>
          </div>
          <div>
            <Link href="/" className="hover:text-yellow-600">
              Market Place
            </Link>
          </div>
          <div>
            <Link href="/" className="hover:text-yellow-500">
              Contact
            </Link>
          </div>
        </div>

        <div className="lg:hidden block ">
          <div onClick={handleClick} className="relative flex justify-end">
            {!toggle ? (
              <BiMenuAltRight color="white" size={30} />
            ) : (
              <AiOutlineClose color="white" size={30} />
            )}
          </div>
        </div>

        {toggle && (
          <div className="bg-white fixed w-[100%] top-0 bottom-0 left-0 overflow-y-hidden h-[100%] ">
            <div className="flex-col justify-center items-center p-4 text-black text-[16px] w-full">
              <div className="absolute right-6" onClick={handleClick}><AiOutlineClose color="black" size={30} /></div>
              <div
                className="mt-6 text-center"
                onClick={handleClick}
              >
                <Link href="/">Home</Link>
              </div>
              <div
                className="mt-6 text-center"
                onClick={handleClick}
              >
                <Link href="/about">About Us</Link>
              </div>
              <div
                className="mt-6 text-center"
                onClick={handleClick}
              >
                <Link href="/tracker">Marketplace</Link>
              </div>
              <div
                className="mt-6 text-center"
                onClick={handleClick}
              >
                <Link href="/about">Contacts</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
