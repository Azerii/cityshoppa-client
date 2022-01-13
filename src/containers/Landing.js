import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Container from '../components/Container';
import Brands from '../components/Brands';
import Featured from '../components/Featured';
import FeaturedPlaces from '../components/FeaturedPlaces';
import Modal from '../components/Modal';
import Explore from '../components/Explore';
import { getCollection, getUser, setCity } from '../redux/actions';
import Hero from '../components/Hero';

function Landing(props) {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    let res = await getCollection('products');

    if (res) setProducts(res);
  };

  useEffect(() => {
    fetchProducts();
    props.token && props.getUser();
    props.setCity(0);

    // eslint-disable-next-line
  }, []);

  return (
    <>
      {props.modalOpen && <Modal />}
      <Hero />
      <FeaturedPlaces products={products} />
      <Container>
        <Featured />
      </Container>
      <Brands />

      <Explore products={products} />
    </>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => dispatch(getUser),
    setCity: city => dispatch(setCity(city))
  };
};

const mapStateToProps = state => {
  return {
    token: state.token,
    user: state.user,
    modalOpen: state.modalOpen
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
