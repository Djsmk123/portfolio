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
        axios.get("https://api.countapi.xyz/hit/smkwinner.vercel.app/visits")
        .then(res => {
          setCount(res.data.value);
          console.log("Views: " + res.data.value);
        })
        .catch(err => {
          console.log(err);
        }) 
      }
     
    }, []);
    return (
      (
        count
      )

    );
  }

export default ViewsCounter;