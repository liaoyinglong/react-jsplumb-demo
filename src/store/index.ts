import { applyMiddleware, compose, createStore } from "redux";
import { createEpicMiddleware } from "redux-observable";

import { RootEpics } from "./epics";
import RootReducers, { RootState } from "./reducers";

const composeEnhancers =
  (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const epicMiddleware = createEpicMiddleware<any, any, RootState>();

const store = createStore(
  RootReducers,
  composeEnhancers(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(RootEpics);

export const RootStore = store;
