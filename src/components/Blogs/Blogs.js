import React from "react";
import axios from "axios";
import { Container,Row,Dropdown,DropdownButton } from "react-bootstrap";
import Particle from "../Particle";
import BlogsCard from "./BlogsCard.js";
const baseUrl = "https://dev.to/api/articles?username=djsmk123";
function Blogs() {
    const [blogs,setBlogs] = React.useState([]);
    const [isPopular,setPopular] = React.useState(false);
    const[loading,setLoading] = React.useState(true);
    const [error,setError] = React.useState(false);
    React.useEffect(() => {
           axios.get(baseUrl)
            .then(res => {
                setBlogs(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setError(true);
                setLoading(false);
            });
    }, []);
  
    return (
        <Container fluid className="project-section">
      <Particle />
      <Container>
        
        {error && <p style={{ color: "white" }}>
            Error fetching data ........
        </p>
        }
        {
        loading && <p style={{ color: "white" }}>
            Loading ........
        </p>
        }
        {
            !loading && !error && (
            <>
        <h1 className="project-heading">
          I ❤️ <strong className="purple">Writing Blogs </strong>
        </h1>
        <p style={{ color: "white" }}>
          Share my knowledge with the world
        </p>
        <Row></Row>
        <div className="soring-row" style={{
          display: "flex",
          flexDirection: "row",
          cursor: "pointer",
          justifyContent: "center",
        }}>
          <p style={{
            color: "white",
            marginLeft: "10px",
            marginRight: "10px",
            borderRadius: "10px",
            fontSize: "20px",
          }}>
            Sort By:

          </p>
        <DropdownButton 
              onSelect={(eventKey) => {
                if(isPopular && eventKey === "option-1"){
                  setBlogs(blogs.sort((a,b) => new Date(b.published_at) - new Date(a.published_at)));
                  setPopular(false);
                }
                else if(!isPopular && eventKey === "option-1"){
                  setBlogs(blogs.sort((a,b) => b.positive_reactions_count - a.positive_reactions_count));
                  setPopular(true);
                }
              }}
              title={isPopular ? "Popular" : "Latest"}
                id="dropdown-menu-align-right"  style={
                  {
                    backgroundColor: "#007bff",
                    color: "white",
                    marginLeft: "10px",
                    marginRight: "10px",
                    borderRadius: "10px",
                    marginBottom: "10px",
                   
                  }
                }>
              <Dropdown.Item eventKey="option-1">{isPopular?"Latest":"Popular"}</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">{!isPopular?"Latest":"Popular"}</Dropdown.Item>
              
      </DropdownButton>
          
       


        </div>
       


          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <>

            {
               blogs.map((blog,index) => {
                return <BlogsCard key={index} blog={blog} />
            })
            }
            

            </>
            </Row>
            </>
            )
    }
                
        

       
        
      </Container>
    </Container>
    );
    }



    export default Blogs;

    