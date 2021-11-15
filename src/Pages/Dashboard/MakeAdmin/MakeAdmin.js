import React, { useState } from 'react';
import { Button, Container, Grid, TextField, Typography, Alert } from '@mui/material';
import { Box } from '@mui/system';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {

    const [success, setSuccess] = useState(false);

    const { register, handleSubmit, reset } = useForm();

    const handleMakeAdmin = data => {
        const user = data;
        fetch('https://polar-earth-13486.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount) {
                setSuccess(true);
                reset();
            }
        })
    }

    return (
        <Container>
            <Grid container spacing={0} sx={{justifyContent:'center'}}>
                <Grid item xs={12}>
                <Typography variant="h4" gutterBottom component="div" sx={{fontWeight: 'bold', my: 4}}>
                        Make a new admin
                    </Typography>
                </Grid>
                    
                <Grid item xs={12} md={6}>
                {success && <Alert severity="success">Admin Added</Alert>}
                <Box onSubmit={handleSubmit(handleMakeAdmin)} component="form" sx={{ '& > :not(style)': { m: 1, width: '100%', }, }} autoComplete="off" >
                    <TextField  label="Email" variant="filled" type="email" {...register("email", { required: true })} /> <br />
                    <Button type="submit" variant="contained">Add</Button> 
                </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default MakeAdmin;