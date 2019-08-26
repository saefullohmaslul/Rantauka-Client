import { combineReducers, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import promise from "redux-promise-middleware";

import houses from "../_reducers/houses";

const reducers = combineReducers({
  houses
});

const store = createStore(reducers, applyMiddleware(logger, promise));

export default store;
