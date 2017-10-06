import React from 'react';
import { Route } from 'react-router';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { ConnectedRouter, routerMiddleware, routerReducer } from 'react-router-redux';

import reducers from 'imports/store/reducers';
import { About, Home, Login, Register, StoreCreate, StoreList, StoreSingle } from 'imports/ui/pages';
import Header from 'imports/ui/layouts/Header.jsx';
import CustomAlert from 'imports/ui/container/CustomAlert';
import authGuard from 'imports/utils/guards/auth.guard';

const history = createHistory();

const middleware = routerMiddleware(history);

export const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer,
    }),
    applyMiddleware(middleware, thunk),
);

// store.dispatch(push('/foo'))
export default () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div className="container-fluid px-0">
                <Header/>
                <div className="container">
                    <Route path="/" exact component={Home}/>
                    <Route path="/stores" exact component={authGuard(StoreList)}/>
                    <Route path="/stores/create" component={authGuard(StoreCreate)}/>
                    <Route path="/stores/:id" component={authGuard(StoreSingle)}/>
                    <Route path="/about" component={About}/>
                    <Route name="login" path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                </div>
                <CustomAlert/>
            </div>
        </ConnectedRouter>
    </Provider>)
