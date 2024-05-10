"use client";

import { Input } from "./Input";
import { TextArea } from "./TextArea";
import { KontaktEntity } from "../_gql/types";
import { Button, ButtonStyles } from "./Button";
import { Checkbox } from "./Checkbox";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRef } from "react";
import { sendContactPayload } from "@/_actions/contactForm";

type Props = {
  data: KontaktEntity;
};

export const ContactForm: React.FC<Props> = ({ data }) => {
  const {
    submit,
    inputName,
    inputSurname,
    inputEmail,
    inputPhone,
    inputRequest,
    inputCheckbox,
    inputCheckboxGDPR,
    formFailed,
    formSuccess,
  } = data.attributes || {};

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={formRef}
      action={async (formData) => {
        const r = await sendContactPayload(formData);
        if (!r.success) {
          toast.error(formFailed);
          return;
        }
        formRef.current?.reset();
        toast.success(formSuccess);
      }}
      className="flex flex-col gap-3.5 xl:min-w-[539px] w-full"
    >
      <div className="flex md:flex-row flex-col gap-4 w-full">
        <Input name="name" placeholder={inputName!} type="text" required />
        <Input
          name="surname"
          placeholder={inputSurname!}
          type="text"
          required
        />
      </div>
      <div className="flex md:flex-row flex-col gap-4 w-full">
        <Input name="email" placeholder={inputEmail!} type="email" required minLength={5} maxLength={100} />
        <Input name="phone" placeholder={inputPhone!} type="phone" required minLength={9} maxLength={20} />
      </div>
      <TextArea
        name="content"
        placeholder={inputRequest!}
        type="text"
        required
        maxLength={500}
      />
      <Checkbox
        name="terms_accepted"
        required
        label={
          <>
            <p className="p-small text-nowrap pr-1">{inputCheckbox!}</p>
            <Link href="" className="p-small-bold underline">
              {inputCheckboxGDPR}
            </Link>
          </>
        }
      />
      <div className="mt-4 w-full justify-center xl:justify-start pt-3 pb-7 flex">
        <Button
          label={submit?.title!}
          type="submit"
          style={submit?.style as ButtonStyles}
        />
      </div>
    </form>
  );
};
