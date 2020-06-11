import {createUseStyles} from 'react-jss';

const cardStyles =()=>({
    card:{
        display:'flex',
        '& img':{
            width:'100%',
            height: '100%',
        },
        boxShadow: '0 0 4px 1px #868686',
        padding:'20px',

    },
    cardImage:{
        width: '100px',
        height:'300px',
        marginRight: '35px',
    },
    cardDescription:{
        width:'200px',

    },
    title:{
        fontSize:'1.2rem',
        fontWeight:'bold',
        marginBottom:'10px',
    },
    icon:{
        width: '1.2em',
        height: '1.2em',
        fill: 'currentColor',
        cursor:'pointer',
    },
    active:{
        color:'pink',
    }


});
export default createUseStyles(cardStyles);