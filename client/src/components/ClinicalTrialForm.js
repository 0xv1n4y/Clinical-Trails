import React from 'react';
import { Box, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Grid from '@mui/material/Grid2';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import logo from './logo.png';
import "./ClinicalTrialForm.css";

const ClinicalTrialForm = ({ drawerOpen, selectedTrial }) => {
  console.log({ selectedTrial: selectedTrial });

  const handleDownloadPdf = () => {
    const pdf = new jsPDF('p', 'mm', 'a4'); // Define the PDF size
    const imgWidth = 210; // Width of the PDF
    const pageHeight = 297; // Height of the A4 page in mm
    const margin = 10; // Set margin for content

    // Function to add a section to the PDF
    const addSectionToPdf = (element, position) => {
      return html2canvas(element, { scale: 2 }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        // Add the image to the PDF
        pdf.addImage(imgData, 'PNG', margin, position, imgWidth - 2 * margin, imgHeight);

        // Return the height of the added section
        return imgHeight;
      });
    };

    // Get the sections
    const section1 = document.getElementById('section1'); // First 3 sections
    const section2 = document.getElementById('section2'); // Next 3 sections
    const section3 = document.getElementById('section3'); // Checklist

    let position = margin; // Y position for content placement

    // Add the first 3 sections to the first page
    addSectionToPdf(section1, position)
      .then((imgHeight) => {
        position += imgHeight + margin; // Update position for the next section

        // Add the next 3 sections to the second page
        pdf.addPage(); // Add a new page for the next sections
        return addSectionToPdf(section2, margin);
      })
      .then(() => {
        // Add the checklist to the third page
        pdf.addPage(); // Add a new page for the checklist
        return addSectionToPdf(section3, margin);
      })
      .then(() => {
        // Save the PDF file
        pdf.save('Clinical_Trial_Report.pdf');
      })
      .catch((error) => {
        console.error('Error generating PDF:', error);
      });
  };

  return (
    <Box className={`mainContent ${drawerOpen ? 'mainContentOpen' : 'mainContentClosed'}`}>
      <Box className="report-main">
        <Box id="pdfContent" sx={{ padding: 2, backgroundColor: '#fff' }}>
          {/* Header Section with Logo and Title */}
         

          {/* First 3 sections */}
          <Box id="section1">
            <Grid container alignItems="center" sx={{ mb: 3 }}>
              <Grid item size={2}>
                <Box component="img" src={logo} alt="Logo" sx={{ width: 100 }} />
              </Grid>
              <Grid item size={10}>
                <Typography variant="h5" component="h1" sx={{ textAlign: 'left', fontWeight: 'bold' }}>
                  Application Form for Initial Review for Regulatory and Academic Clinical Trials
                </Typography>
                <Typography variant="body1" sx={{ color: '#666', mt: 1 }}>
                  NIEC-AP-02A | Version No.: 6.0 | Effective Date: 03/06/2024
                </Typography>
              </Grid>
            </Grid>
            <Box className="report-form">
              <Typography className="section-title">ADMINSTRATIVE DETAILS</Typography>
              <Box className="section-row">
                <Typography>A. Name of Principal Investigator:</Typography>
                <Typography className="section-value"> {selectedTrial?.administrativeDetails.principalInvestigatorName} </Typography>
              </Box>
              <Box className="section-row">
                <Typography>B. Department:</Typography>
                <Typography className="section-value"> {selectedTrial?.administrativeDetails.department} </Typography>
              </Box>
              <Box className="section-row">
                <Typography>C. Date of Submission to NIEC:</Typography>
                <Typography className="section-value"> {selectedTrial?.administrativeDetails.submissionDate} </Typography>
              </Box>
              <Box className="section-row">
                <Typography>D. Type of Review Requested:</Typography>
                <Typography className="section-value"> {selectedTrial?.administrativeDetails.reviewType} </Typography>
              </Box>
              <Box className="section-row">
                <Typography>E. Title of the Study:</Typography>
                <Typography className="section-value"> {selectedTrial?.administrativeDetails.studyTitle} </Typography>
              </Box>
              <Box className="section-row">
                <Typography>F. Protocol Number:</Typography>
                <Typography className="section-value"> {selectedTrial?.administrativeDetails.protocolNumber} </Typography>
              </Box>
              <Box className="section-row">
                <Typography>G. Version Number:</Typography>
                <Typography className="section-value"> {selectedTrial?.administrativeDetails.versionNumber} </Typography>
              </Box>
              <Box className="section-row">
                <Typography>H. ProtocolDate:</Typography>
                <Typography className="section-value"> {selectedTrial?.administrativeDetails.protocolDate} </Typography>
              </Box>
            </Box>

            <Box className="report-form">
              <Typography className="section-title">INVESTIGATORS</Typography>
              <Box className="section-row">
                <Typography>A. Name:</Typography>
                <Typography className="section-value"> {selectedTrial?.investigators.name} </Typography>
              </Box>
              <Box className="section-row">
                <Typography>B. Designation:</Typography>
                <Typography className="section-value"> {selectedTrial?.investigators.department} </Typography>
              </Box>
              <Box className="section-row">
                <Typography>C. Qualification:</Typography>
                <Typography className="section-value"> {selectedTrial?.investigators.qualification} </Typography>
              </Box>
              <Box className="section-row">
                <Typography>D. Department:</Typography>
                <Typography className="section-value"> {selectedTrial?.investigators.department} </Typography>
              </Box>
              <Box className="section-row">
                <Typography>E. Address:</Typography>
                <Typography className="section-value"> {selectedTrial?.investigators.address} </Typography>
              </Box>
              <Box className="section-row">
                <Typography>F. ContactNumber:</Typography>
                <Typography className="section-value"> {selectedTrial?.investigators.contact} </Typography>
              </Box>
            </Box>

            <Box className="report-form">
              <Typography className="section-title">PARTICIPANT RELATED INFORMATION</Typography>
              <Box className="section-row">
                <Typography>A. Type of participants in the study:</Typography>
                <Typography className="section-value big"> {selectedTrial?.participants.participantType} </Typography>
              </Box>
              <Box className="section-row">
                <Typography>B. If study includes Vulnerable population, provide justification for inclusion:</Typography>
                <Typography className="section-value big"> {selectedTrial?.participants.vulnerableJustification} </Typography>
              </Box>
              <Box className="section-row">
                <Typography>C. Are there any additional safeguards to protect research participants:</Typography>
                <Typography className="section-value big"> {selectedTrial?.participants.safeguards} </Typography>
              </Box>
              <Box className="section-row">
                <Typography>D. Is there any reimbursement/payment to the subject for participation:</Typography>
                <Typography className="section-value big"> {selectedTrial?.participants.reimbursementDetails} </Typography>
              </Box>
            </Box>
          </Box>

          {/* Next 3 sections */}
          <Box id="section2">
            <Box className="report-form">
              <Typography className="section-title">BENFIT AND RISKS</Typography>
              <Box className="section-row">
                <Typography>A. Anticipated Risks:</Typography>
                <Typography className="section-value"> {selectedTrial?.benefitsRisks.anticipatedRisks} </Typography>
              </Box>
              <Box className="section-row">
                <Typography>B. Risk Management Strategy :</Typography>
                <Typography className="section-value"> {selectedTrial?.benefitsRisks.riskManagement} </Typography>
              </Box>
              <Box className="section-row">
                <Typography>C. Participant Benfits:</Typography>
                <Typography className="section-value"> {selectedTrial?.benefitsRisks.participantBenefit} </Typography>
              </Box>
              <Box className="section-row">
                <Typography>D. Society Benfits:</Typography>
                <Typography className="section-value"> {selectedTrial?.benefitsRisks.societalBenefits} </Typography>
              </Box>
              <Box className="section-row">
                <Typography>E. Science Benfits:</Typography>
                <Typography className="section-value"> {selectedTrial?.benefitsRisks.scientificBenefits} </Typography>
              </Box>
              <Box className="section-row">
                <Typography>F. Advertisement Details:</Typography>
                <Typography className="section-value"> {selectedTrial?.benefitsRisks.advertisementBenfits} </Typography>
              </Box>
            </Box>

            <Box className="report-form">
              <Typography className="section-title">PAYMENT COMPENSATION</Typography>
              <Box className="section-row">
                <Typography>A. Treatment of Injuries:</Typography>
                <Typography className="section-value"> {selectedTrial?.paymentCompensation.injuryTreatment} </Typography>
              </Box>
              <Box className="section-row">
                <Typography>B. Compensation of SAE :</Typography>
                <Typography className="section-value"> {selectedTrial?.paymentCompensation.saeCompensation} </Typography>
              </Box>
              <Box className="section-row">
                <Typography>C. Regulatory Approval Details :</Typography>
                <Typography className="section-value"> {selectedTrial?.paymentCompensation.regulatoryApprovals} </Typography>
              </Box>
            </Box>

            <Box className="report-form">
              <Typography className="section-title">STORAGE AND CONFIDENTILITY</Typography>
              <Box className="section-row">
                <Typography>A. Study Document Access Control:</Typography>
                <Typography className="section-value"> {selectedTrial?.storageConfidentiality.documentControl} </Typography>
              </Box>
              <Box className="section-row">
                <Typography>B. Study Drugs/Devices Access Control :</Typography>
                <Typography className="section-value"> {selectedTrial?.storageConfidentiality.drugDeviceControl} </Typography>
              </Box>
            </Box>
          </Box>

          {/* Checklist */}
          <Box id="section3">
            <Box className="report-form">
              <Typography className="section-title">CHECKLIST</Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Enclosure No</TableCell>
                      <TableCell>Remarks</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {selectedTrial?.checklist?.items?.map((item, index) => (
                      <TableRow key={item._id || index}>
                        <TableCell>{item.name || 'N/A'}</TableCell>
                        <TableCell>{item.status || 'N/A'}</TableCell>
                        <TableCell>{item.enclosureNo || 'N/A'}</TableCell>
                        <TableCell>{item.remarks || 'N/A'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
        </Box>

        {/* Button to trigger PDF download */}
        <Button
          variant="contained"
          color="primary"
          onClick={handleDownloadPdf}
          sx={{ mt: 2, fontWeight: 'bold' }}
        >
          Download PDF
        </Button>
      </Box>
    </Box>
  );
};

export default ClinicalTrialForm;