import React, { useState } from 'react'
import styled from 'styled-components'

import side_img from '../assets/auth/side_img.png'
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
    width: 70%;
    min-height: 30vh;
    margin: auto;
    margin-bottom: 3rem;
    border: 1px solid #666666;
    border-radius: 2rem;
    overflow: hidden;

    .contentLeft {
        width: 55%;
        padding: 2rem 0;

        .inner {
            width: 70%;
            height: 100%;
            margin: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;

            .heading {
                font-weight: 500;
            }

            .subheading {
                font-size: 150%;

                &.or {
                    text-align: center;
                    width: 50%;
                }
            }

            form {
                width: 100%;

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
        }
    }

    .contentRight {
        width: 45%;

        img {
            width: 100%;
            height: 100%;
        }
    }
`

const SignupItem = styled.a`
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


function SignUp () {

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
            id === 'password' ? setShowPassword(true) : setShowConfirmPassword(true)
        } else {
            target.type = 'password'
            id === 'password' ? setShowPassword(false) : setShowConfirmPassword(false)
        }
    }

    return (
        <>
        <Wrapper>
            <Inner>
                <div className='contentLeft'>
                    <div className='inner'>
                        <h1 className='heading'>Welcome</h1>
                        <p className='subheading'>Create Your Account</p>
                        
                        <Route exact path='/sign-up'>
                            <SignupItem href='/'>
                                <div className='imgWrapper'><img src={google} alt='' /></div>
                                <p>Sign up with Google</p>
                            </SignupItem>
                            <SignupItem href='/'>
                                <div className='imgWrapper'><img src={facebook} alt='' /></div>
                                <p>Sign up with Facebook</p>
                            </SignupItem>
                            <SignupItem href='/'>
                                <div className='imgWrapper'><img src={apple} alt='' /></div>
                                <p>Sign up with Apple</p>
                            </SignupItem>
                            <p className='subheading or'>Or</p>
                            <SignupItem href='/sign-up/local'>
                                <div className='imgWrapper'><img src={email} alt='' /></div>
                                <p>Sign up with Email</p>
                            </SignupItem>
                        </Route>
                        <Route exact path='/sign-up/local'>
                            <SignupItem href='/sign-up/local'>
                                <div className='imgWrapper'><img src={email} alt='' /></div>
                                <p>Sign up with Email</p>
                            </SignupItem>

                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className='names'>
                                    <div>
                                        <FormInput>
                                            <input type='text' id='firstName' name='firstName' placeholder='First Name' required />
                                        </FormInput>
                                    </div>
                                    <div>
                                        <FormInput>
                                            <input type='text' id='lastName' name='lasstName' placeholder='Last Name' required />
                                        </FormInput>
                                    </div>
                                </div>
                                <FormInput>
                                    <input type='email' id='email' name='email' placeholder='Email Address' required />
                                </FormInput>
                                <FormInput>
                                    <input className='password' type='password' id='password' name='password' placeholder='Password' required />
                                    <p onClick={() => toggleShowPassword('password')}>{showPassword ? 'Hide' : 'Show'} me</p>
                                </FormInput>
                                <FormInput>
                                    <input className='password' type='password' id='confirmPassword' name='confirmPassword' placeholder='Confirm Password' required />
                                    <p onClick={() => toggleShowPassword('confirmPassword')}>{showConfirmPassword ? 'Hide' : 'Show'} me</p>
                                </FormInput>

                                <Button type='submit'>
                                    <span>Sign Up</span>
                                </Button>
                            </form>
                        </Route>
                    </div>
                </div>
                <div className='contentRight'>
                    <img src={side_img} alt='' />
                </div>
            </Inner>
        </Wrapper>
        </>
    )
}

export default SignUp