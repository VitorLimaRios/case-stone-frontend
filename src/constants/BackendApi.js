const BASE_URL = 'https://case-stone-marvel-backend.herokuapp.com';

export const REGISTER_URL = `${BASE_URL}/user/`;
export const LOGIN_URL = `${BASE_URL}/user/login`;
export const UPDATE_USER_URL = (id) => `${BASE_URL}/user/${id}`;

export const ADD_FAVORITE = `${BASE_URL}/favorite/`;
export const UNFAVORITE = (id) => `${BASE_URL}/favorite/${id}`;
export const FAVORITES_LIST = (id) => `${BASE_URL}/favorite/${id}`;
