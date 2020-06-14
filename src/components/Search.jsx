import React, {useEffect,useState} from 'react';
import {useDispatch} from "react-redux";
//styles
import useStyles from '../style/components/Search';
//action
import {searchProducts} from "../action";

const Search=()=>{
    const classes=useStyles();
    const [state,setState]=useState([]);
    const dispatch=useDispatch()
    useEffect(()=>{
        if(state.length>0) {
            dispatch(searchProducts(state));
        }
        console.log(state);
    },[state])
    const search=(event)=>{
        event.preventDefault();
        fetch(`https://api.punkapi.com/v2/beers?beer_name=${event.target[0].value}`)
            .then(response => response.json())
            .then(products=>setState(products))
            .catch(err=>console.log(err));
    };

    return(
        <div className='container'>
            <div className={classes.search}>
                <form onSubmit={search} action="">
                    <input  className={classes.searchInput} type="text" placeholder="Search for beer..."/>
                    <input type="submit" value="Search" className={classes.searchButton} />
                </form>
            </div>
        </div>
    )
}
export default Search;