import Image from "next/image";
import { InformativeProps } from "./interface-props";

export const Informative: React.FC<InformativeProps> = ({ barcode, code }) => {
  return (
    <div className="flex flex-row w-4/5 mx-auto mt-16 justify-between items-center">
      <span className="text-4xl w-1/2">
        Sobre o <span className="text-blue">primeiro simulado</span> de
        residência médica do Brasil
      </span>
      <Image src={barcode} alt="barcode" width={352} />
      <div className="flex flex-col">
        <span className="text-xl font-semibold">CODE</span>
        <span className="text-xl font-semibold">{code}</span>
      </div>
    </div>
  );
};
