import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Container from '../components/Container';
import { loadModal } from '../utils';

import arrow_places from '../assets/landing/arrow_places.svg';
import chevron_left from '../assets/global/chevron_left.svg';
import Modal from '../components/Modal';
import { getCollection } from '../redux/actions';
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
      margin-left: 0;
      color: #ffffff;
      background-color: #c54100;
      font-weight: 500;
      border-radius: 0.3rem;
      cursor: pointer;
      transition: all ease-out 200ms;

      &.seeMore {
        font-weight: 500;
        color: #ff7235;
        border: none;
        background-color: transparent;
      }

      &:hover {
        background-color: #f9f9f9;
        color: #000000;
      }
    }
  }
`;

const Results = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
  flex-wrap: wrap;
  justify-content: space-between;
  // margin-top: 1rem;
  margin-bottom: 5rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e5e5;

  .item {
    display: flex;
    align-items: flex-start;
    box-shadow: 0px 0px 5px #e5e5e5;
    cursor: pointer;

    .imgWrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 7rem;
      width: 30%;
      background-color: #2e4c5c;
      overflow: hidden;

      img {
        width: 100%;
      }
    }

    .textWrapper {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      width: 70%;
      padding-left: 1rem;
      padding-top: 0.5rem;

      .title {
        font-size: 100%;
        font-weight: 500;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
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
  const [categories, setCategories] = useState([]);
  const [results, setResults] = useState([]);
  const [limit, setLimit] = useState(15);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('Categories');
  const urlArr = window.location.href.split('/');

  async function fetchProducts() {
    const productsRes = await getCollection('products');

    if (productsRes) setResults(results.concat(productsRes));
  }

  async function fetchServices() {
    const servicesRes = await getCollection('services');

    if (servicesRes) setResults(results.concat(servicesRes));
  }

  async function fetchCategories() {
    const categoriesRes = await getCollection('categories');

    if (categoriesRes) setCategories(categoriesRes);
  }

  const fetchData = async () => {
    setLoading(true);

    await fetchCategories();
    await fetchProducts();

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    fetchServices();
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
            <a
              key={category.id}
              href={`/categories/${category.name}`}
              className="item"
            >
              <span>{category.name}</span>
            </a>
          ))}
          {categories.length >= 15 && (
            <p
              className="item seeMore"
              onClick={() =>
                setLimit(limit === categories.length ? 15 : categories.length)
              }
            >
              See {!(limit === categories.length) ? 'More >>' : 'Less <<'}
            </p>
          )}
        </div>
        {/* )} */}
      </TopBar>

      {title === 'Categories' && (
        <Results>
          {!results.length && !loading && <h2>No Results</h2>}
          {loading ? (
            <p>Loading...</p>
          ) : (
            results.length &&
            results.map(result => (
              <div
                key={result.id}
                className="item"
                onClick={() =>
                  loadModal(result.price ? 'products' : 'services', result.id)
                }
              >
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
                result.category.name
                  .toLowerCase()
                  .match(title.toLocaleLowerCase())
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
                result.category.name
                  .toLowerCase()
                  .match(title.toLocaleLowerCase()) ||
                result.name.toLowerCase().match(title.toLocaleLowerCase());

              if (
                props.city &&
                props.city
                  .toLowerCase()
                  .match(result.business.city.name.toLowerCase()) &&
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
