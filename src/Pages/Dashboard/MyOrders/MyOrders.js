import { Button, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const {user} = useAuth();

    const [myOrders, setMyOrders] = useState([]);

    //fetching my orders
    useEffect( () => {
        const url = `https://polar-earth-13486.herokuapp.com/myOrders?email=${user.email}`;
        fetch(url)
        .then( res => res.json())
        .then( data => setMyOrders(data))
    } , [user.email]);

    //Cancle an order
    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure to cancel the order?');
        if(proceed) {
            const url = `https://polar-earth-13486.herokuapp.com/myOrders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0)
                {
                    alert('Cancelled!!!');
                    const remainingOrders = myOrders.filter(myOrder => myOrder._id !== id);
                    setMyOrders(remainingOrders);
                }                
            })
        }
    } 

    return (
        <Container>
            <Grid container spacing={0} sx={{px: 5}}>
                <Grid item xs={12}>
                <Typography variant="h4" gutterBottom component="div" sx={{fontWeight: 'bold', my: 4}}>
                        My Orders
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <TableContainer component={Paper}>
                    <Table aria-label="appointment table">
                        <TableHead sx={{backgroundColor: '#C3073F'}}>
                            <TableRow>
                                <TableCell align="center" sx={{fontWeight: 'bold', fontSize: 16, color: 'white'}}>Product Name</TableCell>
                                <TableCell align="center" sx={{fontWeight: 'bold', fontSize: 16, color: 'white'}}>Status</TableCell>
                                <TableCell align="center" sx={{fontWeight: 'bold', fontSize: 16, color: 'white'}}>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {myOrders.map((row) => (
                            <TableRow
                            key={row._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell align="center" component="th" scope="row">
                                {row.orderedProductName}
                            </TableCell>
                            <TableCell align="center">{row.status}</TableCell>
                            <TableCell align="center"> <Button sx={{color: 'red'}} onClick={()=> handleDeleteOrder(row._id)}> <DeleteIcon></DeleteIcon> </Button> </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Container>
    );
};

export default MyOrders;