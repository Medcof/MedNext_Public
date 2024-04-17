import Image from "next/image";

import Card from "@/src/assets/svg/modalcard.svg";
import Track from "@/src/assets/svg/Track.svg";
import { BadgeProps } from "./interface-props";

export const Badge: React.FC<BadgeProps> = ({ date, barCode, text, textCode }) => {
  return (
    <>
      <div className="w-72 mr-24 mb-8">
        <Image
          src={Card}
          alt="card1"
          width={285}
          height={595}
          className="absolute"
        />
        <Image src={Track} alt="Track" className="absolute mt-52 ml-14" />
        <div className="w-72 relative text-center pt-[410px] flex items-end">
          <span className="font-bold text-[25px] w-full">{date}</span>
        </div>
        <div className="relative pt-7 max-w-56 mx-auto flex">
          <span className="text-[12px]">{text}</span>
        </div>
        <div className="w-fit mx-auto mt-1 flex flex-row">
          <Image src={barCode} alt="barCode" />
          <span className="max-w-9 ml-3 text-[12px]">{textCode}</span>
        </div>
      </div>
    </>
  );
};

