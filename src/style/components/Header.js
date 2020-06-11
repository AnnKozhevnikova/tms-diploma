import {createUseStyles} from 'react-jss';

const HeaderStyles =()=>({
    header:{
        backgroundColor:'#037145',
        color:'#ffffff',
        padding:'20px 0 20px 0',
        '& p':{
            fontSize:'2rem',
        },
    },
    homeButton:{
        marginRight:'20px',
    },
    favoritesButton:{
        opacity:'0.5',
    }
});
export default createUseStyles(HeaderStyles);