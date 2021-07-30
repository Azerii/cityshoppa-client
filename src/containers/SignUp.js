import React, { useState } from 'react';
import styled from 'styled-components';

import side_img from '../assets/auth/side_img.png';
import google from '../assets/auth/google.svg';
import facebook from '../assets/auth/facebook.svg';
// import apple from '../assets/auth/apple.svg'
import email from '../assets/auth/email.svg';

import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../redux/actions';
import Loader from '../components/Loader';
import Container from '../components/Container';

const Wrapper = styled.div`
  padding: 2rem 0;
`;

const Inner = styled.div`
  display: flex;
  width: 70%;
  min-height: 30vh;
  margin: auto;
  margin-bottom: 3rem;
  border: 1px solid #666666;
  border-radius: 2rem;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: unset;
    min-width: 70%;
    border: none;
    border-radius: unset;
  }

  .contentLeft {
    width: 55%;
    padding: 2rem 0;

    @media screen and (max-width: 768px) {
      width: 100%;
      padding: 0;
    }

    .inner {
      width: 70%;
      height: 100%;
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;

      @media screen and (max-width: 768px) {
        width: 100%;
        align-items: center;
      }

      .heading {
        font-weight: 500;
      }

      .subheading {
        font-size: 150%;

        &.or {
          text-align: center;
          width: 50%;
        }
      }

      form {
        width: 100%;

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
    }
  }

  .contentRight {
    width: 45%;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const SignupItem = styled.a`
  display: flex;
  width: fit-content;
  align-items: center;
  margin: 1.5rem 0;
  color: #000000;

  .imgWrapper {
    display: flex;
    align-items: center;
    width: 1.5rem;
    margin-right: 1rem;

    img {
      height: 1.5rem;
    }
  }

  p {
    font-size: 120%;

    span {
      color: #ff7235;
      font-weight: 500;
    }
  }
`;

const FormInput = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid #666666;
  border-radius: 2rem;
  margin-bottom: 1rem;
  padding: 1rem;

  input {
    width: 100%;
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

function SignUp(props) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    const username = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#confirmPassword').value;

    if (password !== confirmPassword) {
      alert('The passwords must match!');
    } else if (password.length < 8) {
      alert('The passwords must be at least 8 characters long');
    } else {
      await props.registerUser({
        username,
        email,
        password
      });
    }

    setLoading(false);
  };

  const toggleShowPassword = id => {
    const target = document.querySelector(`#${id}`);

    if (target.type === 'password') {
      target.type = 'text';
      id === 'password' ? setShowPassword(true) : setShowConfirmPassword(true);
    } else {
      target.type = 'password';
      id === 'password'
        ? setShowPassword(false)
        : setShowConfirmPassword(false);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Inner>
          <div className="contentLeft">
            <div className="inner">
              <h1 className="heading">Welcome</h1>
              <p className="subheading">Create Your Account</p>

              <Route exact path="/sign-up">
                <SignupItem href="https://api.cityshoppa.com/connect/google">
                  <div className="imgWrapper">
                    <img src={google} alt="" />
                  </div>
                  <p>Sign up with Google</p>
                </SignupItem>
                <SignupItem href="https://api.cityshoppa.com/connect/facebook">
                  <div className="imgWrapper">
                    <img src={facebook} alt="" />
                  </div>
                  <p>Sign up with Facebook</p>
                </SignupItem>
                {/* <SignupItem href='/'>
                                <div className='imgWrapper'><img src={apple} alt='' /></div>
                                <p>Sign up with Apple</p>
                            </SignupItem> */}
                {/* <p className='subheading or'>Or</p> */}
                <SignupItem href="/sign-up/local">
                  <div className="imgWrapper">
                    <img src={email} alt="" />
                  </div>
                  <p>Sign up with Email</p>
                </SignupItem>
                <SignupItem href="/sign-in">
                  <p>
                    Already have an account? <span>Sign In</span>
                  </p>
                </SignupItem>
              </Route>
              <Route exact path="/sign-up/local">
                <SignupItem href="/sign-up/local">
                  <div className="imgWrapper">
                    <img src={email} alt="" />
                  </div>
                  <p>Sign up with Email</p>
                </SignupItem>

                <form onSubmit={e => handleSubmit(e)}>
                  {/* <div className='names'>
                                    <div>
                                        <FormInput>
                                            <input type='text' id='firstName' name='firstName' placeholder='First Name' required />
                                        </FormInput>
                                    </div>
                                    <div>
                                        <FormInput>
                                            <input type='text' id='lastName' name='lasstName' placeholder='Last Name' required />
                                        </FormInput>
                                    </div>
                                </div> */}
                  <FormInput>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Full Name"
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
                      className="password"
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                      required
                    />
                    <p onClick={() => toggleShowPassword('password')}>
                      {showPassword ? 'Hide' : 'Show'}
                    </p>
                  </FormInput>
                  <FormInput>
                    <input
                      className="password"
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      required
                    />
                    <p onClick={() => toggleShowPassword('confirmPassword')}>
                      {showConfirmPassword ? 'Hide' : 'Show'}
                    </p>
                  </FormInput>

                  <Button type="submit">
                    {loading ? <Loader /> : <span>Sign Up</span>}
                  </Button>
                </form>
              </Route>
            </div>
          </div>
          <div className="contentRight lg">
            <img src={side_img} alt="" />
          </div>
        </Inner>
      </Wrapper>
    </Container>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    registerUser: cred => dispatch(registerUser(cred))
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
