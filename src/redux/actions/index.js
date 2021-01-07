import axios from "axios"
import { store } from "../store"
import { GET_USER, SET_TOKEN, SET_DISCOUNTED_DATA, SET_FEATURED_PLACES_DATA, SET_FEATURED_PRODUCTS_DATA, SET_PLACES_DATA, SET_TRENDING_PRODUCTS_DATA } from "./types"

const api_host = store.getState().api_host

export const loginUser = cred => async dispatch => {

    try {
        const res =  await axios.post(`${api_host}/auth/local`, cred)

        if(res.data.user) {
            dispatch({
                type: SET_TOKEN,
                payload: res.data.jwt
            })
        } else {
            throw new Error("Invalid Credentials")
        }
    } catch (e) {
        console.log(e.message)
    }

}

export const setToken = token => dispatch => {
    dispatch({
        type: SET_TOKEN,
        payload: token
    })
}

export const getUser = async dispatch => {
    const token = store.getState().token

    try {
        const res = await axios.get(
            `${api_host}/users/me`,
            {headers: {Authorization: `Bearer ${token}`}}
        )

        if(res.data.id) {
            dispatch({
                type: GET_USER,
                payload: res.data
            })
        } else {
            throw new Error("Invalid Request")
        }
    } catch (e) {
        console.log(e.message)
    }

}

export const setFeaturedProductsData = data => dispatch => {
    dispatch({
        type: SET_FEATURED_PRODUCTS_DATA,
        payload: data
    })
}

export const setTrendingProductsData = data => dispatch => {
    dispatch({
        type: SET_TRENDING_PRODUCTS_DATA,
        payload: data
    })
}

export const setPlacesData = data => dispatch => {
    dispatch({
        type: SET_PLACES_DATA,
        payload: data
    })
}

export const setFeaturedPlacesData = data => dispatch => {
    dispatch({
        type: SET_FEATURED_PLACES_DATA,
        payload: data
    })
}

export const setDiscountedData = data => dispatch => {
    dispatch({
        type: SET_DISCOUNTED_DATA,
        payload: data
    })
}