"use client";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { FaClock } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  return (
    <div>
      <div className="  bg-black bg-opacity-90 w-full h-80 flex flex-col justify-center items-center gap-3 pt-5 pb-8">
        <div>
          <h1 className="uppercase text-white text-center font-jost font-extrabold text-xl ">
            Mailing List
          </h1>
        </div>
        <div className="mt-6">
          <input
            type="text"
            placeholder="Name *"
            className="w-80 h-12 font-jost pl-7 placeholder:text-black placeholder:text-lg shadow-xl"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email *"
            className="w-80 h-12 font-jost pl-7 placeholder:text-black placeholder:text-lg shadow-xl"
          />
        </div>
        <div>
          <button className="uppercase text-white text-xl font-jost w-80 h-12 border border-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out font-semibold">
            Subscribe
          </button>
        </div>
      </div>

      <div className=" flex flex-col justify-center items-center gap-7 mt-10 px-16 text-charcoal">
        <div>
          <Image src={"/logo/DE-logo.png"} alt="Logo" width={180} height={90} />
        </div>

        <div className="flex flex-col justify-center items-center ">
          <div className="mb-1">
            <IoLocationSharp className="text-2xl" />
          </div>
          <div className="text-center text-lg">
            Address: 123 Design Avenue, Suite 100, Cityville, Country 12345
          </div>
        </div>

        <div className="flex flex-col justify-center items-center ">
          <div className="mb-1">
            <BsFillTelephoneFill className="text-2xl" />
          </div>
          <div className="text-center">
            <span className="text-xl font-semibold">Business:</span> +1
            800-123-4567
          </div>
        </div>

        <div className="flex flex-col justify-center items-center ">
          <div className="mb-1">
            <IoIosMail className="text-2xl" />
          </div>
          <div className="text-center text-lg">info@designexcellenceco.com</div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="mb-1">
            <FaClock className="text-2xl" />
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <div className="text-center text-base">
              <span className="text-lg font-semibold">Monday - Friday:</span>
              <br />
              9:00 AM - 6:00 PM
            </div>
            <div className="text-center text-lg">
              <span className="text-lg font-semibold">Saturday:</span>
              <br /> 10:00 AM - 4:00 PM
            </div>
            <div className="text-center text-lg">
              <span className="text-lg font-semibold">Sunday:</span>
              <br /> Closed
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-5 justify-center items-center font-jost text-charcoal text-center uppercase mt-9 px-20">
        <div>
          <Link
            href="/"
            className={
              pathname === "/"
                ? " text-black"
                : "overline hover:underline bg-slate-400"
            }
          >
            Home
          </Link>
        </div>
        <div>
          <Link href="#" className="overline">
            About us
          </Link>
        </div>
        <div>
          <Link href="#" className="overline">
            our process
          </Link>
        </div>
        <div>
          <Link href="#" className="overline">
            {" "}
            gallery
          </Link>
        </div>
        <div>
          <Link href="#" className="overline">
            brochure
          </Link>
        </div>
        <div>
          <Link href="#" className="overline">
            contact us
          </Link>
        </div>
      </div>
      <div className="mb-20 mt-10 px-10 text-center text-sm">
        <p>
          © 2024 Design Excellence Home and Office Systems Co. All Rights
          Reserved.
        </p>
      </div>
    </div>
  );
}
