import Image from "next/image";
import { ButtonLink, ButtonStyles } from "./ButtonLink";
import { ButtonLocale } from "./ButtonLocale";
import { gql } from "@apollo/client";
import { apolloClient } from "../../apolloClient";
import { Navbar } from "../_gql/types";
import { navbarData } from "../_gql/query/homepage";

type Props = {
  locale: "cs" | "en";
};

const Navbar: React.FC<Props> = async ({ locale = "cs" }) => {

  const r = await apolloClient.query({
    query: navbarData,
    variables: { locale },
  });

  const {logo, navButton} = r.data.navbar.data.attributes as Navbar;


  return (
    <div className="fixed inset-0 h-[90px] z-20 w-full center-all bg-wblue-50">
      <div className="max-w-[1200px] flex justify-between w-full py-10">
        <Image
          src="/logo.svg"
          alt="logo of workio"
          width={logo?.data?.attributes?.width || 150}
          height={logo?.data?.attributes?.height || 150}
        />
        <div className="hidden gap-6 xl:flex">
          {navButton?.map((button, idx) => (
          <ButtonLink
            key={idx}
            label={button?.title || "chybí popis"}
            styles={button?.style as ButtonStyles || "outline"}
            link={button?.link || "/"}
          />))}

          <ButtonLocale />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
