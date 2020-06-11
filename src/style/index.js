import {createUseStyles} from 'react-jss';



const RootStyle = ()=> ({
    '@global': {
        '*':{
            margin:0,


        },
        '*, :after, :before': {
            boxSizing: ' border-box',
        },
        body: {
            backgroundColor:'#ffffff',
            color: '#000000'
        },
        '.container':{
            maxWidth:'1200px',
            margin: '0 auto',
        },
        '.row':{
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
        },
        a: {
            textDecoration: 'none',
            color: '#ffffff',
        },
        input:{
            outline:'none',
        },


    }
})

export default createUseStyles(RootStyle,{name:'Root',index:100});