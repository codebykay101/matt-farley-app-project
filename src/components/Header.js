import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import logo from '../Assets/logo.png';

// Customize AppBar
const CustomAppBar = styled(AppBar)(({ theme }) => ({
  position: 'static',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  color: '#141c3a',
  height: '3.25rem',
  padding: theme.spacing(7.5, 9.5),
  boxShadow: 'none',
}));

const LogoBox = styled(Box)({
  width: '150px',
  height: 'auto',
  cursor: 'pointer',
});

const HoverableTypography = styled(Typography)(({ theme }) => ({
  fontSize: 18,
  marginRight: theme.spacing(2),
  cursor: 'pointer',
  transition: '0.3s',
  '&:hover': {
    transition: '0.3s',
    color: theme.palette.primary.main, // Change this color to whatever you want on hover
  },
}));

const CustomButton = styled(Button)(({ theme }) => ({
  marginLeft: '10px',
  borderRadius: '20px',
  backgroundColor: 'transparent',
  borderColor: '#6E07F3',
  color: '#6E07F3',
  borderWidth: '2px',
  borderStyle: 'solid',
  transition: 'background-color 0.3s, color 0.3s',
  '&:hover': {
    backgroundColor: '#6E07F3',
    color: '#ffffff',
  },
}));

const Header = () => {
  return (
    <CustomAppBar>
      <Toolbar>
        <LogoBox>
          <Link href="/#" sx={{ color: 'white' }}><img src={logo} alt="Logo" style={{ height: '50px' }} /></Link>
        </LogoBox>
        <Box style={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <HoverableTypography>
            Mentorship
          </HoverableTypography>
          <CustomButton variant="outlined">
            Say Hello
          </CustomButton>
        </Box>
      </Toolbar>
    </CustomAppBar>
  );
};

export default Header;
