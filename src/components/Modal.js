import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import close from '../assets/landing/close.svg';
// import checked_small from '../assets/landing/checked_small.svg';
import location_modal from '../assets/landing/location_modal.svg';
import { getCollection, setModalOpen } from '../redux/actions';
import { connect } from 'react-redux';
import { API_HOST } from '../utils/config';
import { store } from '../redux/store';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 23;
`;

const ModalContent = styled.div`
  width: 60%;
  height: 90vh;
  border-radius: 0.3rem;
  background-color: #ffffff;
  overflow: auto;
  position: relative;

  @media screen and (max-width: 768px) {
    width: 90%;
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;

    .heading {
      font-size: 200%;
      font-weight: 500;
      color: #666666;

      @media screen and (max-width: 768px) {
        font-size: 100%;
      }
    }

    .closeIcon {
      height: 1.5rem;
      cursor: pointer;

      @media screen and (max-width: 768px) {
        height: 1rem;
      }
    }
  }

  .displayCards {
    width: 100%;
    margin: 1rem 0;
    overflow: hidden;

    @media screen and (max-width: 768px) {
      margin-top: 0;
    }

    .track {
      display: flex;
      position: relative;
    }
  }

  .categories {
    display: flex;
    width: 100%;
    padding: 0 2rem;
    margin: 2rem 0;
    font-size: 90%;

    .title {
      color: #666666;
    }

    .category {
      color: #ff7235;
      font-weight: 700;
      margin-left: 1rem;
    }
  }

  .businessLogoWrapper {
    width: 100%;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    .logo {
      width: 40%;
    }

    p {
      color: #666666;
      font-size: 120%;
    }

    .businessName {
      width: 60%;
      padding-right: 20px;
    }

    @media screen and (max-width: 768px) {
      .logo,
      .businessName {
        width: 100%;
      }
    }
  }

  .description {
    width: 100%;
    padding: 0 2rem;
    margin: 1rem 0;

    p {
      font-size: 100%;
      color: #000000;
    }
  }

  .formWrapper {
    padding: 0 2rem;
    margin: 2rem 0;

    .heading {
      color: #ff7235;
      font-size: 120%;
      font-weight: 700;
      margin: 1.5rem 0;
    }

    form {
      width: 70%;

      input {
        display: block;
        width: 100%;
        padding: 1rem;
        border: 1px solid #666666;
        border-radius: 0.3rem;
        margin: 1rem 0;
      }

      textarea {
        display: block;
        width: 100%;
        padding: 1rem;
        border: 1px solid #666666;
        border-radius: 0.3rem;
        margin: 1rem 0;
        resize: none;
        min-height: 6rem;
      }

      .btnWrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin: 1rem 0;

        button {
          padding: 0.8rem 1.5rem;
          font-size: 100%;
          color: #ffffff;
          background-color: #ff7235;
          border: none;
          // border-radius: 0.3rem;
        }

        .successMsg {
          color: #0fd948;
          font-size: 80%;
          font-weight: 500;
          text-transform: capitalize;

          img {
            height: 0.8rem;
            margin-left: 0.5rem;
          }
        }
      }
    }
  }

  .contactDetails {
    margin: 3rem 0;
    padding: 0 2rem;
    font-size: 100%;

    .heading {
      color: #ff7235;
      margin: 1rem 0;
      font-size: 120%;
    }

    .item {
      margin: 1rem 0;

      .title {
        color: #666666;
      }

      .content {
        color: #000000;

        &.bold {
          font-weight: 500;
        }
      }
    }
  }

  .getDirections {
    display: flex;
    align-items: center;
    margin: 2rem 0;
    padding: 0 2rem;

    a {
      color: #ff7235;
      font-size: 100%;
      text-transform: capitalize;
    }

    img {
      height: 1rem;
      margin-left: 0.5rem;
    }
  }
`;

const Highlight = styled.div`
  display: flex;
  flex-wrap: wrap;

  > .item {
    width: 50%;
  }

  @media screen and (max-width: 768px) {
    > .item {
      width: 100%;
    }
  }
`;

const Card = styled.div`
  height: inherit;
  margin: 0 2rem;
  border-radius: 0.3rem;
  height: 15rem;
  width: 100%;
  background: #f1f1f1;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    height: 12rem;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

function Modal(props) {
  const dispatch = store.dispatch;

  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);

    let res;

    res = await getCollection('products', props.modalData.id);

    if (res) {
      setLoading(false);
      setResult(res);
    } else {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();

    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper
      id="modalWrapper"
      onClick={e => {
        if (e.target.id === 'modalWrapper') {
          dispatch(setModalOpen(false));
        }
      }}
    >
      <ModalContent>
        {loading ? (
          <p>Loading...</p>
        ) : (
          result && (
            <>
              <div className="top">
                {result && <p className="heading">{result.name}</p>}
                <img
                  className="closeIcon"
                  src={close}
                  alt=""
                  onClick={() => {
                    dispatch(setModalOpen(false));
                  }}
                />
              </div>
              <Highlight>
                <div className="item">
                  <div className="categories">
                    <p className="title">Category</p>
                    {result.category && (
                      <p className="category">{result.category.name}</p>
                    )}
                  </div>
                  <div className="businessLogoWrapper">
                    <h2 className="businessName">{result.business?.name}</h2>
                    {result.business?.logo && (
                      <img
                        className="logo"
                        src={`${API_HOST}${result.business?.logo?.url}`}
                        alt=""
                      />
                    )}
                  </div>
                  <div className="description">
                    <p>{result.description}.</p>
                  </div>
                </div>
                <div className="item">
                  <div className="displayCards">
                    <div id="track_modal" className="track">
                      <Card left={0}>
                        {result.contentImage && (
                          <img
                            src={`${API_HOST}${result.contentImage.url}`}
                            alt=""
                          />
                        )}
                      </Card>
                    </div>
                  </div>
                </div>
              </Highlight>
              {/* {props.modalData.contentType !== 'products' && (
                <div className="formWrapper">
                  <p className="heading">Contact Vendor</p>
                  <form>
                    <input
                      type="text"
                      id="full_name"
                      name="name"
                      placeholder="full name"
                      required
                    />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="e-mail"
                      required
                    />
                    <input
                      type="text"
                      id="address"
                      name="address"
                      placeholder="address"
                    />
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Message"
                      required
                    />
                    <div className="btnWrapper">
                      <button type="submit">Send</button>
                      <p className="successMsg">
                      message sent
                      <img src={checked_small} alt="" />
                      </p>
                    </div>
                  </form>
                </div>
              )} */}
              <div className="contactDetails">
                <p className="heading">Vendor Info</p>
                <div className="item">
                  <p className="title">Address</p>
                  <p className="content">{result.business?.address}</p>
                </div>
                {result.business?.phone && (
                  <div className="item">
                    <p className="title">Phone</p>
                    <a
                      href={`tel:${result.business?.phone}`}
                      className="content"
                    >
                      {result.business?.phone}
                    </a>
                  </div>
                )}
                <div className="item">
                  <p className="title">About</p>
                  <p className="content">{result.business?.description}</p>
                </div>
                {result.business?.website && (
                  <div className="item">
                    <p className="title">Website</p>
                    <a
                      href={result.business?.website}
                      target="_blank"
                      rel="noreferrer"
                      className="content"
                    >
                      {result.business?.website}
                    </a>
                  </div>
                )}
              </div>
              {result.business?.linkToMaps && (
                <div className="getDirections">
                  <a
                    href={result.business?.linkToMaps}
                    target="_blank"
                    rel="noreferrer"
                  >
                    get directions via google maps
                  </a>
                  <img src={location_modal} alt="" />
                </div>
              )}
            </>
          )
        )}
      </ModalContent>
    </Wrapper>
  );
}

const mapStateToProps = state => {
  return {
    modalData: state.modalData
  };
};

// const mapDispatchToProps = dispatch => {
//     return {
//         setModalData: (data) => dispatch(setModalData(data))
//     }
// }

export default connect(mapStateToProps)(Modal);
