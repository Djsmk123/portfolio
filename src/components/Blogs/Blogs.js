import React from "react";
import axios from "axios";
import { Container,Row,Card } from "react-bootstrap";

import Particle from "../Particle";
import blogsImg from "../../Assets/blogs.png";
import BlogsCard from "./BlogsCard.js";
const baseUrl = "https://dev.to/api/articles?username=djsmk123";

function Blogs() {
    const [blogs,setBlogs] = React.useState([]);
   
    const [popular,setPopular] = React.useState([]);
    const[loading,setLoading] = React.useState(true);
    const [error,setError] = React.useState(false);
    React.useEffect(() => {
           axios.get(baseUrl)
            .then(res => {
                
                setBlogs(res.data);
                setLoading(false);
                setPopular(res.data);
            })
            .catch(err => {
                console.log(err);
                setError(true);
                setLoading(false);
            });
    }, []);
    if(popular.length > 0){
        popular.sort((a,b) => b.positive_reactions_count - a.positive_reactions_count);
    }
    
    return (
        <Container fluid className="project-section">
      <Particle />
      <Container>
        {/* check if error or loading */}
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
       

          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {
               blogs.map((blog,index) => {
                return <BlogsCard key={index} blog={blog} />
            })
            }</Row>
            </>
            )
    }
                
        

       
        
      </Container>
    </Container>
    );
    }

export default Blogs;

    