"use server";

export const sendContactPayload = async (formData: FormData) => {

    const data = {
      name: `${formData.get("name")} ${formData.get("surname")}`,
      email: formData.get("email"),
      phone: formData.get("phone"),
      content: formData.get("content"),
      terms_accepted: true,
    };

    const r = await fetch(
      "https://workio-app.inveo.dev/api/v1/landing/contact_form",
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