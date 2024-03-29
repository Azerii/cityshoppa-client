import React, { useState } from 'react';
import styled from 'styled-components';

import google from '../assets/auth/google.svg';
import facebook from '../assets/auth/facebook.svg';
// import apple from '../assets/auth/apple.svg'
import email from '../assets/auth/email.svg';

import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions';
import Loader from '../components/Loader';
import Container from '../components/Container';

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
    min-width: 40vw;
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
      text-align: center;
    }

    .subheading {
      font-size: 150%;
      text-align: center;

      &.or {
        text-align: center;
        width: 40%;
      }
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

const SigninItem = styled.a`
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
  }
`;

const FormInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 1px solid #666666;
  border-radius: 2rem;
  margin-bottom: 1rem;
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

function SignIn(props) {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    await props.loginUser({
      identifier: email,
      password: password
    });

    setLoading(false);
  };

  const toggleShowPassword = id => {
    const target = document.querySelector(`#${id}`);

    if (target.type === 'password') {
      target.type = 'text';
      setShowPassword(true);
    } else {
      target.type = 'password';
      setShowPassword(false);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Inner>
          <div className="content">
            <h1 className="heading">Welcome</h1>
            <p className="subheading">Sign In To Your Account</p>

            <Route exact path="/sign-in">
              <div className="row single">
                <SigninItem href="https://api.cityshoppa.com/connect/google">
                  <div className="imgWrapper">
                    <img src={google} alt="" />
                  </div>
                  <p>Sign in with Google</p>
                </SigninItem>
                {/* <SigninItem href='https://cityshoppa.herokuapp.com/connect/facebook'>
                                <div className='imgWrapper'><img src={facebook} alt='' /></div>
                                <p>Sign in with Facebook</p>
                            </SigninItem> */}
              </div>
              <div className="row single">
                {/* <SigninItem href='https://cityshoppa.herokuapp.com/connect/google'>
                                <div className='imgWrapper'><img src={google} alt='' /></div>
                                <p>Sign in with Google</p>
                            </SigninItem> */}
                <SigninItem href="https://api.cityshoppa.com/connect/facebook">
                  <div className="imgWrapper">
                    <img src={facebook} alt="" />
                  </div>
                  <p>Sign in with Facebook</p>
                </SigninItem>
              </div>
              <div className="row single">
                {/* <SigninItem href='/'>
                                <div className='imgWrapper'><img src={apple} alt='' /></div>
                                <p>Sign in with Apple</p>
                            </SigninItem> */}
                {/* <p className='subheading or'>Or</p> */}
                <SigninItem href="/sign-in/local">
                  <div className="imgWrapper">
                    <img src={email} alt="" />
                  </div>
                  <p>Sign in with Email</p>
                </SigninItem>
              </div>
            </Route>
            <Route exact path="/sign-in/local">
              <form onSubmit={e => handleSubmit(e)}>
                {/* Note: all fields must be required */}
                <SigninItem href="/sign-in/local">
                  <div className="imgWrapper">
                    <img src={email} alt="" />
                  </div>
                  <p>Sign in with Email</p>
                </SigninItem>
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

                <Button type="submit">
                  {loading ? <Loader /> : <span>Sign In</span>}
                </Button>
              </form>
            </Route>
            <div className="bottom">
              {/* <a href='/'>Forgot Password</a> */}
              <p>
                Don't have an account?&nbsp;
                <a href="/sign-up">Sign Up</a>
              </p>
            </div>
          </div>
        </Inner>
      </Wrapper>
    </Container>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: cred => dispatch(loginUser(cred))
  };
};

export default connect(null, mapDispatchToProps)(SignIn);
