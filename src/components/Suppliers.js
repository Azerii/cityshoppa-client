import React from 'react'
import styled from 'styled-components'
import arrow_places from '../assets/landing/arrow_places.svg'
import Container from './Container'

const Wrapper = styled.div`
    padding: 7rem 0;
    background-color: #F3F4F4;
`

const Header = styled.div`
    .caption {
        display: flex;
        justify-content: center;
    
        .textWrapper {
            margin-right: 5rem;

            .heading {
                font-size: 200%;
                font-weight: 500;
            }

            .subheading {
                font-size: 120%;
            }
        }
    }
`

const Shops = styled.div`
    display: flex;
    align-items: center;
    width: 70%;
    margin: 3rem auto;
    
    .item {
        display: flex;
        align-items: center;
        width: 50%;
        cursor: pointer;

        .imgWrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 7rem;
            width: 7rem;
            overflow: hidden;

            img {
                width: 100%;
            }
        }

        .textWrapper {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding-left: 2rem;

            .title {
                font-size: 100%;
                font-weight: 500;
            }

            .subtitle {
                font-size: 90%;
                margin: 0.3rem 0;
                max-width: 70%;

            }

            .contact {
                display: flex;
                align-items: center;
                font-size: 80%;
                text-transform: capitalize;
                color: #ff7235;

                img {
                    height: 0.5rem;
                    margin-left: 0.5rem;
                }
            }
        }
    }
`

function Suppliers () {


    return (
        <Wrapper>
            <Container>
                <Header>
                    <div className='caption'>
                        <div className='textWrapper'>
                            <p className='heading'>Your Local Shops &amp; Suppliers</p>
                        </div>
                    </div>
                </Header>
                <Shops>
                    <div className='item'>
                        <div className='imgWrapper'>
                            <img src={'https://images.unsplash.com/photo-1467139840664-96b244a66825?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cmVwYWlyc3xlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'} alt='' />
                        </div>
                        <div className='textWrapper'>
                            <p className='title'>iFixit</p>
                            <p className='subtitle'>fix issues at home from plumbling to open cielings</p>
                            <p className='contact'>
                                contact
                                <img src={arrow_places} alt='' />
                            </p>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='imgWrapper'>
                            <img src={'https://images.unsplash.com/photo-1589269806214-714118a4c0d6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzZ8fHRyYW5zcG9ydHxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'} alt='' />
                        </div>
                        <div className='textWrapper'>
                            <p className='title'>Q-Logistics</p>
                            <p className='subtitle'>Quick delivery all day every day</p>
                            <p className='contact'>
                                contact
                                <img src={arrow_places} alt='' />
                            </p>
                        </div>
                    </div>
                </Shops>
            </Container>
        </Wrapper>
    )
}

export default Suppliers