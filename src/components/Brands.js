import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import burger_king_logo from '../assets/landing/burger_king_logo.png';
import sg_logo from '../assets/landing/sg_logo.png';
import starbucks_logo from '../assets/landing/starbucks_logo.png';

import { setDiscountedData } from '../redux/actions';
import Container from './Container';

const MainWrapper = styled.div`
  width: 100vw;
  padding: 2rem 0;
  // border-top: 1px solid #e5e5e5;
  // border-bottom: 1px solid #e5e5e5;
  background-color: #f9f9f9;
`;

const Header = styled.div`
  .caption {
    display: flex;
    justify-content: center;

    .textWrapper {
      .heading {
        font-size: 200%;
        font-weight: 500;
        text-align: center;

        @media screen and (max-width: 768px) {
          font-size: 150%;
        }
      }

      .subheading {
        font-size: 120%;
        text-align: center;

        @media screen and (max-width: 768px) {
          font-size: 100%;
        }
      }
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  overflow: hidden;
`;

const Track = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;
  margin: 2rem 0;
  transform: translateX(0);
  animation: slideshow 15s linear infinite;

  @keyframes slideshow {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-100%);
    }
  }
`;

const Card = styled.div`
  display: block;
  min-width: 20%;

  &:visited {
    color: inherit;
  }

  .inner {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
    // box-shadow: 0px 0px 5px #e5e5e5;
    // border-radius: 0.3rem;
    position: relative;
    // cursor: pointer;
    transition: transform ease-out 200ms;

    @media screen and (max-width: 768px) {
      padding: 0 1rem;
    }

    img {
      width: 40%;

      @media screen and (max-width: 768px) {
        width: 100%;
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
`;

function Brands(props) {
  useEffect(() => {
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <MainWrapper>
        <Container>
          <Header>
            <div className="caption">
              <div className="textWrapper">
                <p className="heading">Get Discounts</p>
                <p className="subheading">
                  On Your Most Popular Can't Do Without Brands
                </p>
              </div>
            </div>
          </Header>
        </Container>
        <Wrapper>
          <Track id="track_discounted">
            <Card>
              <div className="inner">
                <img src={burger_king_logo} alt="" />
              </div>
            </Card>
            <Card>
              <div className="inner">
                <img src={sg_logo} alt="" />
              </div>
            </Card>
            <Card>
              <div className="inner">
                <img src={starbucks_logo} alt="" />
              </div>
            </Card>
            <Card>
              <div className="inner">
                <img src={burger_king_logo} alt="" />
              </div>
            </Card>
            <Card>
              <div className="inner">
                <img src={sg_logo} alt="" />
              </div>
            </Card>
            <Card>
              <div className="inner">
                <img src={burger_king_logo} alt="" />
              </div>
            </Card>
            <Card>
              <div className="inner">
                <img src={sg_logo} alt="" />
              </div>
            </Card>
            <Card>
              <div className="inner">
                <img src={starbucks_logo} alt="" />
              </div>
            </Card>
            <Card>
              <div className="inner">
                <img src={burger_king_logo} alt="" />
              </div>
            </Card>
            <Card>
              <div className="inner">
                <img src={sg_logo} alt="" />
              </div>
            </Card>
          </Track>
        </Wrapper>
      </MainWrapper>
    </>
  );
}

const mapStateToProps = state => {
  return {
    discounted: state.discounted
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setDiscountedData: data => dispatch(setDiscountedData(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Brands);
