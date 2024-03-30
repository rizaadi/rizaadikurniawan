export const isProd = process.env.NODE_ENV === 'production';
export const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
