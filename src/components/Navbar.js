import React from 'react'
import styled from 'styled-components'

import logo from '../assets/global/logo_nav.svg'
import location_pin from '../assets/navbar/location_black.png'
import search from '../assets/navbar/search.png'
import home from '../assets/navbar/home.svg'
import gifts from '../assets/navbar/gifts.svg'
import food from '../assets/navbar/food.svg'
import fun_chill from '../assets/navbar/fun_chill.svg'
import quick_shop from '../assets/navbar/quick_shop.svg'
import discounts from '../assets/navbar/discounts.svg'

import Container from './Container'

const Wrapper = styled.div`
    padding: 2rem 0;
`

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;

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
            height: 1.5rem;
        }
        
        .hamburger {
            display: block;
            margin-left: 2rem;

            span {
                display: block;
                height: 3px;
                width: 1.5rem;
                margin-bottom: 3px;
                background-color: #000000;
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
            border: 1px solid #000000;
            border-top-left-radius: 0.3rem;
            border-bottom-left-radius: 0.3rem;

            input {
                width: 100%;
                font-size: 90%;
                color: #000000;
            }
        }

        .selectLocation {
            width: 30%;
            padding: 0rem 1rem;
            border: 1px solid #000000;
            border-left: none;
            border-right: none;

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
            background-color: #ff7235;
            border: 1px solid #ff7235;
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
                border: 1px solid #ff7235;
                color: #ff7235;
            }
        }
    }
`

const Bottom = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .inner {
        // width: 60%;
        display: flex;
        align-items: center;
        justify-content: center;

        .item {
            display: flex;
            align-items: center;
            text-decoration: none;
            color: #000000;
            font-size: 100%;
            padding: 0 1rem;

            img {
                height: 1rem;
                margin-right: 0.5rem;
            }
        }
    }
`


function Navbar () {

    // const handleSearch = () => {

    // }

    

    return (
        <>
        <Wrapper>
            <Container>
                <Top>
                    <div className='contentLeft'>
                        <a href='/'><img src={logo} alt='' /></a>
                        <div className='hamburger'>
                            <span></span>
                            <span></span>
                        </div>
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
                        <a href='/sign-in' className='signIn'>
                            Sign In
                        </a>
                        <a href='/sign-up' className='signUp'>
                            Sign Up
                        </a>
                    </div>
                </Top>
                <Bottom>
                    <div className='inner'>
                        <a href='/' className='item'>
                            <img src={home} alt='' />
                            <span>Home</span>
                        </a>
                        <a href='/gifts' className='item'>
                            <img src={gifts} alt='' />
                            <span>Gifts</span>
                        </a>
                        <a href='/food' className='item'>
                            <img src={food} alt='' />
                            <span>Food</span>
                        </a>
                        <a href='/fun-and-chill' className='item'>
                            <img src={fun_chill} alt='' />
                            <span>Fun&amp;Chill</span>
                        </a>
                        <a href='/quick-shop' className='item'>
                            <img src={quick_shop} alt='' />
                            <span>QuickShop</span>
                        </a>
                        <a href='/discounts' className='item'>
                            <img src={discounts} alt='' />
                            <span>Discounts</span>
                        </a>
                    </div>
                </Bottom>
            </Container>
        </Wrapper>
        
        </>
    )
}

export default Navbar