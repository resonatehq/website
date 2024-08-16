// components/Card.tsx
import { Roboto } from "next/font/google";
import React from "react";

const amarante = Roboto({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

interface CardProps {
  title?: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  descriptionOne,
  descriptionTwo,
  descriptionThree,
  className,
  children,
}) => {
  return (
    <div
      className={`bg-white border-black p-6 flex flex-col justify-center items-center space-y-4 ${className}`}
    >
      <div className="text-center">
        <p className="font-light text-center text-xl">{descriptionOne}</p>
        <h2 className="text-3xl md:text-5xl pb-2 mb-4 text-center">
          <span className={amarante.className}>{title}</span>
        </h2>
        <p className="font-light text-center text-xl">{descriptionTwo}</p>
        <p className="font-light text-center text-xl mt-2">
          {descriptionThree}
        </p>
      </div>
      {children}
    </div>
  );
};

export default Card;
