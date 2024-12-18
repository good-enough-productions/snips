export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export function sanitizeTag(tag: string): string {
  return tag.toLowerCase().trim().replace(/\s+/g, '-');
}