"use client";

import { Headline } from "./Headline";
import { Input } from "./Input";
import { RegistraceEntity } from "../_gql/types";
import { Button, ButtonStyles } from "./Button";
import Link from "next/link";
import { Checkbox } from "@/_components/Checkbox";
import { sendRegisterPayload } from "@/_actions/registerForm";
import { toast } from "react-toastify";
import { useRef } from "react";
import { siteConfig } from "../../siteConfig";

type Props = {
  data: RegistraceEntity;
};

export const RegisterForm: React.FC<Props> = async ({ data }) => {
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
    inputEmail,
    inputFirstName,
    inputLastName,
    inputPassword,
    inputPasswordConfirmation,
    userDataLabel,
    registerFailedPasswordDoNotMatch,
    registerFailedValidation,
    registerSuccess,
    registerFailedOnRegister,
    register,
    linkGDPR,
    linkGDPRContract,
    linkVOP,
  } = data.attributes || {};

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className="flex relative w-full flex-col items-center gap-6 xl:max-w-[1200px] xl:mt-36 mt-28 mb-16 xl:pt-20 pt-14 px-4 rounded-lg bg-gradient-to-b from-wblue-100 via-white to-white">
      <div className="absolute hidden xl:flex w-[234px] h-[234px] -right-[485px] -z-10 top-[150px] rounded-full bg-gradient-to-b from-transparent  to-wblue-500 opacity-70"></div>
      <div className="absolute hidden xl:flex w-[487px] h-[487px] -right-[570px] -z-10 top-[300px] rounded-full bg-gradient-to-b from-transparent rotate-[300deg] to-wred-500"></div>
      <div className="absolute hidden xl:flex w-[778px] h-[778px] -left-[880px] -z-10 top-[200px] rounded-full bg-gradient-to-br opacity-70 from-transparent to-wyellow-400"></div>
      <Headline title={title || "Přihlášení"} type="h1-bold" />
      <form
        className="flex flex-col items-center gap-6 max-w-[400px] w-full mt-4"
        ref={formRef}
        action={async (formData) => {
          const r = await sendRegisterPayload(formData);
          if (!r.success) {
            if (r.error === "Register") {
              toast.error(registerFailedOnRegister);
            }
            if (r.error === "Passwords") {
              toast.error(registerFailedPasswordDoNotMatch);
            }
            if (r.error === "Validation") {
              toast.error(registerFailedValidation);
            }
            return;
          }
          formRef.current?.reset();
          toast.success(registerSuccess);
        }}
      >
        <Input
          name="company_name"
          placeholder={inputCompanyName!}
          type="text"
          required
          minLength={3}
          maxLength={100}
        />
        <Input
          name="company_cin"
          placeholder={inputIco!}
          type="text"
          required
          minLength={5}
          maxLength={15}
        />
        <Input
          name="company_vat"
          placeholder={inputDic!}
          type="text"
          required
          minLength={5}
          maxLength={15}
        />
        <Input
          name="company_phone"
          placeholder={inputTelefon!}
          type="tel"
          required
          minLength={9}
          maxLength={20}
        />
        <Checkbox
        required
          label={
            <>
              <p className="p-small pr-1">{inputCheckbox!}</p>
              <Link
                href={siteConfig.strapiUrl! + linkVOP}
                target="_blank"
                className="p-small-bold text-wblue-500 underline pr-1"
              >
                {checkboxVsopSuffix}
              </Link>
              <p className="p-small text-nowrap pr-1">{checkboxAndSuffix!}</p>
              <Link href={siteConfig.strapiUrl! + linkGDPR} target="_blank" className="p-small-bold text-wblue-500 underline">
                {checkboxGdprSuffix}
              </Link>
            </>
          }
        />
        <Checkbox
        required
          label={
            <>
              <p className="p-small text-nowrap pr-1">{inputCheckbox!}</p>
              <Link
                href={siteConfig.strapiUrl! + linkGDPRContract}
                target="_blank"
                className="p-small-bold text-wblue-500 underline pr-1"
              >
                {checkbox2GdprContract}
              </Link>
              <p className="p-small text-nowrap pr-1">{gdprContractSuffix!}</p>
            </>
          }
        />
        <p className="p-small-bold text-wblue-500 self-start">
          {userDataLabel}
        </p>
        <Input
          name="email"
          autoComplete="new-email"
          role="presentation"
          placeholder={inputEmail!}
          type="email"
          required
          minLength={5}
          maxLength={100}
        />
        <Input
          name="first_name"
          placeholder={inputFirstName!}
          type="text"
          required
          minLength={2}
          maxLength={50}
        />
        <Input
          name="last_name"
          placeholder={inputLastName!}
          type="text"
          required
          minLength={2}
          maxLength={50}
        />
        <Input
          name="password"
          autoComplete="new-password"
          placeholder={inputPassword!}
          type="password"
          required
          minLength={6}
          maxLength={50}
        />
        <Input
          name="password_confirmation"
          autoComplete="new-password-again"
          placeholder={inputPasswordConfirmation!}
          type="password"
          required
          minLength={6}
          maxLength={50}
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
