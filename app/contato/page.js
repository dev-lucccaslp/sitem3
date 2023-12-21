import Image from "next/image";

export default function Contato() {
  return (
    <div>
      <div className="flex flex-col items-center pt-6">
        <h1 className="text-[32px] font-bold text-red-500">Fale com o Supermercado da Familia</h1>
        <div>
          <div className="flex items-center gap-3 py-5">
            <Image
              src="/images/iconeCelular.png"
              height={80}
              width={80}
              alt="Logo"
              className='rounded-lg mb-3'
            />
            <a className="text-blue-900 hover:text-blue-500" href='https://contate.me/supermeacdodafamilia'>Prefere falar diretamente com um de nossos atendentes? Manda um whatsapp para (61)9 9609-5955.</a>
          </div>

          <div className="flex items-center gap-3 py-5">
            <Image
              src="/images/iconeCarta.png"
              height={80}
              width={80}
              alt="Logo"
              className='rounded-lg mb-3'
            />
            <a className="text-blue-900 hover:text-blue-500" href="mailto:supermercadodafamilia319@gmail.com">Agora, se você deseja falar tudo em detalhes, escreve um e-mail pra gente.</a>
          </div>

          <div className="flex items-center gap-3 py-5">
            <Image
              src="/images/iconeCarrinho.png"
              height={80}
              width={80}
              alt="Logo"
              className='rounded-lg mb-3'
            />
            <a className="text-blue-900 hover:text-blue-500" href='/lojas'>Se quiser dar uma chegadinha em uma das nossas unidades, acesse o link e descubra o
              Supermercado da Familia mais próximo a você.</a>
          </div>

        </div>
      </div>

    </div>
  )
}
