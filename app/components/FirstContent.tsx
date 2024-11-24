import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function FirstContent() {
  return (
    <div>
      <div className="bg-black w-full h-96">
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
      </div>
    </div>
  );
}
