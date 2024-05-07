import { ButtonLink, ButtonStyles } from "./ButtonLink";
import { ButtonLocale } from "./ButtonLocale";
import { apolloClient } from "../../apolloClient";
import { ComponentButtonButton, Navbar, UploadFile } from "../_gql/types";
import { navbarData } from "../_gql/query/queries";
import { ImageW } from "@/_components/ImageW";
import Link from "next/link";
import { MobileMenu } from "@/_components/MobileMenu";

type Props = {
  locale: "cs" | "en";
};

const Navbar: React.FC<Props> = async ({ locale = "cs" }) => {
  const r = await apolloClient.query({
    query: navbarData,
    variables: { locale },
  });

  const { logo, navButton, mobileLogo } = r.data.navbar.data.attributes as Navbar;

  return (
    <div className="fixed top-0 xl:h-[90px] h-[62px] z-50 w-full center-all bg-wblue-50">
      <div className="xl:max-w-[1200px] flex justify-between w-full py-10 xl:px-0 px-4">
        <Link href="/">
          <div className="xl:flex hidden">
            <ImageW data={logo?.data?.attributes as UploadFile} />
          </div>
          <div className="flex xl:hidden">
            <ImageW data={mobileLogo?.data?.attributes as UploadFile} />
          </div>
        </Link>
        <div className="hidden gap-6 xl:flex">
          {navButton?.map((button, idx) => (
            <ButtonLink
              key={idx}
              label={button?.title || "chybí popis"}
              styles={(button?.style as ButtonStyles) || "outline"}
              size={"small"}
              link={button?.link || "/"}
            />
          ))}

          <ButtonLocale />
        </div>
        <div className="xl:hidden flex">
          <MobileMenu navButton={navButton as ComponentButtonButton[]} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
