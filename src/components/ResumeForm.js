import React, { useState } from 'react';
import { TextField, Typography, Box } from '@mui/material';

const ResumeForm = ({ onFormChange }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    github: '',
    linkedin: '',
    summary: '',
    experience: '',
    education: '',
    projects: '',
    skills: '',
    achievements: '', // Add achievements field to the form data
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    onFormChange(updatedData); // Update the parent component with the latest form data
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', maxWidth: 600, margin: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        Enter Your Details
      </Typography>

      <TextField label="Full Name" name="name" variant="outlined" onChange={handleChange} />
      <TextField label="Email" name="email" variant="outlined" onChange={handleChange} />
      <TextField label="Phone Number" name="phone" variant="outlined" onChange={handleChange} />
      <TextField label="GitHub Profile" name="github" variant="outlined" onChange={handleChange} />
      <TextField label="LinkedIn Profile" name="linkedin" variant="outlined" onChange={handleChange} />

      <TextField
        label="Professional Summary"
        name="summary"
        variant="outlined"
        multiline
        rows={4}
        onChange={handleChange}
      />

      <TextField
        label="Work Experience"
        name="experience"
        variant="outlined"
        multiline
        rows={4}
        onChange={handleChange}
      />

      <TextField
        label="Education"
        name="education"
        variant="outlined"
        multiline
        rows={4}
        onChange={handleChange}
      />

      <TextField
        label="Projects"
        name="projects"
        variant="outlined"
        multiline
        rows={4}
        placeholder="Add project descriptions, e.g., Project Name: Description, Technologies Used"
        onChange={handleChange}
      />

      <TextField
        label="Skills"
        name="skills"
        variant="outlined"
        multiline
        rows={4}
        placeholder="e.g., JavaScript, React, Node.js"
        onChange={handleChange}
      />

      {/* New Achievements TextField */}
      <TextField
        label="Achievements"
        name="achievements"
        variant="outlined"
        multiline
        rows={4}
        placeholder="List any notable achievements"
        onChange={handleChange}
      />
    </Box>
  );
};

export default ResumeForm;
