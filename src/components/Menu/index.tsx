import Image from "next/image";
import React from "react";

//imagens
import Logo from "@/src/assets/svg/Logo.svg";
import BlueLine from "@/src/assets/svg/BlueLine.svg";
import RedBlueLine from "@/src/assets/svg/RedBlueLine.svg";
import Link from "next/link";
import { MenuProps } from "./interface-props";

export const Menu: React.FC<MenuProps> = ({ option }) => {
  return (
    <>
      <div className="w-full flex flex-col mt-8 relative">
        <Image src={Logo} alt="Logo" className="ml-12 sm:mb-0 mb-5" />
        <div className="flex flex-row w-full justify-center flex-wrap px-2 sm:px-0">
          <span
            className={`cursor-pointer ${
              option === "locations" ? "text-blue font-semibold" : ""
            }`}
          >
            Locais
          </span>
          <span
            className={`sm:mx-12 mx-auto cursor-pointer ${
              option === "calendar" ? "text-blue font-semibold" : ""
            }`}
          >
            Calendário
          </span>
          <Link href="/login">
            <span
              className={`cursor-pointer ${
                option === "login" ? "text-blue font-semibold" : ""
              }`}
            >
              Página do Participante
            </span>
          </Link>
        </div>
        <Image
          src={option === "login" ? RedBlueLine : BlueLine}
          alt="Logo"
          className="top-20 opacity-60 w-full max-w-screen"
        />
      </div>
    </>
  );
};
