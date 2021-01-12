import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import trending_badge from '../assets/landing/trending_badge.svg'
import airmax from '../assets/landing/airmax.png'
import jacket from '../assets/landing/jacket.png'
import xmas_tree from '../assets/landing/xmas_tree.png'
import right_arrow from '../assets/landing/right_arrow.svg'
import left_arrow from '../assets/landing/left_arrow.svg'
import { setTrendingProductsData } from '../redux/actions'
import { loadModal } from '../utils'

const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    min-height: 20rem;
    margin-top: 5rem;
    overflow-x: hidden;

    >.caption {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        width: 30%;
        padding-left: 5%;
        
        .heading {
            font-size: 200%;
            font-weight: 500;
            color: #ff7235;
            margin-bottom: 1rem;
        }

        .subheading {
            font-size: 100%;
            color: #000000;
        }
    }

    .trackWrapper {
        width: 70%;
        overflow: hidden;
    }
`

const Track = styled.ul`
    display: flex;
    position: relative;
    list-style: none;
    transition: transform ease-in 200ms;
`

const Card = styled.li`
    padding: 0 0.5rem;
    position: absolute;
    left: ${props => props.left ? props.left : '0'}px;

    .inner {
        display: flex;
        flex-direction: column;
        // justify-content: space-between;
        width: 15rem;
        height: 20rem;
        padding: 1rem 2rem;
        border: 1px solid #e5e5e5;
        border-radius: 0.3rem;
        position: relative;
        overflow: hidden;
        cursor: pointer;
        transition: all ease-out 200ms;

        &:hover {
            box-shadow: 0px 0px 10px #e5e5e5;
        }

        .trendingBadge {
            position: absolute;
            top: 0.5rem;
            left: 1rem;
            height: 2rem;
        }

        .cardImageWrapper {
            height: 80%;
            overflow: hidden;

            img {
                width: 100%
            }
        }

        .cardText {
            height: 20%;
            padding-top: 1rem;

            .discount {
                display: ${props => props.discount ? 'block' : 'none'};
                font-size: 70%;
                color: #000000;
                text-transform: uppercase;
            }

            .caption {
                font-size: 50%;
                text-transform: uppercase;
                color: #000000;
            }
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

function Trending (props) {

    const initialState = {
        track: null,
        cards: [],
        cardWidth: '272'
    }

    const [state, setState] = useState(initialState)

    useEffect(() => {
        const card1 = Array.from(document.querySelector('#track_trending').children)[0]
        const cards = Array.from(document.querySelector('#track_trending').children)
        const cardWidth_px = getCssProperty(card1, 'width')

        setState({
            ...state,
            track: document.querySelector('#track_trending'),
            cards,
            cardWidth: (cardWidth_px).slice(0, cardWidth_px.length - 2)
        })

        props.setTrendingProductsData({
            slide_index: 0
        })

        // eslint-disable-next-line
    }, [])

    return (
        <>
        <Wrapper>
            <div className='caption'>
                <p className='heading'>Support<br />Local Business</p>
                <p className='subheading'>Do Business With Your Commuity<br />Get Special Discount.</p>
            </div>
            <div className='trackWrapper'>
                <Track id='track_trending'>
                    <Card discount left={0} onClick={loadModal}>
                        <div className='inner'>
                            <img src={trending_badge} alt='' className='trendingBadge' />
                            <div className='cardImageWrapper'>
                                <img src={airmax} alt='' className='cardimage' />
                            </div>
                            <div className='cardText'>
                                <p className='discount'>Buy Now 20% off</p>
                                <p className='caption'>Delivered to you today</p>
                            </div>
                        </div>
                    </Card>
                    <Card discount left={Number(state.cardWidth)} onClick={loadModal}>
                        <div className='inner'>
                            <img src={trending_badge} alt='' className='trendingBadge' />
                            <div className='cardImageWrapper'>
                                <img src={jacket} alt='' className='cardimage' />
                            </div>
                            <div className='cardText'>
                                <p className='discount'>Buy Now 20% off</p>
                                <p className='caption'>Delivered to you today</p>
                            </div>
                        </div>
                    </Card>
                    <Card discount left={Number(state.cardWidth)*2} onClick={loadModal}>
                        <div className='inner'>
                            <img src={trending_badge} alt='' className='trendingBadge' />
                            <div className='cardImageWrapper'>
                                <img src={xmas_tree} alt='' className='cardimage' />
                            </div>
                            <div className='cardText'>
                                <p className='discount'>Buy Now 20% off</p>
                                <p className='caption'>Delivered to you today</p>
                            </div>
                        </div>
                    </Card>
                    <Card discount left={Number(state.cardWidth)*3} onClick={loadModal}>
                        <div className='inner'>
                            <img src={trending_badge} alt='' className='trendingBadge' />
                            <div className='cardImageWrapper'>
                                <img src={airmax} alt='' className='cardimage' />
                            </div>
                            <div className='cardText'>
                                <p className='discount'>Buy Now 20% off</p>
                                <p className='caption'>Delivered to you today</p>
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
                    const index = (props.trending_products.slide_index - 1) % state.cards.length

                    index >= 0 && goToSlide(track, cardWidth, index, props.setTrendingProductsData)
                }}>
                    <img src={left_arrow} alt='' />
                </button>
                <button className='right' onClick={() => {
                    const track = state.track
                    const cardWidth = state.cardWidth
                    const index = (props.trending_products.slide_index + 1) % state.cards.length

                    Math.abs(index) < (state.cards.length - 2) && goToSlide(track, cardWidth, index, props.setTrendingProductsData)
                }}>
                    <img src={right_arrow} alt='' />
                </button>
            </div>
        </TrackNav>
        </>
    )
}

const mapStateToProps = state => {
    return {
        trending_products: state.trending_products,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setTrendingProductsData: (data) => dispatch(setTrendingProductsData(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Trending)