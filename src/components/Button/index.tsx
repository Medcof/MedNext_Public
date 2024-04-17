"use client";

import { ButtonProps } from "./interface-props";

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className,
}) => {
  return (
    <button
      className={`${className} bg-blue rounded-full py-2 font-semibold text-base`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
