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

const Section3 = () => {
  return (
    <StyledBox>
      <Typography variant="h1" gutterBottom sx={{ fontWeight: 800, fontSize: 30, marginTop: -5, }}>
        Hi, I’m Matt. Nice to meet you.
      </Typography>
      <Typography variant="h2" sx={{ fontWeight: 500, fontSize: 20, padding: 38, paddingTop: 1, paddingBottom: 0, }}>
        Since beginning my journey as a freelance designer 12 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops.
      </Typography>
    </StyledBox>
  );
};

export default Section3;
