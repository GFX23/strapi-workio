

import Logo from "@public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ButtonLink";
import { ButtonLocale } from "./ButtonLocale";

const Navbar: React.FC = async () => {
  return (
    <div className="fixed inset-0 h-[90px] z-20 w-screen center-all bg-wblue-50">
      <div className="max-w-5xl flex justify-between w-full">
        <Image src="/logo.svg" alt="logo of workio" width={150} height={150} />
        <div className="flex gap-6">
          <Link href="/login" className="link">
            Product
          </Link>
          <Link href="/login" className="link">
            Ceník
          </Link>
          <Link href="/login" className="link">
            Kontakt
          </Link>
          <Link href="/login" className="link">
            Blog
          </Link>
          <Link href="/login" className="link text-wred-500">
            Přihlášení
          </Link>
          <Button label="Vyzkoušet zdarma" styles="solid" link="" arrow={true} />
          <ButtonLocale />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
