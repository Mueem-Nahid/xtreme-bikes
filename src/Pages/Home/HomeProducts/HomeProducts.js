import { Button, Container, CssBaseline, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from "react-router-dom";
import useProducts from '../../../hooks/useProducts';
import Product from '../../Explore/Product/Product';

const HomeProducts = () => {

    const [products] = useProducts();

    return (
        <React.Fragment>
            <CssBaseline />
            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', my: 4, color: '#C3073F'}} gutterBottom component="div">
                        Our Bikes
                    </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }}>
                    {
                        products?.slice(0,6).map(product => <Product 
                        key={product._id} product={product}></Product>)
                    }
                </Grid>
                <Link to="/explore" style={{textDecoration: 'none'}}><Button variant="contained" sx={{my: 4}} style={{ fontWeight: 'bold', color: 'white', backgroundColor: '#C3073F'}}> Explore More &gt;&gt; </Button> </Link>
                </Container>
            </Box>
        </React.Fragment>
    );
};

export default HomeProducts;