import { Headline } from "./Headline";
import { Input } from "./Input";
import { apolloClient } from "@apollo";
import { registerData } from "../_gql/query/queries";
import { RegistraceEntity } from "../_gql/types";
import { Button, ButtonStyles } from "./Button";
import Link from "next/link";
import { Checkbox } from "@/_components/Checkbox";

type Props = {
  locale: string;
};

export const RegisterForm: React.FC<Props> = async ({ locale }) => {
  const r = await apolloClient.query({
    query: registerData,
    variables: { locale: locale },
  });

  const data = r.data.registrace.data as RegistraceEntity;

  const {
    title,
    checkbox2GdprContract,
    checkboxAndSuffix,
    checkboxGdprSuffix,
    checkboxVsopSuffix,
    gdprContractSuffix,
    inputCheckbox,
    inputCompanyName,
    inputDic,
    inputIco,
    inputTelefon,
    register,
  } = data.attributes || {};

  return (
    <div className="flex relative w-full flex-col items-center gap-6 xl:max-w-[1200px] xl:mt-36 mt-28 mb-16 xl:pt-20 pt-14 px-4 rounded-lg bg-gradient-to-b from-wblue-100 via-white to-white">
      <div className="absolute hidden xl:flex w-[234px] h-[234px] -right-[485px] -z-10 top-[150px] rounded-full bg-gradient-to-b from-transparent  to-wblue-500 opacity-70"></div>
      <div className="absolute hidden xl:flex w-[487px] h-[487px] -right-[570px] -z-10 top-[300px] rounded-full bg-gradient-to-b from-transparent rotate-[300deg] to-wred-500"></div>
      <div className="absolute hidden xl:flex w-[778px] h-[778px] -left-[880px] -z-10 top-[200px] rounded-full bg-gradient-to-br opacity-70 from-transparent to-wyellow-400"></div>
      <Headline title={title || "Přihlášení"} type="h1-bold" />
      <form className="flex flex-col items-center gap-6 max-w-[400px] w-full mt-4">
        <Input placeholder={inputCompanyName!} type="text" required minLength={3} />
        <Input placeholder={inputIco!} type="text" required />
        <Input placeholder={inputDic!} type="text" required />
        <Input placeholder={inputTelefon!} type="tel" required minLength={9}/>
        <Checkbox
          label={
            <>
              <p className="p-small pr-1">{inputCheckbox!}</p>
              <Link
                href=""
                className="p-small-bold text-wblue-500 underline pr-1"
              >
                {checkboxVsopSuffix}
              </Link>
              <p className="p-small text-nowrap pr-1">{checkboxAndSuffix!}</p>
              <Link href="" className="p-small-bold text-wblue-500 underline">
                {checkboxGdprSuffix}
              </Link>
            </>
          }
        />
        <Checkbox
          label={
            <>
              <p className="p-small text-nowrap pr-1">{inputCheckbox!}</p>
              <Link
                href=""
                className="p-small-bold text-wblue-500 underline pr-1"
              >
                {checkbox2GdprContract}
              </Link>
              <p className="p-small text-nowrap pr-1">{gdprContractSuffix!}</p>
            </>
          }
        />
        <div className="mt-4 w-fit flex">
          <Button
            label={register?.title!}
            type="submit"
            size="large"
            style={register?.style as ButtonStyles}
          />
        </div>
      </form>
    </div>
  );
};
