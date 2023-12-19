"use client"

import Image from 'next/image';
import React from 'react';

const CardHome = ({ src }) => {
  return (
    <a target="_blank"  href='https://gothru.co/Pd7ihYJRy?index=scene_16&hlookat=347&vlookat=-4&fov=120'>
      <div className='flex flex-col items-center bg-white hover:bg-gray-200 rounded-3xl w-full md:w-[230px]'>
        <div className='relative'>
          <Image
            src="/images/pin.png"
            height={50}
            width={50}
            alt="Logo"
            className='rounded-lg'
          />
        </div>
        <header className='items-center justify-center flex flex-col'>
          <h2 className='font-bold text-blue-600'>Supermercado da Família</h2>
          <h4 className='font-bold pb-3'>Brasília - DF</h4>
        </header>
        <div>
          <Image
            src={src}
            height={100}
            width={230}
            alt="Logo"
            className='rounded-b-lg'
          />
        </div>
      </div>

    </a>
  );
};

export default CardHome;

