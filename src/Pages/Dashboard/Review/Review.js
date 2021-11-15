import { TextareaAutosize } from '@material-ui/core';
import { Button, Container, Grid, MenuItem, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import useProducts from '../../../hooks/useProducts';

const Review = () => {

    const {user} = useAuth();

    const [products] = useProducts();

    const { register, handleSubmit, reset } = useForm();

    const [selectedProduct, setSelectedProduct] = React.useState('');

    const handleChange = (event) => {
        setSelectedProduct(event.target.value);
    };

    const onSubmit = data => {    
        fetch('https://polar-earth-13486.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            data.insertedId ? alert('Review added!!!') : alert('Review not added!!!');
            reset();
        })
    };

    return (
        <Container>
            <Grid container spacing={0} display="flex" sx={{justifyContent:'center'}}>
                    <Grid item xs={12}>
                    <Typography variant="h4" gutterBottom component="div" sx={{fontWeight: 'bold', my: 4}}>
                            Add Review
                        </Typography>
                    </Grid>
                        
                    <Grid item xs={12} sx={{justifyContent:'center'}}>
                    <Box onSubmit={handleSubmit(onSubmit)} component="form" sx={{ '& > :not(style)': { m: 1, width: '40%', }, }} noValidate autoComplete="off" >
                        <TextField  label="Name" variant="filled" defaultValue={user.displayName} type="text" {...register("name", { required: true })} /> <br />
                        <TextareaAutosize minRows={2} placeholder="Write your review" type="text" {...register("comment", { required: true })} /> <br />
                        <TextField label="Rate" variant="filled" type="number" InputProps={{ inputProps: { min: 0, max: 5 } }} {...register("rating", { required: true })} /> <br />
                        <TextField select label="Product Name" {...register("productName", { required: true })} value={selectedProduct} onChange={handleChange} >
                            {products.map( product => (
                                <MenuItem key={product._id} value={product.modelName}>
                                {product.modelName}
                                </MenuItem>
                            ))}
                        </TextField> <br />
                        <Button type="submit" variant="contained">Submit</Button>
                    </Box>
                    </Grid>
            </Grid>
      </Container>
    );
};

export default Review;