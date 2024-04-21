import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: process.env.GQL_STRAPI_URL!,
    headers: {
      Authorization: process.env.STRAPI_GRAPHQL_TOKEN!,
      Cache: "no-store",
    },
  }),
  credentials: "include",
  cache: new InMemoryCache(),
});
