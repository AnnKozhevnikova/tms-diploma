import {handleActions} from 'redux-actions';
//action
import {addBeer} from "../action";
//store
import {productsState} from "../constants/defultState";

export default {
    products: handleActions({
        [addBeer]: (state, {payload = []}) => ({
            origin:payload,
            current:payload,
        })
    }, productsState)
}