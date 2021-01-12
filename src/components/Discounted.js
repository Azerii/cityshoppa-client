import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import burger_king from '../assets/landing/burger_king.png'
import burger_king_logo from '../assets/landing/burger_king_logo.png'
import sg from '../assets/landing/sg.png'
import sg_logo from '../assets/landing/sg_logo.png'
import starbucks from '../assets/landing/starbucks.png'
import starbucks_logo from '../assets/landing/starbucks_logo.png'
import right_arrow from '../assets/landing/right_arrow.svg'
import left_arrow from '../assets/landing/left_arrow.svg'

import { setDiscountedData } from '../redux/actions'
import Container from './Container'
import { loadModal } from '../utils'

const MainWrapper = styled.div`
    width: 100vw;
    margin-bottom: 5rem;
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
    
        .changeCity {
            display: flex;
            align-items: flex-end;
            cursor: pointer;

            img {
                margin-right: 0.5rem;
                height: 1.5rem;
            }

            p {
                font-size: 120%;
                color: #ff7235;
            }
        }
    }

    .tabNav {
        display: flex;
        justify-content: center;
        margin: 3rem 0;

        .item {
            font-size: 90%;
            text-transform: uppercase;
            margin: 0 1.5rem;
            color: #000000;
            font-weight: 500;
            cursor: pointer;
            transition: all ease-out 200ms;

            &.active, &:hover {
                color: #ff7235;
            }
        }
    }
    
`

const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    overflow-x: hidden;

    .trackWrapper {
        width: 100%;
        overflow-x: hidden;
    }
`

const Track = styled.div`
    display: flex;
    position: relative;
    min-height: 30rem;
    // transform: translateX(5%);
    transition: transform ease-in 200ms;
`

const Card = styled.a`
    display: block;
    padding: 0 1rem;
    position: absolute;
    left: ${props => props.left ? props.left : '0'}px;
    top: 50%;
    transform: translateY(-50%);

    &:visited {
        color: inherit;
    }

    .inner {
        display: flex;
        flex-direction: column;
        // justify-content: space-between;
        width: 15rem;
        height: 27rem;
        position: relative;
        cursor: pointer;
        transition: transform ease-out 200ms;

        .cardLogoWrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 30%;

            img {
                height: 3rem;
            }
        }

        .cardImageWrapper {
            height: 70%;
            border-radius: 0.3rem;
            overflow: hidden;
            transition: transform ease-out 200ms;

            &:hover {
                transform: scale(1.1);
            }

            img {
                width: 100%
            }
        }

        .discountBadge {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            bottom: 1rem;
            right: -1rem;
            height: 3rem;
            width: 3rem;
            border-radius: 50%;
            background-color: #ff7235;
            color: #ffffff;
            font-size: 70%;
            font-weight: 500;
        }
    }
`

const TrackNav = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 2rem 0;

    .btnWrapper {
        display: flex;
        align-items: center;
        width: fit-content;
        background-color: #ff7235;
        margin-right: 7rem;

        button {
            padding: 1rem;
            background-color: transparent;
            border: none;

            &:hover {
                filter: brightness(1.2);
            }

            img {
                height: 1rem;
            }

            &.left {
                padding-right: 0.5rem;
            }

            &.right {
                padding-left: 0.5rem;
            }
        }
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

function Discounted (props) {

    const initialState = {
        track: null,
        cards: [],
        cardWidth: '272'
    }

    const [state, setState] = useState(initialState)

    useEffect(() => {
        const card1 = Array.from(document.querySelector('#track_discounted').children)[0]
        const cards = Array.from(document.querySelector('#track_discounted').children)
        const cardWidth_px = getCssProperty(card1, 'width')

        setState({
            ...state,
            track: document.querySelector('#track_discounted'),
            cards,
            cardWidth: (cardWidth_px).slice(0, cardWidth_px.length - 2)
        })

        // eslint-disable-next-line
    }, [])

    return (
        <>
        <MainWrapper>
            <Container>
                <Header>
                    <div className='caption'>
                        <div className='textWrapper'>
                            <p className='heading'>Get Discounts</p>
                            <p className='subheading'>On Your Most Popular Can't Do Without Brands</p>
                        </div>
                    </div>
                </Header>
            </Container>
            <Wrapper>
                {/* <div className='caption'>
                    <p className='heading'>Support<br />Local Business</p>
                    <p className='subheading'>Do Business With Your Commuity<br />Get Special Discount.</p>
                </div> */}
                <div className='trackWrapper'>
                    <Track id='track_discounted'>
                        <Card discount left={0} onClick={loadModal}>
                            <div className='inner'>
                                <div className='cardLogoWrapper'>
                                    <img src={burger_king_logo} alt='' />
                                </div>
                                <div className='cardImageWrapper'>
                                    <img src={burger_king} alt='' />
                                </div>
                                <div className='discountBadge'>
                                    <p>20%<br />off</p>
                                </div>
                            </div>
                        </Card>
                        <Card discount left={Number(state.cardWidth)} onClick={loadModal}>
                            <div className='inner'>
                                <div className='cardLogoWrapper'>
                                    <img src={sg_logo} alt='' />
                                </div>
                                <div className='cardImageWrapper'>
                                    <img src={sg} alt='' />
                                </div>
                                <div className='discountBadge'>
                                    <p>20%<br />off</p>
                                </div>
                            </div>
                        </Card>
                        <Card discount left={Number(state.cardWidth)*2} onClick={loadModal}>
                            <div className='inner'>
                                <div className='cardLogoWrapper'>
                                    <img src={starbucks_logo} alt='' />
                                </div>
                                <div className='cardImageWrapper'>
                                    <img src={starbucks} alt='' />
                                </div>
                                <div className='discountBadge'>
                                    <p>20%<br />off</p>
                                </div>
                            </div>
                        </Card>
                        <Card discount left={Number(state.cardWidth)*3} onClick={loadModal}>
                            <div className='inner'>
                                <div className='cardLogoWrapper'>
                                    <img src={burger_king_logo} alt='' />
                                </div>
                                <div className='cardImageWrapper'>
                                    <img src={burger_king} alt='' />
                                </div>
                                <div className='discountBadge'>
                                    <p>20%<br />off</p>
                                </div>
                            </div>
                        </Card>
                        <Card discount left={Number(state.cardWidth)*4} onClick={loadModal}>
                            <div className='inner'>
                                <div className='cardLogoWrapper'>
                                    <img src={sg_logo} alt='' />
                                </div>
                                <div className='cardImageWrapper'>
                                    <img src={sg} alt='' />
                                </div>
                                <div className='discountBadge'>
                                    <p>20%<br />off</p>
                                </div>
                            </div>
                        </Card>
                        <Card discount left={Number(state.cardWidth)*5} onClick={loadModal}>
                            <div className='inner'>
                                <div className='cardLogoWrapper'>
                                    <img src={starbucks_logo} alt='' />
                                </div>
                                <div className='cardImageWrapper'>
                                    <img src={starbucks} alt='' />
                                </div>
                                <div className='discountBadge'>
                                    <p>20%<br />off</p>
                                </div>
                            </div>
                        </Card>
                    </Track>
                </div>
            </Wrapper>
            <TrackNav>
                <div className='btnWrapper'>
                    <button className='left' onClick={() => {
                        const track = state.track
                        const cardWidth = state.cardWidth
                        const index = (props.discounted.slide_index - 1) % state.cards.length

                        index >= 0 && goToSlide(track, cardWidth, index, props.setDiscountedData)
                    }}>
                        <img src={left_arrow} alt='' />
                    </button>
                    <button className='right' onClick={() => {
                        const track = state.track
                        const cardWidth = state.cardWidth
                        const index = (props.discounted.slide_index + 1) % state.cards.length

                        Math.abs(index) < (state.cards.length - 3) && goToSlide(track, cardWidth, index, props.setDiscountedData)
                    }}>
                        <img src={right_arrow} alt='' />
                    </button>
                </div>
            </TrackNav>
        </MainWrapper>
        </>
    )
}

const mapStateToProps = state => {
    return {
        discounted: state.discounted,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setDiscountedData: (data) => dispatch(setDiscountedData(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Discounted)