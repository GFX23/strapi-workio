import { NextPage } from "next";
import { RegisterForm } from "@/_components/RegisterFom";

type Props = {
  params: { [lang: string]: string };
};

const Register: NextPage<Props> = async ({ params: { lang } }) => {

  return (
    <main className="flex w-full justify-center flex-col items-center h-full px-4">
      <RegisterForm locale={lang} />
    </main>
  );
};

export default Register;
