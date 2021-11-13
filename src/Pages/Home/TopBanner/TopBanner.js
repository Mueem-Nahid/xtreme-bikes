import { Container, Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/system';
import React from 'react';
import topBannerImage from '../../../images/topBannerImage2.png';

const verticalCenter = {
    display: 'flex',
    alignItems: 'center', 
}

const TopBanner = () => {
    return (
        <Box style={{backgroundColor: '#1A1A1D'}}>
            <Container >
                <Grid container spacing={2} >
                    <Grid item xs={12} md={6} style={{...verticalCenter}}>
                        <img src={topBannerImage} style={{width: '100%'}} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6} style={verticalCenter}>
                        <Typography variant="h4" component="div" gutterBottom style={{color: '#C3073F', fontWeight: 'bold', lineHeight: '45px'}}>
                            <span style={{color: 'white'}}>Life is like riding a bicycle. To keep your balance you must keep moving and keep moving faster with our</span> <span style={{fontWeight: 'bolder', letterSpacing: '2px'}}>Xtreme Bikes</span>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default TopBanner;