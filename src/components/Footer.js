import React from 'react';
import { Box, Typography, IconButton, Link, Grid } from '@mui/material';
import { Twitter, LinkedIn } from '@mui/icons-material';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PinterestIcon from '@mui/icons-material/Pinterest';
import CopyrightIcon from '@mui/icons-material/Copyright';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo from '../Assets/footerLogo.png';
import FooterLogo from '../Assets/footerIcon.png';


const Footer = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 1, backgroundColor: '#6E07F3', color: 'white', textAlign: 'center', padding: '5rem 1.5rem 2rem', height: '650px', mt: -4 }}>
      {/* Logo */}
      <Box sx={{ mb: 2 }}>
        <img src={logo} alt="Logo" style={{ height: '50px' }} />
      </Box>
      
      {/* Slogan */}
      <Typography variant="h6" sx={{ mb: 3, fontSize: 23, fontWeight: 500, width: 340, opacity: 0.8 }}>
        Living, learning, & leveling up one day at a time.
      </Typography>

      {/* Social Icons */}
      <Grid container justifyContent="center" spacing={3}>
        <Grid item>
          <IconButton href="#" sx={{
            color: 'white',
            width: '47px',
            height: '47px',
            borderRadius: '50%',
            border: '2px solid rgba(255, 255, 255, 0.5)',
            backgroundColor: 'transparent',
            transition: 'background-color 0.3s, color 0.3s',
            '&:hover': {
              backgroundColor: 'white',
              color: '#6E07F3',
            },
          }}>
            <Twitter />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton href="#" sx={{
            color: 'white',
            width: '47px',
            height: '47px',
            borderRadius: '50%',
            border: '2px solid rgba(255, 255, 255, 0.5)',
            backgroundColor: 'transparent',
            transition: 'background-color 0.3s, color 0.3s',
            '&:hover': {
              backgroundColor: 'white',
              color: '#6E07F3',
            },
          }}>
            <SportsSoccerIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton href="#" sx={{
            color: 'white',
            width: '47px',
            height: '47px',
            borderRadius: '50%',
            border: '2px solid rgba(255, 255, 255, 0.5)',
            backgroundColor: 'transparent',
            transition: 'background-color 0.3s, color 0.3s',
            '&:hover': {
              backgroundColor: 'white',
              color: '#6E07F3',
            },
          }}>
            <LinkedIn />
          </IconButton>
        </Grid>

        <Grid item>
          <IconButton href="#" sx={{
            color: 'white',
            width: '47px',
            height: '47px',
            borderRadius: '50%',
            border: '2px solid rgba(255, 255, 255, 0.5)',
            backgroundColor: 'transparent',
            transition: 'background-color 0.3s, color 0.3s',
            '&:hover': {
              backgroundColor: 'white',
              color: '#6E07F3',
            },
          }}>
            <InstagramIcon />
          </IconButton>
        </Grid>

        <Grid item>
          <IconButton href="#" sx={{
            color: 'white',
            width: '47px',
            height: '47px',
            borderRadius: '50%',
            border: '2px solid rgba(255, 255, 255, 0.5)',
            backgroundColor: 'transparent',
            transition: 'background-color 0.3s, color 0.3s',
            '&:hover': {
              backgroundColor: 'white',
              color: '#6E07F3',
            },
          }}>
            <PinterestIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton href="#" sx={{
            color: 'white',
            width: '47px',
            height: '47px',
            borderRadius: '50%',
            border: '2px solid rgba(255, 255, 255, 0.5)',
            backgroundColor: 'transparent',
            transition: 'background-color 0.3s, color 0.3s',
            '&:hover': {
              backgroundColor: 'white',
              color: '#6E07F3',
            },
          }}>
            <MailOutlineIcon />
          </IconButton>
        </Grid>
      </Grid>

      {/* Footer Text */}
      <Typography variant="body2" sx={{ mt: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 0.5, fontSize: '18px', opacity: 0.8 }}>
        Handcrafted by me <CopyrightIcon sx={{}} /> twentytwentyfour
      </Typography>
      <Box sx={{ mt: 1, opacity: 0.8 }}>
        <Link href="/#" sx={{ color: 'white' }}><img src={FooterLogo} alt="Logo" style={{ height: '30.56px' }} /></Link>
      </Box>
      
    </Box>
  );
};

export default Footer;
