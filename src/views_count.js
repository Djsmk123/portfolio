import { useState, useEffect } from "react";
import axios from "axios";

function ViewsCounter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
      // check if the user is on localhost
      if (window.location.hostname === "localhost") {
        setCount(0);
      }
    
      else{ 
        console.log(localStorage.getItem("count")!== undefined);
      
        if(!localStorage.getItem("count")!== undefined){
          axios.get("https://counterapi.com/api/smkwinner.vercel.app/view?readonly=true&startNumber=450").then((res)=>{
          setCount(res.data.value);
          localStorage.setItem("count", res.data.value);
         });
        }else{
          axios.get("https://counterapi.com/api/smkwinner.vercel.app/view?startNumber=450").then((res)=>{
          setCount(res.data.value);
          localStorage.setItem("count", res.data.value);
         });
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

/*if (localStorage.getItem("count") !== null && localStorage.getItem("count") !== undefined) {
          axios.get("https://counterapi.com/api/mysite.com/view?readonly=true&startNumber=450")  // startNumber from last API (view were 450)
          .then(res => {
            setCount(res.value);
            // store the count in local storage
            localStorage.setItem("count", res.data.value);
          })
        
          .catch(err => {
            console.log(err);
          }) 
          setCount(localStorage.getItem("count"));
        
        } 
        // if not, get the count from the api
        else{
          axios.get("https://counterapi.com/api/mysite.com/view?startNumber=450")  // startNumber from last API (view were 450)
          .then(res => {
            setCount(res.value);
            console.log("Views: " + res.data.value);
            // store the count in local storage
            localStorage.setItem("count", res.data.value);
          })
        
          .catch(err => {
            console.log(err);
          }) 
        
        }*/