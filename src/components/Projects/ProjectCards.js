import React, { useState } from 'react';
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { CgOrganisation } from "react-icons/cg";
import { FiGlobe } from "react-icons/fi";

import { FaYoutube } from "react-icons/fa";
import ImageGalleryModal from './image_gallery';
function ProjectCards(props) {
  const project=props.cardItem;
  const tags=project.tags;
  const [isFullDescriptionVisible, setIsFullDescriptionVisible] = useState(false);
  const toggleDescriptionVisibility = () => {
    setIsFullDescriptionVisible(!isFullDescriptionVisible);
  };
  const [showModal, setShowModal] = useState(false);
  const handleImageClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
     <Card className="project-card-view" onClick={
      ()=>{
        
        /*if(project.open_source){
          window.open(project["github"],"_blank");
        }
        else if(project["live"]!=null){
          window.open(project["live"],"_blank");
        }
        else if(project["organization"]!=null){
          window.open(project["organization"]["url"],"_blank");
        }*/
        
      }
     }>
      <div class="grid grid-cols-2 gap-2">
        
        {project.project_images.map((image,index)=>{
          if(index>1){
            return <div>

              
            </div>;
          }
          return  <img
          alt={project.title} 
          key={index}
          height="200px"
          onClick={handleImageClick}
          style={{ paddingTop: "20px", paddingRight: "10px" }}
          src={image}
        />
        })}
        <ImageGalleryModal images={project.project_images} show={showModal} onHide={handleCloseModal} />
        </div>
      
      <Card.Body>
      
      <h2 className="mt-4 text-xl font-bold text-white flex items-start" style={{
        fontSize:"24px"
      }}>
  {project.title}
</h2>

      <div className="mt-2 flex flex-wrap gap-2 items-start">
  {tags.map((tag, index) => (
    <Button className="badge bg-primary m-1" key={index} style={{
    }}>
    {tag}
  </Button>
  ))}
</div>

<div>
      <p className="mt-2 text-gray-300" style={{ textAlign: 'justify', padding: '5px', fontSize: '14px', opacity: '0.8' }}>
        {isFullDescriptionVisible ? project.description : `${project.description.slice(0, 100)}...`}
        {!isFullDescriptionVisible && (
          <span style={{ color: '#3498db', cursor: 'pointer' }} onClick={toggleDescriptionVisibility}>
               {"  Read more"}
          </span>
        )}
        {isFullDescriptionVisible && (
          <span style={{ color: '#3498db', cursor: 'pointer' }} onClick={toggleDescriptionVisibility}>
            {"   Collaspe"}
          </span>
        )}
      </p>
    </div>
        
        {project["github"]!=null && (
         <Button variant="secondary" href={project["github"]}
         style={{ marginLeft: "5px", marginBottom: "10px", fontSize: "12px", 
         color: "black",
         backgroundColor: "white", borderColor:"transparent" }}
         target="_blank">

         <BsGithub 
         style={{
          color:"black"
          
        }}
         /> &nbsp;
             {"Github"}
          </Button>
        )}
        {project["video_url"]!=null && (
         <Button variant="secondary" href={project["github"]}
         style={{ marginLeft: "5px", marginBottom: "10px", fontSize: "12px", backgroundColor: "red", borderColor:"transparent" }}
         target="_blank">
         <FaYoutube  /> &nbsp;
             {"Watch"}
          </Button>
          
        )}
      
        {project["live"]!=null && (
          <Button
          variant="secondary"
          href={project["live"]}
          target="_blank"
          style={{ marginLeft: "5px", marginBottom: "10px", fontSize: "12px", backgroundColor: "blue", borderColor:"transparent" }}
        >
          <FiGlobe /> &nbsp;
          {"Try Now"}
        </Button>
        
        )}
      {project["organization"]!=null && (
          <Button
          variant="secondary"
          href={project["organization"]["url"]}
          target="_blank"
          style={{ marginLeft: "5px", marginBottom: "10px", fontSize: "12px", backgroundColor: "black",borderColor:"transparent" }}
        >
          <CgOrganisation /> &nbsp;
          {project["organization"]["title"]}
        </Button>
        )  }
        

        
        

      </Card.Body>


    </Card>
      
   
  );
}




export default ProjectCards;
