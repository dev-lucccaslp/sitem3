"use client"

import { useState } from "react";

import Image from "next/image";
import Carousel from "./components/Carousel";
import CardHome from "./components/CardHome";
import { useRouter } from "next/navigation";

import {
  FaCcMastercard,
  FaCcVisa,
} from "react-icons/fa";
import { MdOutlinePix } from "react-icons/md";

export default function Home() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const cardData = [
    { src: '/images/int1.png' },
    { src: '/images/int2.png' },
    { src: '/images/mercado.png' },
    { src: '/images/int3.png' },
    { src: '/images/int5.png' },
  ];

  return (

    <div>
      <div className="w-full">
        <Carousel />
      </div>

      <div className="bg-red-500 py-12 flex items-center justify-center md:gap-2">
        <h2 className="md:text-[30px] text-[20px] font-bold text-white">Tem sempre uma loja <a className="text-yellow-300">pertinho de você</a></h2>

      </div>
      <div className=" mb-2 w-full bg-yellow-300 p-2">

        <div className="flex justify-center py-5">
          <h2 className="text-red-500 text-[30px] text-center font-bold transform hover:scale-105 transition-transform">Faça um tour por nossa loja, clique nos cards abaixo!</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-10 py-5">
          {cardData.map((card, index) => (
            <div key={index} className=" sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/6">
              <CardHome src={card.src} />
            </div>
          ))}
        </div>

        <div  className="w-full flex flex-col md:flex-row justify-center gap-2 items-center py-5 " >
          <div onClick={() => router.push('/contato')} className="border-2  border-gray-700 py-6 px-10 rounded-xl bg-white hover:bg-gray-100 w-[100%] mx-4">
            <header className="flex justify-center items-center">
              <Image
                src={'/images/pessoas.png'}
                width={135}
                height={135}
                alt="cards"
              />
              <h2 className="pl-2 text-gray-800 text-lg font-bold">
                Deseja trabalhar conosco?
              </h2>
            </header>
          </div>
          
          {open ? (
            <div onClick={() => setOpen(false)} className="border-2  border-gray-700 py-6 px-10 rounded-xl bg-gray-300 hover:bg-gray-100 w-[100%] mx-4">
              <header className="flex justify-center items-center">
                <Image
                  src={'/images/card3.png'}
                  width={80}
                  height={80}
                  alt="cards"
                />
                <h2 className="pl-2 text-gray-800 text-lg font-bold">
                  Cartões aceitos em nossas Lojas <br /> e meios de pagamentos:
                </h2>
              </header>
              <div className="flex justify-around mt-2">
                <ul className="text-blue-500 font-bold">
                  <li className="flex items-center"> <FaCcVisa className="text-black text-[25px] mx-1"/> Visa</li>
                  <li className="flex items-center"> <FaCcMastercard className="text-black text-[25px] mx-1"/>  MasterCard</li>
                  <li className="flex gap-2 ml-1">               
                    <Image
                    src={'/images/elo.png'}
                    width={35}
                    height={40}
                    alt="cards"
                  /> Elo</li>
                  <li className="flex items-center"> <MdOutlinePix className="text-green-800 text-[25px] mx-1"/> Pix</li>
                </ul>
                <ul className="text-blue-500 font-bold">
                  <li>- Sodexo</li>
                  <li>- Ticket</li>
                  <li>- Alelo</li>
                  <li>- Prato Cheio</li>
                </ul>
              </div>
            </div>
          ) : (
            <div onClick={() => setOpen(true)} className="border-2  border-gray-700 py-6 px-10 rounded-xl bg-white hover:bg-gray-100 w-[100%] mx-4">
              <header className="flex justify-center items-center">
                <Image
                  src={'/images/card3.png'}
                  width={80}
                  height={80}
                  alt="cards"
                />
                <h2 className="pl-2 text-gray-800 text-lg font-bold">
                  Cartões aceitos em nossas Lojas <br /> e meios de pagamentos:
                </h2>
              </header>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
