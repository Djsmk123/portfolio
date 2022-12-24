import React, {useCallback, useEffect, useState} from "react";
import { Container, Form } from "react-bootstrap";
import CommandsComponent from "./command_terminal";
import getOuput from "./commands";

function TerminalPortfolio() {
    const [command, setCommand] = useState([
        ["Run 'help' to see the list of commands"],
        ["Run 'help' to see the list of commands"],
        ["Run 'help' to see the list of commands"],
    ]);

    const handleCommand = useCallback((e) => {
        setCommand((prev) => [...prev, [getOuput({
            command: "help",
        })]]);
        e.target.value = "";
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
        command.map((c,index) => {
            return (
                <CommandsComponent
                command={c}
                key={index}
                >
                </CommandsComponent>
            )
            })
      }
      <div class="Terminal__Prompt">
        <span class="Prompt__user">smkwinner@ubuntu:</span><span class="Prompt__location">~</span><span class="Prompt__dollar">$</span>
        <Form
     

     id="command"
      onSubmit={
        (e) => {
            e.preventDefault();
            handleCommand(e);
            }
        }
      

     >
        <Form.Control
            type="text"
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

     </Form>
      </div>
    </div>
  </div>
</div>


        
    );
}


export default TerminalPortfolio;