import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import close from '../assets/landing/close.svg'
import product_display_img from '../assets/landing/product_display_img.png'
import service_display_image from '../assets/landing/service_display_img.png'
import mack_ken from '../assets/landing/mack&ken.svg'
import checked_small from '../assets/landing/checked_small.svg'
import location_modal from '../assets/landing/location_modal.svg'

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 23;
    transition: all ease-out 150ms;

    &.close {
        opacity: 0;
        pointer-events: none;
    }
`

const ModalContent = styled.div`
    width: 60%;
    height: 100vh;
    border-radius: 0.3rem;
    background-color: #ffffff;
    overflow: auto;
    position: relative;

    .top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        // background-color: #ffffff;
        padding: 2rem;
        // position: sticky;
        // top: 0;
        // z-index: 234;

        .heading {
            font-size: 200%;
            font-weight: 500;
        }

        .closeIcon {
            height: 1.5rem;
            cursor: pointer;
        }
    }

    .displayCards {
        width: 100%;
        margin: 2rem 0;
        overflow: hidden;

        .track {
            display: flex;
            position: relative;
            height: 20rem;
        }
    }

    .categories {
        display: flex;
        width: 100%;
        padding: 0 2rem;
        margin: 3rem 0;
        font-size: 90%;

        .title {
            color: #666666;
        }

        .category {
            color: #ff7235;
            font-weight: 700;
            margin-left: 1rem;
        }
    }

    .businessLogoWrapper {
        width: 100%;
        padding: 0 2rem;
        margin: 2rem 0;

        .logo {
            height: 4rem;
        }

        p {
            color: #666666;
            font-size: 120%;
        }
    }

    .description {
        width: 100%;
        padding: 0 2rem;
        margin: 1rem 0;

        p {
            font-size: 100%;
            color: #000000;
        }
    }

    .formWrapper {
        padding: 0 2rem;
        margin: 2rem 0;

        .heading {
            color: #ff7235;
            font-size: 120%;
            font-weight: 700;
            margin: 1.5rem 0;
        }

        form {
            width: 70%;

            input {
                display: block;
                width: 100%;
                padding: 1rem;
                border: 1px solid #666666;
                border-radius: 0.3rem;
                margin: 1rem 0;
            }

            textarea {
                display: block;
                width: 100%;
                padding: 1rem;
                border: 1px solid #666666;
                border-radius: 0.3rem;
                margin: 1rem 0;
                resize: none;
                min-height: 6rem;
            }

            .btnWrapper {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                margin: 1rem 0;

                button {
                    padding: 0.8rem 1.5rem;
                    font-size: 100%;
                    color: #ffffff;
                    background-color: #ff7235;
                    border: none;
                    // border-radius: 0.3rem;
                }

                .successMsg {
                    color: #0FD948;
                    font-size: 80%;
                    font-weight: 500;
                    text-transform: capitalize;

                    img {
                        height: 0.8rem;
                        margin-left: 0.5rem;
                    }
                }
            }
        }
    }

    .contactDetails {
        margin: 3rem 0;
        padding: 0 2rem;
        font-size: 100%;

        .heading {
            color: #ff7235;
            margin: 1rem 0;
            font-size: 120%;    
        }

        .item {
            margin: 1rem 0;

            .title {
                color: #666666;
            }

            .content {
                color: #000000;

                &.bold {
                    font-weight: 500;
                }
            }
        }
    }

    .getDirections {
        display: flex;
        align-items: center;
        margin: 2rem 0;
        padding: 0 2rem;

        a {
            color: #ff7235;
            font-size: 100%;
            text-transform: capitalize;
        }

        img {
            height: 1rem;
            margin-left: 0.5rem;
        }
    }
`

const Card = styled.div`
    min-width: fit-content;
    height: inherit;
    padding-left: 2rem;
    // position: absolute;
    border-radius: 1rem;
    // left: ${props => props.left}px;
    overflow: hidden;

    img {
        height: 100%;
    }
`

const getCssProperty = (el, property) => {
    return window.getComputedStyle(el,null).getPropertyValue(property);
}

const goToSlide = (track, cardWidth, index, fn) => {

    track.style.transform = `translateX(-${index >= 0 ? cardWidth * Number(index) : cardWidth * Number(index*(-1))}px)`

    fn({
        slide_index: index
    })
}

function Modal (props) {

    const [state, setState] = useState({
        track: null,
        cards: [],
        cardWidth: 530
    })

    useEffect(() => {
        const card1 = Array.from(document.querySelector('#track_modal').children)[0]
        const cards = Array.from(document.querySelector('#track_modal').children)
        const cardWidth_px = getCssProperty(card1, 'width')

        setState({
            ...state,
            track: document.querySelector('#track_modal'),
            cards,
            cardWidth: (cardWidth_px).slice(0, cardWidth_px.length - 2)
        })

        // eslint-disable-next-line
    }, [])

    return (
        <Wrapper id='modalWrapper' className='close' onClick={(e) => {
            if(e.target.id === 'modalWrapper') {
                e.target.classList.add('close')
            }
        }}>
            <ModalContent>
                <div className='top'>
                    <p className='heading'>Wheat Cookie</p>
                    <img className='closeIcon' src={close} alt='' onClick={() => {
                        document.querySelector('#modalWrapper').classList.add('close')
                    }}/>
                </div>
                <div className='displayCards' >
                    <div id='track_modal' className='track'>
                        <Card left={0}>
                            <img src={product_display_img} />
                        </Card>
                        <Card left={state.cardWidth}>
                            <img src={product_display_img} />
                        </Card>
                    </div>
                </div>
                <div className='categories'>
                    <p className='title'>Category</p>
                    <p className='category'>Food</p>
                </div>
                <div className='businessLogoWrapper'>
                    <img src={mack_ken} alt='' />
                    <p>Store</p>
                </div>
                <div className='description'>
                    <p>For the purposes of auth, a JWT is a token that is issued by the server. The token has a JSON payload that contains information specific to the user. This token can be used by clients when talking to APIs (by sending it along as an HTTP header) so that the APIs can identify the user represented by the token, and take user specific action.</p>
                </div>
                <div className='formWrapper'>
                    <p className='heading'>Contact Vendor</p>
                    <form>
                        <input type='text' id='full_name' name='name' placeholder='full name' required/>
                        <input type='email' id='email' name='email' placeholder='e-mail' required/>
                        <input type='text' id='address' name='address' placeholder='address' />
                        <textarea id='message' name='message' placeholder='Message' required/>
                        <div className='btnWrapper'>
                            <button type='submit'>
                                Send
                            </button>
                            {/* <p className='successMsg'>
                                message sent
                                <img src={checked_small} alt='' />
                            </p> */}
                        </div>
                    </form>
                </div>
                <div className='contactDetails'>
                    <p className='heading'>Vendor Info</p>

                    <div className='item'>
                        <p className='title'>Locally UK Shop Front</p>
                        <p className='content bold'>Pettits of Wallingford</p>
                    </div>
                    <div className='item'>
                        <p className='title'>Address</p>
                        <p className='content'>35 St Martin's Street, Wallingford, OX10 0ED, United Kingdom (UK), Oxfordshire</p>
                    </div>
                    <div className='item'>
                        <p className='title'>Phone</p>
                        <a href='tel:01491835253' className='content'>01491 835253</a>
                    </div>
                    <div className='item'>
                        <p className='title'>About</p>
                        <p className='content'>Situated in the market town of Wallingford in Oxfordshire, Pettits was established on 6th March 1856 by Mr William.</p>
                    </div>
                </div>
                <div className='getDirections'>
                    <a href='/'>get directions via google maps</a>
                    <img src={location_modal} alt='' />
                </div>
            </ModalContent>
        </Wrapper>
    )
}

export default Modal