import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import cake from '../assets/landing/cake.png'
import jacket from '../assets/landing/jacket.png'
import chicken from '../assets/landing/chicken.png'
import right_arrow from '../assets/landing/right_arrow.svg'
import left_arrow from '../assets/landing/left_arrow.svg'
import arrow_places from '../assets/landing/arrow_places.svg'
import arrow_places_active from '../assets/landing/arrow_places_active.svg'
import location_orange from '../assets/landing/location_orange.svg'

import { setPlacesData } from '../redux/actions'
import Container from './Container'
import { loadModal } from '../utils'

const MainWrapper = styled.div`
    width: 100vw;
    margin-top: 5rem;
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
        height: 23rem;
        position: relative;
        cursor: pointer;
        overflow: hidden;
        transition: transform ease-out 200ms;

        &:hover {
            transform: scale(1.1);

            .cardText {
                background-color: #ff7235;

                .businessName, .prompt, .buyNow {
                    color: #ffffff !important;
                }

                .buyNow {
                    img {
                        &.arrow_active {
                            display: inline !important;
                        }
                        &.arrow {
                            display: none;
                        }
                    }
                }
            }
        }

        .trendingBadge {
            position: absolute;
            top: 0.5rem;
            left: 1rem;
            height: 2rem;
        }

        .cardImageWrapper {
            height: 55%;
            border: 1px solid #e5e5e5;
            border-bottom: none;
            border-radius: 0.3rem;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            overflow: hidden;

            img {
                width: 100%
            }
        }

        .cardText {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 45%;
            background-color: #e5e5e5;
            padding: 1.5rem 2rem;
            border-radius: 0.3rem;
            border-top-left-radius: 0;
            border-top-right-radius: 0;

            .businessName {
                font-size: 150%;
                font-weight: 500;
            }

            .bottom {
                display: flex;
                justify-content: space-between;
                align-items: center;

                .prompt {
                    font-size: 50%;
                    text-transform: uppercase;
                }

                .buyNow {
                    display: flex;
                    align-items: center;
                    font-size: 60%;
                    font-weight: 500;
                    color: #ff7235;

                    img {
                        height: 0.5rem;
                        margin-left: 0.5rem;

                        &.arrow_active {
                            display: none;
                        }
                    }
                }
            }

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

function Places (props) {

    const initialState = {
        track: null,
        cards: [],
        cardWidth: '272'
    }

    const [state, setState] = useState(initialState)
    const [activeTab, setActiveTab] = useState('all')

    useEffect(() => {
        const card1 = Array.from(document.querySelector('#track_places').children)[0]
        const cards = Array.from(document.querySelector('#track_places').children)
        const cardWidth_px = getCssProperty(card1, 'width')

        setState({
            ...state,
            track: document.querySelector('#track_places'),
            cards,
            cardWidth: (cardWidth_px).slice(0, cardWidth_px.length - 2)
        })

        // eslint-disable-next-line
    }, [])

    return (
        <>
        <MainWrapper>
            {props.header && <Container>
                <Header>
                    <div className='caption'>
                        <div className='textWrapper'>
                            <p className='heading'>Local Business</p>
                            <p className='subheading'>Buy From And Support Businesses Near You</p>
                        </div>
                        <div className='changeCity'>
                            <img src={location_orange} alt='' />
                            <p>Change City</p>
                        </div>
                    </div>
                    <div className='tabNav'>
                        <p className={`item ${activeTab === 'all' ? 'active' : ''}`} onClick={() => {
                            setActiveTab('all')
                        }}>all</p>
                        <p className={`item ${activeTab === 'consumables' ? 'active' : ''}`} onClick={() => {
                            setActiveTab('consumables')
                        }}>consumables</p>
                        <p className={`item ${activeTab === 'gifts' ? 'active' : ''}`} onClick={() => {
                            setActiveTab('gifts')
                        }}>gifts</p>
                        <p className={`item ${activeTab === 'groceries' ? 'active' : ''}`} onClick={() => {
                            setActiveTab('groceries')
                        }}>groceries</p>
                        <p className={`item ${activeTab === 'women' ? 'active' : ''}`}  onClick={() => {
                            setActiveTab('women')
                        }}>women</p>
                        <p className={`item ${activeTab === 'men' ? 'active' : ''}`}  onClick={() => {
                            setActiveTab('men')
                        }}>men</p>
                    </div>
                </Header>
            </Container>}
            <Wrapper>
                {/* <div className='caption'>
                    <p className='heading'>Support<br />Local Business</p>
                    <p className='subheading'>Do Business With Your Commuity<br />Get Special Discount.</p>
                </div> */}
                <div className='trackWrapper'>
                    <Track id='track_places'>
                        <Card discount left={0} onClick={loadModal}>
                            <div className='inner'>
                                <div className='cardImageWrapper'>
                                    <img src={jacket} alt='' className='cardimage' />
                                </div>
                                <div className='cardText'>
                                    <p className='businessName'>Kajees Apparels</p>
                                    <div className='bottom'>
                                        <p className='prompt'>Delivered to<br />you today</p>
                                        <p className='buyNow'>
                                            <span>buynow</span>
                                            <img className='arrow' src={arrow_places} alt='' />
                                            <img className='arrow_active' src={arrow_places_active} alt='' />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <Card discount left={Number(state.cardWidth)} onClick={loadModal}>
                            <div className='inner'>
                                <div className='cardImageWrapper'>
                                    <img src={cake} alt='' className='cardimage' />
                                </div>
                                <div className='cardText'>
                                    <p className='businessName'>Receer Cakes &amp; Pasteries</p>
                                    <div className='bottom'>
                                        <p className='prompt'>Delivered to<br />you today</p>
                                        <p className='buyNow'>
                                            <span>buynow</span>
                                            <img className='arrow' src={arrow_places} alt='' />
                                            <img className='arrow_active' src={arrow_places_active} alt='' />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <Card discount left={Number(state.cardWidth)*2} onClick={loadModal}>
                            <div className='inner'>
                                <div className='cardImageWrapper'>
                                    <img src={jacket} alt='' className='cardimage' />
                                </div>
                                <div className='cardText'>
                                    <p className='businessName'>Kajees Apparels</p>
                                    <div className='bottom'>
                                        <p className='prompt'>Delivered to<br />you today</p>
                                        <p className='buyNow'>
                                            <span>buynow</span>
                                            <img className='arrow' src={arrow_places} alt='' />
                                            <img className='arrow_active' src={arrow_places_active} alt='' />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <Card discount left={Number(state.cardWidth)*3} onClick={loadModal}>
                            <div className='inner'>
                                <div className='cardImageWrapper'>
                                    <img src={chicken} alt='' className='cardimage' />
                                </div>
                                <div className='cardText'>
                                    <p className='businessName'>Mecks Restaurant</p>
                                    <div className='bottom'>
                                        <p className='prompt'>Delivered to<br />you today</p>
                                        <p className='buyNow'>
                                            <span>buynow</span>
                                            <img className='arrow' src={arrow_places} alt='' />
                                            <img className='arrow_active' src={arrow_places_active} alt='' />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <Card discount left={Number(state.cardWidth)*4}  onClick={loadModal}>
                            <div className='inner'>
                                <div className='cardImageWrapper'>
                                    <img src={cake} alt='' className='cardimage' />
                                </div>
                                <div className='cardText'>
                                    <p className='businessName'>Receer Cakes &amp; Pasteries</p>
                                    <div className='bottom'>
                                        <p className='prompt'>Delivered to<br />you today</p>
                                        <p className='buyNow'>
                                            <span>buynow</span>
                                            <img className='arrow' src={arrow_places} alt='' />
                                            <img className='arrow_active' src={arrow_places_active} alt='' />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <Card discount left={Number(state.cardWidth)*5} onClick={loadModal}>
                            <div className='inner'>
                                <div className='cardImageWrapper'>
                                    <img src={chicken} alt='' className='cardimage' />
                                </div>
                                <div className='cardText'>
                                    <p className='businessName'>Mecks Restaurant</p>
                                    <div className='bottom'>
                                        <p className='prompt'>Delivered to<br />you today</p>
                                        <p className='buyNow'>
                                            <span>buynow</span>
                                            <img className='arrow' src={arrow_places} alt='' />
                                            <img className='arrow_active' src={arrow_places_active} alt='' />
                                        </p>
                                    </div>
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
                        const index = (props.places.slide_index - 1) % state.cards.length

                        index >= 0 && goToSlide(track, cardWidth, index, props.setPlacesData)
                    }}>
                        <img src={left_arrow} alt='' />
                    </button>
                    <button className='right' onClick={() => {
                        const track = state.track
                        const cardWidth = state.cardWidth
                        const index = (props.places.slide_index + 1) % state.cards.length

                        Math.abs(index) < (state.cards.length - 3) && goToSlide(track, cardWidth, index, props.setPlacesData)
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
        places: state.places,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setPlacesData: (data) => dispatch(setPlacesData(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Places)