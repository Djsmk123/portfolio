import React from "react"; 
 
import {Card,Button,Row,Col} from "react-bootstrap";
// import calender icon
import {BsCalendar2Check } from "react-icons/bs";
import { BsHeartFill, } from "react-icons/bs";
import {CgComment} from "react-icons/cg";

function BlogsCard(props) {
  const blog = props.blog;
    const link=blog["url"];
    const title=blog["title"];
    const date=blog["published_at"];
    // convert date to DD/MM/YYYY
    const date2=date.substring(8,10)+"/"+date.substring(5,7)+"/"+date.substring(0,4);
    const desc=blog["description"];
    const cover=blog["social_image"];
    const tag=blog["tag_list"];
    const likes=blog["positive_reactions_count"];
    const comments=blog["comments_count"];

  return (
   
   
   <Card className="project-card-view" style={{
        width: "30rem",
        maxHeight: "300px",
        margin: "10px",
    
   }}>
           
        <Card.Body style={{
            padding: "10px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"

        }}>
            <Row style={{
                justifyContent: "center",
                paddingBottom: "10px",
                flexDirection: "row",

            }}>
                {tag.map((tag,index) => {
                    return (
                        <Card.Header   className="blog-tag-btn" key={index}>{tag}</Card.Header>
                    );
                })}
            </Row>
            <Card.Title className="blog-title">{title}</Card.Title>
            <Card.Text className="blog-desc">
                {desc}
               </Card.Text>
            <div className="blog-row" style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "end",
                padding: "10px",

            }}>

                <div className="blog-date" style={
                    {
                        display: "flex",
                        flexDirection: "row",
                        paddingRight: "10px",
                    }
                }>
                    <BsCalendar2Check className="blog-date-icon" style={{
                height: "30px",
                width: "30px",
                paddingRight: "10px",
            }}/>
    
               <Card.Text className="blog-date">
                {date2}
            </Card.Text>
            </div>
               
                 <div className="blog-like" style={
                 {
                        display: "flex",
                         flexDirection: "row",     

                 }
                  
                    }>
                    <BsHeartFill className="blog-like-icon" style={{
                        height: "30px",
                        width: "30px",
                        paddingRight: "10px",
                        color: "red",
                    }}/>
                        <Card.Text className="blog-likes">
                                {likes}
                        </Card.Text>
                 </div>
                    <div className="blog-comment" style={
                    {
                        display: "flex",
                        flexDirection: "row",
                        paddingLeft: "10px",
                    }
                    }>
                    <CgComment className="blog-comment-icon" style={{
                        height: "30px",
                        width: "30px",
                        paddingRight: "10px",
                    }}/>
                        <Card.Text className="blog-likes">
                                {comments}
                        </Card.Text>
                        </div>
                </div> 

           <div
           className="blog-btn"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "end",
                padding: "10px",
              }} 
           >
             <Button variant="primary"
            style={{
                width: "150px",
                height: "40px",
                marginTop: "10px",
                backgroundColor: "#1F2937",
                borderColor: "#1F2937",
            }}
            href={link} target
            ="_blank">Read More</Button>
           </div>
        </Card.Body>


    </Card>

    
    );
}
export default BlogsCard;