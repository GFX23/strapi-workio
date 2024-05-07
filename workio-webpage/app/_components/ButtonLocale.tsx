"use client";

import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import cs from "classnames";
import { useParams, usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const locales = ["cs", "en", "sk"];

type localesT = "cs" | "sk" | "en";

export const ButtonLocale: React.FC = () => {
  const router = useRouter();
  const params = useParams();
  const pathName = usePathname();

  console.log(pathName)
  const [selectedLocale, setSelectedLocale] = useState<localesT>(
    params.lang as localesT
  );
  const [isOpen, setIsOpen] = useState(false);

  enum flags {
    cs = "/flags/CZ.svg",
    en = "/flags/EN.svg",
    sk = "/flags/SK.svg",
  };

  enum titles {
    cs = "Čeština",
    en = "English",
    sk = "Slovenčina",
  };


  const handleChangeLocale = (locale: localesT) => {
    setSelectedLocale(locale);
    setIsOpen(false);
    router.push(`/${locale}${pathName.replace(`/${selectedLocale}`, "")}`);
  };

  return (
    <div className="relative flex">
      <button
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className="flex gap-2 items-center justify-center"
      >
        <Image src={flags[selectedLocale]} alt={titles[selectedLocale]} width={20} height={20} />
        <p>{titles[selectedLocale]}</p>
        <BiChevronDown />
      </button>
      {isOpen && (
        <div className="flex flex-col items-center justify-center absolute left-0 top-14 bg-wblue-50 py-2 border-wblue-500 border-[1px] rounded-lg">
          {locales.map((locale: string) => ( // Update the type of the locale parameter to string
            <div
              className={cs(
                "flex gap-2 p-2 hover:bg-wblue-300 w-36",
                selectedLocale === locale && "bg-wblue-200"
              )}
              onClick={() => {
                handleChangeLocale(locale as localesT); // Cast locale to localesT
              }}
            >
              <Image src={flags[locale as keyof typeof flags]} alt={titles[selectedLocale]} width={20} height={20} />
              <p>{titles[locale as keyof typeof titles]}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
