import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import arrow_places from '../assets/landing/arrow_places.svg'
import arrow_places_active from '../assets/landing/arrow_places_active.svg'
import green_heart from '../assets/landing/green_heart.svg'

import { setFeaturedPlacesData } from '../redux/actions'
import { loadModal, dummyData, getRandomRange } from '../utils'

const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    margin-bottom: 2rem;

    >.caption {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        width: 25%;
        padding-left: 5%;
        // border: 1px solid red;
        
        .heading {
            max-width: 90%;
            font-size: 350%;
            font-weight: 500;
            color: #000000;
            margin-bottom: 1rem;
            z-index: 10;
        }

        .subheading {
            max-width: 80%;
            font-size: 100%;
            color: #000000;
            z-index: 10;
        }

        .charityCaption {
            display: flex;
            align-items: center;
            font-size: 100%;
            margin-top: 2rem;

            img {
                height: 2rem;
                margin-right: 0.7rem;
            }
        }
    }

    .bgImage {
        position: absolute;
        top: 0;
        left: 0;
        background-image: url(https://source.unsplash.com/collection/1198620/500x900);
        filter: blur(5px);
        height: 100%;
        width: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: 1;
    }

    .trackWrapper {
        width: 75%;
    }
`

const Track = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: relative;
    // margin: 2rem 0;
`

const Card = styled.a`
    display: block;
    width: 25%;
    padding: 1rem;

    &:visited {
        color: inherit;
    }

    .inner {
        display: flex;
        flex-direction: column;
        // justify-content: space-between;
        width: 100%;
        height: 19rem;
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

    const [products] = useState(dummyData.products)
    const [limits, setLimits] = useState(getRandomRange(8, products.length))

    useEffect(() => {
        const interval = setInterval(() => {
            setLimits(getRandomRange(8, products.length))
        }, 30_000);

        return () => clearInterval(interval);
        // eslint-disable-next-line
    }, [])

    return (
        <>
        <Wrapper>
            <div className='caption'>
                {/* <div className='bgImage'></div> */}
                <p className='heading'>Shop Local</p>
                <p className='subheading'>Support and shop with local businesses near you</p>
                <p className='charityCaption'>
                    <img src={green_heart} alt='' />
                    We Love Charity
                </p>
            </div>
            <div className='trackWrapper'>
                <Track id='track_featured_places'>
                    {products.slice(limits.lower, limits.upper).map((product) => (
                        <Card key={product.id} discount onClick={loadModal}>
                            <div className='inner'>
                                <div className='cardImageWrapper'>
                                    <img src={product.contentImage} alt='' className='cardimage' />
                                </div>
                                <div className='cardText'>
                                    <p className='businessName'>{product.business}</p>
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
                    ))}
                    
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