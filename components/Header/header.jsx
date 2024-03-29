import { Inter } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { FaPlayCircle } from "react-icons/fa";
import imageOne from "@/public/image1.png";
import imageTwo from "@/public/image2.png";
import imageThree from "@/public/image3.png";
import telegramCloud from "@/public/telegram-cloud.png";
import { IoMdClose } from "react-icons/io";
import ReelsVideo from "../Reels/reelsVideo";

const inter = Inter({ subsets: ["latin"] });

export default function Header() {
  const [state, setState] = useState(false);
  return (
    <>
      <div
        className={`${inter.className} w-full h-auto bg-hero bg-black/95 text-white`}
      >
        <div className=" container mx-auto  py-[80px]">
          <div className="grid grid-cols-2">
            <div className="text-start text-4xl font-bold">
              МЫ СОЗДАЕМ <br /> ЗАМЕЧАТЕЛЬНЫЕ
              <br /> ЦИФРОВЫЕ ТЕХНОЛОГИИ
            </div>
            <div className="flex justify-end items-center gap-16">
              <div>
                <Image src={telegramCloud} alt="" />
              </div>
              <div className="text-end text-4xl font-bold">
                КОТОРЫЕ ДЕЛАЮТ <br /> ДОЛГОВЕЧНЫЙ <br /> ВПЕЧАТЛЕНИЕ
              </div>
            </div>
          </div>
          <h2 className="w-full h-auto my-10 text-center text-9xl uppercase font-semibold">
            digital solutions
          </h2>
          <div className="grid grid-cols-3">
            <div className="w-[409px] h-[365px] rounded-3xl cursor-pointer group overflow-hidden ">
              <Image
                src={imageOne}
                alt=""
                className="w-full h-full object-cover group-hover:scale-125 transition duration-700 ease-in-out "
              />
            </div>
            <div className="w-full h-full flex flex-col justify-between items-center">
              <button
                onClick={() => setState(!state)}
                type="button"
                className="w-[175px] h-[56px] flex gap-2 justify-center items-center hover:bg-white hover:text-[#353535] bg-[#353535] border rounded-full text-base font-medium transition"
              >
                SHOWREEL
                <FaPlayCircle />
              </button>
              <div className="w-[411px] h-[277px] rounded-3xl cursor-pointer group overflow-hidden">
                <Image
                  src={imageTwo}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-125 transition duration-700 ease-in-out "
                />
              </div>
            </div>
            {state && (
              <Fade className="fixed w-screen h-screen py-8 px-16 bg-[rgba(255,255,255,0.07)] backdrop-blur-sm top-0 left-0 z-10">
                <div className="relative w-full h-full rounded-md overflow-hidden bg-black">
                  <button
                    type="button"
                    onClick={() => setState(!state)}
                    className="absolute top-4 right-4 p-2 hover:bg-white hover:text-black border border-white rounded-full transition-all duration-100 ease-in-out z-20"
                  >
                    <IoMdClose size={24} />
                  </button>
                  <ReelsVideo />
                </div>
              </Fade>
            )}
            <div className="w-[409px] h-[365px] rounded-3xl cursor-pointer group overflow-hidden">
              <Image
                src={imageThree}
                alt=""
                className="w-full h-full object-cover group-hover:scale-125 transition duration-700 ease-in-out "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
