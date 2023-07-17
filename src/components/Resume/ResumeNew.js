import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdfFile from "../../Assets/MdMobinResume.pdf";
import Particle from "../Particle";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
function ResumeNew() {

  const [pageNumberPdf, setPageNumberPdf]=useState(1);
  const [numPages, setNumPages] = useState(null);
  const [width,setWidth]=useState(1600);
  const onPageChange = (page) => {
    setPageNumberPdf(page);
    setWidth(window.innerWidth);
  };
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdfFile}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document 
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
         
      
          file={pdfFile} 
          
           className="d-flex justify-content-center">
            <Page 
            pageNumber={pageNumberPdf}
            scale={width > 786 ? 1.7 : 0.2}
            
            onPageLoad={({ pageIndex }) => onPageChange(pageIndex + 1)}
            />

          </Document>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative",margin:"10px"}}>
  
      <Button
        variant="primary"
        disabled={pageNumberPdf === 1}
        onClick={() => onPageChange(pageNumberPdf - 1)}
        style={{ maxWidth: "250px", marginRight: "10px",marginBottom:"10px",}}
      >
        Previous Page
      </Button>
      <Button
        variant="primary"
        disabled={pageNumberPdf === numPages}
        onClick={() => onPageChange(pageNumberPdf + 1)}
        style={{ maxWidth: "250px",marginBottom:"10px" }}
      >
        Next Page
      </Button>
    </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
