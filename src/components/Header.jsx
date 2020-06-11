import React from 'react';
//styles
import useStyles from '../style/components/Header'
const Header =()=>{
    const classes=useStyles();
    return(
        <header className={classes.header}>
            <div className='row container'>
                <div>
                    <p>Beans Love Beers</p>
                </div>
                <div>
                    <a href="#" className={classes.homeButton}>Home</a>
                    <a href="#" className={classes.favoritesButton}>Favorites</a>
                </div>
            </div>

        </header>
    )
}
export default Header