import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { Route, useHistory } from 'react-router-dom';
import logo from '../assets/global/logo_footer.png';
import location_pin from '../assets/navbar/location_black.svg';
import search from '../assets/navbar/search.svg';
import home from '../assets/navbar/home.svg';
import logged_in from '../assets/navbar/logged_in.svg';
import heart_outlined from '../assets/navbar/heart_outlined.svg';
import arrow_places_active from '../assets/landing/arrow_places_active.svg';

import Container from './Container';
import {
  getCollection,
  setCity,
  setDonation,
  setToken
} from '../redux/actions';
import { categories, getRandomRange } from '../utils';
import querystring from 'querystring';

const Wrapper = styled.div`
  padding-bottom: 2rem;
`;

const Top = styled.div`
  padding: 1rem 0;
  background-color: #5a7889;

  .topContainer {
    display: flex;
    justify-content: space-between;
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

    img {
      height: 2.5rem;
    }

    .hamburger {
      display: block;
      margin-left: 2rem;

      span {
        display: block;
        height: 3px;
        width: 1.5rem;
        margin-bottom: 3px;
        background-color: #ffffff;
      }
    }
  }

  .contentCenter {
    display: flex;
    min-width: 45%;
    height: 2.5rem;

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

      input {
        width: 100%;
        font-size: 90%;
        color: #5a7889;
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
    // display: flex;
    // justify-content: space-between;
    position: relative;

    .donation {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-right: 3rem;
      color: #ffffff;

      .top {
        font-size: 100%;
        font-weight: 500;

        img {
          height: 1rem;
          margin-right: 0.5rem;
        }
      }

      .caption {
        font-size: 60%;
        font-weight: 500;
        text-transform: capitalize;
      }
    }

    a {
      padding: 0.5rem 1rem;
      font-size: 80%;
      font-weight: 500;

      &.signIn {
        background-color: #ff7235;
        color: #ffffff;
        margin-right: 1rem;
      }

      &.signUp {
        background-color: transparent;
        border: 1px solid #ffffff;
        color: #ffffff;
      }
    }

    .user {
      width: fit-content;
      cursor: pointer;

      p {
        color: #ffffff;
        margin-right: 0.5rem;
      }

      img {
        height: 2rem;
      }
    }

    .signOut {
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
    }
  }
`;

const Bottom = styled.div`
  padding: 1rem 0;
  // background-color: #deb887;
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
  const limit = getRandomRange(6, categories.length);
  const [categoryList] = useState(categories.slice(limit.lower, limit.upper));
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

  useEffect(() => {
    fetchDonation();
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
          <Container className="topContainer">
            <div className="contentLeft">
              <a href="/">
                <img src={logo} alt="" />
              </a>
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
                  <option value="london">London</option>
                  <option value="manchester">Manchester</option>
                  <option value="cambridge">Cambridge</option>
                  <option value="belfast">Belfast</option>
                  <option value="Toronto">Toronto</option>
                </select>
              </div>
              <button type="submit" className="searchButton">
                <img src={search} alt="" />
              </button>
            </form>
            <div className="contentRight">
              <div className="donation">
                <div className="top">
                  <img src={heart_outlined} alt="" />
                  <span>${props.donation}</span>
                </div>
                <p className="caption">donated to charity</p>
              </div>
              {props.token && (
                <>
                  <div
                    className="user"
                    onClick={() => {
                      document
                        .querySelector('.signOut')
                        .classList.toggle('show');
                    }}
                  >
                    <p>{props.user && props.user.username}</p>
                    <img src={logged_in} alt="" />
                  </div>
                  <div className="signOut">
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
                  </div>
                </>
              )}
              {!props.token && (
                <>
                  <a href="/sign-in" className="signIn">
                    Sign In
                  </a>
                  <a href="/sign-up" className="signUp">
                    Sign Up
                  </a>
                </>
              )}
            </div>
          </Container>
        </Top>
        <Route exact path="/">
          <Bottom>
            <Container>
              <div className="inner">
                <a href="/" className="item">
                  <img src={home} alt="" />
                  <span>Home</span>
                </a>
                <div className="item">
                  <span>|</span>
                </div>
                {categoryList.map(category => (
                  <a
                    key={category}
                    href={`/categories/${category}`}
                    className="item"
                  >
                    <span>
                      {/* {category.length > 15
                        ? `${category.substr(0, 15)}...`
                        : category} */}
                      {category}
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
    setDonation: amount => dispatch(setDonation(amount))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
