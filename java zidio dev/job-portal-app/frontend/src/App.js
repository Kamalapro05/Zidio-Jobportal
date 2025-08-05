import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import JobListings from './pages/JobListings';
import UserDashboard from './pages/UserDashboard';
import NotFound from './pages/NotFound';

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/jobs" component={JobListings} />
                    <Route path="/dashboard" component={UserDashboard} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;