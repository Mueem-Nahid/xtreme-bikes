import React, { useEffect, useState } from 'react';
import { Container, CssBaseline, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect( () => {
        fetch('https://polar-earth-13486.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, []);

    return (
        <React.Fragment>
            <CssBaseline />
            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', my: 5, color: '#C3073F'}} gutterBottom component="div">
                        Client's reviews
                    </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }}>
                    {
                        reviews.map(review => <Review
                        key={review._id} review={review}></Review>)
                    }
                </Grid>
                </Container>
            </Box>
        </React.Fragment>
    );
};

export default Reviews;