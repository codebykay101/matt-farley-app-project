import React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import ThreePOutlinedIcon from '@mui/icons-material/ThreePOutlined';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import bootstrapLogos from '../Assets/project1.svg';
import baselair from '../Assets/project2.svg';
import automalog from '../Assets/project3.svg';
import shipable from '../Assets/project4.svg';
import houston from '../Assets/project5.svg';
import kybercore from '../Assets/project6.svg';
import basin from '../Assets/project7.svg';
import dovetail from '../Assets/project8.svg';
import userforge from '../Assets/project9.svg';

const ContainerStyle = styled(Container)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '25px',
    padding: theme.spacing(2, 0),
    background: 'transparent',
    marginTop: '-120px',
}));

const CardStyle = styled(Card)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '280px', 
    width: '100%',  
    borderRadius: '10px',
    padding: 20,
    overflow: 'hidden',
    border: 'none',
});

const ButtonStyle = styled(Button)(({ theme }) => ({
    marginTop: theme.spacing(2),
    textTransform: 'none',
}));

const buttonStyles = {
    'bootstraplogos.com': { backgroundColor: '#ebf5ff', color: '#0068d1', border: 'none','&:hover': {border: 'none', backgroundColor: '#ebf5ff'} },
    'thebaselair.com': { backgroundColor: '#ebf5ff', color: '#0068d1', border: 'none','&:hover': {border: 'none', backgroundColor: '#ebf5ff'} },
    'automalog.com': { backgroundColor: '#ebf5ff', color: '#0068d1', border: 'none','&:hover': {border: 'none', backgroundColor: '#ebf5ff'} },
    'shipable.io': { backgroundColor: '#ebf5ff', color: '#0068d1', border: 'none','&:hover': {border: 'none', backgroundColor: '#ebf5ffa'} },
    'on hold': { backgroundColor: '#feecf0', color: '#cc0f35', border: 'none','&:hover': {border: 'none', backgroundColor: '#feecf0'} },
    'exited in 2024': { backgroundColor: '#edfdf7', color: '#11825c', border: 'none','&:hover': {border: 'none', backgroundColor: '#edfdf7'} },
    'acquired in 2017': { backgroundColor: '#edfdf7', color: '#11825c', border: 'none','&:hover': {border: 'none', backgroundColor: '#edfdf7'} },
    'acquired in 2016': { backgroundColor: '#edfdf7', color: '#11825c', border: 'none','&:hover': {border: 'none', backgroundColor: '#edfdf7'} },
};

const projects = [
    { image: bootstrapLogos, description: 'Affordable, human-crafted logos for startups and indie projects.', status: 'bootstraplogos.com' },
    { image: baselair, description: 'Community platform for miniature painters to learn, connect, and showcase work.', status: 'thebaselair.com' },
    { image: automalog, description: 'AI-driven changelog that turns git commits into release notes, instantly.', status: 'automalog.com' },
    { image: shipable, description: 'Short, focused design and growth collabs for startup tech founders.', status: 'shipable.io' },
    { image: houston, description: 'Simple feedback and engagement tools that help teams ship winning products.', status: 'on hold' },
    { image: kybercore, description: 'Next level plug and play chassis systems for custom DIY lightsaber builds.', status: 'on hold' },
    { image: basin, description: 'A powerful, easy-to-configure form backend for designers and developers.', status: 'exited in 2024' },
    { image: dovetail, description: 'A space and member management solution for coworking communities.', status: 'acquired in 2017' },
    { image: userforge, description: 'A collaborative tool for creating simple, effective user personas.', status: 'acquired in 2016' },
];

const iconMapper = {
    'bootstraplogos.com': <OpenInNewIcon />,
    'thebaselair.com': <OpenInNewIcon />,
    'automalog.com': <OpenInNewIcon />,
    'shipable.io': <OpenInNewIcon />,
    'on hold': <PauseCircleOutlineIcon />,
    'exited in 2024': <CheckCircleOutlineIcon />,
    'acquired in 2017': <CheckCircleOutlineIcon />,
    'acquired in 2016': <CheckCircleOutlineIcon />,
};

const Section8 = () => {
    return (
        <ContainerStyle>
            <Grid container spacing={4} justifyContent="center">
                {projects.map((project, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <CardStyle sx={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
                            <CardContent sx={{ textAlign: 'center' }}>
                                <img src={project.image} alt={project.description} style={{ width: '160px', height: 'auto', marginBottom: '16px' }} />
                                <Typography variant="body1" color="textPrimary" gutterBottom sx={{ fontSize: '17px', fontWeight: 500 }}>
                                    {project.description}
                                </Typography>
                                <ButtonStyle 
                                    variant="outlined" 
                                    href="#" 
                                    sx={buttonStyles[project.status]}
                                    startIcon={iconMapper[project.status]}
                                >
                                    {project.status}
                                </ButtonStyle>
                            </CardContent>
                        </CardStyle>
                    </Grid>
                ))}
            </Grid>

            <Typography variant='h1' sx={{ fontSize: 24, fontWeight: 600, marginTop: 10 }}>
                Interested in collaborating with me?
            </Typography>

            <Typography variant='h2' sx={{ fontSize: 20, fontWeight: 500,  }}>
                I’m always open to discussing product design work or partnership opportunities.
            </Typography>

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
                marginTop: '1.5rem',
                marginBottom: '5rem',
                '&:hover': { backgroundColor: '#6E07F3', color: '#fff', boxShadow: 'none' } 
              }}
            >
        <ThreePOutlinedIcon sx={{ marginRight: '8px' }} /> Start a conversation
      </Button>
        </ContainerStyle>
    );
};

export default Section8;
