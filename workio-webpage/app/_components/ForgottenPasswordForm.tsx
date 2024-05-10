"use client";

import { Headline } from "./Headline";
import { Input } from "./Input";
import { HesloEntity, UploadFile } from "@gql/types";
import { Button, ButtonStyles } from "./Button";
import { useRef } from "react";
import { toast } from "react-toastify";
import { sendForgottenPasswordPayload } from "@/_actions/forgottenPassword";
import { ImageW } from "./ImageW";

type Props = {
  data: HesloEntity;
};

export const ForgottenPasswordForm: React.FC<Props> = ({ data }) => {
  const {
    title,
    inputEmail,
    submit,
    formFailed,
    formSuccess,
    image
  } = data.attributes || {};

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className="flex relative w-full flex-col items-center gap-6 max-w-[1200px] px-4 xl:mt-36 mt-28 xl:pt-20 pt-14 rounded-lg bg-gradient-to-b from-wblue-100 via-white to-white">
      <div className="absolute hidden xl:flex w-[234px] h-[234px] -right-[385px] -z-10 top-[150px] rounded-full bg-gradient-to-b from-transparent  to-wblue-500 opacity-70"></div>
      <div className="absolute hidden xl:flex w-[487px] h-[487px] -right-[370px] -z-10 top-[300px] rounded-full bg-gradient-to-b from-transparent rotate-[300deg] to-wred-500"></div>
      <div className="absolute hidden xl:flex w-[778px] h-[778px] -left-[580px] top-[200px] rounded-full bg-gradient-to-br opacity-70 from-transparent to-wyellow-400"></div>
      <Headline title={title || "Zapomenuté heslo"} type="h1-bold" />
      <form
        ref={formRef}
        action={async (formData) => {
          const r = await sendForgottenPasswordPayload(formData);
          if (!r.success) {
              toast.error(formFailed!);
          }
          toast.success(formSuccess!);
        }}
        className="flex flex-col items-center gap-6 max-w-[400px] w-full mt-4">
        <Input
          name="email"
          placeholder={inputEmail!}
          type="email"
          required
          minLength={5}
          maxLength={100}
        />
        <div className="mt-4 w-fit flex">
          <Button
            label={submit!}
            type="submit"
            size="large"
            style={"solid" as ButtonStyles}
          />
        </div>
      </form>
      <div className="w-full flex justify-end">

      <ImageW data={image?.data?.attributes as UploadFile} />
      </div>
    </div>
  );
};
