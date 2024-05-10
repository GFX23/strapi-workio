import { NextPage } from "next";
import { apolloClient } from "@apollo";
import { password } from "@gql/query/queries";
import { HesloEntity } from "@/_gql/types";
import { ForgottenPasswordForm } from "@/_components/ForgottenPasswordForm";

type Props = {
  params: { [lang: string]: string };
};

const Password: NextPage<Props> = async ({ params: { lang } }) => {
  const r = await apolloClient.query({
    query: password,
    variables: { locale: lang },
  });

  const data = r.data.heslo.data as HesloEntity;

  return (
    <main className="flex w-full justify-center flex-col items-center h-full px-4 overflow-hidden">
      <ForgottenPasswordForm data={data} />
    </main>
  );
};

export default Password;
