import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: '520px',
    backgroundColor: '#6E07F3',
    color: 'white',
    textAlign: 'center',
    padding: theme.spacing(0, 4),
}));

const Section7 = () => {
  return (
    <StyledBox>
      <Typography variant="h1" gutterBottom sx={{ fontWeight: 800, fontSize: 30, marginTop: -5, }}>
        My Startup Projects
      </Typography>
      <Typography variant="h2" sx={{ fontWeight: 500, fontSize: 20, padding: 38, paddingTop: 1, paddingBottom: 0, }}>
        I'm a bit of a digital product junky. Over the years I've used hundreds of web and mobile apps in different industries and verticals. Eventually, I decided that it would be a fun challenge to design and build my own.
      </Typography>
    </StyledBox>
  );
};

export default Section7;
