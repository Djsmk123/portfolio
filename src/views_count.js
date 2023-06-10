import { useState, useEffect } from "react";
 import axios from "axios";
 function ViewsCounter() {
     const [count, setCount] = useState(0);
     useEffect(() => {
       if (window.location.hostname === "localhost") {
         setCount(0);
       }
       else{ 
         if(localStorage.getItem("count")!==undefined && localStorage.getItem("count")!==null){
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