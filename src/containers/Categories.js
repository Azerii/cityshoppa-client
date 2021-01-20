import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Container from '../components/Container';
import { dummyData, loadModal } from '../utils';

import arrow_places from '../assets/landing/arrow_places.svg';
import chevron_left from '../assets/global/chevron_left.svg';
import Modal from '../components/Modal';
import getCollection from '../redux/actions';
import { API_HOST } from '../utils/config';
import { Route, useParams } from 'react-router-dom';

const TopBar = styled.div`
  width: 100%;

  .title {
    .caption {
      font-size: 150%;
      font-weight: 500;
      text-transform: capitalize;
    }

    .smallText {
      font-size: 1rem;
      color: #707070;
    }

    .goBack {
      display: flex;
      align-items: center;
      color: #ff7235;

      img {
        height: 1rem;
      }
    }
  }

  .list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 1rem 0;

    .item {
      margin: 0.5rem;
      padding: 0.5rem;
      color: #707070;
      background-color: #ffffff;
      border: 1px solid #707070;
      border-radius: 0.3rem;
      cursor: pointer;
      transition: all eas-out 200ms;

      &.seeMore {
        font-weight: 500;
        color: #ff7235;
        border: none;
      }

      &:hover {
        background-color: #f9f9f9;
      }
    }
  }
`;

const Results = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 5rem;
  padding-top: 1rem;
  border-top: 1px solid #e5e5e5;

  .item {
    display: flex;
    align-items: flex-start;
    width: 30%;
    margin-top: 2rem;
    box-shadow: 0px 0px 5px #e5e5e5;
    cursor: pointer;

    .imgWrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 7rem;
      min-width: 30%;
      background-color: #f1f1f1;
      overflow: hidden;

      img {
        width: 100%;
      }
    }

    .textWrapper {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding-left: 1rem;
      padding-top: 0.5rem;

      .title {
        font-size: 100%;
        font-weight: 500;
      }

      .subtitle {
        font-size: 90%;
        margin: 0.3rem 0;
        max-width: 80%;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .contact {
        display: flex;
        align-items: center;
        font-size: 80%;
        text-transform: capitalize;
        color: #ff7235;

        img {
          height: 0.5rem;
          margin-left: 0.5rem;
        }
      }
    }
  }
`;

function Content(props) {
  const { category } = useParams();
  const { keyword } = useParams();
  const [categories] = useState(dummyData.categories);
  const [results, setResults] = useState([]);
  const [limit, setLimit] = useState(15);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('Categories');
  const urlArr = window.location.href.split('/');

  async function fetchData() {
    setLoading(true);
    const res = await getCollection('products');
    setLoading(false);
    if (res) setResults(res);
  }

  useEffect(() => {
    fetchData();
    setTitle(category || keyword || 'Categories');
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <TopBar>
        <div className="title">
          {title === 'Categories' && (
            <a href="/" className="goBack">
              <img src={chevron_left} alt="" />
              Home
            </a>
          )}
          <p className="caption">{title}</p>
          {title !== 'Categories' && (
            <a href="/categories" className="goBack">
              <img src={chevron_left} alt="" />
              categories
            </a>
          )}

          {title === 'Categories' && (
            <p className="smallText">
              Click on a category to see more specific results
            </p>
          )}
        </div>
        {/* {title === 'Categories' && ( */}
        <div className="list">
          {categories.slice(0, limit).map(category => (
            <a key={category} href={`/categories/${category}`} className="item">
              <span>{category}</span>
            </a>
          ))}
          <p
            className="item seeMore"
            onClick={() =>
              setLimit(limit === categories.length ? 15 : categories.length)
            }
          >
            See {!(limit === categories.length) ? 'More >>' : 'Less <<'}
          </p>
        </div>
        {/* )} */}
      </TopBar>

      {title === 'Categories' && (
        <Results>
          {!results.length && !loading && <h2>No Results</h2>}
          {loading ? (
            <p>Loading...</p>
          ) : (
            results.map(result => (
              <div key={result.id} className="item" onClick={() => loadModal()}>
                <div className="imgWrapper">
                  {result.contentImage && (
                    <img src={`${API_HOST}${result.contentImage.url}`} alt="" />
                  )}
                </div>
                <div className="textWrapper">
                  <p className="title">{result.name}</p>
                  <p className="subtitle">{result.description}</p>
                  <p className="contact">
                    contact
                    <img src={arrow_places} alt="" />
                  </p>
                </div>
              </div>
            ))
          )}
        </Results>
      )}

      {/* default categories render */}
      {title !== 'Categories' && !urlArr.includes('search') && (
        <Results>
          {!results.length && !loading && <h2>No Results</h2>}
          {loading ? (
            <p>Loading...</p>
          ) : (
            results.map(result => {
              if (
                result.category.toLowerCase().match(title.toLocaleLowerCase())
              ) {
                return (
                  <div key={result.id} className="item">
                    <div className="imgWrapper">
                      {result.contentImage && (
                        <img
                          src={`${API_HOST}${result.contentImage.url}`}
                          alt=""
                        />
                      )}
                    </div>
                    <div className="textWrapper">
                      <p className="title">{result.name}</p>
                      <p className="subtitle">{result.description}</p>
                      <p className="contact">
                        contact
                        <img src={arrow_places} alt="" />
                      </p>
                    </div>
                  </div>
                );
              }

              return null;
            })
          )}
        </Results>
      )}

      {/* handle when user uses the search bar */}
      {title !== 'Categories' && urlArr.includes('search') && (
        <Results>
          {!results.length && !loading && <h2>No Results</h2>}
          {loading ? (
            <p>Loading...</p>
          ) : (
            results.map(result => {
              const matchCheck =
                result.category
                  .toLowerCase()
                  .match(title.toLocaleLowerCase()) ||
                result.name.toLowerCase().match(title.toLocaleLowerCase());

              if (
                props.city &&
                props.city
                  .toLowerCase()
                  .match(result.business.city.name.toLocaleLowerCase()) &&
                matchCheck
              ) {
                return (
                  <div key={result.id} className="item">
                    <div className="imgWrapper">
                      {result.contentImage && (
                        <img
                          src={`${API_HOST}${result.contentImage.url}`}
                          alt=""
                        />
                      )}
                    </div>
                    <div className="textWrapper">
                      <p className="title">{result.name}</p>
                      <p className="subtitle">{result.description}</p>
                      <p className="contact">
                        contact
                        <img src={arrow_places} alt="" />
                      </p>
                    </div>
                  </div>
                );
              } else if (!props.city && matchCheck) {
                return (
                  <div key={result.id} className="item">
                    <div className="imgWrapper">
                      {result.contentImage && (
                        <img
                          src={`${API_HOST}${result.contentImage.url}`}
                          alt=""
                        />
                      )}
                    </div>
                    <div className="textWrapper">
                      <p className="title">{result.name}</p>
                      <p className="subtitle">{result.description}</p>
                      <p className="contact">
                        contact
                        <img src={arrow_places} alt="" />
                      </p>
                    </div>
                  </div>
                );
              }

              return null;
            })
          )}
        </Results>
      )}
    </>
  );
}

function Categories(props) {
  return (
    <>
      {props.modalOpen && <Modal />}
      <Container>
        {/* Handle when user lands on the categories page */}
        <Route exact path="/categories">
          <Content />
        </Route>

        {/* Handle when user clicks on a category */}
        <Route exact path="/categories/:category">
          <Content />
        </Route>

        {/* Handle when user searches for content using the global search bar */}
        <Route exact path="/categories/search/:keyword">
          <Content {...props} />
        </Route>
      </Container>
    </>
  );
}

const mapStateToProps = state => {
  return {
    modalOpen: state.modalOpen,
    city: state.city
  };
};

export default connect(mapStateToProps)(Categories);
