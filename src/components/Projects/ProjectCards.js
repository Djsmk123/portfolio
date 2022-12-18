import React from "react";
import {Card,Image,Row, Col} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { CgWebsite,CgOrganisation } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
function ProjectCards(props) {
  const project=props.cardItem;
  const MAX_LENGTH = 100;
  
  return (
     <Card className="project-card-view">
      <Card.Img variant="top" src={project["img"]} alt="card-img" style={{
        height:"300px",
        objectFit: "scale-down"
      }} />
      <Card.Body>
        <Card.Title style={{fontWeight:"bold"}}>{project["title"]}</Card.Title>
        <Card.Text style={{ textAlign: "justify", textOverflow:"ellipsis", overflow:"hidden", padding: "20px",}}>
          {
          `${project["desc"].substring(0,MAX_LENGTH)}...`
          }
        </Card.Text> 
        {project["sourceCode"]!=null && (
         <Button variant="primary" href={project["sourceCode"]} target="_blank">
         <BsGithub /> &nbsp;
             {"Github"}
          </Button>
        )}
      
        {project["liveVersion"]!=null && (
          <Button
            variant="primary"
            href={project["liveVersion"]}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Live"}
          </Button>
        )}
      {project["sourceCode"]==null && project["organisation"]!=null && (
          <Button
          variant="secondary"
          href={project["organisation"]["src"]}
          target="_blank"
          style={{ marginLeft: "10px" }}
        >
          <CgOrganisation /> &nbsp;
          {project["organisation"]["name"]}
        </Button>
        )  } 
      </Card.Body>

    </Card>
      
   
  );
}
/*<Row style={{ justifyContent: "space-evenly", paddingBottom: "10px" }}>
            <Card.Img src={project["organisation"]["img"]} alt="Organisation Logo" style={{
              borderRadius:"50%",
              height:"20%",
              maxWidth:"20%"
            }}>
            
            </Card.Img>
              <Card.Text>
                {project["organisation"]["name"]}
              </Card.Text>
            </Row>*/

export default ProjectCards;
