import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { Grid, Typography } from '@mui/material';
import Product from './Product/Product';
import useProducts from '../../hooks/useProducts';
import Footer from '../Home/Home/Footer/Footer';

const Explore = () => {
    const [products] = useProducts();
    return (
        <React.Fragment>
            <CssBaseline />
            <Box sx={{ flexGrow: 1}}>
                <Container>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', my: 2, color: '#C3073F'}} gutterBottom component="div">
                        Explore our Bikes
                    </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }}>
                    {
                        products.map(product => <Product 
                        key={product._id} product={product}></Product>)
                    }
                </Grid>
                </Container>
            </Box>
            <Footer></Footer>
        </React.Fragment>
    );
};

export default Explore;