import React from 'react';

const TemplateSelector = ({ selectedTemplate, setSelectedTemplate }) => (
  <div>
    <button style={{
      backgroundColor: '#3b5998',
      color: '#fff',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    }}
      onClick={() => setSelectedTemplate('template1')}>Template 1</button>
    <button style={{
      backgroundColor: '#3b5998',
      color: '#fff',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    }} onClick={() => setSelectedTemplate('template2')}>Template 2</button>
  </div>
);

export default TemplateSelector;
