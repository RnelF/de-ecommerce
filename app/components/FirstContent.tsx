"use client";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function FirstContent() {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  function prevSlide() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }

  function nextSlide() {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="bg-black w-full h-full pb-10 ">
        {/*Socials*/}
        <div className="flex justify-center items-center">
          <div
            className="flex gap-5 justify-center items-center w-full h-14 mx-8 rounded"
            style={{ backgroundColor: "rgb(51, 51, 51)" }}
          >
            <div className="w-7 h-7 bg-white rounded flex justify-center items-center hover:bg-slate-500">
              <FaSquareFacebook className="w-6 h-6" />
            </div>
            <div className="w-7 h-7 bg-white rounded flex justify-center items-center hover:bg-slate-500">
              <FaInstagram className="w-6 h-6" />
            </div>
            <div className="w-7 h-7 bg-white rounded flex justify-center items-center hover:bg-slate-500">
              <FaXTwitter className="w-6 h-6" />
            </div>
          </div>
        </div>
        {/*Socials*/}

        <div className="relative flex items-center justify-center mt-10 px-8">
          <div className="w-[500px] h-[330px] overflow-hidden flex items-center justify-center">
            <Image
              src={images[currentIndex]}
              alt={`Slide ${currentIndex}`}
              width={500}
              height={350}
              objectFit="cover"
              className="w-full h-full rounded-3xl"
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

        <div className="flex flex-col justify-center items-center gap-6 mt-8 px-10">
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
            <button className="w-40 h-14  text-white text-lg border border-white hover:text-black hover:bg-white ">
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
          <button className="w-44 h-14  text-white text-lg border border-white hover:text-black hover:bg-white ">
            <a href="#">LEARN MORE</a>
          </button>
        </div>
      </div>
    </div>
  );
}
