import React from 'react';
import styled from 'styled-components';

import logo from '../assets/global/logo_footer.png';
import Container from './Container';

const Wrapper = styled.div`
  background-color: #011116;
  padding: 5rem 0;
  color: #ffffff .inner {
    width: 80%;
  }
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
    display: flex;
    flex-wrap: wrap;
    margin: 7rem 0;

    .col {
        min-width: 20%;
        
        &.links {
            padding-left: 2rem;
        }
    }

    a {
        display: block;
        width: fit-content;
        text-decoration none;
        font-size: 100%;
        color: #ffffff;
        margin-bottom: 1rem;
        // font-weight: 500;

        span {
            color: #F15A29;
        }
    }

    .logo {
        height: 2rem;
    }
`;

const Bottom = styled.div`
    width: 100%;
    marin-top: 2rem;
    padding: 1rem 0;
    border-top: 1px solid rgba(255, 255, 255, 0.5);

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

function Footer() {
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
              <a href="/">Products</a>
              <a href="/">Services</a>
              <a href="/">Discounts</a>
            </div>
            <div className="col links">
              <a href="/">Businesses</a>
              <a href="/">Community</a>
              {/* <a href='/'>lorem</a> */}
            </div>
            <div className="col links">
              <a href="/">
                Contact<span>*</span>
              </a>
              {/* <a href='/'>lorem</a> */}
              {/* <a href='/'>lorem</a> */}
            </div>
          </Body>
          <Bottom>
            <p>
              Copyright &copy; 2021 Shoplocal. All rights reserved.
              &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              <a href="/">Privacy Policy</a>
              &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              <a href="/">Terms Of Use</a>
              &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              <a href="/">Legal</a>
            </p>
          </Bottom>
        </Container>
      </Wrapper>
    </>
  );
}

export default Footer;
