import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { setFeaturedProductsData } from '../redux/actions'

import featured_badge from '../assets/landing/featured.svg'
import mack_ken from '../assets/landing/mack&ken.svg'
import right_arrow from '../assets/landing/right_arrow.svg'
import cookies_img from '../assets/landing/cookies.svg'

const Wrapper = styled.div`
    width: 100%;
    margin: 5rem 0;
    position: relative;
    overflow: hidden;
`

const Track = styled.ul`
    // display: flex;
    position: relative;
    width: 100%;
    list-style: none;
    min-height: 20rem;
    transition: all ease-in 500ms;
`

const Slide = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    background-color: ${props => props.bg || 'transparent'};
    height: 100%;
    width: 100%;
    left: ${props => props.left || 0}px;

    div {
        display: flex;
        flex-direction: column;
        height: 100%;
        
        &.contentLeft {
            algin-items: flex-start;
            justify-content: flex-end;
            width: 30%;

            .featuredBadge {
                width: 60%;
                margin-bottom: 1rem;
            }
            .business {
                width: 70%;
                margin-bottom: 2rem;
            }
        }

        &.contentCenter {
            overflow: hidden;
            width: 50%;

            img {
                height: 100%;
                width: auto;
                transform: translateX(-25%) scale(2.0);
            }
        }

        &.contentRight {
            justify-content: center;
            width: 20%;

            a {
                display: flex;
                align-items: center;
                width: fit-content;
                padding: 1rem;
                color: #ffffff;
                background-color: #ff7235;

                img {
                    height: 1.5rem;
                    margin-left: 1rem;
                }
            }
        }
    }
`

const Indicators = styled.ol`
    display: flex;
    align-items: center;
    // height: 2rem;
    // background-color: black;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    list-style: none;
    z-index: 5;

    li {
        height: 0.5rem;
        width: 0.5rem;
        border-radius: 50%;
        background-color: #c4c4c4;
        display: block;
        margin: 0 0.3rem;
        cursor: pointer;

        &.active {
            background-color: #ff7235;
        }
    }
`

// const setSlidePosition = (slide, slideWidth, index) => {
//     slide.style.left = `${slideWidth*index}px`
// }

const getCssProperty = (el, property) => {
    return window.getComputedStyle(el,null).getPropertyValue(property);
 }

const goToSlide = (track, current, target) => {
    const targetSlideWidth = getCssProperty(target, 'left')

    track.style.transform = `translateX(-${targetSlideWidth})`
    current && current.classList.remove('active')
    target && target.classList.add('active')
}

const updateIndicators = (current, target) => {
    current && current.classList.remove('active')
    target && target.classList.add('active')
}


function Featured (props) {

    const initialState = {
        track: null,
        slides: [],
        slideWidth: 0,
        indicatorNav: null,
        indicators: [],
    }

    const [state, setState] = useState(initialState)
    const [currentIndex, setCurrentIndex] = useState(0)

    const slideShow = () => {
        // console.log(currentIndex)
        const track = document.querySelector('#track_featured')
        const indicatorNav = document.querySelector('#indicatorNav_featured')
        const currentIndicator = indicatorNav.querySelector('.active')
        const currentSlide = track.querySelector('.active')
        const slides = Array.from(document.querySelector('#track_featured').children)
        const indicators = Array.from(document.querySelector('#indicatorNav_featured').children)
        const targetIndex = props.featured_products.index
    
        const targetSlide = slides[targetIndex]
        const targetIndicator = indicators[targetIndex]
    
        goToSlide(track, currentSlide, targetSlide)
        updateIndicators(currentIndicator, targetIndicator)
    
        props.setFeaturedProductsData({
            index: (targetIndex + 1) % slides.length
        })

        setCurrentIndex(props.featured_products.index)
    }

    useEffect(() => {
        setState({
            ...state,
            track: document.querySelector('#track_featured'),
            slides: Array.from(document.querySelector('#track_featured').children),
            slideWidth: Array.from(document.querySelector('#track_featured').children)[0].getBoundingClientRect().width,
            indicatorNav: document.querySelector('#indicatorNav_featured'),
            indicators: Array.from(document.querySelector('#indicatorNav_featured').children),
        })

        // const interval = setInterval(() => {
        //     slideShow();
        // }, 5000);

        // return () => clearInterval(interval);

        // eslint-disable-next-line
    }, [currentIndex])

    return (
        <Wrapper>
            <Track id='track_featured'>
                <Slide left={0}>
                    <div className='contentLeft'>
                        <img className='featuredBadge' src={featured_badge} alt='' />
                        <img className='business' src={mack_ken} alt='' />
                    </div>
                    <div className='contentCenter'>
                        <img src={cookies_img} alt='' />
                    </div>
                    <div className='contentRight'>
                        <a className='buyNow' href='/'>
                            13$ Buy Now
                            <img src={right_arrow} alt='' />
                        </a>
                    </div>
                </Slide>
                <Slide bg='darkslateblue' left={state.slideWidth}></Slide>
                <Slide bg='darkslategrey' left={state.slideWidth*2}></Slide>
                <Slide bg='burlywood' left={state.slideWidth*3}></Slide>
            </Track>
            <Indicators id='indicatorNav_featured'>
                <li className='active' onClick={(e) => {
                    const currentIndicator = state.indicatorNav.querySelector('.active')
                    const currentSlide = state.track.querySelector('.active')
                    const targetIndex = state.indicators.findIndex(indicator => indicator === e.target)
                    const targetSlide = state.slides[targetIndex]

                    goToSlide(state.track, currentSlide, targetSlide)
                    updateIndicators(currentIndicator, e.target)
                    props.setFeaturedProductsData({
                        index: targetIndex
                    })
                }}></li>
                <li onClick={(e) => {
                    const currentIndicator = state.indicatorNav.querySelector('.active')
                    const currentSlide = state.track.querySelector('.active')
                    const targetIndex = state.indicators.findIndex(indicator => indicator === e.target)
                    const targetSlide = state.slides[targetIndex]

                    goToSlide(state.track, currentSlide, targetSlide)
                    updateIndicators(currentIndicator, e.target)
                    props.setFeaturedProductsData({
                        index: targetIndex
                    })
                }}></li>
                <li onClick={(e) => {
                    const currentIndicator = state.indicatorNav.querySelector('.active')
                    const currentSlide = state.track.querySelector('.active')
                    const targetIndex = state.indicators.findIndex(indicator => indicator === e.target)
                    const targetSlide = state.slides[targetIndex]

                    goToSlide(state.track, currentSlide, targetSlide)
                    updateIndicators(currentIndicator, e.target)
                    props.setFeaturedProductsData({
                        index: targetIndex
                    })
                }}></li>
                <li onClick={(e) => {
                    const currentIndicator = state.indicatorNav.querySelector('.active')
                    const currentSlide = state.track.querySelector('.active')
                    const targetIndex = state.indicators.findIndex(indicator => indicator === e.target)
                    const targetSlide = state.slides[targetIndex]

                    goToSlide(state.track, currentSlide, targetSlide)
                    updateIndicators(currentIndicator, e.target)
                    props.setFeaturedProductsData({
                        index: targetIndex
                    })
                }}></li>
            </Indicators>
        </Wrapper>
    )
}

const mapStateToProps = state => {
    return {
        featured_products: state.featured_products,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setFeaturedProductsData: (data) => dispatch(setFeaturedProductsData(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Featured)