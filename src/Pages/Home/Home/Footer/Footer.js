import { Box } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import React from 'react';
import { Container, Grid, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box  sx={{backgroundColor: '#1A1A1D', mt: 5, color: '#C3073F'}}>
            <Container>
                <Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sx={{mt:2}}>
                            <a href="#!" style={{padding: 4, textDecoration: 'none', color: '#C3073F'}}><FacebookIcon></FacebookIcon></a>
                            <a href="#!" style={{padding: 4, textDecoration: 'none', color: '#C3073F'}}><InstagramIcon></InstagramIcon></a>
                            <a href="#!" style={{padding: 4, textDecoration: 'none', color: '#C3073F'}}><YouTubeIcon></YouTubeIcon></a>
                        </Grid>
                    </Grid>
                </Box>
                <Box>
                    <Grid container spacing={2} sx={{mt:3}}>
                        <Grid item xs={6} md={3}>
                            <Typography variant="overline" display="block" gutterBottom> <a href="#!" style={{textDecoration: 'none', color: '#C3073F'}}>About</a> </Typography>
                            <Typography variant="caption" display="block" gutterBottom>
                                Your trusted xtreme bikes are being manufactured by Metal Industries Limited since 2030. One of the largest manufacturing conglomerates in Bangladesh. The factory is located at Dhaka and the 21,934 sq meter factory can produce 300,000 bicycles per year. 
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Typography variant="overline" display="block" gutterBottom><a href="#!" style={{textDecoration: 'none', color: '#C3073F'}}>Need help</a></Typography>
                            <Typography variant="caption" display="block" gutterBottom>
                                If you have any query, you can contuct with us through facebook, instagram. Feel free to contuct us. We will answer your question as soon as possible.
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Typography variant="overline" display="block" gutterBottom> <a href="#!" style={{textDecoration: 'none', color: '#C3073F'}}>Feedback</a> </Typography>
                            <Typography variant="caption" display="block" gutterBottom>
                                Please give us feedback after taking our service. You can give us feedback using our review system. Give us honest reviews.
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Typography variant="overline" display="block" gutterBottom> <a href="#!" style={{textDecoration: 'none', color: '#C3073F'}}>Get the app</a> </Typography>
                            <Typography variant="caption" display="block" gutterBottom>
                                Right now we have only website. We are deeloping app for android and ios. This app will be published soon.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Box>
                    <Grid container spacing={2} sx={{mt:3}}>
                        <Grid item xs={12} md={12}>
                            <Typography variant="caption" display="block" gutterBottom> <a href="#!" style={{textDecoration: 'none', color: '#C3073F'}}>mueem51@gmail.com</a> </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;