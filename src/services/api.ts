import { siteConfig } from '../config/siteConfig';
import type {
  SiteConfig,
  SiteMeta,
  NavConfig,
  AppBannerContent,
  HeroContent,
  OfferContent,
  FeaturedContent,
  StoryContent,
  WhyContent,
  GalleryContent,
  LocationContent,
  FooterContent,
  MenuPageContent,
} from './types';

/**
 * Data access layer. Every export here is async and returns the same
 * shape a real backend would — today it resolves from the local
 * siteConfig, later the bodies swap to `fetch('/api/...')` or a GraphQL
 * client without touching any component.
 */
async function resolve<T>(value: T): Promise<T> {
  return Promise.resolve(value);
}

export async function getSiteConfig(): Promise<SiteConfig> {
  return resolve(siteConfig);
}

export async function getSiteMeta(): Promise<SiteMeta> {
  return resolve(siteConfig.meta);
}

export async function getNavConfig(): Promise<NavConfig> {
  return resolve(siteConfig.nav);
}

export async function getAppBannerContent(): Promise<AppBannerContent> {
  return resolve(siteConfig.appBanner);
}

export async function getHeroContent(): Promise<HeroContent> {
  return resolve(siteConfig.hero);
}

export async function getOfferContent(): Promise<OfferContent> {
  return resolve(siteConfig.offer);
}

export async function getFeaturedContent(): Promise<FeaturedContent> {
  return resolve(siteConfig.featured);
}

export async function getStoryContent(): Promise<StoryContent> {
  return resolve(siteConfig.story);
}

export async function getWhyContent(): Promise<WhyContent> {
  return resolve(siteConfig.why);
}

export async function getGalleryContent(): Promise<GalleryContent> {
  return resolve(siteConfig.gallery);
}

export async function getLocationContent(): Promise<LocationContent> {
  return resolve(siteConfig.location);
}

export async function getFooterContent(): Promise<FooterContent> {
  return resolve(siteConfig.footer);
}

export async function getMenuPageContent(): Promise<MenuPageContent> {
  return resolve(siteConfig.menu);
}
