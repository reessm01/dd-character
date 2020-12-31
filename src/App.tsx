import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';

function App() {
    require('dotenv').config();

    return (
        <Switch>
            <Route
                exact
                path="/"
                render={() => (
                    <div className="App">
                        <Navigation></Navigation>
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                            <p>
                                Edit <code>src/App.tsx</code> and save to reload.
                            </p>
                            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                                Learn React
                            </a>
                        </header>
                    </div>
                )}
            />
        </Switch>
    );
}

export default App;
