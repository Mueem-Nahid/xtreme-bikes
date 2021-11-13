import React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import useAuth from '../hooks/useAuth';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({children, ...rest}) => {

    const {user, isLoading} = useAuth();

    if(isLoading)
    {
        return <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                </Box> 
    }

    return (
        <Route
            {...rest}

            render={({location}) => user.email ? children : <Redirect
                to={{
                    pathname: '/login',
                    state: {from: location}
                }}
            >

            </Redirect>}
        >

        </Route>
    );
};

export default PrivateRoute;