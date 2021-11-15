import React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({children, ...rest}) => {

    const {user, admin, isLoading} = useAuth();

    if(isLoading)
    {
        return <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                </Box> 
    }

    return (
        <Route
            {...rest}

            render={({location}) => user.email || admin ? children : <Redirect
                to={{
                    pathname: '/',
                    state: {from: location}
                }}
            >

            </Redirect>}
        >

        </Route>
    );
};

export default AdminRoute;