import type { Schema, Attribute } from '@strapi/strapi';

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
      'blocks.blocks': BlocksBlocks;
      'button.button': ButtonButton;
      'section.section-1': SectionSection1;
      'section.section-2': SectionSection2;
    }
  }
}
