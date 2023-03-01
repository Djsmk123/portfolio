import { useState, useEffect } from "react";
import axios from "axios";

function ViewsCounter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
      // check if the user is on localhost
      if (window.location.hostname === "localhost") {
        setCount(0);
        return;
      }
      else{ 

        //check if count is already stored in local storage
        if (localStorage.getItem("count") !== null && localStorage.getItem("count") !== undefined) {
          setCount(localStorage.getItem("count"));
          return;
        } 
        // if not, get the count from the api
        else{
          axios.get("https://api.countapi.xyz/hit/smkwinner.vercel.app/visits")
          .then(res => {
            setCount(res.data.value);
            console.log("Views: " + res.data.value);
            // store the count in local storage
            localStorage.setItem("count", res.data.value);
          })
        
          .catch(err => {
            console.log(err);
          }) 
        }
       
      }
     
    }, []);
    return (
      (
        count
      )

    );
  }

export default ViewsCounter;