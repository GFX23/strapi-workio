"use client";

import { Headline } from "./Headline";
import { Input } from "./Input";
import { PrihlaseniEntity } from "@gql/types";
import { Button, ButtonStyles } from "./Button";
import Link from "next/link";
import { ButtonLink } from "@/_components/ButtonLink";
import { useRef } from "react";
import { sendLoginPayload } from "@/_actions/loginForm";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

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
    invalidCredentials
  } = data.attributes || {};

  const formRef = useRef<HTMLFormElement>(null);

  const router = useRouter();

  return (
    <div className="flex relative w-full flex-col items-center gap-6 max-w-[1200px] px-4 xl:mt-36 mt-28 mb-16 xl:pt-20 pt-14 rounded-lg bg-gradient-to-b from-wblue-100 via-white to-white">
      <div className="absolute hidden xl:flex w-[234px] h-[234px] -right-[485px] -z-10 top-[150px] rounded-full bg-gradient-to-b from-transparent  to-wblue-500 opacity-70"></div>
      <div className="absolute hidden xl:flex w-[487px] h-[487px] -right-[570px] -z-10 top-[300px] rounded-full bg-gradient-to-b from-transparent rotate-[300deg] to-wred-500"></div>
      <div className="absolute hidden xl:flex w-[778px] h-[778px] -left-[880px] -z-10 top-[200px] rounded-full bg-gradient-to-br opacity-70 from-transparent to-wyellow-400"></div>
      <Headline title={title || "Přihlášení"} type="h1-bold" />
      <form
        ref={formRef}
        action={async (formData) => {
          const r = await sendLoginPayload(formData);
          if (!r.success) {
              toast.error(invalidCredentials);
          }
          if (r.success) {
            router.push(r.redirect)
          }
        }}
        className="flex flex-col items-center gap-6 max-w-[400px] w-full mt-4">
        <Input
          name="email"
          placeholder={inputName!}
          type="email"
          required
          minLength={5}
          maxLength={100}
        />
        <Input
          name="password"
          placeholder={inputPassword!}
          type="password"
          required
          minLength={6}
          maxLength={50}
          autoComplete="password"
        />
        <Link href="/password" className="p-bold text-wblue-500 underline">
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
