// Libs
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import SignInSide from './components/login/index';
import SignUp from './components/sign-up/index';

// Routes
// contain all routes into a variable to be imported into index.js
const routes = (
    <Router>
        {/* If path is / then load the Home component */}       
            <Switch>
                <Route exact path="/" component={SignInSide} />
                <Route path="/signup" component={SignUp} />               
            </Switch>
        
    </Router>
);

export default routes;