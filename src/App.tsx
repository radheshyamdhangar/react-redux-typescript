import React from 'react';
import './App.css';
import SignInSide from './components/login/index';
import SignUp from './components/sign-up/index';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/SignUp">Foo</Link>           
          </nav>                  
          <Switch>
          
            <Route exact={true} path="/" component={SignInSide} />            
            <Route path="/signup" component={SignUp} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
