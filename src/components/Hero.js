import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import arrow_places_active from '../assets/landing/arrow_places_active.svg';
import green_heart from '../assets/landing/green_heart.svg';
import Container from './Container';
import { getCollection, setCategories } from '../redux/actions';
import { connect } from 'react-redux';

const Wrapper = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 2.4rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Categories = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 0px 10px #efefef;
  border-radius: 0.3rem;
  overflow: hidden;
  padding-top: 12px;
  width: 100%;

  .item {
    display: block;
    padding: 12px;
    color: #011116;
    transition: all 0.2s ease-out;

    &:hover {
      background-color: #efefef;
    }

    &.seeMore {
      color: #ff7235;
      font-weight: bold;

      img {
        margin-left: 12px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const CarouselWrapper = styled.div`
  // width: 50%;
  overflow: hidden;
`;

const CarouselSlide = styled.div`
  min-height: 30rem;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('${props => props.bg}');
  background-position: center top;
  padding: 4.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .heading {
    width: fit-content;
    max-width: 70%;
    font-size: 48px;
    font-weight: 500;
    color: #ff7235;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    text-align: left;

    @media screen and (max-width: 768px) {
      margin-bottom: 0;
    }
  }

  .subheading {
    max-width: 70%;
    font-size: 24px;
    color: #ffffff;
    text-align: left;

    @media screen and (max-width: 768px) {
      max-width: 90%;
    }
  }

  .charityCaption {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 18px;
    margin-top: 2rem;;
    color: #ffffff;

    @media screen and (max-width: 768px) {
      margin: 1rem 0;
    }

    img {
      width: 3rem;
      margin-right: 12px;
    }
  }

  @media screen and (max-width: 768px) {
    min-height: unset;
    height: 30rem;
    padding: 2.4rem;

    .heading {
      max-width: 100%;
    }

    .subheading {
      max-width: 100%;
    }
  }
`;

const unsplash = [
  'https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
  'https://images.unsplash.com/photo-1575663620136-5ebbfcc2c597?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
];

function Hero(props) {
  const [categories, setCategories] = useState(props.categories || []);
  const [captions, setCaptions] = useState([]);

  async function fetchCaptions() {
    if (captions.length) return;
    const res = await getCollection('captions');

    if (res) setCaptions(res);
  }

  async function fetchCategories() {
    const res = await getCollection('categories');

    if (res) {
      setCategories(res);
      props.setCategories(res);
    }
  }

  useEffect(() => {
    fetchCaptions();
    fetchCategories();
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <Categories>
        {categories.slice(0, 10).map(category => (
          <a
            key={category.id}
            href={`/categories/${category.name}`}
            className="item"
          >
            {category.name}
          </a>
        ))}
        <a href="/categories" className="item seeMore">
          <span>All Categories</span>
          <img src={arrow_places_active} alt="" />
        </a>
      </Categories>
      <CarouselWrapper>
        {!!captions.length && <Carousel
          showArrows={false}
          showStatus={false}
          autoFocus
          autoPlay
          infiniteLoop
        >
          {captions?.map((caption, index) => (
            <CarouselSlide key={index} bg={unsplash[index % 2]}>
              <p className="heading">{caption.heading}</p>
              <p className="subheading">{caption.subheading}</p>
              <div className="charityCaption">
                <img src={green_heart} alt="" />
                <span>We Love Charity</span>
              </div>
            </CarouselSlide>
          ))}
        </Carousel>}
      </CarouselWrapper>
    </Wrapper>
  );
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCategories: data => dispatch(setCategories(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
