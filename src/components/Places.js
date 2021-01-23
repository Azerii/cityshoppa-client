import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import cake from '../assets/landing/cake.png';
import jacket from '../assets/landing/jacket.png';
import chicken from '../assets/landing/chicken.png';
// import right_arrow from '../assets/landing/right_arrow.svg';
// import left_arrow from '../assets/landing/left_arrow.svg';
import arrow_places from '../assets/landing/arrow_places.svg';
import arrow_places_active from '../assets/landing/arrow_places_active.svg';
// import location_orange from '../assets/landing/location_orange.svg';

import { setPlacesData } from '../redux/actions';
// import Container from './Container';
import { loadModal } from '../utils';
import Container from './Container';

const MainWrapper = styled.div`
  width: 100vw;
  margin: 5rem 0;
  border-top: 1px solid #e5e5e5;
`;

const Header = styled.div`
  text-align: center;
  padding: 2rem 0;
  margin-bottom: 2rem;
  background-color: #f5f5f5;
  text-transform: capitalize;

  .heading {
    font-size: 200%;
    font-weight: 500;
  }

  .subheading {
    font-size: 120%;
  }
`;

const Wrapper = styled.div`
  width: 100vw;

  .seeAll {
    color: #ff7235;
    font-size: 100%;
  }
`;

const Track = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 2rem;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const Category = styled.p`
  width: fit-content;
  font-size: 120%;
  margin-bottom: 2rem;
  text-transform: uppercase;
  color: #5a7889;
  border-bottom: 1px solid #ff7235;
`;

const Card = styled.a`
  display: block;
  width: 100%;

  &:visited {
    color: inherit;
  }

  .inner {
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
    width: 100%;
    height: 15rem;
    // box-shadow: 0px 0px 5px #e5e5e5;
    // border: 1px solid #e5e5e5;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    transition: transform ease-out 200ms;

    &:hover {
      transform: scale(1.1);

      .cardText {
        background-color: #ff7235;

        .businessName,
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
      height: 60%;
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
      height: 40%;
      background-color: #f5f5f5;
      padding: 1rem 2rem;
      border-radius: 0.3rem;
      border-top-left-radius: 0;
      border-top-right-radius: 0;

      .businessName {
        font-size: 110%;
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
        padding-top: 0.5rem;

        .prompt {
          font-size: 50%;
          text-transform: uppercase;
          display: none;
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

      .caption {
        font-size: 50%;
        text-transform: uppercase;
        color: #000000;
      }
    }
  }
`;

// const categorySet = [
//   'Clothing',
//   'Shoes',
//   'Consumer Electronics',
//   'Crafts',
//   'Pet Food'
// ];

function Places() {
  return (
    <>
      <MainWrapper>
        <Wrapper>
          <Header>
            <p className="heading">Explore More Products And Services</p>
            <p className="subheading">Buy from local businesses near you</p>
          </Header>
          <Container>
            <Category>Clothing</Category>
            <Track>
              <Card onClick={() => loadModal('products')}>
                <div className="inner">
                  <div className="cardImageWrapper">
                    <img src={jacket} alt="" className="cardimage" />
                  </div>
                  <div className="cardText">
                    <p className="businessName">Kajees Apparels</p>
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
              <Card onClick={() => loadModal('products')}>
                <div className="inner">
                  <div className="cardImageWrapper">
                    <img src={cake} alt="" className="cardimage" />
                  </div>
                  <div className="cardText">
                    <p className="businessName">Receer Cakes &amp; Pasteries</p>
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
              <Card onClick={() => loadModal('products')}>
                <div className="inner">
                  <div className="cardImageWrapper">
                    <img src={jacket} alt="" className="cardimage" />
                  </div>
                  <div className="cardText">
                    <p className="businessName">Kajees Apparels</p>
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
              <Card onClick={() => loadModal('products')}>
                <div className="inner">
                  <div className="cardImageWrapper">
                    <img src={chicken} alt="" className="cardimage" />
                  </div>
                  <div className="cardText">
                    <p className="businessName">Mecks Restaurant</p>
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
              <Card onClick={() => loadModal('products')}>
                <div className="inner">
                  <div className="cardImageWrapper">
                    <img src={cake} alt="" className="cardimage" />
                  </div>
                  <div className="cardText">
                    <p className="businessName">Receer Cakes &amp; Pasteries</p>
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
            </Track>

            <Category>Consumer Electronics</Category>
            <Track>
              <Card onClick={() => loadModal('products')}>
                <div className="inner">
                  <div className="cardImageWrapper">
                    <img src={chicken} alt="" className="cardimage" />
                  </div>
                  <div className="cardText">
                    <p className="businessName">Mecks Restaurant</p>
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
              <Card onClick={() => loadModal('products')}>
                <div className="inner">
                  <div className="cardImageWrapper">
                    <img src={jacket} alt="" className="cardimage" />
                  </div>
                  <div className="cardText">
                    <p className="businessName">Kajees Apparels</p>
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
              <Card onClick={() => loadModal('products')}>
                <div className="inner">
                  <div className="cardImageWrapper">
                    <img src={cake} alt="" className="cardimage" />
                  </div>
                  <div className="cardText">
                    <p className="businessName">Receer Cakes &amp; Pasteries</p>
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
              <Card onClick={() => loadModal('products')}>
                <div className="inner">
                  <div className="cardImageWrapper">
                    <img src={jacket} alt="" className="cardimage" />
                  </div>
                  <div className="cardText">
                    <p className="businessName">Kajees Apparels</p>
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
              <Card onClick={() => loadModal('products')}>
                <div className="inner">
                  <div className="cardImageWrapper">
                    <img src={chicken} alt="" className="cardimage" />
                  </div>
                  <div className="cardText">
                    <p className="businessName">Mecks Restaurant</p>
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
            </Track>

            <Category>Crafts</Category>
            <Track>
              <Card onClick={() => loadModal('products')}>
                <div className="inner">
                  <div className="cardImageWrapper">
                    <img src={chicken} alt="" className="cardimage" />
                  </div>
                  <div className="cardText">
                    <p className="businessName">Mecks Restaurant</p>
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
              <Card onClick={() => loadModal('products')}>
                <div className="inner">
                  <div className="cardImageWrapper">
                    <img src={jacket} alt="" className="cardimage" />
                  </div>
                  <div className="cardText">
                    <p className="businessName">Kajees Apparels</p>
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
              <Card onClick={() => loadModal('products')}>
                <div className="inner">
                  <div className="cardImageWrapper">
                    <img src={cake} alt="" className="cardimage" />
                  </div>
                  <div className="cardText">
                    <p className="businessName">Receer Cakes &amp; Pasteries</p>
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
              <Card onClick={() => loadModal('products')}>
                <div className="inner">
                  <div className="cardImageWrapper">
                    <img src={jacket} alt="" className="cardimage" />
                  </div>
                  <div className="cardText">
                    <p className="businessName">Kajees Apparels</p>
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
              <Card onClick={() => loadModal('products')}>
                <div className="inner">
                  <div className="cardImageWrapper">
                    <img src={chicken} alt="" className="cardimage" />
                  </div>
                  <div className="cardText">
                    <p className="businessName">Mecks Restaurant</p>
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
            </Track>

            <Category>Pet Food</Category>
            <Track>
              <Card onClick={() => loadModal('products')}>
                <div className="inner">
                  <div className="cardImageWrapper">
                    <img src={chicken} alt="" className="cardimage" />
                  </div>
                  <div className="cardText">
                    <p className="businessName">Mecks Restaurant</p>
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
              <Card onClick={() => loadModal('products')}>
                <div className="inner">
                  <div className="cardImageWrapper">
                    <img src={jacket} alt="" className="cardimage" />
                  </div>
                  <div className="cardText">
                    <p className="businessName">Kajees Apparels</p>
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
              <Card onClick={() => loadModal('products')}>
                <div className="inner">
                  <div className="cardImageWrapper">
                    <img src={cake} alt="" className="cardimage" />
                  </div>
                  <div className="cardText">
                    <p className="businessName">Receer Cakes &amp; Pasteries</p>
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
              <Card onClick={() => loadModal('products')}>
                <div className="inner">
                  <div className="cardImageWrapper">
                    <img src={jacket} alt="" className="cardimage" />
                  </div>
                  <div className="cardText">
                    <p className="businessName">Kajees Apparels</p>
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
              <Card onClick={() => loadModal('products')}>
                <div className="inner">
                  <div className="cardImageWrapper">
                    <img src={chicken} alt="" className="cardimage" />
                  </div>
                  <div className="cardText">
                    <p className="businessName">Mecks Restaurant</p>
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
            </Track>
            <a className="seeAll" href="/categories">
              See All Categories
            </a>
          </Container>
        </Wrapper>
      </MainWrapper>
    </>
  );
}

const mapStateToProps = state => {
  return {
    places: state.places
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setPlacesData: data => dispatch(setPlacesData(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Places);
