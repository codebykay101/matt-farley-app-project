import React from 'react';
import { Container, Grid, Card, CardMedia, Typography } from '@mui/material';
import collabImageOne from '../Assets/colab1.svg';
import collabImageTwo from '../Assets/colab7.png';
import collabImageThree from '../Assets/colab3.svg';
import collabImageFour from '../Assets/colab4.svg';
import collabImageFive from '../Assets/colab5.png';
import collabImageSix from '../Assets/colab6.svg';
import collabImageSeven from '../Assets/colab7.png';
import collabImageEight from '../Assets/colab8.svg';

const projects = [
  { image: collabImageOne },
  { image: collabImageTwo },
  { image: collabImageThree },
  { image: collabImageFour },
  { image: collabImageFive },
  { image: collabImageSix },
  { image: collabImageSeven },
  { image: collabImageEight },
];

const Section6 = () => {
  return (
    <Container maxWidth={false} sx={{ textAlign: 'center', py: 4, width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '5rem', padding: 15, borderTop: '1px solid #E6ECF8' }}>
      <Typography variant='h1' sx={{ fontSize: 26, fontWeight: 600 }}>
        I'm proud to have collaborated with some<br /> awesome companies:
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: '100%', boxShadow: 'none', border: 'none' }}>
              <CardMedia
                component="img"
                image={project.image}
                alt={`Project ${index + 1}`}
                sx={{ height: '80px', width: 'auto', objectFit: 'contain' }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Section6;
