import Image from "next/image";
import Link from "next/link";
import { ButtonLink, ButtonStyles } from "./ButtonLink";
import { ButtonLocale } from "./ButtonLocale";
import { gql } from "@apollo/client";
import { apolloClient } from "../../apolloClient";
import { Navbar, NavbarEntity } from "../_gql/graphql";
import { siteConfig } from "../../siteConfig";

type Props = {
  locale: "cs" | "en";
};

const Navbar: React.FC<Props> = async ({ locale = "cs" }) => {
  const getNavbarData = gql`
    query Navbar($locale: I18NLocaleCode) {
      navbar(locale: $locale) {
        data {
          attributes {
            logo {
              data {
                attributes {
                  url
                  alternativeText
                  width
                  height
                }
              }
            }
            navButton {
              title
              link
              style
            }
          }
        }
      }
    }
  `;

  const r = await apolloClient.query({
    query: getNavbarData,
    variables: { locale },
  });

  const {logo, navButton} = r.data.navbar.data.attributes as Navbar;


  return (
    <div className="fixed inset-0 h-[90px] z-20 w-screen center-all bg-wblue-50">
      <div className="max-w-7xl flex justify-between w-full p-10">
        <Image
          src="/logo.svg"
          alt="logo of workio"
          width={logo?.data?.attributes?.width || 150}
          height={logo?.data?.attributes?.height || 150}
        />
        <div className="flex gap-6">
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
