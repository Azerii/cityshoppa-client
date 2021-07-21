import {
  SET_TOKEN,
  GET_USER,
  SET_FEATURED_PRODUCTS_DATA,
  SET_TRENDING_PRODUCTS_DATA,
  SET_PLACES_DATA,
  SET_DISCOUNTED_DATA,
  SET_FEATURED_PLACES_DATA,
  SET_CITY,
  SET_MODAL_OPEN,
  SET_MODAL_DATA,
  SET_DONATION,
  SET_CONTACT_TITLE,
  SET_CATEGORIES,
  SET_PRODUCTS
} from '../actions/types';

export const initialState = {
  user: {},
  token: null,
  products: [],
  discounted: {
    slide_index: 0
  },
  categories: [],
  city: null,
  modalOpen: false,
  modalData: {},
  donation: 0,
  contact_title: ''
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload
      };
    case SET_FEATURED_PRODUCTS_DATA:
      return {
        ...state,
        featured_products: action.payload
      };
    case SET_TRENDING_PRODUCTS_DATA:
      return {
        ...state,
        trending_products: action.payload
      };
    case SET_PLACES_DATA:
      return {
        ...state,
        places: action.payload
      };
    case SET_FEATURED_PLACES_DATA:
      return {
        ...state,
        featured_places: action.payload
      };
    case SET_DISCOUNTED_DATA:
      return {
        ...state,
        discounted: action.payload
      };
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };
    case SET_CITY:
      return {
        ...state,
        city: action.payload
      };
    case SET_MODAL_OPEN:
      return {
        ...state,
        modalOpen: action.payload
      };
    case SET_MODAL_DATA:
      return {
        ...state,
        modalData: action.payload
      };
    case SET_DONATION:
      return {
        ...state,
        donation: action.payload
      };
    case SET_CONTACT_TITLE:
      return {
        ...state,
        contact_title: action.payload
      };
    default:
      return state;
  }
}
