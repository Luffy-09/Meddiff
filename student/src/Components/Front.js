import { Box, makeStyles } from "@material-ui/core";

import Image from './../assets/student-management-system.png';

const useStyle = makeStyles( {
    image: {
        width: '60%',
        height: '50%',
        margin: '5% 0 0 20%'
    }
}); 

const Front = () => {

    const style = useStyle();

    return (
        <Box style={{display: 'flex'}}>
            <img src={Image} className={style.image}></img>
        </Box>
    );
};

export default Front;