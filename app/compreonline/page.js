import Image from "next/image";

export default function CompreOnline() {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col items-center pt-6">
        <h1 className="text-[32px] font-bold text-red-500">Compre Online</h1>
        <p className="text-gray-500 text-lg">Estamos dispíveis nas plataformas abaixo:</p>
      </div>

      <div className="flex flex-col md:flex-row lg:flex-row mb-4">
        <div className="w-[100%] flex flex-col items-center justify-center mt-6">
          <div className='mb-3 border-[1px] shadow-2xl rounded-lg pt-3 w-[80%] lg:w-[60%] py-10 mb-10 border-gray-400 bg-red-500 flex flex-col  items-center px-6'>
            <a target="_blank"  href="https://www.ifood.com.br/delivery/brasilia-df/farmacia-do-trabalhador-e-da-familia-samambaia-sul-samambaia/f9b06178-8cdb-429a-a3ae-228c58d7dee4">

              <div className="w-[100%] mb-6 flex flex-col items-center pb-6 px-5 hover:bg-red-600 hover:rounded-xl">
                <header className="py-4">
                  <h2 className="text-white font-bold">Em breve, no Ifood</h2>
                </header>
                <Image
                  src={'/images/ifoodWhite.png'}
                  width={250}
                  height={150}
                />
              </div>
            </a>
          </div>
        </div>

        <div className="w-[100%] flex flex-col items-center justify-center mt-6">
          <div className='mb-3 border-[1px] shadow-2xl rounded-lg pt-3 w-[80%] lg:w-[60%] py-10 mb-10 border-gray-400 bg-red-500 flex flex-col  items-center px-6'>

            <a href="">
              <div className="w-[100%] mb-6 flex flex-col items-center pb-6 px-5 hover:bg-red-600 hover:rounded-xl">
                <header className="py-4">
                  <h2 className="text-white font-bold">Em breve, nosso cardápio digital.</h2>
                </header>
                <Image
                  src={'/images/catalogo.png'}
                  width={300}
                  height={250}
                />
              </div>
            </a>
          </div>
        </div>

      </div>
    </div>

  )
}
