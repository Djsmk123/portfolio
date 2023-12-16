import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import Preloader from "../Pre";
import ProjectCards from "./ProjectCards";
import { ProjectListSchema } from "./project_schema";
const url = "https://smkwinner-ghost.vercel.app/api/projects?all=1"; // Update the URL to your API endpoint

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
      
          if(response.data.success){            
            var projects=response.data.data
            const data = ProjectListSchema.parse(projects.projects);
            setProjects(data);
          }else{
            setError(response.data.message);
          }
      
          
        
        setLoading(false);
        
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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

        {loading && <Preloader load={loading} />}

        {error && <p>Error: {error.message}</p>}

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((item, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCards cardItem={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
  
}

export default Projects;
