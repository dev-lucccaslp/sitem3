import Card from "../components/Card";
import CustomMap from "../components/CustomMap";

export default function Lojas() {
  return (
    <div className="">
      <div className="flex flex-col items-center pt-6">
        <h1 className="text-[32px] font-bold text-red-500">Loja</h1>
        <p className="text-gray-500 text-lg">Além de muito bom e barato, tem sempre um Supermercado da Familia pertinho de você.</p>
      </div>
      <div className="flex lg:flex-row flex-col items-center">
        <div className="p-10">
          <Card
            name="Supermercado da Familia"
            image="/images/mercado.png"
            className=""
          />
          <Card
            name="Supermercado da Familia"
            image="/images/int1.png"
          />
          <Card
            name="Supermercado da Familia"
            image="/images/int2.png"
          />
          <Card
            name="Supermercado da Familia"
            image="/images/int3.png"
          />
        </div>
        <div className="p-10 items-center flex flex">
          <CustomMap />
        </div>
      </div>
    </div>
  )
}
