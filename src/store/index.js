import {createStore} from "redux";
import { persistStore} from 'redux-persist'

import {devToolsEnhancer} from 'redux-devtools-extension'

import reducers from "../reducers";

export const store=createStore(
    reducers,
    devToolsEnhancer()
);

export const persistor = persistStore(store);