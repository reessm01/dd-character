import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import { Navigation } from './components';
import { GenericSearchPage } from './pages';

function App() {
    require('dotenv').config();

    return (
        <Switch>
            <Route
                exact
                path="/"
                render={() => (
                    <div className="App">
                        <Navigation />
                        <GenericSearchPage />
                    </div>
                )}
            />
        </Switch>
    );
}

export default App;
