import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { Route, useHistory } from 'react-router-dom';
import logo from '../assets/global/logo_footer.png';
import location_pin from '../assets/navbar/location_black.svg';
import search from '../assets/navbar/search.svg';
// import home from '../assets/navbar/home.svg';
import logged_in from '../assets/navbar/logged_in.svg';
import heart_outlined from '../assets/navbar/heart_outlined.svg';
import arrow_places_active from '../assets/landing/arrow_places_active.svg';

import Container from './Container';
import {
  getCollection,
  setCategories,
  setCity,
  setDonation,
  setToken
} from '../redux/actions';
import querystring from 'querystring';

const Wrapper = styled.div`
  padding-bottom: 2rem;
`;

const Top = styled.div`
  padding: 1rem 0;
  background-color: #5a7889;

  @media screen and (max-width: 768px) {
    padding-top: 0.5rem;
  }

  .collapsedMenu {
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all ease-out 200ms;
    z-index: 234567;

    &.close {
      opacity: 0;
      pointer-events: none;
    }

    .inner {
      position: relative;
      width: 70%;
      background-color: #ffffff;
      padding: 1rem;
      flex-direction: column;
      border-radius: 0.3rem;

      .secondaryBtn {
        border: 1px solid #ff7235;
        color: #ff7235;
      }

      .item {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        margin: 0.5rem 0;
        width: 100%;

        .seeMore {
          font-weight: 500;
          text-transform: uppercase;
          color: #000000;
          max-width: unset;

          img {
            height: 0.5rem;
            margin-left: 0.5rem;
            filter: invert(1);
          }
        }
      }
    }
  }

  .topContainer {
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
      flex-wrap: wrap;
    }
  }

  div {
    display: flex;
    align-items: center;
  }

  input,
  select {
    border: none;
  }

  select {
    appearance: none;
  }

  .contentLeft {
    width: fit-content;

    @media screen and (max-width: 768px) {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
    }

    img {
      height: 2.5rem;
    }

    .hamburger {
      display: block;
      background-color: transparent;
      border: none;

      span {
        display: block;
        height: 3px;
        width: 1.5rem;
        margin-bottom: 3px;
        background-color: #ffffff;
        border-radius: 3px;
      }
    }
  }

  .contentCenter {
    display: flex;
    width: 45%;
    height: 2.5rem;

    @media screen and (max-width: 768px) {
      width: 100%;
    }

    div {
      height: 100%;
    }

    .searchBar {
      width: 60%;
      padding: 0rem 1rem;
      border: 1px solid #5a7889;
      border-top-left-radius: 0.3rem;
      border-bottom-left-radius: 0.3rem;
      background-color: #ffffff;

      @media screen and (max-width: 768px) {
        padding: 0rem 0.5rem;
      }

      input {
        width: 100%;
        font-size: 90%;
        color: #5a7889;

        @media screen and (max-width: 768px) {
          font-size: 70%;
        }
      }
    }

    .selectLocation {
      width: 40%;
      padding: 0rem 1rem;
      border: 1px solid #5a7889;
      border-left: none;
      border-right: none;
      background-color: #ffffff;

      img {
        height: 1rem;
      }

      select {
        width: 100%;
        font-size: 90%;
        color: #5a7889;
        margin-left: 0.5rem;
        appearance: none;
        border: none;

        @media screen and (max-width: 768px) {
          font-size: 70%;
        }
      }
    }

    .searchButton {
      padding: 0 1rem;
      background-color: #ffffff;
      border: 1px solid #5a7889;
      border-left: none;
      border-top-right-radius: 0.3rem;
      border-bottom-right-radius: 0.3rem;
      cursor: pointer;

      &:hover {
        filter: brightness(1.2);
      }

      img {
        height: 1rem;
      }
    }
  }

  .contentRight {
    position: relative;
  }
`;

const Donation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 3rem;
  color: #ffffff;

  @media screen and (max-width: 768px) {
    padding-right: 0;
    filter: invert(1);
    // border-top: 1px solid #5e5e5e;
    width: 100%;
  }

  .top {
    font-size: 100%;
    font-weight: 500;

    img {
      height: 1rem;
      margin-right: 0.5rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 150%;

      img {
        height: 1.5rem;
      }
    }
  }

  .caption {
    font-size: 60%;
    font-weight: 500;
    text-transform: capitalize;
  }
`;

const AuthLink = styled.a`
  padding: 0.5rem 1rem;
  font-size: 80%;
  font-weight: 500;
  border-radius: 0.3rem;

  &.signIn {
    background-color: #ff7235;
    color: #ffffff;
    margin-right: 1rem;
  }

  &.signUp {
    background-color: transparent;
    border: 1px solid #ffffff;
    color: #ffffff;

    // @media screen and (max-width: 768px) {
    //   border-color: #5a7889;
    //   color: #5a7889;
    // }
  }
`;

const User = styled.div`
  width: fit-content;
  cursor: pointer;

  p {
    color: #ffffff;
    margin-right: 0.5rem;
  }

  img {
    height: 2rem;
  }
`;

const SignOut = styled.p`
  position: absolute;
  top: 3rem;
  right: 0;
  min-width: 7rem;
  padding: 0.5rem 1rem;
  background-color: #ffffff;
  border: 1px solid #666666;
  cursor: pointer;
  opacity: 0;
  pointer-events: none;
  transition: all ease-out 200ms;

  &:hover {
    background-color: #ff7235;
    color: #ffffff;
    border-color: #ff7235;
  }

  &.show {
    opacity: 1;
    pointer-events: all;
  }
`;

const Bottom = styled.div`
  padding: 1rem 0;
  background-color: #ff7235;

  .bottomContainer {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .inner {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    > .item {
      position: relative;
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #ffffff;
      font-size: 100%;
      font-weight: 500;
      padding: 0 1rem;
      // max-width: 10rem;
      white-space: nowrap;
      // overflow: hidden;
      // text-overflow: ellipsis;
      cursor: pointer;

      &.seeMore {
        font-weight: 700;
        color: #ffffff;
        max-width: unset;

        img {
          height: 0.5rem;
          margin-left: 0.5rem;
        }
      }

      img {
        height: 1rem;
        margin-right: 0.5rem;
      }
    }
  }
`;

function Navbar(props) {
  const history = useHistory();
  // const limit = getRandomRange(6, categories.length);
  const [categories, setCategories] = useState(props.categories || []);
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState(props.city);

  const handleCityChange = e => {
    setCity(e.target.value);
  };

  const handleSearch = e => {
    e.preventDefault();

    const keyword = document.querySelector('#keyword').value;

    if (city) {
      props.setCity(city);
      window.location.replace(`/categories/search/${keyword}?location=${city}`);
    } else {
      props.setCity(0);
      window.location.replace(`/categories/search/${keyword}`);
    }
  };

  async function fetchDonation() {
    let res = await getCollection('donation');

    if (res) props.setDonation(res.amount);
  }

  async function fetchCategories() {
    const res = await getCollection('categories');

    if (res) {
      setCategories(res);
      props.setCategories(res);
    }
  }

  async function fetchCities() {
    let res = await getCollection('cities');

    if (res) setCities(res);
  }

  useEffect(() => {
    fetchDonation();
    fetchCategories();
    fetchCities();
    const urlQueryString = window.location.search.slice(1);

    if (urlQueryString.length) {
      const searchParams = querystring.parse(urlQueryString);

      if (searchParams.location) {
        setCity(props.city);
      }
    } else {
      setCity(0);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Wrapper>
        <Top>
          <div
            id="collapsedMenu"
            className="collapsedMenu close"
            onClick={e => {
              if (e.target.id === 'collapsedMenu') {
                e.target.classList.add('close');
              }
            }}
          >
            <div className="inner">
              <div className="item">
                {props.token && (
                  <>
                    <User
                      onClick={() => {
                        document
                          .querySelector('.signOut')
                          .classList.toggle('show');
                      }}
                    >
                      <p>{props.user && props.user.username}</p>
                      <img src={logged_in} alt="" />
                    </User>
                    <SignOut className="secondaryBtn">
                      <p
                        onClick={() => {
                          props.setToken(null);
                          setTimeout(() => {
                            history.push('/');
                          });
                        }}
                      >
                        Sign out
                      </p>
                    </SignOut>
                  </>
                )}
                {!props.token && (
                  <>
                    <AuthLink href="/sign-in" className="signIn">
                      Sign In
                    </AuthLink>
                    <AuthLink href="/sign-up" className="signUp secondaryBtn">
                      Sign Up
                    </AuthLink>
                  </>
                )}
              </div>
              <div className="item">
                <Donation>
                  <div className="top">
                    <img src={heart_outlined} alt="" />
                    <span>${props.donation}</span>
                  </div>
                  <p className="caption">donated to charity</p>
                </Donation>
              </div>
              <div className="item">
                <a href="/categories" className="item seeMore">
                  All Categories
                  <img src={arrow_places_active} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div></div>
          <Container className="topContainer">
            <div className="contentLeft">
              <a href="/">
                <img src={logo} alt="" />
              </a>
              <button
                className="hamburger mb"
                onClick={() => {
                  document
                    .querySelector('.collapsedMenu')
                    .classList.remove('close');
                }}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
            <form className="contentCenter" onSubmit={e => handleSearch(e)}>
              <div className="searchBar">
                <input
                  type="text"
                  id="keyword"
                  name="keyword"
                  placeholder="Find local services and Products"
                  required
                />
              </div>
              <div className="selectLocation">
                <img src={location_pin} alt="" />
                <select
                  id="city"
                  name="city"
                  value={city}
                  onChange={e => handleCityChange(e)}
                >
                  <option value={0}>All Cities</option>
                  {cities.map(option => (
                    <option key={option.name} value={option.name || ''}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className="searchButton">
                <img src={search} alt="" />
              </button>
            </form>
            <div className="contentRight lg">
              <Donation>
                <div className="top">
                  <img src={heart_outlined} alt="" />
                  <span>${props.donation}</span>
                </div>
                <p className="caption">donated to charity</p>
              </Donation>
              {props.token && (
                <>
                  <User
                    onClick={() => {
                      document
                        .querySelector('.signOut')
                        .classList.toggle('show');
                    }}
                  >
                    <p>{props.user && props.user.username}</p>
                    <img src={logged_in} alt="" />
                  </User>
                  <SignOut className="signOut">
                    <p
                      onClick={() => {
                        props.setToken(null);
                        setTimeout(() => {
                          history.push('/');
                        });
                      }}
                    >
                      Sign out
                    </p>
                  </SignOut>
                </>
              )}
              {!props.token && (
                <>
                  <AuthLink href="/sign-in" className="signIn">
                    Sign In
                  </AuthLink>
                  <AuthLink href="/sign-up" className="signUp">
                    Sign Up
                  </AuthLink>
                </>
              )}
            </div>
          </Container>
        </Top>
        <Route exact path="/">
          <Bottom className="lg">
            <Container>
              <div className="inner">
                {/* <a href="/" className="item">
                  <img src={home} alt="" />
                  <span>Home</span>
                </a> */}
                {/* <div className="item">
                  <span>|</span>
                </div> */}
                {categories.slice(0, 6).map(category => (
                  <a
                    key={category.id}
                    href={`/categories/${category.name}`}
                    className="item"
                  >
                    <span>
                      {/* {category.length > 15
                        ? `${category.substr(0, 15)}...`
                        : category} */}
                      {category.name}
                    </span>
                  </a>
                ))}
                <a href="/categories" className="item seeMore">
                  All Categories
                  <img src={arrow_places_active} alt="" />
                </a>
              </div>
            </Container>
          </Bottom>
        </Route>
      </Wrapper>
    </>
  );
}

const mapStateToProps = state => {
  return {
    token: state.token,
    user: state.user,
    city: state.city,
    donation: state.donation
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setToken: token => dispatch(setToken(token)),
    setCity: city => dispatch(setCity(city)),
    setDonation: amount => dispatch(setDonation(amount)),
    setCategories: data => dispatch(setCategories(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
