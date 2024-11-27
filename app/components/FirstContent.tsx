"use client";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function FirstContent() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [animationClass, setAnimationClass] = useState<string>(
    "slide-in-from-right"
  );
  const images = [
    "/kitchen-pics/k1.jpg",
    "/kitchen-pics/k2.jpg",
    "/kitchen-pics/k3.jpg",
    "/kitchen-pics/k4.jpg",
    "/kitchen-pics/k5.jpg",
    "/kitchen-pics/k6.jpg",
    "/kitchen-pics/k7.jpg",
    "/kitchen-pics/k8.jpg",
    "/kitchen-pics/k9.jpg",
  ];

  function nextSlide() {
    setPrevIndex(currentIndex);
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setAnimationClass("slide-in-from-right");
  }

  // Slide to the previous image
  function prevSlide() {
    setPrevIndex(currentIndex);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setAnimationClass("slide-in-from-left");
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide(); // Auto slide every 7 seconds
    }, 7000);

    return () => clearInterval(intervalId);
  }, [currentIndex, nextSlide]);

  return (
    <div>
      <div className="bg-black md:bg-white w-full h-full md:h-1500 pb-10 md:flex ">
        <div className="flex justify-center items-center ">
          {/*Socials*/}
          <div className="flex gap-5 justify-center items-center w-full md:w-12 h-14 md:h-1200 mx-8 rounded md:flex-col md:border-l-16 md:border-black md:pl-8 bg-[rgb(51,51,51)] md:bg-white">
            <div className="w-7 h-7 bg-white rounded flex justify-center items-center hover:bg-slate-500">
              <FaSquareFacebook className="w-6 h-6 md:w-10 md:h-10" />
            </div>
            <div className="w-7 h-7 bg-white rounded flex justify-center items-center hover:bg-slate-500">
              <FaInstagram className="w-6 h-6 md:w-10 md:h-10" />
            </div>
            <div className="w-7 h-7 bg-white rounded flex justify-center items-center hover:bg-slate-500">
              <FaXTwitter className="w-6 h-6 md:w-10 md:h-10" />
            </div>
          </div>
        </div>
        {/*Socials*/}

        <div className="relative flex items-center justify-center mt-10 px-8">
          <div
            className="w-[500px] h-[330px] overflow-hidden flex items-center justify-center relative rounded-3xl 
          md:h-700 md:max-w-[700px]
          "
          >
            {/* Previous Image */}
            {prevIndex !== null && (
              <Image
                src={images[prevIndex]}
                alt={`Slide ${prevIndex}`}
                width={500}
                height={350}
                key={`prev-${prevIndex}`}
                className={`object-cover w-full px-2 h-full rounded-3xl absolute transition-all duration-500 ${
                  animationClass === "slide-in-from-left"
                    ? "slide-out-to-right"
                    : "slide-out-to-left"
                }`}
              />
            )}
            {/* Current Image */}
            <Image
              className={`object-cover w-full px-2 h-full rounded-3xl absolute transition-all duration-500 ${animationClass}
              md:h-700 md:w-full
            `}
              src={images[currentIndex]}
              alt={`Slide ${currentIndex}`}
              key={`current-${currentIndex}`}
              width={500}
              height={350}
            />
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
            >
              <GrFormPrevious />
            </button>

            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
            >
              <MdNavigateNext />
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-6 mt-8 px-10 md:bg-black">
          <div className="w-56">
            <h1 className="text-white text-5xl text-justify font-extrabold font-jost ">
              LUXURY MODERN KITCHEN DESIGN
            </h1>
          </div>
          <div className="w-56">
            <p className="capitalize text-white text-center font-jost ">
              High-End custom kitchen cabinets, closets, design, installation &
              more
            </p>
          </div>
          <div className="">
            <button className="w-40 h-14 font-semibold text-white text-lg border border-white hover:text-black hover:bg-white transition-all duration-300 ease-in-out">
              <a href="#">CONTACT US</a>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-full  py-10 pt-10 pb-20 text-white flex flex-col gap-10 justify-center items-center bg-black bg-opacity-90">
        <div className="w-64">
          <h1 className="font-jost text-3xl font-extrabold uppercase text-center">
            Lorem ipsum dolor sit amet
          </h1>
        </div>

        <div className="text-center font-jost text-md">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            porttitor tincidunt dictum. Etiam eget turpis elementum, varius
            sapien sed, rutrum lorem. Nullam volutpat volutpat risus, sed
            ultricies sapien fermentum et. Ut finibus et tortor vitae elementum.
          </p>
          <br />
          <p>
            Donec nec luctus turpis. Morbi egestas auctor pharetra. Nulla in est
            enim. Ut id velit consequat, egestas ex eu, mattis lacus. In porta
            non ante eget placerat. Suspendisse vitae luctus lectus. Phasellus
            tincidunt non turpis vel aliquam.
          </p>
        </div>
        <div>
          <button className="w-44 h-14  text-white text-lg font-semibold border border-white hover:text-black hover:bg-white transition-all duration-300 ease-in-out">
            <a href="#">LEARN MORE</a>
          </button>
        </div>
      </div>
    </div>
  );
}
