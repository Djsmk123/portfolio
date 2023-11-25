// MeetPage.js
import React from "react";
import Button from "react-bootstrap/Button";
function MeetPage() {
  const meetLink = "https://meet.google.com/ktm-dtyi-gbb";

  const redirectToMeet = () => {
    // Open the link in a new tab
    window.open(meetLink, "_blank");
  };

  // Automatically redirect after a certain delay
  React.useEffect(() => {
    const redirectTimer = setTimeout(() => {
      redirectToMeet();
    }, 3000); // Adjust the delay as needed (in milliseconds)

    // Clear the timer if the component unmounts
    return () => clearTimeout(redirectTimer);
  }, []);

  return (
    <div style={{ textAlign: "center", paddingTop: "50vh" }}>
    
      <Button
            variant="primary"
            target="_blank"
            onClick={redirectToMeet}
            style={{ marginLeft: "10px",marginBottom:"10px"}}
          >
            
            Join Now
          </Button>
          <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          
          </p>
          
          <footer className="blockquote-footer">Loading Google Meet...</footer>
        </blockquote>
     
    </div>
  );
}

export default MeetPage;
