import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import PanToolAltOutlinedIcon from '@mui/icons-material/PanToolAltOutlined';

const SectionContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#141c3a',
  padding: theme.spacing(4),
  borderRadius: '12px',
  textAlign: 'center',
  position: 'relative',
  boxShadow: '0 5px 5px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px #141c3a',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    padding: theme.spacing(8),
  },
}));

const FlexContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));

const Text = styled(Typography)(({ theme }) => ({
  color: '#ffffff',
  marginBottom: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    marginBottom: 0,
  },
}));

const CustomButton = styled(Button)({
  fontSize: '18px',
  padding: '8px 35px',
  borderRadius: '50px',
  borderColor: '#5be9b9',
  borderWidth: '2px',
  color: '#fff',
  textTransform: 'none',
  '&:hover': {
    color: '#141c3a',
    borderColor: '#5be9b9',
    backgroundColor: '#5be9b9',
  },
});

const SectionFooter = () => {
  return (
    <Box position="relative" padding={10} sx={{ backgroundColor: 'transparent', top: 120, marginTop: '-12rem', }}>
      <SectionContainer>
        <FlexContainer>
          <Text variant="h5" sx={{ fontSize: 30, fontWeight: 600 }}>
            Start a project
          </Text>
          <Text variant="body1" sx={{ fontSize: 18, fontWeight: 500, width: 350 }}>
            Interested in working together? We should queue up a time to chat. I'll buy the coffee.
          </Text>
          <CustomButton variant="outlined">
           <PanToolAltOutlinedIcon sx={{ mr: 1 }}/> Let's do this
          </CustomButton>
        </FlexContainer>
      </SectionContainer>
    </Box>
  );
};

export default SectionFooter;
