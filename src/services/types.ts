export interface NavLink {
  label: string;
  href: string;
}

export interface CTAButton {
  label: string;
  href: string;
  variant: 'primary' | 'outline' | 'outline-dark' | 'dark';
}

export interface SiteMeta {
  title: string;
  description: string;
  logo: string;
  logoAlt: string;
  phone: string;
  phoneHref: string;
}

export interface NavConfig {
  links: NavLink[];
  cta: CTAButton;
}

export interface SlideVideo {
  kind: 'video';
  webm: string;
  mp4: string;
}

export interface SlideImage {
  kind: 'image';
  src: string;
  alt: string;
  focalOrigin: string;
}

export type HeroSlide = SlideVideo | SlideImage;

export interface HeroContent {
  eyebrow: string;
  titleLead: string;
  titleEmphasis: string;
  description: string;
  slides: HeroSlide[];
  primaryCta: CTAButton;
  secondaryCta: CTAButton;
}

export interface OfferContent {
  eyebrow: string;
  titleLead: string;
  titleEmphasis: string;
  paragraphs: string[];
  note: string;
  image: string;
  imageAlt: string;
  link: { label: string; href: string };
}

export interface FeaturedItem {
  name: string;
  price: string;
  img: string;
  alt: string;
  desc: string;
  badge: string;
}

export interface FeaturedContent {
  eyebrow: string;
  titleLead: string;
  titleEmphasis: string;
  intro: string;
  items: FeaturedItem[];
  moreCta: { label: string; href: string };
}

export interface StoryContent {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  stat: { value: string; label: string };
  link: { label: string; href: string };
}

export interface WhyItem {
  no: string;
  title: string;
  desc: string;
}

export interface WhyContent {
  eyebrow: string;
  titleLead: string;
  titleEmphasis: string;
  description: string;
  image: string;
  imageAlt: string;
  left: WhyItem[];
  right: WhyItem[];
}

export interface GalleryItem {
  img: string;
  alt: string;
  link: string;
}

export interface GalleryContent {
  eyebrow: string;
  titleLead: string;
  titleEmphasis: string;
  handle: string;
  followHref: string;
  items: GalleryItem[];
}

export interface LocationDetail {
  icon: string;
  label: string;
  lines: string[];
  note: string;
}

export interface LocationContent {
  eyebrow: string;
  title: string;
  details: LocationDetail[];
  actions: CTAButton[];
  mapNote: string;
}

export interface FooterLinkGroup {
  title: string;
  links: NavLink[];
}

export interface FooterContent {
  logo: string;
  logoAlt: string;
  tagline: string;
  groups: FooterLinkGroup[];
  hours: string[];
  copyrightNote: string;
}

export interface MenuItem {
  name: string;
  price: string;
  cat: string;
  img: string;
  alt: string;
  desc: string;
  badge: string;
  diet: string[];
}

export interface MenuPageContent {
  eyebrow: string;
  titleLead: string;
  titleEmphasis: string;
  description: string;
  categories: string[];
  items: MenuItem[];
}

export interface SiteConfig {
  meta: SiteMeta;
  nav: NavConfig;
  hero: HeroContent;
  offer: OfferContent;
  featured: FeaturedContent;
  story: StoryContent;
  why: WhyContent;
  gallery: GalleryContent;
  location: LocationContent;
  footer: FooterContent;
  menu: MenuPageContent;
}
