import React from 'react';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import LayersIcon from '@mui/icons-material/Layers';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';

const RootContainer = styled(Container)(({ theme }) => ({
  flexGrow: 1,
  height: '100vh',
  padding: theme.spacing(8, 0),
  textAlign: 'center',
  backgroundColor: '#fff',
  color: '#141c3a',
  borderRadius: '20px',
  border: '1px solid #E6ECF8',
  boxShadow: 'rgba(99, 99, 99, 0.1) 0px 2px 8px 0px',
  marginTop: '-120px', 
  marginBottom: '2rem',
}));

const GridContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  justifyContent: 'center',
  marginTop: theme.spacing(-6),
}));

const PaperStyled = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: theme.spacing(4),
  textAlign: 'center',
  color: '#141c3a',
  backgroundColor: 'transparent',
  borderRadius: '20px',
  boxShadow: 'none',
  position: 'relative',
  height: '100%',
}));

const IconBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '72px',
  height: '72px',
  backgroundColor: '#5be9b9',
  borderRadius: '50%',
  marginBottom: theme.spacing(2),
  color: '#141c3a',
  margin: '0 auto',
}));

const Section4 = () => {
  return (
    <RootContainer>
      <GridContainer container spacing={4}>
        <Grid item xs={12} sm={4}>
          <PaperStyled elevation={0}>
            <IconBox>
              <LayersIcon style={{ fontSize: 40 }} />
            </IconBox>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 800, fontSize: 22, marginTop: 3 }}>
              Designer
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 500, fontSize: 16 }}>
              I value simple content structure, clean design patterns, and thoughtful interactions.
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: 500, color: '#6E07F3', fontSize: 16, marginTop: 3 }}>
              Things I enjoy designing:
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: 500, fontSize: 16 }}>
              UX, UI, Web, Apps, Logos
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: 500, color: '#6E07F3', fontSize: 16, marginTop: 3 }}>
              Design Tools:
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: 500, fontSize: 16 }}>
              Affinity Designer<br/>
              Figma<br/>
              Pen & Paper<br/>
              Sketch
            </Typography>
          </PaperStyled>
        </Grid>

        <Grid item xs={12} sm={4} sx={{ borderRight: { xs: 'none', sm: '1px solid #e0e0e0' }, borderLeft: { xs: 'none', sm: '1px solid #e0e0e0' } }}>
          <PaperStyled elevation={0}>
            <IconBox>
              <CodeIcon style={{ fontSize: 40 }} />
            </IconBox>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 800, fontSize: 22, marginTop: 3 }}>
              Frontend Developer
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 500, fontSize: 16 }}>
              I like to code things from scratch, and enjoy bringing ideas to life in the browser.
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: 500, color: '#6E07F3', fontSize: 16, marginTop: 3 }}>
              Languages I speak:
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: 500, fontSize: 16 }}>
              HTML, Pug, Slim, CSS, Sass, Git
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: 500, color: '#6E07F3', fontSize: 16, marginTop: 3 }}>
              Dev Tools:
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: 500, fontSize: 16 }}>
              Astro JS<br/>
              Bitbucket<br/>
              Bootstrap<br/>
              Bulma<br/>
              Codekit<br/>
              Github<br/>
              Netlify<br/>
              Tailwind CSS<br/>
              VS Code
            </Typography>
          </PaperStyled>
        </Grid>

        <Grid item xs={12} sm={4}>
          <PaperStyled elevation={0}>
            <IconBox>
              <SchoolIcon style={{ fontSize: 40 }} />
            </IconBox>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 800, fontSize: 22, marginTop: 3 }}>
              Mentor
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 500, fontSize: 16 }}>
              I genuinely care about people, and enjoy helping them work on their craft.
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: 500, color: '#6E07F3', fontSize: 16, marginTop: 3 }}>
              Experiences I draw from:
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: 500, fontSize: 16 }}>
              UX/UI, Product design, Freelancing
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: 500, color: '#6E07F3', fontSize: 16, marginTop: 3 }}>
              Mentor Stats:
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: 500, fontSize: 16 }}>
              9+ years experience<br/>
              30+ short courses<br/>
              65+ bootcamps<br/>
              250+ students<br/>
              2,500+ mentor sessions<br/>
              60+ group critiques<br/>
              18,000+ bits of feedback
            </Typography>
          </PaperStyled>
        </Grid>
      </GridContainer>
    </RootContainer>
  );
};

export default Section4;
