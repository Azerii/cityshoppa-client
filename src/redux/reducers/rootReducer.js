import { 
    LOGIN_USER, 
    GET_USER,
    SET_FEATURED_PRODUCTS_DATA
} from "../actions/types";

export const initialState = {
    api_host: 'http://localhost:1337',
    user: {},
    token: null,
    featured_products: {
        index: 0,
    },
}

export default function rootReducer (state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                token: action.payload
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload
            }
        case SET_FEATURED_PRODUCTS_DATA:
            return {
                ...state,
                featured_products: action.payload
            }
        default:
            return state
    }
}