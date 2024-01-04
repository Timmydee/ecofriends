import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { GrFormNext, GrPrevious } from "react-icons/gr";
import { slideVariants } from "@/utils/motion";
import Image from "next/image";
import { slides } from "googleapis/build/src/apis/slides";

const images = [
  "/show18.webp",
  "/show1.webp",
  "/show17.webp",
  "/show16.webp",
  "/show15.webp",
  "/show22.webp",
  "/show2.webp",
  "/show9.webp",
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<string>("left");

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1 === images.length ? 0 : prev + 1));
  };

  const handlePrevious = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev - 1 < 0 ? images.length - 1 : prev - 1));
  };

  const handleDotClick = (index: any) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("right");
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [direction, currentIndex]);

  return (
    <div>
      <div className="carousel-images">
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            variants={slideVariants}
            initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
            animate="visible"
            exit="exit"
          />
        </AnimatePresence>
    </div>
        {/* <div className="slide_direction"></div> */}
        <div className="indicator">
          {images.map((_, index) => (
            <div
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>
      </div>
    // </div>
  );
};

export default Carousel;
