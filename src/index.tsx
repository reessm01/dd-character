import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
// @ts-ignore
import { configureStore, history } from './configureStore';
import { HashRouter, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

export const store = configureStore();
const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_API,
    cache: new InMemoryCache(),
});

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Route component={App} />
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
