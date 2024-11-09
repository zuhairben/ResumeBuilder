import React from 'react';

const FormSection = ({ section, formData, handleChange }) => {
  const handleFieldChange = (field, value) => {
    handleChange(field, value);
  };

  if (section === "basicDetails") {
    return (
      <div className="form-section">
        <h3>Basic Details</h3>
        <label>Name:</label>
        <input 
          type="text" 
          value={formData.name || ''} // Default to an empty string if undefined
          onChange={(e) => handleFieldChange('name', e.target.value)} 
        />
        <label>Title:</label>
        <input 
          type="text" 
          value={formData.title || ''} // Default to an empty string if undefined
          onChange={(e) => handleFieldChange('title', e.target.value)} 
        />
      </div>
    );
  }

  if (section === "skills") {
    return (
      <div className="form-section">
        <h3>Skills</h3>
        <input 
          type="text" 
          value={formData.skills?.join(', ') || ''} // Default to an empty array, then join
          onChange={(e) => handleFieldChange('skills', e.target.value.split(','))} 
        />
      </div>
    );
  }

  if (section === "experience") {
    return (
      <div className="form-section">
        <h3>Experience</h3>
        <textarea 
          value={formData.experience?.join(', ') || ''} // Default to an empty array, then join
          onChange={(e) => handleFieldChange('experience', e.target.value.split(','))} 
        />
      </div>
    );
  }

  if (section === "education") {
    return (
      <div className="form-section">
        <h3>Education</h3>
        <textarea 
          value={formData.education?.join(', ') || ''} // Default to an empty array, then join
          onChange={(e) => handleFieldChange('education', e.target.value.split(','))} 
        />
      </div>
    );
  }

  if (section === "projects") {
    return (
      <div className="form-section">
        <h3>Projects</h3>
        <textarea 
          value={formData.projects?.join(', ') || ''} // Default to an empty array, then join
          onChange={(e) => handleFieldChange('projects', e.target.value.split(','))} 
        />
      </div>
    );
  }

  if (section === "achievements") {
    return (
      <div className="form-section">
        <h3>Achievements</h3>
        <textarea 
          value={formData.achievements?.join(', ') || ''} // Default to an empty array, then join
          onChange={(e) => handleFieldChange('achievements', e.target.value.split(','))} 
        />
      </div>
    );
  }

  return <div>Select a section to edit</div>;
};

export default FormSection;
