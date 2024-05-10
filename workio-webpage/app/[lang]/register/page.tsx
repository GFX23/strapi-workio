import { NextPage } from "next";
import { RegisterForm } from "@/_components/RegisterFom";
import { RegistraceEntity } from "@/_gql/types";
import { registerData } from "@/_gql/query/queries";
import { apolloClient } from "@apollo";

type Props = {
  params: { [lang: string]: string };
};

const Register: NextPage<Props> = async ({ params: { lang } }) => {
  const r = await apolloClient.query({
    query: registerData,
    variables: { locale: lang },
  });

  const data = r.data.registrace.data as RegistraceEntity;

  return (
    <main className="flex w-full justify-center flex-col items-center h-full px-4">
      <RegisterForm data={data}/>
    </main>
  );
};

export default Register;
