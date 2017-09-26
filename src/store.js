import {createStore, combineReducers, applyMiddleware} from 'redux';
import createHistory from 'history/createBrowserHistory';
import {routerReducer, routerMiddleware} from 'react-router-redux';
import * as reducers from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


export const history = createHistory();

const middleware = routerMiddleware(history);

const reducer = combineReducers({
  ...reducers,
  router: routerReducer
});

export default function configureStore() {
  return createStore(
    reducer,
    applyMiddleware(middleware, thunk, logger)
  )
}
