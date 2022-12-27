import axios from "axios";


import ProjectsData from "../Projects/ProjectsData";

const AvailableCommands = {
    "help": {
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
    "clear": {
        description: "Clear the terminal",
        usage: "clear",
        fn: () => {
            return "";
        }
    },
     "./skills":{
        description: "List all skills",
        usage: "./skills",
        fn: () => {
            return [
                "1.\tFlutter\n",
                "2.\tDart\n",
                "3.\tMySQL\n",
                "4.\tAws Amplify\n",
                "5.\tReact\n",
                "6.\tNode\n",
                "7.\tMongoDB\n",
                "8.\tFirebase\n",
                "9.\tGit\n",
                "10.\tFlask\n",
                "11.\tPython\n",
                "12.\tDjango\n",
                "13.\tHTML\n",
                "14.\tCSS\n",
                "15.\tJavaScript\n",
            ].join("");
        }
     },
    "./bio": {
        description: "bio of Md Mobin",
        usage: "bio",
        fn: async () => {
            //clear the terminal
            return "Experienced Flutter Developer adept in all stages of advanced Flutter development. Knowledgeable in user interface, testing, and debugging processes. Able to effectively self-manage during independent projects, as well as collaborate in a team setting."
        }
    },
      './about':{
        description: "About Md Mobin",
        usage: "about",
        fn: async () => {
            return "Hi Everyone, I am Md.Mobin from New Delhi, India.\nI am pursuing graduation in B.Tech(computer science and engineering) from Guru Gobind Singh Indraprastha University.\n\nApart from coding, some other activities that I love to do! \nPlaying Games\nWritting Tech Blogs\nTravelling";
        }
      },
      './blogs':{
        description: "Blog of Md Mobin",
        usage: "blog",
        fn: async () => {
            const response = await axios.get("https:/dev.to/api/articles?username=djsmk123");
            console.log("response"+response.data);
            const blogs = response.data;
            let blogList = "";
            blogs.forEach((blog) => {
                blogList += `${blog.title} - ${blog.url}\n`;
            }
            );
            return blogList;
        }
        },
        './projects':{

            description: "List all projects",
            usage: "projects",
            fn: () => {
                 return ProjectsData.map((project,index) => {
                    return `${index+1}. ${project.title} - ${project.desc} ${project.liveVersion!==undefined?"\nLive version: "+project.liveVersion:""}\n ${project.sourceCode!==undefined?"Source code: "+project.sourceCode:""}\n\n`;
                 }).join("");
                }
            }, 
    './contact':{
        description: "Contact Md Mobin",
        usage: "contact",
        fn: async () => {
            const personalInfo={
                name:"Md Mobin",
                email:"djsmk123@gmail.com",
                location:"New Delhi, India",
                github:"https://github.com/djsmk123",
                linkedin:"https://linkedin.com/in/md-mobin-bb928820b",
                devto:"https://dev.to/djsmk123",
                twitter:"https://twitter.com/smk_winner",
                instagram:"https://instagram.com/smkwinner"
            }
            return [
                "Use the following links to contact me\n",
                Object.keys(personalInfo).map((key) => {
                    return `${key} - ${personalInfo[key]}\n`;
                }).join("")
            ].join("");

        }
    }
};

const getOuput = async (props) => {

    const command = props.command.toLowerCase();
    if (command === "") {
        return "";
    }
    if (command in AvailableCommands) {
        return await AvailableCommands[command].fn();
    } else {
        return "Command not found - Run 'help' to see the list of commands";
    }

}
export default getOuput;