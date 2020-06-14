import React,{useState,useEffect} from 'react';
import {useDispatch} from "react-redux";
import ClassNames from 'classnames';
import { useHistory } from "react-router-dom";
//action
import {allProducts} from "../action";


//styles
import useStyles from '../style/components/Header'
const Header =()=>{
    const classes=useStyles();
    const [active,setActive]=useState(true);
    const  history=useHistory();
    const dispatch=useDispatch();
    useEffect(()=>{
        if(history.location.pathname==='/favorites'){
            setActive(false);
        }
    },[])
    const home=(event)=>{
        event.preventDefault();
        setActive(true);
        history.push('/');
        dispatch(allProducts());
    }
    const favorites=(event)=>{
        event.preventDefault();
        setActive(false);
        history.push('/favorites');

    }


    return(
        <header className={classes.header}>
            <div className='row container'>
                <div>
                    <p>Beans Love Beers</p>
                </div>
                <div>
                    <a href="#" onClick={home} className={ClassNames(classes.homeButton,{[classes.active]:!active})}>Home</a>
                    <a href="#" onClick={favorites} className={ClassNames({[classes.active]:active})}>Favorites</a>
                </div>
            </div>

        </header>
    )
}
export default Header