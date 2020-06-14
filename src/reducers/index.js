import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

//reducers
import productsReducer from "./productsReducer";

const reducers =persistReducer({
      key:'root',
      storage,
      whitelist:[
        'products',
      ]
    },
    combineReducers({
      ...productsReducer,
    }),
);


export default reducers;