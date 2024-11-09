import React from 'react';

const Template2 = ({ data }) => {
  const renderFormattedText = (htmlContent) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  };

  return (
    <div style={{ fontFamily: 'Verdana, sans-serif', padding: '30px', maxWidth: '900px', margin: 'auto' }}>
      {/* Header with Name and Contact Info */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '24px', margin: '0', color: '#2F4F4F' }}>{data.name || 'Your Name'}</h1>
        <p style={{ margin: '5px 0', fontSize: '14px', fontWeight: 'bold' }}>
          Phone Number: {data.phone} | Email: {data.email}
        </p>
        <p style={{ margin: '0 0 10px', fontSize: '14px' }}>
          LinkedIn: <a href={data.linkedin} target="_blank" rel="noopener noreferrer">{data.linkedin}</a> | 
          GitHub: <a href={data.github} target="_blank" rel="noopener noreferrer">{data.github}</a>
        </p>
        <div style={{fontSize: '14px'}}>
        {renderFormattedText(data.summary || 'Professional Summary goes here.')}
        </div>
      </div>

      {/* Section Wrapper */}
      <div style={{ borderTop: '2px solid black', marginTop: '20px', paddingTop: '15px', fontSize: '14px' }}>
        <Section title="Academics">
          {renderFormattedText(data.education || '<p>Add your education details here.</p>')}
        </Section>

        <Section title="Achievements">
          {renderFormattedText(data.achievements || '<p>List any achievements here.</p>')}
        </Section>

        <Section title="Work/Internship Experience">
          {renderFormattedText(data.experience || '<p>Describe your work or internship experience.</p>')}
        </Section>

        <Section title="Projects">
          {renderFormattedText(data.projects || '<p>Mention your projects here.</p>')}
        </Section>

        <Section title="Skills">
          {renderFormattedText(data.skills || '<p>Add your skills here.</p>')}
        </Section>
      </div>
    </div>
  );
};

/* Section Component */
const Section = ({ title, children }) => (
  <div style={{ marginBottom: '15px', lineHeight: '1.6' }}>
    <h2 style={{ fontSize: '16px', fontWeight: 'bold', margin: '10px 0', borderBottom: '1px solid black', paddingBottom: '5px' }}>
      {title}
    </h2>
    <div>{children}</div>
  </div>
);

export default Template2;
