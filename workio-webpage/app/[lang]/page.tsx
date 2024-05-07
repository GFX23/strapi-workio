import { NextPage } from "next";
import { apolloClient } from "../../apolloClient";
import {
  ComponentSectionSection1,
  ComponentSectionSection2,
  HomepageEntity,
} from "../_gql/types";
import { homepageData } from "../_gql/query/queries";
import { Section1 } from "../_components/Section1";
import { Section2 } from "../_components/Section2";
import { SectionBlocks } from "../_components/SectionBlocks";
import { Funkce } from "../_components/Funkce";
import { Cenik } from "../_components/Cenik";
import { News } from "../_components/News";
import { Contact } from "@/_containers/Contact";

type Props = {
  params: { [lang: string]: string };
};

const Home: NextPage<Props> = async ({ params: { lang } }) => {
  const r = await apolloClient.query({
    query: homepageData,
    variables: { locale: lang },
  });

  const data = r.data.homepage.data as HomepageEntity;

  const { section1, section2 } = data.attributes || {};

  return (
    <main className="flex w-full justify-center flex-col items-center">
      <Section1 section1={section1 as ComponentSectionSection1} />
      <Section2 section2={section2 as ComponentSectionSection2} />
      <SectionBlocks section2={section2 as ComponentSectionSection2} />
      <Funkce locale={lang} />
      <Cenik locale={lang} />
      <News locale={lang} />
      <div className="w-full flex px-4 justify-center">
      <Contact locale={lang} />
      </div>
    </main>
  );
};

export default Home;
