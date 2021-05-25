import React, { useState } from 'react';
import styled from 'styled-components';
// import Loader from '../components/Loader';
import Container from '../components/Container';
import { connect } from 'react-redux';
import axios from 'axios';
import { API_HOST } from '../utils/config';
import Loader from '../components/Loader';

const Wrapper = styled.div`
  padding: 2rem 0;
`;

const Inner = styled.div`
  display: flex;
  width: fit-content;
  min-height: 30vh;
  margin: auto;
  margin-bottom: 3rem;
  padding: auto 2rem;
  border: 1px solid #666666;
  border-radius: 2rem;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: unset;
    min-width: 60%;
    border: none;
  }

  .content {
    min-width: 50vw;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3rem 0;

    @media screen and (max-width: 768px) {
      padding: 0;
      width: 100%;
    }

    .heading {
      font-weight: 500;
      width: 80%;
      margin: auto;
      text-transform: capitalize;
    }

    .subheading {
      font-size: 150%;
      width: 80%;
      margin: auto;
    }

    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &.single {
        justify-content: center;
      }
    }

    form {
      width: 80%;
      margin: auto;

      .names {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        > div {
          width: 45%;
        }
      }
    }

    .bottom {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 2rem;
      font-size: 100%;

      > a {
        color: #000000;
      }

      p > a {
        color: #ff7235;
        font-weight: 500;
      }
    }
  }
`;

const FormInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 1px solid #666666;
  border-radius: 2rem;
  margin: 1.5rem 0;
  padding: 1rem;

  input {
    width: 80%;
    font-size: 80%;
    border: none;

    &.password {
      width: 80%;
    }
  }

  p {
    font-size: 80%;
    font-weight: 500;
    cursor: pointer;
    text-align: right;
  }

  textarea {
    width: 100%;
    height: 10rem;
    resize: none;
    border: none;
  }
`;

const Button = styled.button`
  padding: 0.7rem 1rem;
  font-size: 120%;
  color: #ffffff;
  background-color: #ff7235;
  margin-top: 1rem;
  border: none;
  border-radius: 2rem;

  span {
    font-weight: 500;
  }
`;

const SuccessModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: 0;
  pointer-events: none;
  z-index: 10;

  &.open {
    opacity: 1;
    pointer-events: all;
  }

  .inner {
    background-color: #ffffff;
    width: 40vw;
    padding: 4rem 2rem;
    border-radius: 2rem;

    .caption {
      color: #ff7235;
      font-weight: 500;
      text-align: center;
      margin-bottom: 1.5rem;
    }

    .subCaption {
      color: #8d8d8d;
      text-align: center;
    }
  }
`;

const formDataToJSON = formData => {
  let object = {};

  formData.forEach((value, key) => {
    // Reflect.has in favor of: object.hasOwnProperty(key)
    if (!Reflect.has(object, key)) {
      object[key] = value;
      return;
    }
    if (!Array.isArray(object[key])) {
      object[key] = [object[key]];
    }
    object[key].push(value);
  });

  return object;
};

function Contact(props) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    const successModal = document.querySelector('#successModal');
    const formData = new FormData(e.target);
    let data = formDataToJSON(formData);
    data.caption = props.contact_title;

    setLoading(true);

    let res = await axios.post(`${API_HOST}/contacts`, data);

    if (res && res.data && res.data.id) {
      setLoading(false);
      e.target.reset();
      successModal.classList.add('open');
      return;
    } else {
      setLoading(false);
      alert('Something went wrong.');
    }
  };

  return (
    <Container>
      <SuccessModal
        id="successModal"
        onClick={e => {
          if (e.target.id === 'successModal') {
            e.target.classList.remove('open');
          }
        }}
      >
        <div className="inner">
          <h1 className="caption">
            Message Sent
            <br />
            Successfully
          </h1>
          <p className="subCaption">
            Thank you for getting in touch with us.
            <br />
            We will get back to you shortly.
          </p>
        </div>
      </SuccessModal>
      <Wrapper>
        <Inner>
          <div className="content">
            <h1 className="heading">
              {props.contact_title
                ? props.contact_title.length
                  ? props.contact_title
                  : 'Want to do business?'
                : 'Want to do business?'}
            </h1>
            <p className="subheading">Get in touch with us</p>
            <form onSubmit={e => handleSubmit(e)}>
              {/* Note: all fields must be required */}
              <FormInput>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Full Name or Business Name"
                  required
                />
              </FormInput>
              <FormInput>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  required
                />
              </FormInput>
              <FormInput>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                />
              </FormInput>
              <FormInput>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  required
                />
              </FormInput>

              <Button type="submit" disabled={loading}>
                {loading ? <Loader /> : <span>Submit</span>}
              </Button>
            </form>
            {/* <div className="bottom">
              <a href='/'>Forgot Password</a>
              <p>
                Don't have an account?&nbsp;
                <a href="/sign-up">Sign Up</a>
              </p>
            </div> */}
          </div>
        </Inner>
      </Wrapper>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    contact_title: state.contact_title
  };
};

export default connect(mapStateToProps)(Contact);
