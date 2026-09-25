import type { MenuItem } from "../services/types";

/** Creates a readable, URL-safe slug from the product name. */
export function productSlug(item: Pick<MenuItem, "name">): string {
  return item.name
    .normalize("NFKD")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
