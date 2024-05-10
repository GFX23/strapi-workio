import { gql } from "@apollo/client";

export const homepageData = gql`
query($locale: I18NLocaleCode)  {
  homepage(locale: $locale) {
    data {
      attributes {
        section1 {
          id
          title
          perex
          linkButton {
            id
            title
            style
            link
          }
          picture {
            data {
              id
              attributes {
                name
                alternativeText
                caption
                width
                height
                formats
                hash
                ext
                mime
                size
                url
                previewUrl
                provider
                provider_metadata
              }
            }
          }
          buble_picture {
            data {
              attributes {
                url
                width
                height
                alternativeText
              }
            }
          }
        }
        section2 {
          id
          title
          subTitle
          perex
          perex2
          picture {
            data {
              id
              attributes {
                name
                alternativeText
                caption
                width
                height
                formats
                hash
                ext
                mime
                size
                url
                previewUrl
                provider
                provider_metadata
              }
            }
          }
          blocks {
            id
            icon {
              data {
                attributes {
                  name
                  alternativeText
                  caption
                  width
                  height
                  formats
                  hash
                  ext
                  mime
                  size
                  url
                  previewUrl
                  provider
                  provider_metadata
                }
              }
            }
            title
            perex
          }
        }
        createdAt
        updatedAt
        publishedAt
        locale
      }
    }
  }
}
`;

export const footerData = gql`
query ($locale: I18NLocaleCode){
  footer(locale: $locale) {
    data {
      id
      attributes {
        appStoreLink
        googlePlayLink
        logo {
          data {
            id
            attributes {
              name
              alternativeText
              caption
              width
              height
              formats
              hash
              ext
              mime
              size
              url
              previewUrl
              provider
              provider_metadata
              }
            }
          }
        title
        downloadHere
        links {
          id
          title
          link {
            id
            title
            style
            link
          }
        }
        socialSites {
          id
          icon {
            data {
              attributes {
                url
                height
                width
              }
            }
          }
          url
        }
        footerText
        cornerIcon {
          data {
            attributes {
              url
              width
              height
            }
          }
        }
        createdAt
        updatedAt
        publishedAt
      }
    }
  }
}`

export const navbarData = gql`
    query ($locale: I18NLocaleCode) {
      navbar(locale: $locale) {
        data {
          attributes {
            logo {
              data {
                attributes {
                  url
                  alternativeText
                  width
                  height
                }
              }
            }
            mobileLogo {
              data {
                attributes {
                  url
                  alternativeText
                  width
                  height
                }
              }
            }
            navButton {
              title
              link
              style
            }
          }
        }
      }
    }
  `;

export const kontaktData = gql`
query ($locale: I18NLocaleCode) {
  kontakt(locale: $locale) {
    data {
      attributes {
        formFailed
        formSuccess
        title
        submit {
          id
          title
          style
          link
        }
        phone
        mail
        address {
          id
          name
          address
          googleUrl
        }
        ico
        dic
        inputName
        inputSurname
        inputEmail
        inputPhone
        inputRequest
        inputCheckbox
        inputCheckboxGDPR
        createdAt
        updatedAt
        publishedAt
      }
    }
  }
}`

export const funkceData = gql`
query ($locale: I18NLocaleCode) {
  funkce(locale: $locale) {
    data {
      attributes {
        block {
          id
          title
          perex
          icon {
            data {
              id
              attributes {
                alternativeText
                caption
                width
                height
                formats
                hash
                ext
                url
                createdAt
              }
            }
          }
          image {
            data {
              attributes {
                url
                width
                height
                alternativeText
              }
            }
          }
        }
        title
        lastBlock {
          id
          title
          desc
          button {
            id
            title
            style
            link
          }
          image {
            data {
              attributes {
                url
                height
                width
                alternativeText
              }
            }
          }
        }
      }
    }
  }
}`

export const cenikData = gql`
query ($locale: I18NLocaleCode) {
  cenik(locale: $locale) {
    data {
      attributes {
        title
        subTitle
        perex
        cenikBlock {
          id
          title
          desc
          price
          priceComment
          button {
            id
            title
            style
            link
          }
          disclaimer
        }
      }
    }
  }
}`

export const newsData = gql`
query ($locale: I18NLocaleCode, $blogPostsLocale2: I18NLocaleCode, $pagination: PaginationArg) {
  novinky(locale: $locale) {
    data {
      attributes {
        title
        readTitle
        nextButton {
          id
          title
          style
          link
        }
      }
    }
  }
  blogPosts(locale: $blogPostsLocale2, pagination: $pagination) {
    data {
      attributes {
        image {
          data {
            attributes {
              width
              url
              height
              alternativeText
            }
          }
        }
        perex
        title
        subSection {
          desc
          title
        }
        createdAt
      }
      id
    }
  }
}`

export const getTotalBlogs = gql`
query ( $locale: I18NLocaleCode,) {
  blogPosts(locale: $locale, pagination: {limit: 1000}) {
    data {
      id
    }
  }
}`

export const getBlog = gql`
query ($blogPostId: ID) {
  blogPost(id: $blogPostId) {
    data {
      attributes {
        image {
          data {
            attributes {
              width
              url
              alternativeText
              height
            }
          }
        }
        perex
        createdAt
        title
        subSection {
          desc
          id
          title
        }
      }
    }
  }
}`

export const loginData = gql`
query ($locale: I18NLocaleCode) {
  prihlaseni(locale: $locale) {
    data {
      attributes {
        dontHaveAccountYet
        forgottenPassword
        inputName
        inputPassword
        invalidCredentials
        registrationButton {
          id
          title
          style
          link
        }
        signUpButton {
          id
          title
          style
          link
        }
        title
      }
    }
  }
}`

export const registerData = gql`
query ($locale: I18NLocaleCode) {
  registrace(locale: $locale) {
    data {
      attributes {
        checkbox2GdprContract
        checkboxAndSuffix
        checkboxGdprSuffix
        checkboxVsopSuffix
        gdprContractSuffix
        inputCheckbox
        inputCompanyName
        inputDic
        inputIco
        inputTelefon
        inputEmail
        inputFirstName
        inputLastName
        inputPassword
        inputPasswordConfirmation
        userDataLabel
        registerFailedPasswordDoNotMatch
        registerFailedValidation
        registerSuccess
        registerFailedOnRegister
        linkGDPR
        linkVOP
        linkGDPRContract
        register {
          id
          title
          style
          link
        }
        title
      }
    }
  }
}`

export const password = gql`
query($locale: I18NLocaleCode) {
  heslo(locale: $locale) {
    data {
      attributes {
        inputEmail
        submit
        title
        image {
          data {
            attributes {
              url
              width
              height
              alternativeText
            }
          }
        }
        formSuccess
        formFailed
      }
    }
  }
}`