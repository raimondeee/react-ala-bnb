/* eslint-disable */

import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

const LOG = process.env.NODE_ENV !== 'production';

const store = createStore(
  reducers,

  /* preloadedState, */

  applyMiddleware(
    // thunk
    s => next => action => {
      typeof action === 'function'
        ? action(s.dispatch, s.getState)
        : next(action);
    },
    // promise
    s => next => action => {
      if (typeof action.then !== 'function') {
        return next(action);
      }
      return Promise.resolve(action).then(s.dispatch);
    },
    // logger
    () => next => action => {
      LOG && console.groupCollapsed(action.type);
      LOG && console.info('dispatching', action);
      const result = next(action);
      LOG && console.log('next state', store.getState());
      LOG && console.groupEnd(action.type);
      return result;
    },
  ),
);

export default store;
