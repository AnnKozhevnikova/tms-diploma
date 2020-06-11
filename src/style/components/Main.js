import {createUseStyles} from 'react-jss';

const mainStyles =()=>({
    main:{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap:'1em',
        paddingBottom:'30px',
    }


});
export default createUseStyles(mainStyles);