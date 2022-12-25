import React, {useCallback, useState} from "react";

import CommandsComponent from "./command_terminal";
import getOuput from "./commands";
import { set } from "date-fns";


function TerminalPortfolio() {
    const [commands, setCommand] = useState([ ]);
    const [loading, setLoading] = useState(false);

    const handleCommand = useCallback(async (e) => {
        e.preventDefault();
        try{
          setLoading(true);
          const output=await getOuput({
            command: e.target[0].value,
          });
          if(output==="")
          {
            setCommand([]);
          }
          //check is output is array or not
          if(Array.isArray(output)){
            setCommand((prev) => [...prev, output]);
          }else{
            setCommand((prev) => [...prev, [output]]);
          }
          e.target[0].value="";


        }catch(e){

            alert("Something went wrong"+e);
        }finally{
            setLoading(false);
        }
        
        
    }, []);

    

        return (
   <div class="container-terminal">
      <div class="Terminal" >
       <div class="Terminal__Toolbar">
         <div class="Toolbar__buttons">
          <button class="Toolbar__button Toolbar__button--exit">&#10005;</button>
          <button class="Toolbar__button">&#9472;</button>
          <button class="Toolbar__button">&#9723;</button>
      </div>
      <p class="Toolbar__user">smkwinner@ubuntu:~</p>
    </div>
    <div class="Terminal__body">
      <div class="Terminal__text">Welcome to Md Mobin Portfolio!</div>
      <CommandsComponent
      command={[
        "Run 'help' to see the list of commands",
      ]}
      >
      </CommandsComponent>
      {
        commands.map((c,index) => {
            return (
                <CommandsComponent
                command={c}
                key={index}
                isUserCommandVisible={false}
                >
                </CommandsComponent>
            )
            })
      }
      <div class="Terminal__Prompt">
        <span class="Prompt__user">smkwinner@ubuntu:</span><span class="Prompt__location">~</span><span class="Prompt__dollar">$</span>
        <form style={{
          marginBottom:"10px"
        }}
     id="command"
      onSubmit={handleCommand}
  
      
     >
        <input
            type="input"
            placeholder="Enter command"
            className="input-terminal"
          
            style={{
                border: "none", outline: "none", background: "transparent", 
                    color: "white",
                    boxShadow: "none",
                    maxWidth:"20rem",
                    whiteSpace: "pre-wrap",
                    width: "auto",
                    display: "block",
                    marginLeft: "8px",
                }
            }
            
        />

     </form>
      </div>
      {
        loading && (
          <div class="Terminal__Prompt">
            <span class="Prompt__user">smkwinner@ubuntu:</span><span class="Prompt__location">~</span><span class="Prompt__dollar">$</span>
            <div class="Prompt__cursor">
              Fetching data ....................................................
            </div>
          </div>
        )
      }
    </div>
  </div>
</div>


        
    );
}


export default TerminalPortfolio;