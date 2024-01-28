import Image from "next/image";

export default function Ofertas() {
  return (
    <div className="mt-6 pb-8">
      <div className="flex flex-col items-center pt-6">
        <h1 className="text-[32px] font-bold text-red-500">Ofertas</h1>
        <p className="text-gray-500 text-lg">Todo dia tem ofertas em um Super Mercado da Familia pertinho de você!</p>
      </div>

      <div className="flex items-center justify-center mb-8">
        <div className="h-1 w-full bg-blue-100 flex-1 ml-5"></div>
        <a href="/tabloidepdf.pdf" className="input border-2 border-blue-100 p-1 rounded mx-4">Baixar encarte (PDF)</a>
        <div className="h-1 w-full bg-blue-100 flex-1 mr-5"></div>

      </div>
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/images/tabloide1.png"
          height={600}
          width={450}
          alt="tabloide"
          className='rounded-lg shadow-lg'

        />

      </div>
    </div>
  )
}
