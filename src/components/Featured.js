import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { setFeaturedProductsData } from '../redux/actions';

import featured_badge from '../assets/landing/featured.svg';
import mack_ken from '../assets/landing/mack&ken.svg';
import right_arrow from '../assets/landing/right_arrow.svg';
import cookies_img from '../assets/landing/cookies.svg';

const Wrapper = styled.div`
  width: 100%;
  margin: 5rem 0;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    margin: 2rem 0;
  }
`;

const Track = styled.ul`
  // display: flex;
  position: relative;
  width: 100%;
  list-style: none;
  height: 20rem;
  transition: all ease-in 500ms;

  @media screen and (max-width: 768px) {
    height: 7rem;
  }
`;

const Slide = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  background-color: ${props => props.bg || '#e5e5e5'};
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
      padding-left: 2rem;

      .featuredBadge {
        width: 60%;
        margin-bottom: 0.5rem;
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
        transform: translateX(-25%) scale(2);
        margin-top: -2.5rem;

        @media screen and (max-width: 768px) {
          transform: translateX(-50%) scale(2);
          margin-top: 0.5rem;
        }
      }
    }

    &.contentRight {
      display: none;
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
`;

const getCssProperty = (el, property) => {
  return window.getComputedStyle(el, null).getPropertyValue(property);
};

const goToSlide = (track, current, target) => {
  const targetSlideWidth = getCssProperty(target, 'left');

  track.style.transform = `translateX(-${targetSlideWidth})`;
  current && current.classList.remove('active');
  target && target.classList.add('active');
};

function Featured(props) {
  const initialState = {
    track: null,
    slides: [],
    slideWidth: 0,
  };

  const [state, setState] = useState(initialState);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideShow = () => {
    // console.log(currentIndex)
    const track = document.querySelector('#track_featured');
    const currentSlide = track.querySelector('.active');
    const slides = Array.from(
      document.querySelector('#track_featured').children
    );

    const targetIndex = props.featured_products.slide_index;

    const targetSlide = slides[targetIndex];

    goToSlide(track, currentSlide, targetSlide);

    props.setFeaturedProductsData({
      slide_index: (targetIndex + 1) % slides.length
    });

    setCurrentIndex(props.featured_products.slide_index);
  };

  useEffect(() => {
    setState({
      ...state,
      track: document.querySelector('#track_featured'),
      slides: Array.from(document.querySelector('#track_featured').children),
      slideWidth: Array.from(
        document.querySelector('#track_featured').children
      )[0].getBoundingClientRect().width,
    });

    const interval = setInterval(() => {
      slideShow();
    }, 5000);

    return () => clearInterval(interval);

    // eslint-disable-next-line
  }, [currentIndex]);

  return (
    <Wrapper>
      <Track id="track_featured">
        <Slide left={0}>
          <div className="contentLeft">
            <img className="featuredBadge" src={featured_badge} alt="" />
            <img className="business" src={mack_ken} alt="" />
          </div>
          <div className="contentCenter">
            <img src={cookies_img} alt="" />
          </div>
          <div className="contentRight">
            <a className="buyNow" href="/">
              13$ Buy Now
              <img src={right_arrow} alt="" />
            </a>
          </div>
        </Slide>
        <Slide bg="darkslateblue" left={state.slideWidth}>
          <div className="contentLeft">
            <img className="featuredBadge" src={featured_badge} alt="" />
            <img className="business" src={mack_ken} alt="" />
          </div>
          <div className="contentCenter">
            <img src={cookies_img} alt="" />
          </div>
          <div className="contentRight">
            <a className="buyNow" href="/">
              13$ Buy Now
              <img src={right_arrow} alt="" />
            </a>
          </div>
        </Slide>
        <Slide bg="darkslategrey" left={state.slideWidth * 2}>
          <div className="contentLeft">
            <img className="featuredBadge" src={featured_badge} alt="" />
            <img className="business" src={mack_ken} alt="" />
          </div>
          <div className="contentCenter">
            <img src={cookies_img} alt="" />
          </div>
          <div className="contentRight">
            <a className="buyNow" href="/">
              13$ Buy Now
              <img src={right_arrow} alt="" />
            </a>
          </div>
        </Slide>
        <Slide bg="burlywood" left={state.slideWidth * 3}>
          <div className="contentLeft">
            <img className="featuredBadge" src={featured_badge} alt="" />
            <img className="business" src={mack_ken} alt="" />
          </div>
          <div className="contentCenter">
            <img src={cookies_img} alt="" />
          </div>
          <div className="contentRight">
            <a className="buyNow" href="/">
              13$ Buy Now
              <img src={right_arrow} alt="" />
            </a>
          </div>
        </Slide>
      </Track>
    </Wrapper>
  );
}

const mapStateToProps = state => {
  return {
    featured_products: state.featured_products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setFeaturedProductsData: data => dispatch(setFeaturedProductsData(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Featured);
