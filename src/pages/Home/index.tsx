import { Badge } from "@/src/components/Badge";
import { Menu } from "@/src/components/Menu";
import BarCode from "@/src/assets/svg/BarCode.svg";
import Image from "next/image";

import BackgroundCar from "@/src/assets/img/BackgroundCar.png";
import { Ellipse } from "@/src/components/Ellipse";
import { TabContainerComponent } from "@/src/components/TabContainerComponent";
import { CalendarProps } from "@/src/components/TabContainerComponent/interface-props";
import { News } from "@/src/components/News";
import { NewsBodyProps } from "@/src/components/News/interface-props";
import { Informative } from "@/src/components/Informative";
import LooperGroup from "@/src/assets/svg/LooperGroup.svg";
export default function HomePage() {
  const mockCalendarInfo: CalendarProps[] = [
    {
      month: 1,
      description: "Descrição do evento 1 de Janeiro",
      hours: "17:36",
      title: "Evento 1 - 25 de Janeiro de 2024",
    },
    {
      month: 1,
      description: "Descrição do evento 2 de Janeiro",
      hours: "10:00",
      title: "Evento 2 - 15 de Janeiro de 2024",
    },
    {
      month: 1,
      description: "Descrição do evento 3 de Janeiro",
      hours: "14:30",
      title: "Evento 3 - 5 de Janeiro de 2024",
    },

    {
      month: 2,
      description: "Descrição do evento 1 de Fevereiro",
      hours: "18:45",
      title: "Evento 1 - 10 de Fevereiro de 2024",
    },
    {
      month: 2,
      description: "Descrição do evento 2 de Fevereiro",
      hours: "14:30",
      title: "Evento 2 - 20 de Fevereiro de 2024",
    },

    {
      month: 3,
      description: "Descrição do evento 1 de Março",
      hours: "09:30",
      title: "Evento 1 - 5 de Março de 2024",
    },
    {
      month: 3,
      description: "Descrição do evento 2 de Março",
      hours: "15:00",
      title: "Evento 2 - 15 de Março de 2024",
    },

    {
      month: 4,
      description: "Descrição do evento 1 de Abril",
      hours: "10:00",
      title: "Evento 1 - 10 de Abril de 2024",
    },
    {
      month: 4,
      description: "Descrição do evento 2 de Abril",
      hours: "14:30",
      title: "Evento 2 - 20 de Abril de 2024",
    },
    {
      month: 5,
      description: "Descrição do evento 2 de Maio",
      hours: "14:00",
      title: "Evento 2 - 15 de Maio de 2024",
    },
    {
      month: 5,
      description: "Descrição do evento 3 de Maio",
      hours: "17:30",
      title: "Evento 3 - 25 de Maio de 2024",
    },
    {
      month: 6,
      description: "Descrição do evento 3 de Junho",
      hours: "18:00",
      title: "Evento 3 - 27 de Junho de 2024",
    },
    {
      month: 7,
      description: "Descrição do evento 4 de Julho",
      hours: "19:00",
      title: "Evento 4 - 15 de Julho de 2024",
    },
    {
      month: 8,
      description: "Descrição do evento 5 de Agosto",
      hours: "16:30",
      title: "Evento 5 - 10 de Agosto de 2024",
    },
    {
      month: 9,
      description: "Descrição do evento 6 de Setembro",
      hours: "20:00",
      title: "Evento 6 - 5 de Setembro de 2024",
    },
    {
      month: 10,
      description: "Descrição do evento 7 de Outubro",
      hours: "14:00",
      title: "Evento 7 - 20 de Outubro de 2024",
    },
    {
      month: 11,
      description: "Descrição do evento 8 de Novembro",
      hours: "15:30",
      title: "Evento 8 - 12 de Novembro de 2024",
    },
    {
      month: 12,
      description: "Descrição do evento 9 de Dezembro",
      hours: "18:30",
      title: "Evento 9 - 8 de Dezembro de 2024",
    },
  ];
  const mockNews: NewsBodyProps[] = [
    {
      title: "25/03/2024",
      text: (
        <>
          <span>Mais 5 locais divulgados de prova! São eles:</span>
          <span className="font-bold mt-6">
            Universidade Federal do Paraná (UFPR) Câmpus Jardim Botânico
          </span>
          <span>
            Av. Prefeito Lothário Meissner, 623 - Jardim Botânico, Curitiba -
            PR, 80210-170
          </span>

          <span className="font-bold mt-6">
            Universidade Federal do Paraná (UFPR) Câmpus Jardim Botânico
          </span>
          <span>
            Av. Prefeito Lothário Meissner, 623 - Jardim Botânico, Curitiba -
            PR, 80210-170
          </span>

          <span className="font-bold mt-6">
            Universidade Federal do Paraná (UFPR) Câmpus Jardim Botânico
          </span>
          <span>
            Av. Prefeito Lothário Meissner, 623 - Jardim Botânico, Curitiba -
            PR, 80210-170
          </span>

          <span className="font-bold mt-6">
            Universidade Federal do Paraná (UFPR) Câmpus Jardim Botânico
          </span>
          <span>
            Av. Prefeito Lothário Meissner, 623 - Jardim Botânico, Curitiba -
            PR, 80210-170
          </span>

          <span className="font-bold mt-6">
            Universidade Federal do Paraná (UFPR) Câmpus Jardim Botânico
          </span>
          <span>
            Av. Prefeito Lothário Meissner, 623 - Jardim Botânico, Curitiba -
            PR, 80210-170
          </span>
        </>
      ),
    },
    {
      title: "24/03/2024",
      text: (
        <>
          <span>Mais 1 locais divulgados de prova! São eles:</span>
          <span className="font-bold mt-6">
            Universidade Federal do Paraná (UFPR) Câmpus Jardim Botânico
          </span>
          <span>
            Av. Prefeito Lothário Meissner, 623 - Jardim Botânico, Curitiba -
            PR, 80210-170
          </span>
        </>
      ),
    },
  ];

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
      <TabContainerComponent calendarInfo={mockCalendarInfo} />
      <div className="absolute bottom-0 right-0 -z-30 ">
        <Ellipse className="" color="blue" />
        <Image src={LooperGroup} alt="LooperGroup" />
      </div>
      <News values={mockNews} />
      <Informative barcode={BarCode} code="2154" />
    </>
  );
}
