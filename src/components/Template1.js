import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa'; // Icons for contact details

const Template1 = ({ data }) => {
  const parseToList = (text) =>
    text ? text.split('\n').map((item) => item.trim()).filter((item) => item) : [];

  const skillsArray = parseToList(data.skills);
  const experienceArray = parseToList(data.experience);
  const educationArray = parseToList(data.education);
  const projectsArray = parseToList(data.projects);

  return (
    <div
      style={{
        maxWidth: '700px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#fff',
        boxSizing: 'border-box',
      }}
    >
      {/* Header Section */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 style={{ color: '#3b5998', fontSize: '26px', margin: 0 }}>
          {data.name || 'Your Name'}
        </h1>
        <p style={{ margin: '5px 0', fontStyle: 'italic' }}>
          {data.summary || 'Enter a brief professional summary here.'}
        </p>
      </div>

      {/* Contact Details Section */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap', // Ensures items wrap on smaller screens
          gap: '20px',
          marginBottom: '20px',
        }}
      >
        <ContactDetail icon={<FaEnvelope />} text={data.email || 'your-email@example.com'} />
        <ContactDetail icon={<FaPhone />} text={data.phone || 'Your Phone Number'} />
        <ContactDetail icon={<FaLinkedin />} text={data.linkedin || 'Your LinkedIn Profile'} />
        <ContactDetail icon={<FaGithub />} text={data.github || 'Your Github Profile'} />
      </div>

      {/* Work Experience Section */}
      <Section title="WORK EXPERIENCE">
        <ul style={{ lineHeight: '1.6', marginBottom: '20px' }}>
          {experienceArray.length > 0
            ? experienceArray.map((item, index) => <li key={index} style={{ marginBottom: '10px' }}>{item}</li>)
            : ['Enter your work experience here.'].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
        </ul>
      </Section>

      {/* Education Section */}
      <Section title="EDUCATION">
        <ul style={{ lineHeight: '1.6', marginBottom: '20px' }}>
          {educationArray.length > 0
            ? educationArray.map((item, index) => <li key={index} style={{ marginBottom: '10px' }}>{item}</li>)
            : ['Enter your education details here.'].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
        </ul>
      </Section>

      {/* Project Section */}
      <Section title="PROJECTS">
        <ul style={{ lineHeight: '1.6', marginBottom: '20px' }}>
          {projectsArray.length > 0
            ? projectsArray.map((item, index) => <li key={index} style={{ marginBottom: '10px' }}>{item}</li>)
            : ['Describe your projects here.'].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
        </ul>
      </Section>

      {/* Skills Section (Template 2 Logic) */}
      <Section title="SKILLS">
        <ul style={{ lineHeight: '1.6', marginBottom: '20px' }}>
          {skillsArray.length > 0
            ? skillsArray.map((skill, index) => <li key={index}>{skill}</li>)
            : ['Skill 1', 'Skill 2', 'Skill 3'].map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
        </ul>
      </Section>
    </div>
  );
};

// Contact Detail Component for better readability
const ContactDetail = ({ icon, text }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px', // Ensures space between icon and text
      whiteSpace: 'nowrap', // Prevents text from breaking awkwardly
    }}
  >
    {icon}
    <span>{text}</span>
  </div>
);

// Section Component for reusability
const Section = ({ title, children }) => (
  <div style={{ marginBottom: '20px' }}>
    <h2
      style={{
        fontSize: '18px',
        borderBottom: '2px solid #f5a623',
        display: 'inline-block',
        paddingBottom: '5px',
        marginBottom: '10px',
      }}
    >
      {title}
    </h2>
    <div>{children}</div>
  </div>
);

export default Template1;
