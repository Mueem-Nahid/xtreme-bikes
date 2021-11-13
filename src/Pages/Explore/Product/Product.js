import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Grid, Tooltip, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {_id, modelName, category, modelDetails, imageUrl, price} = props.product;

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345}}>
                    <CardMedia
                        component="img"
                        image=  {imageUrl}
                        alt="image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {modelName}
                        </Typography>
                        <Typography gutterBottom variant="body2" color="text.secondary" component="div" sx={{fontWeight: 'bold'}}>
                        Category: {category}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {modelDetails.slice(0, 200)}
                        <Tooltip title="view more">
                            <span>.....</span>
                        </Tooltip>
                        </Typography>
                        <Typography variant="body2" sx={{fontWeight: 'bold'}} color="text.secondary">
                        Price: {price}/=
                        </Typography>
                    </CardContent>
                    <CardActions style={{justifyContent: 'center'}}>
                        <Link to={`/orderNow/${_id}`} style={{textDecoration: 'none'}}> <Button  size="small" sx={{color: '#C3073F'}}>Order Now</Button> </Link>  
                    </CardActions>
            </Card>
        </Grid>
    );
};

export default Product;