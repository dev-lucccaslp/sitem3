"use client"
// Importe os módulos necessários do React e do Next
import React, { useState } from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

// Defina o componente Navigation
export function Navigation({ navLinks }) {
  const pathName = usePathname();
  const router = useRouter();

  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setBurgerMenuOpen(!isBurgerMenuOpen);
  };

  return (
    <div>
      <div className="bg-[#EE1B24] p-4 text-white flex flex-row justify-between">
      

        {/* Botão do menu burger */}
        <button
          type="button"
          className="md:hidden block text-white"
          onClick={toggleBurgerMenu}
        >
          ☰
        </button>

        <Image
          src="/images/logo.png"
          height={60}  
          width={150}
          alt="Logo"
          className='rounded-lg md:hidden '
        />
      </div>

      {/* Menu burger condicionalmente renderizado */}
      {isBurgerMenuOpen && (
        <div className="bg-gray-100 p-4 shadow-md">
          <ul className="flex flex-col md:hidden">
            {navLinks.map((link, index) => {
              const isActive = pathName === link.href;
              const isNotFirstItem = index !== 0;
              const borderClass = isNotFirstItem ? 'md:border-l-2 md:border-gray-light' : '';

              return (
                <li key={link.name} >
                  <button
                    type="button"
                    className={`px-4 py-2 block text-black hover:text-gray-300 ${borderClass}`}
                    onClick={() => {
                      router.push(link.href);
                      setBurgerMenuOpen(false);
                    }}
                  >
                    <p className={isActive ? "border-b-2 border-red-300 flex-center text-blue-800 font-bold" : "text-blue-500 font-bold"}>{link.name}</p>
                  </button>
                </li>
                
              );
            })}
          </ul>
          
        </div>
      )}

      {/* Menu regular (será oculto em telas menores que 'md') */}
      <nav className="hidden md:flex justify-center items-center md:justify-around py-2.5 bg-gray-100 shadow-md" style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <div>
        <Image
          src="/images/logo.png"
          height={60}  
          width={250}
          alt="Logo"
          className='rounded-lg'
        />
        </div>
          <ul className="flex flex-col  md:flex-row md:space-x-4">
            {navLinks.map((link, index) => {
              const isActive = pathName === link.href;
              const isNotFirstItem = index !== 0;
              const borderClass = isNotFirstItem ? 'md:border-l-2 md:border-gray-light' : '';

              return (
                <li key={link.name} >
                  <button
                    type="button"
                    className={`px-4 py-2 block text-black hover:text-gray-300 ${borderClass}`}
                    onClick={() => router.push(link.href)}
                  >
                    <p className={isActive ? "border-b-2 border-red-600 flex-center text-blue-800 font-bold" : "text-blue-500 font-bold"}>{link.name}</p>
                  </button>
                </li>
              );
            })}
          </ul>
      </nav>
    </div>
  );
}
