import md5 from 'md5';

const ts = Number(Date.now());
const PUBLIC_KEY = 'd93ca1cf31f0e7b866d054162317dd49';
const PRIVATE_KEY = '585c6de41b84edcc45229648eeac0876d9a7a2f6';
const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);

const BASE_URL = 'https://gateway.marvel.com:443/v1/public/';

export const CHARACTER_URL = `${BASE_URL}characters?limit=50&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`;
export const COMIC_URL = `${BASE_URL}comics?limit=50&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`;
export function CHARACTER_ID_URL(id) {
  return `${BASE_URL}characters/${id}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`;
}
export function COMIC_ID_URL(id) {
  return `${BASE_URL}comics/${id}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`;
}
