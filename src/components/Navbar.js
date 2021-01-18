import React, { useState } from 'react'
import styled from 'styled-components'

import logo from '../assets/global/logo_footer.png'
import location_pin from '../assets/navbar/location_black.svg'
import search from '../assets/navbar/search.svg'
import home from '../assets/navbar/home.svg'
// import gifts from '../assets/navbar/gifts.svg'
// import food from '../assets/navbar/food.svg'
// import fun_chill from '../assets/navbar/fun_chill.svg'
// import quick_shop from '../assets/navbar/quick_shop.svg'
// import discounts from '../assets/navbar/discounts.svg'
import logged_in from '../assets/navbar/logged_in.svg'

import Container from './Container'
import { connect } from 'react-redux'
import { setToken } from '../redux/actions'
import { Route, useHistory } from 'react-router-dom'
import { categories, getRandomRange } from '../utils'

const Wrapper = styled.div`
    padding-bottom: 2rem;
`

const Top = styled.div`
    padding: 1rem 0;
    background-color: #5A7889;

    .topContainer {
        display: flex;
        justify-content: space-between;
    }

    div {
        display: flex;
        align-items: center;
    }

    input, select {
        border: none;
    }

    select {
        appearance: none;
    }

    .contentLeft {
        width: fit-content;

        img {
            height: 2.5rem;
        }
        
        .hamburger {
            display: block;
            margin-left: 2rem;

            span {
                display: block;
                height: 3px;
                width: 1.5rem;
                margin-bottom: 3px;
                background-color: #ffffff;
            }
        }
    }

    .contentCenter {
        min-width: 50%;
        height: 3rem;

        div {
            height: 100%;
        }

        .searchBar {
            width: 50%;
            padding: 0rem 1rem;
            border: 1px solid #5A7889;
            border-top-left-radius: 0.3rem;
            border-bottom-left-radius: 0.3rem;
            background-color: #ffffff;

            input {
                width: 100%;
                font-size: 90%;
                color: #5A7889;
            }
        }

        .selectLocation {
            width: 30%;
            padding: 0rem 1rem;
            border: 1px solid #5A7889;
            border-left: none;
            border-right: none;
            background-color: #ffffff;

            img {
                height: 1.5rem;
            }

            input {
                width: 100%;
                font-size: 90%;
                color: #000000;
                margin-left: 0.5rem;
            }
        }

        .searchButton {
            padding: 0 1rem;
            background-color: #ffffff;
            border: 1px solid #5A7889;
            border-left: none;
            border-top-right-radius: 0.3rem;
            border-bottom-right-radius: 0.3rem;
            cursor: pointer;

            &:hover {
                filter: brightness(1.2);
            }

            img {
                height: 1.5rem;
            }
        }

    }

    .contentRight {
        width: fit-content;
        position: relative;

        a {
            padding: 0.5rem 1rem;
            font-size: 100%;
            font-weight: 500;

            &.signIn {
                background-color: #ff7235;
                color: #ffffff;
                margin-right: 1rem;
            }

            &.signUp {
                background-color: transparent;
                border: 1px solid #ffffff;
                color: #ffffff;
            }
        }

        .user {
            width: fit-content;
            cursor: pointer;

            p {
                color: #ffffff;
                margin-right: 0.5rem;
            }

            img {
                height: 2rem;
            }
        }

        .signOut {
            position: absolute;
            top: 3rem;
            right: 0;
            min-width: 7rem;
            padding: 0.5rem 1rem;
            background-color: #ffffff;
            border: 1px solid #666666;
            cursor: pointer;
            opacity: 0;
            pointer-events: none;
            transition: all ease-out 200ms;

            &:hover {
                background-color: #ff7235;
                color: #ffffff;
                border-color: #ff7235;
            }

            &.show {
                opacity: 1;
                pointer-events: all;
            }
        }
    }
`

const Bottom = styled.div`
    padding: 1.5rem 0;
    background-color: #ff7235;

    .bottomContainer {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .inner {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        >.item {
            position: relative;
            display: flex;
            align-items: center;
            text-decoration: none;
            color: #ffffff;
            font-size: 100%;
            padding: 0 1rem;
            max-width: 10rem;
            white-space: wrap;
            overflow: hidden;
            text-overflow: ellipsis;
            cursor: pointer;

            &.seeMore {
                font-weight: 500;
                color: #ffffff;
                max-width: unset;
            }

            img {
                height: 1rem;
                margin-right: 0.5rem;
            }
        }
    }
`

// const Menu = styled.div`
//     // display: flex;
//     // flex-direction: column;
//     position: absolute;
//     top: 2rem;
//     left: 50%;
//     transform: translateX(-25%);
//     background-color: #ffffff;
//     box-shadow: 0px 0px 3px #e5e5e5;
//     border-radius: 0.2rem;
//     min-width: 8rem;
//     z-index: 23;
//     pointer-events: none;
//     opacity: 0;

//     &.show {
//         pointer-events: all;
//         opacity: 1;
//     }

//     .item {
//         display: block;
//         padding: 0.5rem 1rem;
//         color: #000000;
//         // transition: all ease-out 200ms;

//         &:hover {
//             background-color: #f9f9f9;
//         }
//     }

// `


function Navbar (props) {

    const history = useHistory();
    const limit = getRandomRange(8, categories.length)
    const [categoryList] = useState(categories.slice(limit.lower, limit.upper))

    return (
        <>
        <Wrapper>
                <Top>
                <Container className='topContainer'>
                    <div className='contentLeft'>
                        <a href='/'><img src={logo} alt='' /></a>
                        {/* <div className='hamburger'>
                            <span></span>
                            <span></span>
                        </div> */}
                    </div>
                    <div className='contentCenter'>
                        <div className='searchBar'>
                            <input type='text' id='search' name='search' placeholder='Find local services and Products' />
                        </div>
                        <div className='selectLocation'>
                            <img src={location_pin} alt='' />
                            <input type='text' id='location' name='location' placeholder='Select Location' />
                        </div>
                        <div className='searchButton'>
                            <img src={search} alt='' />
                        </div>
                    </div>
                    <div className='contentRight'>
                        {props.token && <>
                            <div className='user' onClick={() => {
                                document.querySelector('.signOut').classList.toggle('show')
                            }}>
                                <p>
                                    {props.user && props.user.username}
                                </p>
                                <img src={logged_in} alt='' />
                            </div>
                            <div className='signOut'>
                                <p onClick={() => {
                                    props.setToken(null)
                                    setTimeout(() => {
                                        history.push('/')
                                    })
                                }}>Sign out</p>
                            </div>
                        </>}
                        {props.token && <>
                            <div className='user' onClick={() => {
                                document.querySelector('.signOut').classList.toggle('show')
                            }}>
                                <p>
                                    {props.user && props.user.username}
                                </p>
                                <img src={logged_in} alt='' />
                            </div>
                            <div className='signOut'>
                                <p onClick={() => {
                                    props.setToken(null)
                                    setTimeout(() => {
                                        history.push('/')
                                    })
                                }}>Sign out</p>
                            </div>
                        </>}
                        {!props.token && <>
                            <a href='/sign-in' className='signIn'>
                                Sign In
                            </a>
                            <a href='/sign-up' className='signUp'>
                                Sign Up
                            </a>
                        </>}
                        
                    </div>
                    </Container>
                </Top>
                <Route exact path='/'> 
                    <Bottom>
                        <Container>
                        <div className='inner'>
                            <a href='/' className='item'>
                                <img src={home} alt='' />
                                <span>Home</span>
                            </a>

                            {categoryList.map((category) => (
                                <div className='item'>
                                    <span>{category}</span>
                                </div>
                            ))}
                            <a href='/categories' className='item seeMore'>All Categories {'>>'}</a>
                        </div>
                        </Container>
                    </Bottom>
                </Route>
        </Wrapper>
        
        </>
    )
}

const mapStateToProps = state => {
    return {
        token: state.token,
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setToken: (token) => dispatch(setToken(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)