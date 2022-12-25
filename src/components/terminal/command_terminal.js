import { addLinks  } from "react-link-text";
function CommandsComponent(props){
    let promptUserVisible=true;
    if(props.isUserCommandVisible!==undefined && props.isUserCommandVisible===false){
        promptUserVisible=false;
    }
    return (
        <div class="Terminal__Prompt">
       { promptUserVisible && <div> 
        
         <span class="Prompt__user">smkwinner@ubuntu:</span><span class="Prompt__location">~</span><span class="Prompt__dollar">$</span>
         </div>
        }
     
        {
            props.command.map((command,index) => {
                return (
                    <div key={index}>
                        <span class="Prompt__cursor">
                            {addLinks(command)}
                        </span>
                    </div>
                )
            })
        }
      </div>
    );

}

export default CommandsComponent;