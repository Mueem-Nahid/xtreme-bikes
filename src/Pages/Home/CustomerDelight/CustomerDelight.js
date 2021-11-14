import { Box } from '@mui/system';
import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import freeShipping from '../../../images/free-shipping.png'
import clock from '../../../images/clock.png'
import pay from '../../../images/secure.png'
import emi from '../../../images/emi.png'
import delivery from '../../../images/delivery.png'
import store from '../../../images/store.png'

const CustomerDelight = () => {
    return (
        <Box  sx={{}}>
            <Container>
                <Typography variant="h4" sx={{ fontWeight: 'bold', my: 4, color: '#C3073F'}} gutterBottom component="div">Customer Delight</Typography>
                <Box>
                    <Grid container spacing={2} sx={{p:2}}>
                        <Grid item xs={12} md={4} sx={{mt:2}}>
                            <img src={freeShipping} alt="" />
                            <Typography variant="overline" display="block" gutterBottom>Free Shipping</Typography>
                        </Grid>
                        <Grid item xs={12} md={4} sx={{mt:2}}>
                            <img src={clock} alt="" />
                            <Typography variant="overline" display="block" gutterBottom>24 Hr Dispatch</Typography>
                        </Grid>
                        <Grid item xs={12} md={4} sx={{mt:2}}>
                            <img src={pay} alt="" />
                            <Typography variant="overline" display="block" gutterBottom>Secure Payment</Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Box>
                    <Grid container spacing={2} sx={{p:2}}>
                        <Grid item xs={12} md={4} sx={{mt:2}}>
                            <img src={emi} alt="" />
                            <Typography variant="overline" display="block" gutterBottom>EMI Options</Typography>
                        </Grid>
                        <Grid item xs={12} md={4} sx={{mt:2}}>
                            <img src={delivery} alt="" />
                            <Typography variant="overline" display="block" gutterBottom>Assembly at Your Doorstep</Typography>
                        </Grid>
                        <Grid item xs={12} md={4} sx={{mt:2}}>
                            <img src={store} alt="" />
                            <Typography variant="overline" display="block" gutterBottom>In-Store Pickup Option</Typography>
                        </Grid>
                        </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default CustomerDelight;