"use server";

import { cookies } from "next/headers";

export const sendLoginPayload = async (formData: FormData) => {

    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
      remember: false,
    };

    const rLogin = await fetch(
      "https://workio-app.inveo.dev/api/v1/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (rLogin.status !== 200) {
      console.error("Invalid Credentials");
      return {error: true};
    }

    const rData = await rLogin.json();
    const token = rData.included[0].attributes.bearer

    console.log(token);

    cookies().set({
      name: "auth._token.cookie",
      value: `Bearer ${token}`,
      path: "/",
    });

    const redirect = process.env.WORKIO_REDIRECT_URL!;

    return ({ success: true, redirect: redirect});

  };