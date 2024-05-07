export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  I18NLocaleCode: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type BlogPost = {
  __typename?: 'BlogPost';
  created: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  image?: Maybe<UploadFileEntityResponse>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<BlogPostRelationResponseCollection>;
  perex?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  subSection?: Maybe<Array<Maybe<ComponentBlogPostSubSection>>>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type BlogPostLocalizationsArgs = {
  filters?: InputMaybe<BlogPostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BlogPostSubSectionArgs = {
  filters?: InputMaybe<ComponentBlogPostSubSectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BlogPostEntity = {
  __typename?: 'BlogPostEntity';
  attributes?: Maybe<BlogPost>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type BlogPostEntityResponse = {
  __typename?: 'BlogPostEntityResponse';
  data?: Maybe<BlogPostEntity>;
};

export type BlogPostEntityResponseCollection = {
  __typename?: 'BlogPostEntityResponseCollection';
  data: Array<BlogPostEntity>;
  meta: ResponseCollectionMeta;
};

export type BlogPostFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<BlogPostFiltersInput>>>;
  created?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<BlogPostFiltersInput>;
  not?: InputMaybe<BlogPostFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BlogPostFiltersInput>>>;
  perex?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  subSection?: InputMaybe<ComponentBlogPostSubSectionFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type BlogPostInput = {
  created?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  perex?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  subSection?: InputMaybe<Array<InputMaybe<ComponentBlogPostSubSectionInput>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type BlogPostRelationResponseCollection = {
  __typename?: 'BlogPostRelationResponseCollection';
  data: Array<BlogPostEntity>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nei?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Cenik = {
  __typename?: 'Cenik';
  cenikBlock?: Maybe<Array<Maybe<ComponentBlocksCenik>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<CenikRelationResponseCollection>;
  perex?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  subTitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type CenikCenikBlockArgs = {
  filters?: InputMaybe<ComponentBlocksCenikFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CenikLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type CenikEntity = {
  __typename?: 'CenikEntity';
  attributes?: Maybe<Cenik>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CenikEntityResponse = {
  __typename?: 'CenikEntityResponse';
  data?: Maybe<CenikEntity>;
};

export type CenikInput = {
  cenikBlock?: InputMaybe<Array<InputMaybe<ComponentBlocksCenikInput>>>;
  perex?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  subTitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CenikRelationResponseCollection = {
  __typename?: 'CenikRelationResponseCollection';
  data: Array<CenikEntity>;
};

export type ComponentAddressLocation = {
  __typename?: 'ComponentAddressLocation';
  address?: Maybe<Scalars['String']['output']>;
  googleUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type ComponentAddressLocationInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  googleUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentBlocksBlocks = {
  __typename?: 'ComponentBlocksBlocks';
  icon?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID']['output'];
  perex?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentBlocksBlocksFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksBlocksFiltersInput>>>;
  not?: InputMaybe<ComponentBlocksBlocksFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksBlocksFiltersInput>>>;
  perex?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksBlocksInput = {
  icon?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  perex?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentBlocksCenik = {
  __typename?: 'ComponentBlocksCenik';
  button?: Maybe<ComponentButtonButton>;
  desc?: Maybe<Scalars['String']['output']>;
  disclaimer?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  price?: Maybe<Scalars['String']['output']>;
  priceComment?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentBlocksCenikFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksCenikFiltersInput>>>;
  button?: InputMaybe<ComponentButtonButtonFiltersInput>;
  desc?: InputMaybe<StringFilterInput>;
  disclaimer?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentBlocksCenikFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksCenikFiltersInput>>>;
  price?: InputMaybe<StringFilterInput>;
  priceComment?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksCenikInput = {
  button?: InputMaybe<ComponentButtonButtonInput>;
  desc?: InputMaybe<Scalars['String']['input']>;
  disclaimer?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  price?: InputMaybe<Scalars['String']['input']>;
  priceComment?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentBlocksContactBlocks = {
  __typename?: 'ComponentBlocksContactBlocks';
  id: Scalars['ID']['output'];
};

export type ComponentBlocksFunkce = {
  __typename?: 'ComponentBlocksFunkce';
  icon?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
  perex?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentBlocksFunkceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksFunkceFiltersInput>>>;
  not?: InputMaybe<ComponentBlocksFunkceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksFunkceFiltersInput>>>;
  perex?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksFunkceFooter = {
  __typename?: 'ComponentBlocksFunkceFooter';
  button?: Maybe<Array<Maybe<ComponentButtonButton>>>;
  desc?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
  title?: Maybe<Scalars['String']['output']>;
};


export type ComponentBlocksFunkceFooterButtonArgs = {
  filters?: InputMaybe<ComponentButtonButtonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentBlocksFunkceFooterInput = {
  button?: InputMaybe<Array<InputMaybe<ComponentButtonButtonInput>>>;
  desc?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentBlocksFunkceInput = {
  icon?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  perex?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentBlogPostSubSection = {
  __typename?: 'ComponentBlogPostSubSection';
  desc?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentBlogPostSubSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlogPostSubSectionFiltersInput>>>;
  desc?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentBlogPostSubSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlogPostSubSectionFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentBlogPostSubSectionInput = {
  desc?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentButtonButton = {
  __typename?: 'ComponentButtonButton';
  id: Scalars['ID']['output'];
  link?: Maybe<Scalars['String']['output']>;
  style?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentButtonButtonFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentButtonButtonFiltersInput>>>;
  link?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentButtonButtonFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentButtonButtonFiltersInput>>>;
  style?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentButtonButtonInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  style?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentButtonFooterLink = {
  __typename?: 'ComponentButtonFooterLink';
  id: Scalars['ID']['output'];
};

export type ComponentFooterLinks = {
  __typename?: 'ComponentFooterLinks';
  id: Scalars['ID']['output'];
  link?: Maybe<Array<Maybe<ComponentButtonButton>>>;
  title?: Maybe<Scalars['String']['output']>;
};


export type ComponentFooterLinksLinkArgs = {
  filters?: InputMaybe<ComponentButtonButtonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentFooterLinksFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentFooterLinksFiltersInput>>>;
  link?: InputMaybe<ComponentButtonButtonFiltersInput>;
  not?: InputMaybe<ComponentFooterLinksFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentFooterLinksFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentFooterLinksInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  link?: InputMaybe<Array<InputMaybe<ComponentButtonButtonInput>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentFooterSocialSites = {
  __typename?: 'ComponentFooterSocialSites';
  icon?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type ComponentFooterSocialSitesFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentFooterSocialSitesFiltersInput>>>;
  not?: InputMaybe<ComponentFooterSocialSitesFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentFooterSocialSitesFiltersInput>>>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentFooterSocialSitesInput = {
  icon?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentInputInput = {
  __typename?: 'ComponentInputInput';
  id: Scalars['ID']['output'];
  placeholder?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ComponentSectionSection1 = {
  __typename?: 'ComponentSectionSection1';
  buble_picture?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID']['output'];
  linkButton?: Maybe<Array<Maybe<ComponentButtonButton>>>;
  perex?: Maybe<Scalars['String']['output']>;
  picture?: Maybe<UploadFileEntityResponse>;
  title?: Maybe<Scalars['String']['output']>;
};


export type ComponentSectionSection1LinkButtonArgs = {
  filters?: InputMaybe<ComponentButtonButtonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSectionSection1Input = {
  buble_picture?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  linkButton?: InputMaybe<Array<InputMaybe<ComponentButtonButtonInput>>>;
  perex?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSectionSection2 = {
  __typename?: 'ComponentSectionSection2';
  blocks?: Maybe<Array<Maybe<ComponentBlocksBlocks>>>;
  id: Scalars['ID']['output'];
  perex?: Maybe<Scalars['String']['output']>;
  perex2?: Maybe<Scalars['String']['output']>;
  picture?: Maybe<UploadFileEntityResponse>;
  subTitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type ComponentSectionSection2BlocksArgs = {
  filters?: InputMaybe<ComponentBlocksBlocksFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSectionSection2Input = {
  blocks?: InputMaybe<Array<InputMaybe<ComponentBlocksBlocksInput>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  perex?: InputMaybe<Scalars['String']['input']>;
  perex2?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['ID']['input']>;
  subTitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  nei?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nei?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type Footer = {
  __typename?: 'Footer';
  cornerIcon?: Maybe<UploadFileEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  downloadHere?: Maybe<Scalars['String']['output']>;
  footerText?: Maybe<Scalars['String']['output']>;
  links?: Maybe<Array<Maybe<ComponentFooterLinks>>>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<FooterRelationResponseCollection>;
  logo?: Maybe<UploadFileEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  socialSites?: Maybe<Array<Maybe<ComponentFooterSocialSites>>>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type FooterLinksArgs = {
  filters?: InputMaybe<ComponentFooterLinksFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type FooterLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type FooterSocialSitesArgs = {
  filters?: InputMaybe<ComponentFooterSocialSitesFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FooterEntity = {
  __typename?: 'FooterEntity';
  attributes?: Maybe<Footer>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type FooterEntityResponse = {
  __typename?: 'FooterEntityResponse';
  data?: Maybe<FooterEntity>;
};

export type FooterInput = {
  cornerIcon?: InputMaybe<Scalars['ID']['input']>;
  downloadHere?: InputMaybe<Scalars['String']['input']>;
  footerText?: InputMaybe<Scalars['String']['input']>;
  links?: InputMaybe<Array<InputMaybe<ComponentFooterLinksInput>>>;
  logo?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  socialSites?: InputMaybe<Array<InputMaybe<ComponentFooterSocialSitesInput>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type FooterRelationResponseCollection = {
  __typename?: 'FooterRelationResponseCollection';
  data: Array<FooterEntity>;
};

export type Funkce = {
  __typename?: 'Funkce';
  block?: Maybe<Array<Maybe<ComponentBlocksFunkce>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  lastBlock?: Maybe<ComponentBlocksFunkceFooter>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<FunkceRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type FunkceBlockArgs = {
  filters?: InputMaybe<ComponentBlocksFunkceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type FunkceLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type FunkceEntity = {
  __typename?: 'FunkceEntity';
  attributes?: Maybe<Funkce>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type FunkceEntityResponse = {
  __typename?: 'FunkceEntityResponse';
  data?: Maybe<FunkceEntity>;
};

export type FunkceInput = {
  block?: InputMaybe<Array<InputMaybe<ComponentBlocksFunkceInput>>>;
  lastBlock?: InputMaybe<ComponentBlocksFunkceFooterInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type FunkceRelationResponseCollection = {
  __typename?: 'FunkceRelationResponseCollection';
  data: Array<FunkceEntity>;
};

export type GenericMorph = BlogPost | Cenik | ComponentAddressLocation | ComponentBlocksBlocks | ComponentBlocksCenik | ComponentBlocksContactBlocks | ComponentBlocksFunkce | ComponentBlocksFunkceFooter | ComponentBlogPostSubSection | ComponentButtonButton | ComponentButtonFooterLink | ComponentFooterLinks | ComponentFooterSocialSites | ComponentInputInput | ComponentSectionSection1 | ComponentSectionSection2 | Footer | Funkce | Homepage | I18NLocale | Kontakt | Navbar | Novinky | Prihlaseni | Registrace | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type Homepage = {
  __typename?: 'Homepage';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<HomepageRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  section1?: Maybe<ComponentSectionSection1>;
  section2?: Maybe<ComponentSectionSection2>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type HomepageLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type HomepageEntity = {
  __typename?: 'HomepageEntity';
  attributes?: Maybe<Homepage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type HomepageEntityResponse = {
  __typename?: 'HomepageEntityResponse';
  data?: Maybe<HomepageEntity>;
};

export type HomepageInput = {
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  section1?: InputMaybe<ComponentSectionSection1Input>;
  section2?: InputMaybe<ComponentSectionSection2Input>;
};

export type HomepageRelationResponseCollection = {
  __typename?: 'HomepageRelationResponseCollection';
  data: Array<HomepageEntity>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nei?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nei?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nei?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type Kontakt = {
  __typename?: 'Kontakt';
  address?: Maybe<ComponentAddressLocation>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dic?: Maybe<Scalars['String']['output']>;
  formFailed?: Maybe<Scalars['String']['output']>;
  formSuccess?: Maybe<Scalars['String']['output']>;
  ico?: Maybe<Scalars['String']['output']>;
  inputCheckbox?: Maybe<Scalars['String']['output']>;
  inputCheckboxGDPR?: Maybe<Scalars['String']['output']>;
  inputEmail?: Maybe<Scalars['String']['output']>;
  inputName?: Maybe<Scalars['String']['output']>;
  inputPhone?: Maybe<Scalars['String']['output']>;
  inputRequest?: Maybe<Scalars['String']['output']>;
  inputSurname?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<KontaktRelationResponseCollection>;
  mail?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  submit?: Maybe<ComponentButtonButton>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type KontaktLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type KontaktEntity = {
  __typename?: 'KontaktEntity';
  attributes?: Maybe<Kontakt>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type KontaktEntityResponse = {
  __typename?: 'KontaktEntityResponse';
  data?: Maybe<KontaktEntity>;
};

export type KontaktInput = {
  address?: InputMaybe<ComponentAddressLocationInput>;
  dic?: InputMaybe<Scalars['String']['input']>;
  formFailed?: InputMaybe<Scalars['String']['input']>;
  formSuccess?: InputMaybe<Scalars['String']['input']>;
  ico?: InputMaybe<Scalars['String']['input']>;
  inputCheckbox?: InputMaybe<Scalars['String']['input']>;
  inputCheckboxGDPR?: InputMaybe<Scalars['String']['input']>;
  inputEmail?: InputMaybe<Scalars['String']['input']>;
  inputName?: InputMaybe<Scalars['String']['input']>;
  inputPhone?: InputMaybe<Scalars['String']['input']>;
  inputRequest?: InputMaybe<Scalars['String']['input']>;
  inputSurname?: InputMaybe<Scalars['String']['input']>;
  mail?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  submit?: InputMaybe<ComponentButtonButtonInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type KontaktRelationResponseCollection = {
  __typename?: 'KontaktRelationResponseCollection';
  data: Array<KontaktEntity>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createBlogPost?: Maybe<BlogPostEntityResponse>;
  createBlogPostLocalization?: Maybe<BlogPostEntityResponse>;
  createCenikLocalization?: Maybe<CenikEntityResponse>;
  createFooterLocalization?: Maybe<FooterEntityResponse>;
  createFunkceLocalization?: Maybe<FunkceEntityResponse>;
  createHomepageLocalization?: Maybe<HomepageEntityResponse>;
  createKontaktLocalization?: Maybe<KontaktEntityResponse>;
  createNavbarLocalization?: Maybe<NavbarEntityResponse>;
  createNovinkyLocalization?: Maybe<NovinkyEntityResponse>;
  createPrihlaseniLocalization?: Maybe<PrihlaseniEntityResponse>;
  createRegistraceLocalization?: Maybe<RegistraceEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteBlogPost?: Maybe<BlogPostEntityResponse>;
  deleteCenik?: Maybe<CenikEntityResponse>;
  deleteFooter?: Maybe<FooterEntityResponse>;
  deleteFunkce?: Maybe<FunkceEntityResponse>;
  deleteHomepage?: Maybe<HomepageEntityResponse>;
  deleteKontakt?: Maybe<KontaktEntityResponse>;
  deleteNavbar?: Maybe<NavbarEntityResponse>;
  deleteNovinky?: Maybe<NovinkyEntityResponse>;
  deletePrihlaseni?: Maybe<PrihlaseniEntityResponse>;
  deleteRegistrace?: Maybe<RegistraceEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateBlogPost?: Maybe<BlogPostEntityResponse>;
  updateCenik?: Maybe<CenikEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateFooter?: Maybe<FooterEntityResponse>;
  updateFunkce?: Maybe<FunkceEntityResponse>;
  updateHomepage?: Maybe<HomepageEntityResponse>;
  updateKontakt?: Maybe<KontaktEntityResponse>;
  updateNavbar?: Maybe<NavbarEntityResponse>;
  updateNovinky?: Maybe<NovinkyEntityResponse>;
  updatePrihlaseni?: Maybe<PrihlaseniEntityResponse>;
  updateRegistrace?: Maybe<RegistraceEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateBlogPostArgs = {
  data: BlogPostInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateBlogPostLocalizationArgs = {
  data?: InputMaybe<BlogPostInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateCenikLocalizationArgs = {
  data?: InputMaybe<CenikInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateFooterLocalizationArgs = {
  data?: InputMaybe<FooterInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateFunkceLocalizationArgs = {
  data?: InputMaybe<FunkceInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateHomepageLocalizationArgs = {
  data?: InputMaybe<HomepageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateKontaktLocalizationArgs = {
  data?: InputMaybe<KontaktInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateNavbarLocalizationArgs = {
  data?: InputMaybe<NavbarInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateNovinkyLocalizationArgs = {
  data?: InputMaybe<NovinkyInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreatePrihlaseniLocalizationArgs = {
  data?: InputMaybe<PrihlaseniInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateRegistraceLocalizationArgs = {
  data?: InputMaybe<RegistraceInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteBlogPostArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteCenikArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteFooterArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteFunkceArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteHomepageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteKontaktArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteNavbarArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteNovinkyArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeletePrihlaseniArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteRegistraceArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateBlogPostArgs = {
  data: BlogPostInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateCenikArgs = {
  data: CenikInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateFooterArgs = {
  data: FooterInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateFunkceArgs = {
  data: FunkceInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateHomepageArgs = {
  data: HomepageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateKontaktArgs = {
  data: KontaktInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateNavbarArgs = {
  data: NavbarInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateNovinkyArgs = {
  data: NovinkyInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdatePrihlaseniArgs = {
  data: PrihlaseniInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateRegistraceArgs = {
  data: RegistraceInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};

export type Navbar = {
  __typename?: 'Navbar';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<NavbarRelationResponseCollection>;
  logo?: Maybe<UploadFileEntityResponse>;
  mobileLogo?: Maybe<UploadFileEntityResponse>;
  navButton?: Maybe<Array<Maybe<ComponentButtonButton>>>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type NavbarLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type NavbarNavButtonArgs = {
  filters?: InputMaybe<ComponentButtonButtonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type NavbarEntity = {
  __typename?: 'NavbarEntity';
  attributes?: Maybe<Navbar>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type NavbarEntityResponse = {
  __typename?: 'NavbarEntityResponse';
  data?: Maybe<NavbarEntity>;
};

export type NavbarInput = {
  logo?: InputMaybe<Scalars['ID']['input']>;
  mobileLogo?: InputMaybe<Scalars['ID']['input']>;
  navButton?: InputMaybe<Array<InputMaybe<ComponentButtonButtonInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type NavbarRelationResponseCollection = {
  __typename?: 'NavbarRelationResponseCollection';
  data: Array<NavbarEntity>;
};

export type Novinky = {
  __typename?: 'Novinky';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<NovinkyRelationResponseCollection>;
  nextButton?: Maybe<ComponentButtonButton>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  readTitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type NovinkyLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type NovinkyEntity = {
  __typename?: 'NovinkyEntity';
  attributes?: Maybe<Novinky>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type NovinkyEntityResponse = {
  __typename?: 'NovinkyEntityResponse';
  data?: Maybe<NovinkyEntity>;
};

export type NovinkyInput = {
  nextButton?: InputMaybe<ComponentButtonButtonInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  readTitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type NovinkyRelationResponseCollection = {
  __typename?: 'NovinkyRelationResponseCollection';
  data: Array<NovinkyEntity>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type Prihlaseni = {
  __typename?: 'Prihlaseni';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dontHaveAccountYet?: Maybe<Scalars['String']['output']>;
  forgottenPassword?: Maybe<Scalars['String']['output']>;
  inputName?: Maybe<Scalars['String']['output']>;
  inputPassword?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<PrihlaseniRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  registrationButton?: Maybe<ComponentButtonButton>;
  signUpButton?: Maybe<ComponentButtonButton>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PrihlaseniLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type PrihlaseniEntity = {
  __typename?: 'PrihlaseniEntity';
  attributes?: Maybe<Prihlaseni>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type PrihlaseniEntityResponse = {
  __typename?: 'PrihlaseniEntityResponse';
  data?: Maybe<PrihlaseniEntity>;
};

export type PrihlaseniInput = {
  dontHaveAccountYet?: InputMaybe<Scalars['String']['input']>;
  forgottenPassword?: InputMaybe<Scalars['String']['input']>;
  inputName?: InputMaybe<Scalars['String']['input']>;
  inputPassword?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  registrationButton?: InputMaybe<ComponentButtonButtonInput>;
  signUpButton?: InputMaybe<ComponentButtonButtonInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PrihlaseniRelationResponseCollection = {
  __typename?: 'PrihlaseniRelationResponseCollection';
  data: Array<PrihlaseniEntity>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  blogPost?: Maybe<BlogPostEntityResponse>;
  blogPosts?: Maybe<BlogPostEntityResponseCollection>;
  cenik?: Maybe<CenikEntityResponse>;
  footer?: Maybe<FooterEntityResponse>;
  funkce?: Maybe<FunkceEntityResponse>;
  homepage?: Maybe<HomepageEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  kontakt?: Maybe<KontaktEntityResponse>;
  me?: Maybe<UsersPermissionsMe>;
  navbar?: Maybe<NavbarEntityResponse>;
  novinky?: Maybe<NovinkyEntityResponse>;
  prihlaseni?: Maybe<PrihlaseniEntityResponse>;
  registrace?: Maybe<RegistraceEntityResponse>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryBlogPostArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryBlogPostsArgs = {
  filters?: InputMaybe<BlogPostFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCenikArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryFooterArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryFunkceArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryHomepageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryKontaktArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryNavbarArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryNovinkyArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryPrihlaseniArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryRegistraceArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Registrace = {
  __typename?: 'Registrace';
  checkbox2GdprContract?: Maybe<Scalars['String']['output']>;
  checkboxAndSuffix?: Maybe<Scalars['String']['output']>;
  checkboxGdprSuffix?: Maybe<Scalars['String']['output']>;
  checkboxVsopSuffix?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  gdprContractSuffix?: Maybe<Scalars['String']['output']>;
  inputCheckbox?: Maybe<Scalars['String']['output']>;
  inputCompanyName?: Maybe<Scalars['String']['output']>;
  inputDic?: Maybe<Scalars['String']['output']>;
  inputIco?: Maybe<Scalars['String']['output']>;
  inputTelefon?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<RegistraceRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  register?: Maybe<ComponentButtonButton>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type RegistraceLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type RegistraceEntity = {
  __typename?: 'RegistraceEntity';
  attributes?: Maybe<Registrace>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type RegistraceEntityResponse = {
  __typename?: 'RegistraceEntityResponse';
  data?: Maybe<RegistraceEntity>;
};

export type RegistraceInput = {
  checkbox2GdprContract?: InputMaybe<Scalars['String']['input']>;
  checkboxAndSuffix?: InputMaybe<Scalars['String']['input']>;
  checkboxGdprSuffix?: InputMaybe<Scalars['String']['input']>;
  checkboxVsopSuffix?: InputMaybe<Scalars['String']['input']>;
  gdprContractSuffix?: InputMaybe<Scalars['String']['input']>;
  inputCheckbox?: InputMaybe<Scalars['String']['input']>;
  inputCompanyName?: InputMaybe<Scalars['String']['input']>;
  inputDic?: InputMaybe<Scalars['String']['input']>;
  inputIco?: InputMaybe<Scalars['String']['input']>;
  inputTelefon?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  register?: InputMaybe<ComponentButtonButtonInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type RegistraceRelationResponseCollection = {
  __typename?: 'RegistraceRelationResponseCollection';
  data: Array<RegistraceEntity>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nei?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  ext?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<Scalars['ID']['input']>;
  folderPath?: InputMaybe<Scalars['String']['input']>;
  formats?: InputMaybe<Scalars['JSON']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  pathId?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};
