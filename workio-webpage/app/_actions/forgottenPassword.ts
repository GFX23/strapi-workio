"use server";

export const sendForgottenPasswordPayload = async (formData: FormData) => {

    const data = {
      email: formData.get("email"),
    };

    const r = await fetch(
      "https://workio-app.inveo.dev/api/v1/auth/password/forgot",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (r.status !== 204) {
      console.error("Failed to send contact form");
      throw new Error("Failed to send contact form");
    }

    return ({ success: true });

  };