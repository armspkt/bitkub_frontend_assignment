import { createStore, combineReducers } from "redux";
import ContentReducer from "../reducers/ContentReducer";

export default () => {
  const store = createStore(
    combineReducers({
      content: ContentReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
