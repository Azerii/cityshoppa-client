import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import Container from '../components/Container';
import { getUser, setToken } from '../redux/actions';

// const backendUrl = process.env.REACT_APP_BACKEND_URL;
const backendUrl = 'https://api.cityshoppa.com';

const LoginRedirect = props => {
  const [text, setText] = useState('Loading...');
  const location = useLocation();
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    // Successfully logged with the provider
    // Now logging with strapi by using the access_token (given by the provider) in props.location.search
    fetch(`${backendUrl}/auth/${params.provider}/callback${location.search}`)
      .then(res => {
        if (res.status !== 200) {
          throw new Error(`Couldn't login to server. Status: ${res.status}`);
        }
        return res;
      })
      .then(res => res.json())
      .then(res => {
        // Successfully logged with Strapi
        // Now saving the jwt to use it for future authenticated requests to Strapi
        // localStorage.setItem('jwt', res.jwt);
        // localStorage.setItem('username', res.user.username);

        props.setToken(res.jwt);
        props.getUser();

        setText(
          'You have been successfully logged in. You will be redirected in a few seconds...'
        );
        setTimeout(() => history.push('/'), 3000); // Redirect to homepage after 3 sec
      })
      .catch(err => {
        console.log(err);
        setText('An error occurred.');
      });
    // eslint-disable-next-line
  }, [history, location.search, params.provider]);

  return (
    <Container>
      <p>{text}</p>
    </Container>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    setToken: token => dispatch(setToken(token)),
    getUser: () => dispatch(getUser)
  };
};

export default connect(null, mapDispatchToProps)(LoginRedirect);
