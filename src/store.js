import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducers from './reducers/reducers';

const defaultState = {

};

const newRouter = routerMiddleware(browserHistory);

const middleware = applyMiddleware(promise(), thunk, newRouter);

const store = createStore(reducers, defaultState, middleware);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
