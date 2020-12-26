import React, { useState } from 'react'
import styled from 'styled-components'

import google from '../assets/auth/google.svg'
import facebook from '../assets/auth/facebook.svg'
import apple from '../assets/auth/apple.svg'
import email from '../assets/auth/email.svg'

import { Route } from 'react-router-dom'

const Wrapper = styled.div`
    padding: 5rem 0;
`

const Inner = styled.div`
    display: flex;
    width: 60%;
    min-height: 30vh;
    margin: auto;
    margin-bottom: 3rem;
    border: 1px solid #666666;
    border-radius: 2rem;
    overflow: hidden;

    .content {
        width: 70%;
        height: 100%;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 3rem 0;

        .heading {
            font-weight: 500;
        }

        .subheading {
            font-size: 150%;

            &.or {
                text-align: center;
            }
        }

        .row {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        form {
            width: 70%;

            .names {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;

                >div {
                    width: 45%;
                }
            }
        }

        .bottom {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 2rem;
            font-size: 100%;

            >a {
                color: #000000;
            }

            p > a {
                color: #ff7235;
                font-weight: 500;
            }
        }
    }
`

const SigninItem = styled.a`
    display: flex;
    width: fit-content;
    align-items: center;
    margin: 1.5rem 0;
    color: #000000;

    .imgWrapper {
        display: flex;
        align-items: center;
        width: 1.5rem;
        margin-right: 1rem;

        img {
            height: 1.5rem;
        }
    }

    p {
        font-size: 120%;
    }

`

const FormInput = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border: 1px solid #666666;
    border-radius: 2rem;
    margin-bottom: 1rem;
    padding: 1rem;

    input {
        width: 100%;
        font-size: 80%;
        border: none;

        &.password {
            width: 80%;
        }
    }

    p {
        font-size: 80%;
        font-weight: 500;
        cursor: pointer;
        text-align: right;
    }
`

const Button = styled.button`
    padding: 0.7rem 1rem;
    font-size: 120%;
    color: #ffffff;
    background-color: #ff7235;
    margin-top: 1rem;
    border: none;
    border-radius: 2rem;

    span {
        font-weight: 500;
    }
`

function SignIn () {

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        return
    }

    const toggleShowPassword = (id) => {
        const target = document.querySelector(`#${id}`)

        if (target.type === 'password') {
            target.type = 'text'
            setShowPassword(true)
        } else {
            target.type = 'password'
            setShowPassword(false)
        }
    }

    return (
        <>
        <Wrapper>
            <Inner>
                <div className='content'>
                    <h1 className='heading'>Welcome</h1>
                    <p className='subheading'>Sign In Your Account</p>
                    
                    <Route exact path='/sign-in'>
                        <div className='row'>
                            <SigninItem href='/'>
                                <div className='imgWrapper'><img src={google} alt='' /></div>
                                <p>Sign in with Google</p>
                            </SigninItem>
                            <SigninItem href='/'>
                                <div className='imgWrapper'><img src={facebook} alt='' /></div>
                                <p>Sign in with Facebook</p>
                            </SigninItem>
                        </div>
                        <div className='row'>
                            <SigninItem href='/'>
                                <div className='imgWrapper'><img src={apple} alt='' /></div>
                                <p>Sign in with Apple</p>
                            </SigninItem>
                            <p className='subheading or'>Or</p>
                            <SigninItem href='/sign-in/local'>
                                <div className='imgWrapper'><img src={email} alt='' /></div>
                                <p>Sign in with Email</p>
                            </SigninItem>
                        </div>
                    </Route>
                    <Route exact path='/sign-in/local'>
                        <SigninItem href='/sign-in/local'>
                            <div className='imgWrapper'><img src={email} alt='' /></div>
                            <p>Sign in with Email</p>
                        </SigninItem>

                        <form onSubmit={(e) => handleSubmit(e)}>
                            <FormInput>
                                <input type='email' id='email' name='email' placeholder='Email Address' required />
                            </FormInput>
                            <FormInput>
                                <input className='password' type='password' id='password' name='password' placeholder='Password' required />
                                <p onClick={() => toggleShowPassword('password')}>{showPassword ? 'Hide' : 'Show'} me</p>
                            </FormInput>

                            <Button type='submit'>
                                <span>Sign In</span>
                            </Button>
                        </form>
                    </Route>
                    <div className='bottom'>
                        <a href='/'>Forgot Password</a>
                        <p>
                            Don't have an account?&nbsp;
                            <a href='/sign-up'>Sign Up</a>
                        </p>
                    </div>
                </div>
            </Inner>
        </Wrapper>
        </>
    )
}

export default SignIn