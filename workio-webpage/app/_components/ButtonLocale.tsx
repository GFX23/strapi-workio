"use client";

import { title } from "process";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import cs from "classnames";

export const ButtonLocale: React.FC = () => {
  console.log(document.documentElement.lang)
  const [selectedLocale, setSelectedLocale] = useState<"cs" | "en">("cs");
  const [isOpen, setIsOpen] = useState(false);

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
    document.documentElement.lang = locale;
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
