"use client"

import { ButtonLink, ButtonStyles } from "@/_components/ButtonLink";
import { ButtonLocale } from "@/_components/ButtonLocale";
import { ComponentButtonButton } from "@/_gql/types";
import Link from "next/link";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";

type Props = {
  navButton: ComponentButtonButton[];
};

export const MobileMenu: React.FC<Props> = ({navButton}) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>
        <BiMenu fill="#297FFF" size={24} />
      </button>
        {isOpen && <div className="absolute top-0 left-0 mt-[61px] w-screen center-all bg-wblue-50">
        <div className="flex flex-col gap-6">
          {navButton?.map((button, idx) => (
            <Link href={button?.link || "/"} key={idx} className="link">
              {button?.title || "chybí popis"}
            </Link>
          ))}
          <ButtonLink
            label="Vyzkoušet zdarma"
            styles={"solid" as ButtonStyles}
            link="/register"
          />
          <ButtonLocale />
        </div>
      </div>}
    </>
  );
}