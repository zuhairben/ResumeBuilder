import React from 'react';

const Template2 = ({ data }) => {
  const parseToList = (text) =>
    text ? text.split('\n').map((item) => item.trim()).filter((item) => item) : [];

  const educationArray = parseToList(data.education);
  const achievementsArray = parseToList(data.achievements);
  const experienceArray = parseToList(data.experience);
  const projectsArray = parseToList(data.projects);
  const skillsArray = parseToList(data.skills);

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
        <h3 style={{ fontWeight: 'normal', fontSize: '14px', color: '#555' }}>
          {data.summary || 'Professional Summary goes here.'}
        </h3>
      </div>

      {/* Section Wrapper */}
      <div style={{ borderTop: '2px solid black', marginTop: '20px', paddingTop: '15px',fontSize: '14px' }}>
        {/* Academics Section */}
        <Section title="Academics">
          <ul>
            {educationArray.length > 0
              ? educationArray.map((item, index) => <li key={index}>{item}</li>)
              : <li>Add your education details here.</li>}
          </ul>
        </Section>

        {/* Achievements Section */}
        <Section title="Achievements">
          <ul>
            {achievementsArray.length > 0
              ? achievementsArray.map((item, index) => <li key={index}>{item}</li>)
              : <li>List any achievements here.</li>}
          </ul>
        </Section>

        {/* Work/Internship Experience Section */}
        <Section title="Work/Internship Experience">
          <ul>
            {experienceArray.length > 0
              ? experienceArray.map((item, index) => <li key={index}>{item}</li>)
              : <li>Describe your work or internship experience.</li>}
          </ul>
        </Section>

        {/* Projects Section */}
        <Section title="Projects">
          <ul>
            {projectsArray.length > 0
              ? projectsArray.map((item, index) => <li key={index}>{item}</li>)
              : <li>Mention your projects here.</li>}
          </ul>
        </Section>

        {/* Skills Section */}
        <Section title="Skills">
          <ul>
            {skillsArray.length > 0
              ? skillsArray.map((item, index) => <li key={index}>{item}</li>)
              : <li>Add your skills here.</li>}
          </ul>
        </Section>
      </div>
    </div>
  );
};

/* Section Component */
const Section = ({ title, children }) => (
  <div style={{ marginBottom: '15px', lineHeight: '1.6'}}>
    <h2
      style={{
        fontSize: '16px',
        fontWeight: 'bold',
        margin: '10px 0',
        borderBottom: '1px solid black',
        paddingBottom: '5px',
      }}
    >
      {title}
    </h2>
    <div>{children}</div>
  </div>
);

export default Template2;
