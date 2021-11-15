import { Button, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import useProducts from '../../../hooks/useProducts';

const ManageProducts = () => {

    const [products, setProducts] = useProducts();


    //Delete a product
    const handleDeleteProduct = id => {
        const proceed = window.confirm('Are you sure to cancel the product?');
        if(proceed) {
            const url = `https://polar-earth-13486.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0)
                {
                    alert('Product Deleted!!!');
                    const remainingProducts = products.filter(product => product._id !== id);
                    setProducts(remainingProducts);
                }                
            })
        }
    } 

    return (
        <Container>
            <Grid container spacing={0} sx={{px: 5}}>
                <Grid item xs={12}>
                    <Typography variant="h4" gutterBottom component="div" sx={{fontWeight: 'bold', my: 4}}>
                        Manage Products
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <TableContainer component={Paper}>
                    <Table aria-label="appointment table">
                        <TableHead sx={{backgroundColor: '#C3073F'}}>
                            <TableRow>
                                <TableCell align="center" sx={{fontWeight: 'bold', fontSize: 16, color: 'white'}}>Image</TableCell>
                                <TableCell align="center" sx={{fontWeight: 'bold', fontSize: 16, color: 'white'}}>Model Name</TableCell>
                                <TableCell align="center" sx={{fontWeight: 'bold', fontSize: 16, color: 'white'}}>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {products.map((row) => (
                            <TableRow
                            key={row._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell align="center" component="th" scope="row">
                                <img src={row.imageUrl} style={{width: "100px", height: "80px"}} alt="" />
                            </TableCell>
                            <TableCell align="center">{row.modelName}</TableCell>
                            <TableCell align="center"> <Button sx={{color: 'red'}} onClick={()=> handleDeleteProduct(row._id)}> <DeleteIcon></DeleteIcon> </Button> </TableCell>
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

export default ManageProducts;