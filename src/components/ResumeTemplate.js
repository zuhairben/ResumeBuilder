import React from 'react';
import { Page, Text, View, Document, PDFDownloadLink, StyleSheet } from '@react-pdf/renderer';

// Define styles for the PDF
const styles = StyleSheet.create({
    page: {
        padding: 30,
        fontSize: 12,
    },
    section: {
        marginBottom: 10,
    },
    heading: {
        fontSize: 18,
        marginBottom: 8,
        fontWeight: 'bold',
    },
    item: {
        marginBottom: 4,
    },
    noData: {
        fontStyle: 'italic',
        color: 'gray',
    },
});

// Create the PDF document
const MyDocument = ({ formData }) => (
    <Document>
        <Page style={styles.page}>
            {/* Name and Title */}
            <View style={styles.section}>
                <Text style={styles.heading}>{formData.name || "Your Name"}</Text>
                <Text>{formData.title || "Your Title"}</Text>
            </View>

            {/* Skills */}
            <View style={styles.section}>
                <Text style={styles.heading}>Skills:</Text>
                {formData.skills?.length > 0 ? (
                    formData.skills.map((skill, index) => (
                        <Text key={index} style={styles.item}>{skill}</Text>
                    ))
                ) : (
                    <Text style={styles.noData}>No skills added</Text>
                )}
            </View>

            {/* Experience */}
            <View style={styles.section}>
                <Text style={styles.heading}>Experience:</Text>
                {formData.experience?.length > 0 ? (
                    formData.experience.map((exp, index) => (
                        <Text key={index} style={styles.item}>{exp}</Text>
                    ))
                ) : (
                    <Text style={styles.noData}>No experience added</Text>
                )}
            </View>

            {/* Education */}
            <View style={styles.section}>
                <Text style={styles.heading}>Education:</Text>
                {formData.education?.length > 0 ? (
                    formData.education.map((edu, index) => (
                        <Text key={index} style={styles.item}>{edu}</Text>
                    ))
                ) : (
                    <Text style={styles.noData}>No education added</Text>
                )}
            </View>

            {/* Projects */}
            <View style={styles.section}>
                <Text style={styles.heading}>Projects:</Text>
                {formData.projects?.length > 0 ? (
                    formData.projects.map((proj, index) => (
                        <Text key={index} style={styles.item}>{proj}</Text>
                    ))
                ) : (
                    <Text style={styles.noData}>No projects added</Text>
                )}
            </View>

            {/* Achievements */}
            <View style={styles.section}>
                <Text style={styles.heading}>Achievements:</Text>
                {formData.achievements?.length > 0 ? (
                    formData.achievements.map((ach, index) => (
                        <Text key={index} style={styles.item}>{ach}</Text>
                    ))
                ) : (
                    <Text style={styles.noData}>No achievements added</Text>
                )}
            </View>
        </Page>
    </Document>
);

// Resume template component
const ResumeTemplate = ({ formData }) => {
    return (
        <div className="resume-template">
            <h1>Resume Preview</h1>
            {/* PDF Download Link */}
            <PDFDownloadLink
                document={<MyDocument formData={formData} />}
                fileName="resume.pdf"
            >
                {({ loading }) => (loading ? 'Generating PDF...' : 'Download PDF')}
            </PDFDownloadLink>
        </div>
    );
};

export default ResumeTemplate;
