import React from 'react';
import { Button, Container, Grid, TextField, Typography, Alert } from '@mui/material';
import { Box } from '@mui/system';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {

    const {createUser, error} = useAuth();

    const { register, handleSubmit, reset } = useForm();

    const handleRegistration = data => {
        createUser( data?.userName, data?.email, data?.password);
        reset();
        //e.preventDefault();
    };

    return (
        <Container>
            <Grid container spacing={0} display="flex" sx={{justifyContent:'center'}}>
                <Grid item xs={12}>
                <Typography variant="h4" gutterBottom component="div" sx={{fontWeight: 'bold', my: 4}}>
                    Register    
                </Typography>
                </Grid>
                    
                <Grid item xs={12} md={6}>
                    
                <Box onSubmit={handleSubmit(handleRegistration)} component="form" sx={{ '& > :not(style)': { my: 1, width: '100%'},}} autoComplete="off" >
                    {
                        error && <Alert severity="info"> {error} </Alert>
                    }
                    <TextField label="User Name" variant="filled" type="text" {...register("userName", { required: true })} /> <br />
                    <TextField  label="Email" variant="filled" type="email" {...register("email", { required: true })} /> <br />
                    <TextField  label="Password" variant="filled" type="password" {...register("password", { required: true })} /> <br />
                    <Button type="submit" variant="contained">Register</Button>
                </Box>

                <Link to="/login" style={{textDecoration: 'none'}}>
                    <Button variant="text" sx={{m:2, textTransform: 'capitalize'}}>Already registered? Click here to login</Button>
                </Link>
                </Grid>
            </Grid>
      </Container>
    );
};

export default Register;