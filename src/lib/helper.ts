/**
 * Remove `id-` prefix
 */
export function cleanBlogPrefix(slug: string): string {
  if (slug.slice(0, 3) === 'id-') {
    return slug.slice(3);
  } else {
    return slug;
  }
}
