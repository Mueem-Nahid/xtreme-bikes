import React from 'react';
import { Button, Container, Grid, TextField, Typography, Alert } from '@mui/material';
import { Box } from '@mui/system';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const { register, handleSubmit } = useForm();

    const {signInUsingEmailAndPass, error, setError} = useAuth();

    const location = useLocation();

    const history = useHistory();

    const redirect_url = location.state?.from || '/';

    const handleEmailLogin = data => {
        signInUsingEmailAndPass(data?.email, data?.password)
        .then(result => {
            history.push(redirect_url);
            setError('');
        })
        .catch(error => {
            setError(error.message);
        });
    };

    return (
        <Container>
            <Grid container spacing={0} sx={{justifyContent:'center'}}>
                <Grid item xs={12}>
                <Typography variant="h4" gutterBottom component="div" sx={{fontWeight: 'bold', my: 4}}>
                        Login
                    </Typography>
                </Grid>
                    
                <Grid item xs={12} md={6}>
                {
                    error && <Alert severity="info"> {error} </Alert>
                }
                <Box onSubmit={handleSubmit(handleEmailLogin)} component="form" sx={{ '& > :not(style)': { m: 1, width: '100%', }, }} autoComplete="off" >
                    <TextField  label="Email" variant="filled" type="email" {...register("email", { required: true })} /> <br />
                    <TextField  label="Password" variant="filled" type="password" {...register("password", { required: true })} /> <br />
                    <Button type="submit" variant="contained">Login</Button> 
                </Box>
                <Link to="/register" style={{textDecoration: 'none'}}>
                    <Button variant="text" sx={{m:2, textTransform: 'capitalize'}}>New User? Click here to register</Button>
                </Link>
                </Grid>
            </Grid>
      </Container>
    );
};

export default Login;