export const ENV = process.env;

export const GITHUB_API = ENV.GITHUB_API_URL;

export const IS_PROD = ENV.NODE_ENV === 'production';

export const IS_DEV = ENV.NODE_ENV === 'development';

export const IS_TEST = ENV.NODE_ENV === 'test';
