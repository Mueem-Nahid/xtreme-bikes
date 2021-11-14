import { Box } from '@mui/system';
import React from 'react';
import Footer from '../Home/Home/Footer/Footer';
import notFound from '../../images/dribbble_1.gif';

const NotFound = () => {
    return (
        <Box>
            <img src={notFound} alt="" />
            <Footer></Footer>
        </Box>
    );
};

export default NotFound;