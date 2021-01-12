import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import cake from '../assets/landing/cake.png'
import jacket from '../assets/landing/jacket.png'
import chicken from '../assets/landing/chicken.png'
// import right_arrow from '../assets/landing/right_arrow.svg'
// import left_arrow from '../assets/landing/left_arrow.svg'
import arrow_places from '../assets/landing/arrow_places.svg'
import arrow_places_active from '../assets/landing/arrow_places_active.svg'

import { setFeaturedPlacesData } from '../redux/actions'
import { loadModal } from '../utils'

const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    margin-bottom: 2rem;

    >.caption {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        width: 30%;
        padding-left: 5%;
        
        .heading {
            max-width: 90%;
            font-size: 350%;
            font-weight: 500;
            color: #000000;
            margin-bottom: 1rem;
        }

        .subheading {
            max-width: 80%;
            font-size: 100%;
            color: #000000;
        }
    }

    .trackWrapper {
        width: 70%;
    }
`

const Track = styled.div`
    display: flex;
    position: relative;
    margin: 2rem 0;
`

const Card = styled.a`
    display: block;
    width: 25%;
    padding: 0 1rem;

    &:visited {
        color: inherit;
    }

    .inner {
        display: flex;
        flex-direction: column;
        // justify-content: space-between;
        width: 100%;
        height: 17rem;
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
                font-size: 100%;
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

function FeaturedPlaces (props) {

    return (
        <>
        <Wrapper>
            <div className='caption'>
                <p className='heading'>Shop Local Business</p>
                <p className='subheading'>Support and shop with local businesses near you</p>
            </div>
            <div className='trackWrapper'>
                <Track id='track_featured_places'>
                    <Card discount onClick={loadModal}>
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
                    <Card discount onClick={loadModal}>
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
                    <Card discount onClick={loadModal}>
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
                    <Card discount onClick={loadModal}>
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
                <Track id='track_featured_places'>
                    <Card discount onClick={loadModal}>
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
                    <Card discount onClick={loadModal}>
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
                    <Card discount onClick={loadModal}>
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
                    <Card discount onClick={loadModal}>
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
        </>
    )
}

const mapStateToProps = state => {
    return {
        featured_places: state.featured_places,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setFeaturedPlacesData: (data) => dispatch(setFeaturedPlacesData(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedPlaces)