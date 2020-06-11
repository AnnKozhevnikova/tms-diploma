import React from 'react';
import {useSelector} from "react-redux";
//styles
import useStyles from '../style/components/Main'
//COMPONENTS
import Card from "./Card";
const Main=()=>{
    const classes=useStyles();
    const products=useSelector(store=>store.products.current)||[];
    return(
        <div className='container'>
            <div className={classes.main}>
                {
                    products.map(item=>(
                        <Card  key={item.id} product={item}/>
                    ))
                }
            </div>
        </div>
    )
}
export default Main;