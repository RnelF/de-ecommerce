import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { FaClock } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <div className="bg-black bg-opacity-90 w-full h-80 flex flex-col justify-center items-center gap-3 pt-5 pb-8">
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

      <div className="mb-96 flex flex-col justify-center items-center gap-7 mt-10 px-16 text-charcoal">
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
            <div className="text-center text-lg">
              <span className="text-xl font-semibold">Monday - Friday:</span>
              <br />
              9:00 AM - 6:00 PM
            </div>
            <div className="text-center text-lg">
              <span className="text-xl font-semibold">Saturday:</span>
              <br /> 10:00 AM - 4:00 PM
            </div>
            <div className="text-center text-lg">
              <span className="text-xl font-semibold">Sunday:</span>
              <br /> Closed
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
