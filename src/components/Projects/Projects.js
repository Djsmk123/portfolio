import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ProjectsData from "./ProjectsData";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {ProjectsData.map((item,index)=>{

           return <Col md={4} className="project-card">
           <ProjectCard
            cardItem={item}
           />
         </Col>

        })}

        </Row>
        
      </Container>
    </Container>
  );
  
}

export default Projects;

   