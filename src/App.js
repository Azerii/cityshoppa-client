import React from 'react'
import './App.css';
import Layout from './containers/Layout';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './containers/Landing';
import SignUp from './containers/SignUp';
import SignIn from './containers/SignIn';

function App() {
  return (
    <Router>
      <div className='App'>
        <Layout>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/sign-up' component={SignUp} />
            <Route path='/sign-in' component={SignIn} />
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
