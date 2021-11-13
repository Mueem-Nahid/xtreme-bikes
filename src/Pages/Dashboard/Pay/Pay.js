import { Container, Grid, Typography } from '@mui/material';
import React from 'react';

const Pay = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} sx={{my: 10}}>
                <Typography gutterBottom variant="h5" component="div">
                    Payment system coming soon...
                </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Pay;