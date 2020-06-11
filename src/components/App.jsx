import React,{useEffect} from 'react';
import {useDispatch} from "react-redux";
import {hot} from 'react-hot-loader/root';

//components
import Header from './Header';
import Search from "./Search";
import Main from "./Main";
//styles
import rootStyles from '../style'
//action
import {addBeer} from "../action";

const App=()=>{
    rootStyles();
    const dispatch=useDispatch();
    useEffect(()=>{
        fetch('https://api.punkapi.com/v2/beers')
            .then(response => response.json())
            .then(products=>
                dispatch(addBeer(products))
            )
            .catch(err=>console.log(err));
    },[])
    return(
        <>
            <Header/>
            <Search/>
            <Main/>

        </>

    )
};

export default hot(App);