export const GITHUB_API = process.env.NEXT_PUBLIC_GITHUB_API_URL;

export const IS_PROD = process.env.NODE_ENV === 'production';

export const IS_DEV = process.env.NODE_ENV === 'development';

export const IS_TEST = process.env.NODE_ENV === 'test';

export const IS_BROWSER = typeof window !== 'undefined';
