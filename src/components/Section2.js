import React from 'react';
import { Container, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import logo from '../Assets/hero-devices.svg';


const Root = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(8, 0),
}));

const LogoBox = styled(Box)({
  width: '860px',
  height: 'auto',
  margin: '0 auto',
  marginBottom: '-4.2rem',
});

const Section2 = () => {
  return (
    <Root>
      <LogoBox>
        <img src={logo} alt="Hero Devices" style={{ width: '100%' }} />
      </LogoBox>
    </Root>
  );
};

export default Section2;
