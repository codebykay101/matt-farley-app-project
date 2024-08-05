import React from 'react';
import { styled } from '@mui/material/styles';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { Container, Grid, Typography, Card, CardMedia, Button, Link } from '@mui/material';
import wfDesignImage from '../Assets/img1.png';
import burkettImage from '../Assets/img2.png';
import chronicledImage from '../Assets/img3.png';
import glcImage from '../Assets/img4.png';
import coupalImage from '../Assets/img5.png';
import wedlerImage from '../Assets/img6.png';

const ContainerStyle = styled(Container)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '15px',
    padding: theme.spacing(10, 0),
    fontFamily: 'Roboto',
}));

const CardStyle = styled(Card)({
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    overflow: 'hidden',
    cursor: 'pointer',
    position: 'relative',
    '&:hover .overlay': {
        opacity: 1,
        transform: 'scale(1)',
    },
});

const CardMediaStyle = styled(CardMedia)({
    height: '240px',
    transition: 'transform 0.3s ease-in-out',
});

const Overlay = styled('div')(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#141c3a',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    padding: theme.spacing(2),
    boxSizing: 'border-box',
    opacity: 0,
    transform: 'scale(1)',
    transition: 'opacity 0.4s ease-in-out, transform 0.4s ease-in-out',
}));

const projects = [
  { image: wfDesignImage, content: 'High-end, custom residential renovators serving Fraser Valley homeowners.', link: '#' },
  { image: burkettImage, content: 'Accounting and tax services characterized by quality, reliability and trust.', link: '#' },
  { image: chronicledImage, content: 'Blockchain pioneers bringing transparency, trust, and security to supply.', link: '#' },
  { image: glcImage, content: 'Business savvy tech experts helping forward thinking companies get things done.', link: '#' },
  { image: coupalImage, content: 'Vancouver’s tower crane rental service and support leader since 1974.', link: '#' },
  { image: wedlerImage, content: 'Results-oriented, responsive and flexible full-service civil engineering firm.', link: '#' },
];

const Section5 = () => {
  return (
    <ContainerStyle>
        <Typography variant="h1" gutterBottom sx={{ fontSize: 28, fontWeight: 600, color: '#141c3a' }}>
          My Recent Work
        </Typography>
        <Typography variant="h2" color="textSecondary" gutterBottom sx={{ fontSize: 18, fontWeight: 500, marginBottom: 5 }}>
          Here are a few past design projects I've worked on. Want to see more? <Link sx={{ color:'#1a8cff', textDecoration: 'none','&:hover':{ transition: '.3s', color: '#1573cc' } }} href="mailto:example@email.com">Email me.</Link>
        </Typography>
      <Grid container spacing={2.3} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CardStyle>
              <CardMediaStyle
                component="img"
                image={project.image}
                alt={`Project ${index + 1}`}
              />
              <Overlay className="overlay">
                <Typography variant="body1" sx={{ marginBottom: 2, textAlign: 'center', fontSize: 18, padding: 3, paddingBottom: 0 }}>
                  {project.content}
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary" 
                  href={project.link}
                  sx={{ 
                    backgroundColor: 'transparent', 
                    border: '2px solid #6E07F3', 
                    borderRadius: '50px', 
                    color: '#fff', 
                    boxShadow: 'none',
                    padding: '8px 25px', 
                    textTransform: 'none', 
                    fontSize: 17, 
                    display: 'flex', 
                    alignItems: 'center',
                    '&:hover': { backgroundColor: '#6E07F3', boxShadow: 'none' } 
                  }}
                >
                  View Website
                  <KeyboardArrowRightIcon sx={{ marginLeft: '5px' }} />
                </Button>
              </Overlay>
            </CardStyle>
          </Grid>
        ))}
      </Grid>

      <Button
        variant="contained" 
        color="primary"
        sx={{ 
          backgroundColor: 'transparent', 
          border: '2px solid #6E07F3', 
          borderRadius: '50px', 
          color: '#6E07F3', 
          padding: '8px 30px', 
          textTransform: 'none', 
          boxShadow: 'none',
          fontSize: 17, 
          display: 'flex', 
          alignItems: 'center',
          marginTop: '8rem',
          marginBottom: '4rem',
          '&:hover': { backgroundColor: '#6E07F3', color: '#fff', boxShadow: 'none' } 
        }}
      >
        <SportsSoccerIcon sx={{ marginRight: '8px' }} /> See more on Dribbble
      </Button>
    </ContainerStyle>
  );
};

export default Section5;
