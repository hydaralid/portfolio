import React, { useState, useEffect } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Hydar Ali Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);

  // Function to determine appropriate scale based on screen width
  const getScale = () => {
    if (width > 1200) return 1.7;
    if (width > 786) return 1.3;
    if (width > 576) return 0.8;
    return 0.5; // For very small screens
  };

  // Update width when window is resized
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Handle when PDF document loads successfully
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setLoading(false);
  }

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative", marginBottom: "20px" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
            className="download-button"
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <div className="pdf-container" style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            {loading && (
              <div className="d-flex justify-content-center align-items-center" style={{ height: "500px" }}>
                <Spinner animation="border" variant="primary" />
              </div>
            )}
            <Document 
              file={pdf} 
              className="d-flex justify-content-center"
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={(error) => {
                console.error("Error loading PDF:", error);
                setLoading(false);
              }}
              loading={<Spinner animation="border" variant="primary" />}
            >
              <Page 
                pageNumber={pageNumber} 
                scale={getScale()}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                loading={<Spinner animation="border" variant="primary" />}
                className="pdf-page"
              />
            </Document>
          </div>
        </Row>

        {numPages > 1 && (
          <Row className="mt-3 mb-3" style={{ justifyContent: "center" }}>
            <div className="d-flex justify-content-center align-items-center">
              <Button 
                variant="outline-primary" 
                onClick={() => setPageNumber(pageNumber > 1 ? pageNumber - 1 : 1)}
                disabled={pageNumber <= 1}
                className="mx-2"
              >
                Previous
              </Button>
              <span className="mx-2">
                Page {pageNumber} of {numPages}
              </span>
              <Button 
                variant="outline-primary" 
                onClick={() => setPageNumber(pageNumber < numPages ? pageNumber + 1 : numPages)}
                disabled={pageNumber >= numPages}
                className="mx-2"
              >
                Next
              </Button>
            </div>
          </Row>
        )}

        <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
            className="download-button"
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;