import {createActions} from 'redux-actions';


export const {
    addBeer,
    addFavoritesBeer,
    removeFavoritesBeer,
    searchProducts,
    allProducts,
} = createActions(
    'ADD_BEER',
    'ADD_FAVORITES_BEER',
    'REMOVE_FAVORITES_BEER',
    'SEARCH_PRODUCTS',
    'ALL_PRODUCTS',
);