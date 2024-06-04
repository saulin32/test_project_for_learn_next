import Image from "next/image";
import planet from "../public/planet.jpg";

function asd() {
  console.log("asd");
  return <div>asdasdasdasdasdsd</div>;
}

export default function Home() {
  return (
    <div className="h-screen bg-black text-white">
      <div className="flex flex-col h-full">
        <div className="flex flex-col h-[123px] w-[375px] p-4">
          <h1 className="text-[#F86600] text-[32px]">ARMAGEDDON 2023</h1>
          <p>
            ООО “Команда им. Б. Уиллиса”.
            <br /> Взрываем астероиды с 1998 года.
          </p>
        </div>
        <div className="flex">
          <Image alt="planet" src={planet} className="max-w-screen-lg"></Image>
          <div className="flex flex-col">
            <p>Ближайшие подлёты астероидов</p>
            <div>
              <p>В километрах</p>
              <p>В лунных орбитах</p>
              {asd()}
            </div>
            <div>
              <p>12 сент 2023</p>
              <p>5 652 334 км</p>
              <p>ЗАКАЗАТЬ</p>
            </div>
          </div>
          <div className="flex flex-col">
            <p>Корзина</p>
            <p>2 астероида</p>
            <button>Отправить</button>
          </div>
        </div>
      </div>
    </div>
  );
}
