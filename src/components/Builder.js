import React, { useState, useRef } from 'react'; 
import { Grid, Box, Button } from '@mui/material';
import ResumeForm from '../components/ResumeForm';
import Template1 from '../components/Template1';
import Template2 from '../components/Template2';
import TemplateSelector from '../components/TemplateSelector';
import PDFExporter from '../components/PDFExporter';

const Builder = () => {
  const [formData, setFormData] = useState({});
  const [selectedTemplate, setSelectedTemplate] = useState('template1');
  const resumeRef = useRef();

  // Function to render the selected template
  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 'template1':
        return <Template1 data={formData} />;
      case 'template2':
        return <Template2 data={formData} />;
      default:
        return <Template1 data={formData} />;
    }
  };

  return (
    <Grid container spacing={2} sx={{ height: '100vh', padding: '20px' }}>
      {/* Left Side: Form with independent scrolling */}
      <Grid item xs={4} sx={{ overflowY: 'auto', maxHeight: '100vh', paddingRight: '10px' }}>
        <ResumeForm onFormChange={setFormData} />
      </Grid>

      {/* Right Side: Resume Preview and Controls */}
      <Grid item xs={8} sx={{ display: 'flex', flexDirection: 'column' }}>
        {/* Resume Preview with custom scroll styling */}
        <Box
          ref={resumeRef}
          sx={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            backgroundColor: '#fff',
            width: '100%', // Set width to match the Grid container
            maxHeight: 'calc(100vh - 100px)', // Adjust height to fit the screen
            overflowY: 'auto', // Enable vertical scrolling
            padding: '5px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            marginBottom: '20px',
            scrollbarWidth: 'thin', // Custom scrollbar styling for Firefox
            '&::-webkit-scrollbar': {
              width: '8px',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#888',
              borderRadius: '4px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              backgroundColor: '#555',
            },
          }}
        >
          {renderTemplate()}
        </Box>

        {/* Controls: Template Selector and PDF Export */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginTop: '10px' }}>
          <TemplateSelector selectedTemplate={selectedTemplate} setSelectedTemplate={setSelectedTemplate} />
          <PDFExporter resumeRef={resumeRef} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Builder;
