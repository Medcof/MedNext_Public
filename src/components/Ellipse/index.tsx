"use client";

import { EllipseProps } from "./interface-props";

export const Ellipse: React.FC<EllipseProps> = ({ className, color }) => {
  return (
    <>
      <div
        className={`absolute bg-gradient-radial ${
          color === "blue" ? "from-blue" : "from-red"
        } via-transparent to-transparent rounded-full w-[1200px] h-[1200px] ${className}`}
      ></div>
    </>
  );
};
