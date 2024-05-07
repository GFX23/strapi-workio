"use client";

import { Headline } from "./Headline";
import { Input } from "./Input";
import { PrihlaseniEntity } from "@gql/types";
import { Button, ButtonStyles } from "./Button";
import Link from "next/link";
import { ButtonLink } from "@/_components/ButtonLink";

type Props = {
  data: PrihlaseniEntity;
};

export const LoginForm: React.FC<Props> = ({ data }) => {

  const {
    title,
    inputName,
    dontHaveAccountYet,
    forgottenPassword,
    inputPassword,
    registrationButton,
    signUpButton,
  } = data.attributes || {};

  return (
    <div className="flex relative w-full flex-col items-center gap-6 max-w-[1200px] px-4 xl:mt-36 mt-28 mb-16 xl:pt-20 pt-14 rounded-lg bg-gradient-to-b from-wblue-100 via-white to-white">
      <div className="absolute hidden xl:flex w-[234px] h-[234px] -right-[485px] -z-10 top-[150px] rounded-full bg-gradient-to-b from-transparent  to-wblue-500 opacity-70"></div>
      <div className="absolute hidden xl:flex w-[487px] h-[487px] -right-[570px] -z-10 top-[300px] rounded-full bg-gradient-to-b from-transparent rotate-[300deg] to-wred-500"></div>
      <div className="absolute hidden xl:flex w-[778px] h-[778px] -left-[880px] -z-10 top-[200px] rounded-full bg-gradient-to-br opacity-70 from-transparent to-wyellow-400"></div>
      <Headline title={title || "Přihlášení"} type="h1-bold" />
      <form className="flex flex-col items-center gap-6 max-w-[400px] w-full mt-4">
        <Input name="email" placeholder={inputName!} type="email" required />
        <Input name="password" placeholder={inputPassword!} type="password" required autoComplete="password" />
        <Link href="" className="p-bold text-wblue-500 underline">
          {forgottenPassword}
        </Link>
        <div className="mt-4 w-fit flex">
          <Button
            label={signUpButton?.title!}
            type="submit"
            size="large"
            style={signUpButton?.style as ButtonStyles}
          />
        </div>
      </form>
      <div className="flex gap-4 max-w-[400px] w-full mt-4 items-center">
        <div className="border-b-2 w-full border-wblue-500" />
        <p className="p-bold tracking-widest text-nowrap">
          {dontHaveAccountYet}
        </p>
        <div className="border-b-2 w-full border-wblue-500" />
      </div>
      <ButtonLink
        label={registrationButton?.title!}
        styles={registrationButton?.style as ButtonStyles}
        size="large"
        link={registrationButton?.link!}
      />
    </div>
  );
};
