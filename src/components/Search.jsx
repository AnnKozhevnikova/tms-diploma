import React from 'react';
//styles
import useStyles from '../style/components/Search'
const Search=()=>{
    const classes=useStyles();

    return(
        <div className='container'>
            <div className={classes.search}>
                <input className={classes.searchInput} type="search" placeholder="Search for beer..."/>
                <a href="#" className={classes.searchButton} >Search</a>
            </div>
        </div>
    )
}
export default Search;