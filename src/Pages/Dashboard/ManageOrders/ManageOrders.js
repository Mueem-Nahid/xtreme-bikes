import { Button, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import useOrders from '../../../hooks/useOrders';

const ManageOrders = () => {

    const [orders, setOrders] = useOrders();

    // -------for updating ----- working-----
    const [id, setId] = useState('');
    const [value, setValue] = useState('');

    //Delete an order
    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure to cancel the order?');
        if(proceed) {
            const url = `https://polar-earth-13486.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0)
                {
                    alert('Cancelled!!!');
                    const remainingOrders = orders.filter(myOrder => myOrder._id !== id);
                    setOrders(remainingOrders);
                }                
            })
        }
    };

    //------Updating------working-----
    useEffect( () => {
        const url = `https://polar-earth-13486.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(value)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount>0) {
                alert('Update Successfull !!!');
            } else {
                alert('Failed to update !!!');
            }
        });

    }, [id, value]);

    return (
        <Container>
            <Grid>
                <Grid item xs={12}>
                <Typography variant="h4" gutterBottom component="div" sx={{fontWeight: 'bold', my: 4}}>
                        Manage Orders
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <TableContainer component={Paper}>
                    <Table aria-label="appointment table">
                        <TableHead sx={{backgroundColor: '#C3073F'}}>
                            <TableRow>
                                <TableCell align="center" sx={{fontWeight: 'bold', fontSize: 16, color: 'white'}}>Ordered by</TableCell>
                                <TableCell align="center" sx={{fontWeight: 'bold', fontSize: 16, color: 'white'}}>Email</TableCell>
                                <TableCell align="center" sx={{fontWeight: 'bold', fontSize: 16, color: 'white'}}>Model Name</TableCell>
                                <TableCell align="center" sx={{fontWeight: 'bold', fontSize: 16, color: 'white'}}>Status</TableCell>
                                <TableCell align="center" sx={{fontWeight: 'bold', fontSize: 16, color: 'white'}}>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {orders.map((row) => (
                            <TableRow
                            key={row._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell align="center" component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="center">{row.email}</TableCell>
                            <TableCell align="center">{row.orderedProductName}</TableCell>
                            <TableCell align="center">{row.status}</TableCell>
                            <TableCell align="center"> 
                                <Button size="small" sx={{color: 'green'}} onClick={()=> setValue({status:"Approved"})||setId(row?._id)}> <CheckCircleOutlineIcon></CheckCircleOutlineIcon> </Button> 
                                <Button size="small" sx={{color: 'red'}} onClick={()=> handleDeleteOrder(row._id)}> <DeleteIcon></DeleteIcon> </Button> 
                            </TableCell>
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

export default ManageOrders;