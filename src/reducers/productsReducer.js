import {handleActions} from 'redux-actions';
//action
import {
    addBeer,
    addFavoritesBeer,
    removeFavoritesBeer,
    searchProducts,
    allProducts,
} from "../action";
//store
import {productsState} from "../constants/defultState";

export default {
    products: handleActions({
        [addBeer]: (state, {payload = []}) => ({
            ...state,
            origin: payload,
            current: payload,
        }),
        [addFavoritesBeer]: (state, {payload = {}}) => {
            const newState = {...state, favorites: [...state.favorites]};
            newState.favorites.push(payload)
            return newState
        },
        [removeFavoritesBeer]: (state, {payload= {}}) => {
            const newState = {...state, favorites: [...state.favorites]};
            newState.favorites = newState.favorites.filter(item => item.id !== payload.id);
            return newState;
        },
        [searchProducts]:(state,{payload=[]})=>{
            return{
                ...state,
                current:payload,
            }
        },
        [allProducts]:(state)=>({...state,current:state.origin}),

    }, productsState)
}