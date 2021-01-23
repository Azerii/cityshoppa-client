import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import arrow_places from '../assets/landing/arrow_places.svg';
import arrow_places_active from '../assets/landing/arrow_places_active.svg';
import green_heart from '../assets/landing/green_heart.svg';

import { getCollection, setFeaturedPlacesData } from '../redux/actions';
import { loadModal, getRandomRange } from '../utils';
import API_HOST from '../utils/config';

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  margin-bottom: 2rem;

  > .caption {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 25%;
    padding-left: 5%;
    // box-shadow: 0px 0px 3px #000000;
    // border-right: 1px solid;
    // background-color: #8fbc8f;
    // border: 1px solid red;

    .heading {
      max-width: 70%;
      font-size: 200%;
      font-weight: 500;
      color: #ff7235;
      margin-bottom: 1rem;
      padding-bottom: 0.5rem;
      // border-bottom: 1px solid;
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
`;

const Track = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  // margin: 2rem 0;
`;

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
    height: 17rem;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    transition: transform ease-out 200ms;

    &:hover {
      transform: scale(1.1);

      .cardText {
        background-color: #ff7235;

        .productName,
        .prompt,
        .buyNow {
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
      height: 50%;
      border: 1px solid #e5e5e5;
      border-bottom: none;
      border-radius: 0.3rem;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      overflow: hidden;

      img {
        width: 100%;
      }
    }

    .cardText {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 50%;
      background-color: #e5e5e5;
      padding: 1.5rem 2rem;
      border-radius: 0.3rem;
      border-top-left-radius: 0;
      border-top-right-radius: 0;

      .productName {
        font-size: 100%;
        font-weight: 500;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
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
        display: ${props => (props.discount ? 'block' : 'none')};
        font-size: 70%;
        color: #000000;
        text-transform: uppercase;
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

      .caption {
        font-size: 50%;
        text-transform: uppercase;
        color: #000000;
      }
    }
  }
`;
// move all these to Landing
function FeaturedPlaces({ products }) {
  const [captions, setCaptions] = useState([]);
  const [currentCaption, setCurrentCaption] = useState({
    heading: 'Shop Local',
    subheading: 'Support and shop with local businesses near you'
  });
  let currentCaptionIndex = useRef(0);
  const [limits, setLimits] = useState(getRandomRange(4, 4));
  const [update, forceUpdate] = useState(23);

  async function fetchCaptions() {
    if (captions.length) return;
    const res = await getCollection('captions');

    if (res) setCaptions(res);
  }

  useEffect(() => {
    fetchCaptions();
    const interval = setInterval(() => {
      if (captions.length) {
        currentCaptionIndex.current =
          (currentCaptionIndex.current + 1) % captions.length;

        setCurrentCaption(captions[currentCaptionIndex.current]);
      }
      forceUpdate((update + 1) % 50);
      products.length && setLimits(getRandomRange(4, products.length));
    }, 10_000);

    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [update]);

  return (
    <>
      <Wrapper>
        <div className="caption">
          {/* <div className='bgImage'></div> */}
          <p className="heading">{currentCaption.heading}</p>
          <p className="subheading">{currentCaption.subheading}</p>
          <p className="charityCaption">
            <img src={green_heart} alt="" />
            We Love Charity
          </p>
        </div>
        <div className="trackWrapper">
          <Track id="track_featured_places">
            {products &&
              products.slice(limits.lower, limits.upper).map(product => (
                <Card
                  key={product.id}
                  discount
                  onClick={() => loadModal('products', product.id)}
                >
                  <div className="inner">
                    <div className="cardImageWrapper">
                      {product.contentImage && (
                        <img
                          src={`${API_HOST.API_HOST}${product.contentImage.url}`}
                          alt=""
                          className="cardimage"
                        />
                      )}
                    </div>
                    <div className="cardText">
                      <p className="productName">{product.name}</p>
                      <div className="bottom">
                        <p className="prompt">
                          Delivered to
                          <br />
                          you today
                        </p>
                        <p className="buyNow">
                          <span>buynow</span>
                          <img className="arrow" src={arrow_places} alt="" />
                          <img
                            className="arrow_active"
                            src={arrow_places_active}
                            alt=""
                          />
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
  );
}

const mapStateToProps = state => {
  return {
    featured_places: state.featured_places
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setFeaturedPlacesData: data => dispatch(setFeaturedPlacesData(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedPlaces);
