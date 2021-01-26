import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Layout from './containers/Layout';
import Landing from './containers/Landing';
import SignUp from './containers/SignUp';
import SignIn from './containers/SignIn';
import Container from './components/Container';
import LoginRedirect from './containers/LoginRedirect';
import Categories from './containers/Categories';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <div className="App">
            <Layout>
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/categories" component={Categories} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/sign-in" component={SignIn} />
                <Route
                  path="/auth/:provider/callback"
                  component={LoginRedirect}
                />
                <Route
                  component={() => (
                    <Container>
                      <h1>Page Not Found.</h1>
                    </Container>
                  )}
                />
              </Switch>
            </Layout>
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
