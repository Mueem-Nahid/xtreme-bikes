import { Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useSpecificProduct from '../../hooks/useSpecificProduct';

const OrderNow = () => {

    const {user} = useAuth();

    const { register, handleSubmit, reset } = useForm();

    const {id} = useParams();

    const [specificProduct] = useSpecificProduct(id);

    const placeOrder = data => {
        data.orderedProductId = id;
        data.orderedProductName = specificProduct.modelName;
        fetch('https://polar-earth-13486.herokuapp.com/orderNow', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            result.insertedId ? alert('Order Placed!!!') : alert('Order Not Placed!!!');
            reset();
        })
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container>
                <Box >
                    <Grid container spacing={2} sx={{my: 5}}>
                        <Grid item xs={12} md={6}>
                            <Card >
                                <CardMedia
                                    component="img"
                                    image=  {specificProduct?.imageUrl}
                                    alt="image"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    {specificProduct?.modelName}
                                    </Typography>
                                    <Typography gutterBottom variant="body2" color="text.secondary" component="div" sx={{fontWeight: 'bold'}}>
                                    Category: {specificProduct?.category}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    {specificProduct?.modelDetails}
                                    </Typography>
                                    <Typography variant="body2" sx={{fontWeight: 'bold'}} color="text.secondary">
                                    Price: {specificProduct?.price}/=
                                    </Typography>
                                </CardContent>
                                <CardActions style={{justifyContent: 'center'}}>
                                    <Link to="/explore" style={{textDecoration: 'none'}}> <Button  size="small" sx={{color: '#C3073F'}}>Back</Button> </Link>  
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography gutterBottom variant="h5" component="div" sx={{my: 3}}>
                                Your Details
                            </Typography>
                            <Box onSubmit={handleSubmit(placeOrder)} component="form" sx={{ '& > :not(style)': { m: 1, width: '100%', }, }} noValidate autoComplete="off" >
                                <TextField  label="Name" variant="filled" defaultValue={user.displayName} type="text" {...register("name", { required: true })} /> <br />
                                <TextField  label="Email" variant="filled" defaultValue={user.email} type="email" {...register("email", { required: true })} /> <br />
                                <TextField  label="Address" variant="filled" type="text" {...register("address", { required: true })} /> <br />
                                <TextField  label="City" variant="filled" type="text" {...register("city", { required: true })} /> <br />
                                <input type="hidden" defaultValue='Pending' {...register("status", { required: true })}/>
                                <TextField label="Phone" variant="filled" type="number" InputProps={{ inputProps: { min: 0 } }} {...register("phone", { required: true })} /> <br />
                                <Button type="submit" variant="contained">Place Order</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </React.Fragment>
    );
};

export default OrderNow;