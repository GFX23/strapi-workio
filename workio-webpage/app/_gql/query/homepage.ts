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