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
      <div className={` ${styles.flexBetween} lg:px-12 px-5 py-3  `}>
        <div className="font-bold font-mono leading-none">
          <h3 className="text-white text-xl">Eco</h3>
          <h3 className="pl-1 text-yellow-500 text-xl ">Friends</h3>
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
              <AiOutlineClose color="black" size={30} />
            )}
          </div>
        </div>

        {toggle && (
          <div className="bg-blue-200 fixed w-[80%] top-0 bottom-0 left-0 h-[100vh]">
            <div className="flex-col justify-center items-center p-4 text-white text-[16px] w-full">
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
                <Link href="/tracker">Tracker</Link>
              </div>
              <div
                className="mt-6 text-center"
                onClick={handleClick}
              >
                <Link href="/about">Our Services</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
