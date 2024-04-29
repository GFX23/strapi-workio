import type { Schema, Attribute } from '@strapi/strapi';

export interface AddressLocation extends Schema.Component {
  collectionName: 'components_address_locations';
  info: {
    displayName: 'location';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    address: Attribute.String;
    googleUrl: Attribute.String;
  };
}

export interface BlocksBlocks extends Schema.Component {
  collectionName: 'components_blocks_blocks';
  info: {
    displayName: 'blocks';
  };
  attributes: {
    icon: Attribute.Media;
    title: Attribute.String;
    perex: Attribute.Text;
  };
}

export interface BlocksCenik extends Schema.Component {
  collectionName: 'components_blocks_ceniks';
  info: {
    displayName: 'cenik';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    desc: Attribute.Text;
    price: Attribute.String;
    priceComment: Attribute.String;
    button: Attribute.Component<'button.button'>;
    disclaimer: Attribute.String;
  };
}

export interface BlocksContactBlocks extends Schema.Component {
  collectionName: 'components_blocks_contact_blocks';
  info: {
    displayName: 'contactBlocks';
  };
  attributes: {};
}

export interface BlocksFunkceFooter extends Schema.Component {
  collectionName: 'components_blocks_funkce_footers';
  info: {
    displayName: 'funkce-footer';
  };
  attributes: {
    title: Attribute.String;
    desc: Attribute.String;
    button: Attribute.Component<'button.button', true>;
  };
}

export interface BlocksFunkce extends Schema.Component {
  collectionName: 'components_blocks_funkces';
  info: {
    displayName: 'funkce';
  };
  attributes: {
    title: Attribute.String;
    perex: Attribute.Text;
    icon: Attribute.Media;
    image: Attribute.Media;
  };
}

export interface BlogPostSubSection extends Schema.Component {
  collectionName: 'components_blog_post_sub_sections';
  info: {
    displayName: 'subSection';
  };
  attributes: {
    title: Attribute.String;
    desc: Attribute.Text;
  };
}

export interface ButtonButton extends Schema.Component {
  collectionName: 'components_button_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    title: Attribute.String;
    style: Attribute.String;
    link: Attribute.String;
  };
}

export interface ButtonFooterLink extends Schema.Component {
  collectionName: 'components_button_footer_links';
  info: {
    displayName: 'footerLink';
  };
  attributes: {};
}

export interface FooterLinks extends Schema.Component {
  collectionName: 'components_footer_links';
  info: {
    displayName: 'links';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.Component<'button.button', true>;
  };
}

export interface FooterSocialSites extends Schema.Component {
  collectionName: 'components_footer_social_sites';
  info: {
    displayName: 'socialSites';
  };
  attributes: {
    icon: Attribute.Media;
    url: Attribute.String;
  };
}

export interface InputInput extends Schema.Component {
  collectionName: 'components_input_inputs';
  info: {
    displayName: 'input';
  };
  attributes: {
    placeholder: Attribute.String;
    type: Attribute.String;
  };
}

export interface SectionSection1 extends Schema.Component {
  collectionName: 'components_section_section_1s';
  info: {
    displayName: 'section-1';
  };
  attributes: {
    title: Attribute.String;
    perex: Attribute.String;
    linkButton: Attribute.Component<'button.button', true>;
    picture: Attribute.Media;
  };
}

export interface SectionSection2 extends Schema.Component {
  collectionName: 'components_section_section_2s';
  info: {
    displayName: 'section-2';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.String;
    perex: Attribute.Text;
    perex2: Attribute.Text;
    picture: Attribute.Media;
    blocks: Attribute.Component<'blocks.blocks', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'address.location': AddressLocation;
      'blocks.blocks': BlocksBlocks;
      'blocks.cenik': BlocksCenik;
      'blocks.contact-blocks': BlocksContactBlocks;
      'blocks.funkce-footer': BlocksFunkceFooter;
      'blocks.funkce': BlocksFunkce;
      'blog-post.sub-section': BlogPostSubSection;
      'button.button': ButtonButton;
      'button.footer-link': ButtonFooterLink;
      'footer.links': FooterLinks;
      'footer.social-sites': FooterSocialSites;
      'input.input': InputInput;
      'section.section-1': SectionSection1;
      'section.section-2': SectionSection2;
    }
  }
}
