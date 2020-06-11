import {combineReducers} from 'redux';

//reducers
import productsReducer from "./productsReducer";

const reducers = combineReducers({
  ...productsReducer,
})

export default reducers;