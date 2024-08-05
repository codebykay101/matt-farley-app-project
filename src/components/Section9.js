import React, { useState } from 'react';
import { Box, Container, Typography, Avatar, IconButton } from '@mui/material';
import styled from '@emotion/styled';
import userImage1 from '../Assets/testimonial1.png';
import userImage2 from '../Assets/testimonial2.png';

const testimonials = [
    {
        name: 'Pascal Tremblay',
        position: 'Creative Lead, Good Kind',
        image: userImage1,
        quote: '"Matt was a real pleasure to work with and we look forward to working with him again. He’s definitely the kind of designer you can trust with a project from start to finish."',
    },
    {
        name: 'Alvin Engler',
        position: 'CEO, West Third Enterprises, Inc.',
        image: userImage2,
        quote: '"Matts a clear communicator with the tenacity and confidence to really dig in to tricky design scenarios and the collaborative friction that is needed to produce excellent work."',
    },
];

const OuterBox = styled(Box)({
    width: '100%',
    borderTop: '1px solid #E6ECF8',
})

const TestimonialContainer = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    gap: '5rem',
    padding: '4rem 0',
    marginBottom: '4rem',
    overflow: 'hidden',
    position: 'relative',
});

const Header = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '2rem',
    marginBottom: '2rem',
});

const TestimonialContent = styled(Box)(({ isActive }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px',
    position: 'absolute',
    width: '100%',
    transform: isActive ? 'translateX(0)' : 'translateX(100%)',
    opacity: isActive ? 1 : 0,
    transition: 'transform 0.5s ease, opacity 0.5s ease',
}));

const DotContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    marginTop: '8rem',
});

const CustomDot = styled(IconButton)(({ active }) => ({
    margin: '0 5px',
    padding: '7px',
    borderRadius: '50%',
    border: '2px solid #E6ECF8',
    backgroundColor: active ? '#6E07F3' : 'transparent' ,
    '&:hover': {
        backgroundColor: '#6E07F3',
        border: '2px solid #6E07F3',
    },
}));

const Section9 = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleDotClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <OuterBox>
            <TestimonialContainer>
            <Header>
                <Typography variant="h4" component="h2" gutterBottom sx={{
                    fontSize: 32,
                    fontWeight: 600,
                    marginBottom: 2,
                }}>
                    Testimonials
                </Typography>
                <Typography variant="subtitle1" gutterBottom sx={{ marginBottom: 30, fontSize: 18, fontWeight: 500 }}>
                    People I've worked with have said some nice things...
                </Typography>
            </Header>
            {testimonials.map((testimonial, index) => (
                <TestimonialContent key={index} isActive={index === activeIndex}>
                    <Avatar src={testimonial.image} sx={{ width: 96, height: 96, marginBottom: 5, marginTop: 20 }} />
                    <Typography variant="body1" gutterBottom sx={{ fontSize: 20, fontWeight: 500, width: 600, marginBottom: 4 }}>
                        {testimonial.quote}
                    </Typography>
                    <Typography variant="h1" gutterBottom sx={{
                        fontSize: 18,
                        fontWeight: 600
                    }}>
                        {testimonial.name}
                    </Typography>
                    <Typography variant="subtitle2" sx={{
                        fontSize: 16,
                        fontWeight: 500,
                        marginBottom: 0
                    }}>
                        {testimonial.position}
                    </Typography>
                </TestimonialContent>
            ))}
            <DotContainer>
                {testimonials.map((_, index) => (
                    <CustomDot key={index} active={index === activeIndex} onClick={() => handleDotClick(index)} />
                ))}
            </DotContainer>
        </TestimonialContainer>
        </OuterBox>
    );
};

export default Section9;
