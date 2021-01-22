import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import trending_badge from '../assets/landing/trending_badge.svg';
import airmax from '../assets/landing/airmax.png';
import jacket from '../assets/landing/jacket.png';
import xmas_tree from '../assets/landing/xmas_tree.png';
import right_arrow from '../assets/landing/right_arrow.svg';
import left_arrow from '../assets/landing/left_arrow.svg';
import getCollection, { setTrendingProductsData } from '../redux/actions';
import { loadModal } from '../utils';

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  margin-top: 5rem;
  overflow-x: hidden;

  > .caption {
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
`;

const Track = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style: none;
  transition: transform ease-in 200ms;
`;

const Card = styled.li`
  padding: 0 0.5rem;
  width: 25%;

  .inner {
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
    width: 100%;
    height: 17rem;
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
        width: 100%;
      }
    }

    .cardText {
      height: 20%;
      padding-top: 1rem;

      .discount {
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
`;

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
`;

const getCssProperty = (el, property) => {
  return window.getComputedStyle(el, null).getPropertyValue(property);
};

const goToSlide = (track, slideWidth, index, fn) => {
  track.style.transform = `translateX(-${Number(slideWidth) *
    Number(index)}px)`;

  fn({
    slide_index: index
  });
};

function Trending(props) {
  const [track, setTrack] = useState(null);

  useEffect(() => {
    setTrack(document.querySelector('#track_trending'));

    props.setTrendingProductsData({
      slide_index: 0
    });

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Wrapper>
        <div className="caption">
          <p className="heading">
            See What's
            <br />
            Trending
          </p>
          <p className="subheading">
            Do Business With Your Commuity
            <br />
            Get Special Discounts.
          </p>
        </div>
        <div className="trackWrapper">
          <Track id="track_trending">
            <Card onClick={() => loadModal('products')}>
              <div className="inner">
                <img src={trending_badge} alt="" className="trendingBadge" />
                <div className="cardImageWrapper">
                  <img src={airmax} alt="" className="cardimage" />
                </div>
                <div className="cardText">
                  <p className="discount">Buy Now 20% off</p>
                  <p className="caption">Delivered to you today</p>
                </div>
              </div>
            </Card>
            <Card onClick={() => loadModal('products')}>
              <div className="inner">
                <img src={trending_badge} alt="" className="trendingBadge" />
                <div className="cardImageWrapper">
                  <img src={jacket} alt="" className="cardimage" />
                </div>
                <div className="cardText">
                  <p className="discount">Buy Now 20% off</p>
                  <p className="caption">Delivered to you today</p>
                </div>
              </div>
            </Card>
            <Card onClick={() => loadModal('products')}>
              <div className="inner">
                <img src={trending_badge} alt="" className="trendingBadge" />
                <div className="cardImageWrapper">
                  <img src={xmas_tree} alt="" className="cardimage" />
                </div>
                <div className="cardText">
                  <p className="discount">Buy Now 20% off</p>
                  <p className="caption">Delivered to you today</p>
                </div>
              </div>
            </Card>
            <Card onClick={() => loadModal('products')}>
              <div className="inner">
                <img src={trending_badge} alt="" className="trendingBadge" />
                <div className="cardImageWrapper">
                  <img src={airmax} alt="" className="cardimage" />
                </div>
                <div className="cardText">
                  <p className="discount">Buy Now 20% off</p>
                  <p className="caption">Delivered to you today</p>
                </div>
              </div>
            </Card>
          </Track>
        </div>
      </Wrapper>
      <TrackNav>
        <div className="btnWrapper">
          <button
            className="left"
            onClick={() => {
              const slideWidth_px = getCssProperty(track, 'width');
              const slideWidth = slideWidth_px.slice(
                0,
                slideWidth_px.length - 2
              );
              // const index = (props.trending_products.slide_index - 1) % 2;
              const index = 0;

              index >= 0 &&
                goToSlide(
                  track,
                  slideWidth,
                  index,
                  props.setTrendingProductsData
                );
            }}
          >
            <img src={left_arrow} alt="" />
          </button>
          <button
            className="right"
            onClick={() => {
              const slideWidth_px = getCssProperty(track, 'width');
              const slideWidth = slideWidth_px.slice(
                0,
                slideWidth_px.length - 2
              );
              // const index = (props.trending_products.slide_index + 1) % 2;
              const index = 1;

              Math.abs(index) <= 1 &&
                goToSlide(
                  track,
                  slideWidth,
                  index,
                  props.setTrendingProductsData
                );
            }}
          >
            <img src={right_arrow} alt="" />
          </button>
        </div>
      </TrackNav>
    </>
  );
}

const mapStateToProps = state => {
  return {
    trending_products: state.trending_products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setTrendingProductsData: data => dispatch(setTrendingProductsData(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Trending);
