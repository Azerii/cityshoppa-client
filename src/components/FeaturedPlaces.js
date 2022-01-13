import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import arrow_places from '../assets/landing/arrow_places.svg';
import arrow_places_active from '../assets/landing/arrow_places_active.svg';

import { getCollection, setFeaturedPlacesData } from '../redux/actions';
import { loadModal, getRandomRange } from '../utils';
import API_HOST from '../utils/config';
import Container from '../components/Container';
import ProductCard from './ProductCard';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Track = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 1rem;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;

  @media screen and (max-width: 768px) {
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
  }
`;

function FeaturedPlaces({ products }) {
  const [captions, setCaptions] = useState([]);
  const [limits, setLimits] = useState({ lower: 0, upper: 6 });

  async function fetchCaptions() {
    if (captions.length) return;
    const res = await getCollection('captions');

    if (res) setCaptions(res);
  }

  useEffect(() => {
    fetchCaptions();
    const randomRange = getRandomRange(6, products.length);
    products.length && setLimits(randomRange);
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Wrapper>
        <Track id="track_featured_places">
          {products &&
            products.slice(limits.lower, limits.upper).map(product => (
              <ProductCard
                key={product.id}
                discount
                onClick={() => loadModal(product.id)}
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
                      {/* <p className="prompt">
                    Delivered to
                    <br />
                    you today
                  </p> */}
                      <p className="buyNow">
                        <span>Buy now</span>
                        <img className="arrow" src={arrow_places} alt="" />
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
                        <span className="percentage">{product.discount}%</span>
                        <br />
                        <span className="small">off</span>
                      </p>
                    </div>
                  )}
                </div>
              </ProductCard>
            ))}
        </Track>
      </Wrapper>
    </Container>
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
