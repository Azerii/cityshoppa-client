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
  margin-bottom: 5rem;
  padding: 2rem 0;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  background-color: #f5f5f5;
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
      }

      .subheading {
        font-size: 120%;
        text-align: center;
      }
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
`;

const Track = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin: 2rem 0;
`;

const Card = styled.div`
  display: block;
  width: 14%;
  padding: 0 1rem;

  &:visited {
    color: inherit;
  }

  .inner {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    // box-shadow: 0px 0px 5px #e5e5e5;
    // border-radius: 0.3rem;
    position: relative;
    // cursor: pointer;
    transition: transform ease-out 200ms;

    img {
      height: 5rem;
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

function Discounted(props) {
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
                <img src={starbucks_logo} alt="" />
              </div>
            </Card>
            <Card>
              <div className="inner">
                <img src={burger_king_logo} alt="" />
              </div>
            </Card>
            {/* <Card>
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
                <img src={starbucks_logo} alt="" />
              </div>
            </Card>
            <Card>
              <div className="inner">
                <img src={burger_king_logo} alt="" />
              </div>
            </Card> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Discounted);
