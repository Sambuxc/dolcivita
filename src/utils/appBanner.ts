type MobilePlatform = "android" | "ios" | "other";

function getMobilePlatform(): MobilePlatform {
  const userAgent = navigator.userAgent.toLowerCase();

  if (/android/.test(userAgent)) return "android";
  if (/iphone|ipad|ipod/.test(userAgent)) return "ios";

  // Modern iPads can identify as macOS while still supporting touch.
  if (/macintosh/.test(userAgent) && navigator.maxTouchPoints > 1) return "ios";

  return "other";
}

export function initAppBanner(root: HTMLElement): void {
  const platform = getMobilePlatform();
  root.dataset.platform = platform;

  if (platform === "other") return;

  const preferredLink = root.querySelector<HTMLElement>(
    `[data-app-platform="${platform}"]`,
  );
  preferredLink?.setAttribute("data-preferred", "true");
}
