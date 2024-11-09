import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Typography, Box } from '@mui/material';

const Home = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/builder'); // Navigate to the builder page
  };

  return (
    <Container 
      maxWidth="sm" 
      style={{ textAlign: 'center', marginTop: '10vh' }}
    >
      <Box>
        <Typography variant="h2" gutterBottom>
          Welcome to the Resume Builder
        </Typography>
        <Typography variant="h6" gutterBottom>
          Create a professional resume effortlessly with our templates. Choose from multiple styles and export your resume as a PDF in seconds.
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          size="large" 
          onClick={handleStart}
          style={{ marginTop: '20px' }}
        >
          Get Started
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
