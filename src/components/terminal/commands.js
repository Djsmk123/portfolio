

const AvailableCommands = {
    help: {
        description: "List all available commands",
        usage: "help",
        fn: () => {
            let commands = "";
            Object.keys(AvailableCommands).forEach((command) => {
                commands += `${command} - ${AvailableCommands[command].description}\n`;
            });
            return commands;
        }
    },
    clear: {
        description: "Clear the terminal",
        usage: "clear",
        fn: () => {
            return "";
        }
    },
    about: {
        description: "About me",
        usage: "about",
        fn: () => {
            return "Experienced Flutter Developer adept in all stages of advanced Flutter development. Knowledgeable in user interface, testing, and debugging processes. Able to effectively self-manage during independent projects, as well as collaborate in a team setting."
        }
    },
};

const getOuput = (props) => {
    const command = props.command.toLowerCase();
    console.log("Lol"+command);
    if (command === "") {
        return "";
    }
    if (command in AvailableCommands) {
        return AvailableCommands[command].fn();
    } else {
        return "Command not found";
    }

}
export default getOuput;