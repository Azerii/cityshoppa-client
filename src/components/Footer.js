import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import logo from '../assets/global/logo_footer.png';
import location_pin from '../assets/global/location_pin.svg';
import mail from '../assets/global/mail.svg';
import phone from '../assets/global/phone.svg';
import { setContactTitle } from '../redux/actions';
import Container from './Container';

const Wrapper = styled.div`
  background-color: #011116;
  padding: 5rem 0;
  color: #ffffff;
`;

const MainCaption = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-weight: 500;
    margin-bottom: 1rem;
    color: #ffffff;
    font-size: 250%;

    @media screen and (max-width: 768px) {
      font-size: 200%;
    }
  }

  a {
    padding: 1rem;
    border: 2px solid #ffffff;
    border-radius: 2rem;
    background-color: transparent;
    color: #ffffff;
    text-decoration: none;
    font-weight: 500;
    font-size: 110%;
  }
`;

const Body = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  margin: 5rem 0;

  @media screen and (max-width: 768px) {
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
    padding: 0 1rem;
  }
    
  .flex-row {
    display: flex;
  }

  .iconWrapper {
    width: 1.5rem;
    margin-right: 1rem;
    img {
      width: 100%;
    }
  }

  .col {
      min-width: 20%;
      
      &.links {
          padding-left: 2rem;

          @media screen and (max-width: 768px) {
            padding-left: 0;
          }
      }
  }

  a, p {
      display: block;
      width: fit-content;
      text-decoration none;
      font-size: 100%;
      color: #ffffff;
      margin-bottom: 1rem;
  }

  .logo {
      height: 4rem;
  }
`;

const Bottom = styled.div`
    width: 100%;
    marin-top: 2rem;
    padding: 1rem 0;
    border-top: 1px solid rgba(255, 255, 255, 0.5);

    @media screen and (max-width: 768px) {
      margin-top: 0;
    }

    p {
        font-size: 100%;
        color: #ffffff;
    }

    a {
        display: inline;
        text-decoration none;
        color: #ffffff;
    }
`;

function Footer(props) {
  return (
    <>
      <Wrapper>
        <Container>
          <MainCaption>
            <h1>Shop Locally</h1>
            <a href="/categories">View Categories</a>
          </MainCaption>
          <Body>
            <div className="col">
              <img src={logo} alt="" className="logo" />
            </div>
            <div className="col links">
              <a
                href="/contact-us"
                onClick={() => props.setContactTitle('Want to do business?')}
              >
                Want to do business?
              </a>
              <a
                href="/contact-us"
                onClick={() =>
                  props.setContactTitle(`Can't find your business here?`)
                }
              >
                Can't find your business here?
              </a>
              <a
                href="/contact-us"
                onClick={() => props.setContactTitle('Become our partner')}
              >
                Become our partner
              </a>
            </div>
            <div className="col links">
              <p className="flex-row">
                <span className="iconWrapper">
                  <img src={location_pin} alt="location pin" />
                </span>
                <span>
                  146 Carleton Drive
                  <br />
                  Saskatoon, SK
                  <br />
                  S7H3N6, Canada
                </span>
              </p>
              <a href="mailto:contact@cityshoppa.com" className="flex-row">
                <span className="iconWrapper">
                  <img src={mail} alt="Email" />
                </span>
                <span>contact@cityshoppa.com</span>
              </a>
              <a href="tel:+1 3067006929" className="flex-row">
                <span className="iconWrapper">
                  <img src={phone} alt="phone" />
                </span>
                <span>+1 3067006929</span>
              </a>
            </div>
          </Body>
          <Bottom>
            <p className="lg">
              Copyright &copy; 2021 CityShoppa. All rights reserved.
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="/privacy-policy">Privacy Policy</a>
              &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              <a href="/terms-of-use">Terms Of Use</a>
              {/* &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              <a href="/">Legal</a> */}
            </p>
            <p className="mb">
              Copyright &copy; 2021 CityShoppa.
              <br />
              All rights reserved. &nbsp;&nbsp;&nbsp;
              <br />
              <br />
              <a href="/privacy-policy">Privacy Policy</a>
              &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              <a href="/terms-of-use">Terms Of Use</a>
              {/* &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              <a href="/">Legal</a> */}
            </p>
          </Bottom>
        </Container>
      </Wrapper>
    </>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    setContactTitle: title => dispatch(setContactTitle(title))
  };
};

export default connect(null, mapDispatchToProps)(Footer);
