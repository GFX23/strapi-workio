"use client"

import { ButtonLink, ButtonStyles } from "@/_components/ButtonLink";
import { ButtonLocale } from "@/_components/ButtonLocale";
import { ComponentButtonButton } from "@/_gql/types";
import Link from "next/link";
import { useState } from "react";
import { BiMenu, BiRightArrowAlt, BiX } from "react-icons/bi";

type Props = {
  navButton: ComponentButtonButton[];
};

export const MobileMenu: React.FC<Props> = ({navButton}) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>
        {!isOpen ? <BiMenu fill="#297FFF" size={30} /> : <BiX fill="#297FFF" size={30} />}
      </button>
        {isOpen && <div className="absolute top-0 left-0 mt-[61px] w-full center-all bg-wblue-50">
        <div className="flex flex-col gap-6 w-full px-4 items-center">
          {navButton?.map((button, idx) => (
            <Link href={button?.link || "/"} key={idx} className="link justify-between border-b-[1px] w-full border-wblue-500 pb-2.5 pr-1.5">
              {button?.title || "chybí popis"}
              <BiRightArrowAlt fill="#297FFF" size={24} />
            </Link>
          ))}
          <div className="flex w-full justify-start">
            <ButtonLocale />
          </div>
            <div className="flex w-fit mb-8">
          <ButtonLink
            label="Vyzkoušet zdarma"
            styles={"solid" as ButtonStyles}
            link="/register"
          />
            </div>
        </div>
      </div>}
    </>
  );
}