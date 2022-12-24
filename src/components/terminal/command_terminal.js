function CommandsComponent(props){
    console.log(props.command);
    return (
        <div class="Terminal__Prompt">
        <span class="Prompt__user">smkwinner@ubuntu:</span><span class="Prompt__location">~</span><span class="Prompt__dollar">$</span>
        {
            props.command.map((command,index) => {
                return (
                    <div key={index}>
                        <span class="Prompt__cursor">{command}</span>
                    </div>
                )
            })
        }
      </div>
    );

}
export default CommandsComponent;