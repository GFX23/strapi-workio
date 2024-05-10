"use server";

export const sendRegisterPayload = async (formData: FormData) => {

    const companyValidationData = {
      company_name: formData.get("company_name"),
      company_cin: formData.get("company_cin"),
      company_vat: formData.get("company_vat"),
      company_phone: formData.get("company_phone"),
      terms_accepted: true,
    };

    const companyRegisterData = {
      ...companyValidationData,
      email: formData.get("email"),
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      password: formData.get("password"),
      password_confirmation: formData.get("password_confirmation"), 
    }

    if (formData.get("password") !== formData.get("password_confirmation")) {
      console.error("Passwords do not match");
      return { success: false, error: "Passwords"}
    }

    console.log(companyRegisterData);

    const companyValidR = await fetch(
      "https://workio-app.inveo.dev/api/v1/landing/company/validation-company",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(companyValidationData),
      }
    );

    if (companyValidR.status !== 204) {
      console.error("Failed on company validation");
      return { success: false, error: "Validation" };
    }

    const companyRegisterR = await fetch(
      "https://workio-app.inveo.dev/api/v1/landing/company/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(companyRegisterData),
      }
    );

    if (companyRegisterR.status !== 201) {
      console.error("Failed on company registration");
      return { success: false, error: "Register" };
    }



    return ({ success: true });

  };