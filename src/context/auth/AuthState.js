import React, { useReducer } from 'react'
import Axios from 'axios'

import AuthContext from './AuthContext'
import authReducer from './authReducer'

import { GET_USER } from '../types'

const AuthState = props => {
    const initialState = {
        api_host: 'http://localhost:1337/users/me',
        user: {}
    }

    const [state, dispatch] = useReducer(authReducer, initialState)

    const getUser = async () => {
        let res = await Axios.get(`${initialState.api_host}`)


        return res.data
    }


    return (
        <AuthContext.Provider value={{
            user: state.user,
            getUser,
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState