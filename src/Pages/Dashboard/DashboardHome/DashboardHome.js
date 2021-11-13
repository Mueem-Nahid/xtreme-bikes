import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import useAuth from '../../../hooks/useAuth';

const DashboardHome = () => {
    const {user, admin} = useAuth(); 
    return (
        <Container>
            <Grid container spacing={2} sx={{my: 5}}>
            <Grid item xs={12}>
            <Typography variant="h4" gutterBottom component="div"> Hello { admin ? `Admin, ${user.displayName}. You can control everything from here` : `User, ${user.displayName}. You can manage your profile from here`} </Typography>
            </Grid>
            </Grid>
        </Container>
    );
};

export default DashboardHome;