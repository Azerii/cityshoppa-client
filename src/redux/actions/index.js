import axios from 'axios';
import { store } from '../store';
import {
  GET_USER,
  SET_TOKEN,
  SET_DISCOUNTED_DATA,
  SET_FEATURED_PLACES_DATA,
  SET_FEATURED_PRODUCTS_DATA,
  SET_PLACES_DATA,
  SET_TRENDING_PRODUCTS_DATA,
  SET_MODAL_OPEN,
  SET_MODAL_DATA,
  SET_CITY,
  SET_DONATION,
  SET_CONTACT_TITLE,
  SET_CATEGORIES
} from './types';
import { API_HOST } from '../../utils/config';

const api_host = API_HOST;

export const loginUser = cred => async dispatch => {
  try {
    const res = await axios.post(`${api_host}/auth/local`, cred);

    if (res.data.user) {
      dispatch({
        type: SET_TOKEN,
        payload: res.data.jwt
      });

      window.location.replace('/');
    } else {
      throw new Error('Invalid Credentials');
    }
  } catch (e) {
    console.log(e.message);
  }
};

export const registerUser = cred => async dispatch => {
  try {
    const res = await axios.post(`${api_host}/auth/local/register`, cred);

    if (res.data.user) {
      window.location.replace('/sign-in/local');
    } else {
      throw new Error('Invalid Credentials');
    }
  } catch (e) {
    console.log(e.message);
  }
};

export const setToken = token => dispatch => {
  dispatch({
    type: SET_TOKEN,
    payload: token
  });
};

export const getUser = async dispatch => {
  const token = store.getState().token;

  try {
    const res = await axios.get(`${api_host}/users/me`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    if (res.data.id) {
      dispatch({
        type: GET_USER,
        payload: res.data
      });
    } else {
      throw new Error('Invalid Request');
    }
  } catch (e) {
    console.log(e.message);
  }
};

export const getCollection = async (collectionType, id) => {
  let res;
  try {
    if (id) {
      res = await axios.get(`${api_host}/${collectionType}/${id}`);
    } else {
      res = await axios.get(`${api_host}/${collectionType}`);
    }

    if (res.data) {
      return res.data;
    }
  } catch (e) {
    console.log(e);
  }

  return null;
};

export const setFeaturedProductsData = data => dispatch => {
  dispatch({
    type: SET_FEATURED_PRODUCTS_DATA,
    payload: data
  });
};

export const setTrendingProductsData = data => dispatch => {
  dispatch({
    type: SET_TRENDING_PRODUCTS_DATA,
    payload: data
  });
};

export const setPlacesData = data => dispatch => {
  dispatch({
    type: SET_PLACES_DATA,
    payload: data
  });
};

export const setFeaturedPlacesData = data => dispatch => {
  dispatch({
    type: SET_FEATURED_PLACES_DATA,
    payload: data
  });
};

export const setDiscountedData = data => dispatch => {
  dispatch({
    type: SET_DISCOUNTED_DATA,
    payload: data
  });
};

export const setCategories = data => dispatch => {
  dispatch({
    type: SET_CATEGORIES,
    payload: data
  });
};

export const setCity = city => dispatch => {
  dispatch({
    type: SET_CITY,
    payload: city
  });
};

export const setModalOpen = status => dispatch => {
  dispatch({
    type: SET_MODAL_OPEN,
    payload: status
  });
};

export const setModalData = data => dispatch => {
  dispatch({
    type: SET_MODAL_DATA,
    payload: data
  });
};

export const setDonation = amount => dispatch => {
  dispatch({
    type: SET_DONATION,
    payload: amount
  });
};

export const setContactTitle = title => dispatch => {
  dispatch({
    type: SET_CONTACT_TITLE,
    payload: title
  });
};
