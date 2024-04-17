import { Badge } from "@/src/components/Badge";
import { Menu } from "@/src/components/Menu";
import BarCode from "@/src/assets/svg/BarCode.svg";
import Image from "next/image";

import BackgroundCar from "@/src/assets/img/BackgroundCar.png";
import { Ellipse } from "@/src/components/Ellipse";

export default function HomePage() {
  return (
    <>
      <Ellipse
        className="xl:!bottom-[30%] xl:!left-[60%] sm:!bottom-[55%] sm:!left-[40%] 
        !bottom-[30%] !left-[90%]"
        color="blue"
      />
      <Ellipse
        className="xl:-top-[10%] xl:right-[60%] sm:-top-[15%] sm:right-[40%] 
        -top-[30%] right-[0]"
        color="blue"
      />
      <div className="absolute top-80 left-32 xl:!w-[1708px] xl:!h-[728px] -z-30 opacity-60  mix-blend-luminosity">
        <Image src={BackgroundCar} alt="backgroundCar" className="opacity-60" />
      </div>
      <Menu />
      <div className="sm:ml-24 ml-10 mt-32 flex flex-row flex-wrap">
        <Badge
          date="00.00.2024"
          barCode={BarCode}
          textCode="Code 2154"
          text="Não perca a oportunidade de se inscrever no primeiro simulado de residência médica do Brasil."
        />
      </div>
    </>
  );
}
