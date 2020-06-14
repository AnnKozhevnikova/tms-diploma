import React from 'react';
import {useSelector} from "react-redux";
//styles
import useStyles from '../style/components/Main'
//COMPONENTS
import Card from "./Card";
//router
import {
    Switch,
    Route
} from "react-router-dom";
const Main=()=>{
    const classes=useStyles();
    const products=useSelector(store=>store.products)||[];
    return(
        <div className='container'>
            <div className={classes.main}>
                <Switch>
                    <Route path="/" exact>
                        {
                            products.current.map(item=>(
                                <Card  key={item.id} product={item}/>
                            ))
                        }
                    </Route>
                    <Route path="/favorites">
                        {products.favorites.length
                            ?
                            products.favorites.map(item=>(
                                <Card  key={item.id} product={item}/>
                            ))
                            :
                            <p>Empty Favorites</p>
                        }
                    </Route>
                </Switch>
            </div>
        </div>
    )
}
export default Main;