import { NextPage } from "next";
import { LoginForm } from "@/_components/LoginForm";
import { apolloClient } from "@apollo";
import { loginData } from "@gql/query/queries";
import { PrihlaseniEntity } from "@/_gql/types";

type Props = {
  params: { [lang: string]: string };
};

const Login: NextPage<Props> = async ({ params: { lang } }) => {
  const r = await apolloClient.query({
    query: loginData,
    variables: { locale: lang },
  });

  const data = r.data.prihlaseni.data as PrihlaseniEntity;


  return (
    <main className="flex w-full justify-center flex-col items-center h-full px-4">
      <LoginForm data={data} />
    </main>
  );
};

export default Login;
