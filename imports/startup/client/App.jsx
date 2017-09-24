import React from 'react';
import { Route } from 'react-router';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { ConnectedRouter, routerMiddleware, routerReducer } from 'react-router-redux';

import reducers from 'imports/store/reducers';
import { About, Home } from 'imports/ui/pages';

const history = createHistory();

const middleware = routerMiddleware(history);

export const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer,
    }),
    applyMiddleware(middleware),
);

// store.dispatch(push('/foo'))
export default () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
            </div>
        </ConnectedRouter>
    </Provider>)
