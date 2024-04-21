"use client";

import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import cs from "classnames";
import { useParams, useRouter } from "next/navigation";

export const ButtonLocale: React.FC = () => {
  const router = useRouter();
  const params = useParams();
  const [selectedLocale, setSelectedLocale] = useState<"cs" | "en">(params.lang as "cs" | "en");
  const [isOpen, setIsOpen] = useState(false);

  console.log(params)

  const flags = {
    cs: "🇨🇿",
    en: "🇬🇧",
  };

  const titles = {
    cs: "Čeština",
    en: "English",
  };

  const handleChangeLocale = (locale: "cs" | "en") => {
    setSelectedLocale(locale);
    setIsOpen(false);   
    router.push(locale)
  }


  return (
    <div className="relative flex">
      <button
        onClick={() => setIsOpen(isOpen => !isOpen)}
        className="flex gap-2 items-center justify-center"
      >
        <p>{flags[selectedLocale]}</p>
        <p>{titles[selectedLocale]}</p>
        <BiChevronDown />
      </button>
      {isOpen && (
        <div className="flex flex-col items-center justify-center absolute left-0 top-14 bg-white py-2 border-wblue-500 border-[1px] rounded-lg">
          <div
            className={cs(
              "flex gap-2 p-2 hover:bg-wblue-200",
              selectedLocale === "cs" && "bg-wblue-100"
            )}
            onClick={() => {
              handleChangeLocale("cs"); 
            }}
          >
            <p>{flags["cs"]}</p>
            <p>{titles["cs"]}</p>
          </div>
          <div
            className={cs(
              "flex gap-2 p-2 hover:bg-wblue-200",
              selectedLocale === "en" && "bg-wblue-100"
            )}
            onClick={() => {
              handleChangeLocale("en");
            }}
          >
            <p>{flags["en"]}</p>
            <p>{titles["en"]}</p>
          </div>
        </div>
      )}
    </div>
  );
};
