import React from "react";
import {Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { CgWebsite,CgOrganisation } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
function ProjectCards(props) {
  const project=props.cardItem;
  const MAX_LENGTH = 100;
  const tags=project["skills"];
  return (
     <Card className="project-card-view" onClick={
      ()=>{
        
        if(project["sourceCode"]!=null){
          window.open(project["sourceCode"],"_blank");
        }
        else if(project["liveVersion"]!=null){
          window.open(project["liveVersion"],"_blank");
        }
        else if(project["organisation"]!=null){
          window.open(project["organisation"]["src"],"_blank");
        }
        
      }
     }>
      <Card.Img variant="top" src={project["img"]} alt="card-img" style={{
        height:"300px",
        objectFit: "scale-down"
      }} />
      <Card.Body>
        <Card.Title style={{fontWeight:"bold"}}>{project["title"]}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted" style={{
          padding: "10px",
        }}>

        Skills: {tags.map((tag,index)=>{
            return <span key={index} style={{color:"white",fontWeight:"bold",marginRight:"5px"}}>{tag},</span>
          })}
        </Card.Subtitle>
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


export default ProjectCards;
