import {createUseStyles} from 'react-jss';

const searchStyles =()=>({
    searchInput:{
        height: '50px',
        minWidth: '500px',
        fontSize:'1.5rem',
        border: '1px solid #767676 ',
    },
    searchButton:{
        minWidth: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#003efa',
        fontSize:'1.5rem',
        border:'1px solid #003efa',
        color:'#ffffff',
        cursor:'pointer',

    },
    search:{
        paddingTop:'100px',
        paddingBottom: '20px',
        display:'flex',
        justifyContent:'center',
        "& form":{
            display:'flex',
        }


    }


});
export default createUseStyles(searchStyles);