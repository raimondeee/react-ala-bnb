import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";

const store = createStore(
  reducers,

  /* preloadedState, */

  composeWithDevTools(
    applyMiddleware(
      // thunk
      s => next => action => {
        typeof action === "function"
          ? action(s.dispatch, s.getState)
          : next(action);
      },
      // promise
      s => next => action => {
        if (typeof action.then !== "function") {
          return next(action);
        }
        return Promise.resolve(action).then(s.dispatch);
      },
      // logger
      () => next => action => {
        console.groupCollapsed(action.type);
        console.info("dispatching", action);
        let result = next(action);
        console.log("next state", store.getState());
        console.groupEnd(action.type);
        return result;
      }
    )
  )
);

export default store;
