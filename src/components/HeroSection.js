import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ReactComponent as Logo } from '../Assets/mf-avatar.svg'; 

const Root = styled(Container)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  textAlign: 'center',
}));

const LogoBox = styled(Box)({
  width: '150px',
  height: 'auto',
  margin: '0 auto',
  marginTop: '2rem',
});

const HeroSection = () => {
  return (
    <Root>
      <Typography variant="h3" gutterBottom sx={{ fontWeight: 800 }}>
        Designer, Frontend Developer & Mentor
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 500 }}>
        I design and code beautifully simple things, and I love what I do.
      </Typography>
      <LogoBox>
        <Logo />
      </LogoBox>
    </Root>
  );
};

export default HeroSection;
