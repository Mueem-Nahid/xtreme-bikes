import { Card, CardContent, Grid, Rating, Typography } from '@mui/material';
import React from 'react';

const Review = (props) => {
    const {name, comment, rating, productName} = props.review;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card variant="outlined" sx={{ maxWidth: 345}}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {name}
                        </Typography>
                        <Typography gutterBottom variant="body2" color="text.secondary" component="div" sx={{fontWeight: 'bold'}}>
                        Product: {productName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {comment}
                        </Typography>
                        <Rating name="read-only" value={Number(rating)} readOnly />
                    </CardContent>
            </Card>
        </Grid>
    );
};

export default Review;