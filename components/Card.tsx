// components/Card.tsx
import { Amarante } from "next/font/google";
import React from "react";

const amarante = Amarante({
  weight: "400",
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
  description,
  className,
  children,
}) => {
  return (
    <div
      className={`bg-white border border-black rounded-md p-6 space-y-4 ${className}`}
    >
      <div>
        <h2 className={`text-3xl font-semibold ${amarante.className}`}>
          {title}
        </h2>
        <p className="pt-2 text-md font-light">{description}</p>
      </div>
      {children}
    </div>
  );
};

export default Card;
