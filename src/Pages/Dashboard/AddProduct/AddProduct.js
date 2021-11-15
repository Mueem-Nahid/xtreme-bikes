import { Button, Container, Grid, TextField, Typography, TextareaAutosize } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import { Box } from '@mui/system';
import { useForm } from 'react-hook-form';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    }),
  );

const AddProduct = () => {

const [open] = React.useState(false);

const { register, handleSubmit, reset } = useForm();

/*const handleDrawerOpen = () => {
    setOpen(true);
};

const handleDrawerClose = () => {
    setOpen(false);
};*/

const onSubmit = data => {
    console.log(data);
    const newProduct = data;

    fetch('https://polar-earth-13486.herokuapp.com/products', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newProduct)
    })
    .then(res => res.json())
    .then(data => {
        data.insertedId ? alert('Product added!!!') : alert('Product not added!!!');
        reset();
    })
};

    return (
        <Container>
            <Grid container spacing={0} display="flex" sx={{justifyContent:'center'}}>
                <Main open={open}>
                    <Grid item xs={12}>
                    <Typography variant="h4" gutterBottom component="div" sx={{fontWeight: 'bold'}}>
                            Add Product
                        </Typography>
                    </Grid>
                        
                    <Grid item xs={12} sx={{justifyContent:'center'}}>
                    <Box onSubmit={handleSubmit(onSubmit)} component="form" sx={{ '& > :not(style)': { m: 1, width: '40%', }, }} noValidate autoComplete="off" >
                        <TextField  label="Model Name" variant="filled" type="text" {...register("modelName", { required: true })} /> <br />
                        <TextField  label="Category" variant="filled" type="text" {...register("category", { required: true })} /> <br />
                        <TextareaAutosize minRows={4} placeholder="Model Details" type="text" {...register("modelDetails", { required: true })} /> <br />
                        <TextField label="Image URL" variant="filled" type="text" {...register("imageUrl", { required: true })} /> <br />
                        <TextField label="Price" variant="filled" type="number" min="1" {...register("price", { required: true })} /> <br />
                        <Button type="submit" variant="contained">Submit</Button>
                    </Box>
                    </Grid>
                </Main>
            </Grid>
      </Container>
    );
};

export default AddProduct;