import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import arrow_places from '../assets/landing/arrow_places.svg';
import arrow_places_active from '../assets/landing/arrow_places_active.svg';

import { setPlacesData } from '../redux/actions';
// import Container from './Container';
import { loadModal } from '../utils';
import Container from './Container';
import { API_HOST } from '../utils/config';
import ProductCard from './ProductCard';

const MainWrapper = styled.div`
  width: 100vw;
  margin: 5rem 0;
  // border-top: 1px solid #e5e5e5;

  @media screen and (max-width: 768px) {
    margin: 2rem 0;
  }
`;

const Header = styled.div`
  text-align: center;
  padding: 2rem 0;
  margin-bottom: 2rem;
  // background-color: #f5f5f5;
  text-transform: capitalize;

  .heading {
    font-size: 200%;
    font-weight: 500;

    @media screen and (max-width: 768px) {
      font-size: 150%;
    }
  }

  .subheading {
    font-size: 120%;

    @media screen and (max-width: 768px) {
      font-size: 100%;
    }
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
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    // grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
    grid-template-columns: 1fr 1fr;
  }
`;

const Category = styled.p`
  width: fit-content;
  font-size: 120%;
  margin-bottom: 2rem;
  text-transform: uppercase;
  color: #5a7889;
  border-bottom: 1px solid #ff7235;
`;

function Places(props) {
  return (
    <>
      <MainWrapper>
        <Wrapper>
          <Header>
            <p className="heading">Explore More Products</p>
            <p className="subheading">Buy from local businesses near you</p>
          </Header>
          {props.categories.slice(0, 5).map(category => (
            <Container key={category.name}>
              <Category>{category.name}</Category>
              <Track>
                {props.products
                  ?.filter(
                    item =>
                      item.category.name.toLowerCase() ===
                      category.name.toLowerCase()
                  )
                  .map(product => (
                    <ProductCard
                      key={product.id}
                      onClick={() => loadModal(product.id)}
                    >
                      <div className="inner">
                        <div className="cardImageWrapper">
                          {product.contentImage && (
                            <img
                              src={`${API_HOST}${product.contentImage?.url}`}
                              alt={product.name}
                            />
                          )}
                        </div>
                        <div className="cardText">
                          <p className="productName">{product.name}</p>
                          <div className="bottom">
                            {/* <p className="prompt">
                              Delivered to
                              <br />
                              you today
                            </p> */}
                            <p className="buyNow">
                              <span>Buy now</span>
                              <img
                                className="arrow"
                                src={arrow_places}
                                alt=""
                              />
                              <img
                                className="arrow_active"
                                src={arrow_places_active}
                                alt=""
                              />
                            </p>
                          </div>
                        </div>
                        {!!product.discount && (
                          <div className="discountBadge">
                            <p className="text">
                              <span className="percentage">
                                {product.discount}%
                              </span>
                              <br />
                              <span className="small">off</span>
                            </p>
                          </div>
                        )}
                      </div>
                    </ProductCard>
                  ))}
              </Track>
            </Container>
          ))}
          <Container>
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
    places: state.places,
    categories: state.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setPlacesData: data => dispatch(setPlacesData(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Places);
