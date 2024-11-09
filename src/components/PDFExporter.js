import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Button } from '@mui/material';

const PDFExporter = ({ resumeRef }) => {
  const exportPDF = async () => {
    try {
      // Make sure the resume content is fully visible when exporting
      const element = resumeRef.current;
      
      // Temporarily disable scrolling and adjust the height to fit the entire content
      const originalStyle = { 
        height: element.style.height, 
        overflowY: element.style.overflowY 
      };
      element.style.height = 'auto';
      element.style.overflowY = 'visible';

      // First, get the full dimensions of the element
      const originalWidth = element.scrollWidth;
      const originalHeight = element.scrollHeight;

      // Capture the entire element, not just the visible part
      const canvas = await html2canvas(element, {
        scale: 2, // Higher scale for better resolution
        width: originalWidth, // Set the full width of the content
        height: originalHeight, // Set the full height of the content
        useCORS: true, // Use CORS if needed (e.g., if you have external images)
      });

      // Restore the original styling
      element.style.height = originalStyle.height;
      element.style.overflowY = originalStyle.overflowY;

      // Convert the canvas to a data URL for PDF generation
      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const pdf = new jsPDF('p', 'mm', 'a4');

      // A4 page dimensions in mm
      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      // Add the image to the first page
      pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // If the content spans multiple pages, add new pages and adjust positions
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      // Save the generated PDF
      pdf.save('resume.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <Button
      onClick={exportPDF}
      variant="contained"
      sx={{ backgroundColor: '#3b5998', color: '#fff' }}
    >
      Download Resume
    </Button>
  );
};

export default PDFExporter;
