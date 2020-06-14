import React, {useState,useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux";
import ClassNames from 'classnames';
//styles
import useStyles from '../style/components/Card';
//action
import {addFavoritesBeer,removeFavoritesBeer} from "../action";

const Card=({product})=>{
    const classes=useStyles()
    const dispatch=useDispatch();
    const favorites=useSelector(store=>store.products.favorites)
    const [active,setActive]=useState({status: false,loader:false});
    useEffect(()=>{
        if(favorites.find(item=>item.id===product.id)){
            setActive({status:true,loader:false});
        }
    },[]);
    useEffect(()=>{
        if(active.loader){
            if(active.status){
                dispatch(addFavoritesBeer(product));
            }else {
                dispatch(removeFavoritesBeer(product));
            }
        }
    },[active])
    const handleClick=()=>{
        setActive(prevState => ({status:!prevState.status,loader:true}));
    }
    return(
        <div className={classes.card}>
            <div className={classes.cardImage}>
                <img src={product.image_url} alt="bear"/>
            </div>
            <div className={classes.cardDescription}>
                <p className={classes.title}>{product.name}</p>
                <p>{product.description}</p>
            </div>
            <svg  onClick={handleClick} viewBox="0 0 576 512" className={ClassNames(classes.icon,{[classes.active]:active.status})}>
                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
            </svg>
        </div>
    )
}
export default Card;