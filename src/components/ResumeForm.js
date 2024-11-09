import React, { useState } from 'react';
import { Typography, Box, TextField } from '@mui/material';
import ReactQuill from 'react-quill';  // Import ReactQuill
import 'react-quill/dist/quill.snow.css';  // Import Quill styles

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
    achievements: '',
  });

  // Function to handle Quill editor changes
  const handleQuillChange = (value, name) => {
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    onFormChange(updatedData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    onFormChange(updatedData);
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

      <Typography>Professional Summary</Typography>
      <ReactQuill value={formData.summary} onChange={(value) => handleQuillChange(value, 'summary')} />

      <Typography>Work Experience</Typography>
      <ReactQuill value={formData.experience} onChange={(value) => handleQuillChange(value, 'experience')} />

      <Typography>Education</Typography>
      <ReactQuill value={formData.education} onChange={(value) => handleQuillChange(value, 'education')} />

      <Typography>Projects</Typography>
      <ReactQuill value={formData.projects} onChange={(value) => handleQuillChange(value, 'projects')} />

      <Typography>Skills</Typography>
      <ReactQuill value={formData.skills} onChange={(value) => handleQuillChange(value, 'skills')} />

      <Typography>Achievements</Typography>
      <ReactQuill value={formData.achievements} onChange={(value) => handleQuillChange(value, 'achievements')} />
    </Box>
  );
};

export default ResumeForm;
