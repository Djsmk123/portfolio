import ProsparertoImg from "../../Assets/Projects/img/prospareto.webp";
import itmtbLogo from "../../Assets/Projects/img/itmtb_org.jpg";
import patercentLogo from "../../Assets/Projects/img/patercent.jpeg";
import livveAppLogo from "../../Assets/Projects/img/livve_org.svg";
import livveAppDemo from "../../Assets/Projects/img/livve.gif";
import togwsAppDemo from "../../Assets/Projects/img/togws.gif";
import memeGenAppDemo from "../../Assets/Projects/img/meme_app.gif";
import jeevandanAppImg from "../../Assets/Projects/img/jeevandaan.png";
import mathsAppDemo from "../../Assets/Projects/img/Mathematics_App.gif";
import SpsDemo from "../../Assets/Projects/img/sps_game.gif";
import NotepadDemo from "../../Assets/Projects/img/notepad_app.gif";
import BmiCalc from "../../Assets/Projects/img/bmi_app.png";
import ChatsWith from "../../Assets/Projects/img/chatsWith.jpeg";
const ProjectsData=[
    {
        "title":"Prosparerto",
        "img":ProsparertoImg,
        "organisation":{
            "img":itmtbLogo,
            "src":"https://www.itmtb.com",
            "name":"Itmtb Pvt Ltd technologies"
        },
        "priority":1,
        "desc":"A fintech platform where you can find SEBI certified experts in trading and investing. You can use their expertise to make your trading or investing decisions.",
        "liveVersion":"https://play.google.com/store/apps/details?id=com.itmtb.fe.prod&hl=en_IN&gl=US&pli=1"
    },

    {
        "title":"Patercent",
        "img":patercentLogo,
        "organisation":{
            "img":itmtbLogo,
            "src":"https://www.itmtb.com",
            "name":"Itmtb Pvt Ltd technologies"
        },
        "priority":2,
        "desc":"Patercent brings you the most relevant, bite-sized financial news sourced from only the most reliable sources.No need to scan a ton of posts and a dozen different websites. Our team of experts scan through the most reliable sources and bring you just the right information.Whether you are an investor or just curious about the developments in the financial world, Patercent is for you.",
        "liveVersion":"https://play.google.com/store/apps/details?id=com.paterson.paterson_app"
    },
    {
        "title":"Livve",
        "img":livveAppDemo,
        "organisation":{
            "img":livveAppLogo,
            "src":"livve.us",
            "name":"Livve"
        },
        "priority":3,
        "desc":"Safe App automates the entire emergency response. Using the 5G network, this service removes the biggest obstacle between patients and emergency service: the overloaded control room.",
    },
    {
        "title":"TOGWS : Save your Time",
        "img":togwsAppDemo,
        "priority":4,
        "desc":"Personal E-commerce app with Features like Chats with admin,make deal, Use Google map to reach offline store.",
    },
    {
        "title":"MemeGen.JPG",
        "img":memeGenAppDemo,
        "priority":5,
        "sourceCode":"https://github.com/djsmk123/meme_maker",
        "desc":"MemeGen.JPG is an flutter application where user can add captions,image to meme template for generating meme.",
    },
    {
        "title":"Jivandan : Covid Resource finder",
        "img":jeevandanAppImg,
        "priority":6,
        "liveVersion":"https://jivaandaan.github.io/#/",
        "sourceCode":"https://github.com/ShadmanAfzal/Jivdan",
        "desc":"This projects aim to find resource like medicines,food,oxygen during Covid Second wave in India.",
    },
    {
        "title":"Mathematics App",
        "img":mathsAppDemo,
        "priority":6,
        "liveVersion":"https://jaygajjar.ml/Mathematics/",
        "sourceCode":"https://github.com/Djsmk123/Mathematics",
        "desc":"Mathematics flutterAddition / Subtraction / Multiplication / DivisionGenerate MCQ PDF / Question PDF : With AnswerQuizWeb SupportPWA support for Desktop.",
    },
    {
        "title":"Stone Paper Scissor Game",
        "img":SpsDemo,
        "priority":6,
        "sourceCode":"https://github.com/Djsmk123/stone_paper_scissors",
        "desc":"A classic two-person game. Players start each round by saying, “rock, paper, scissors, shoot!” On “shoot,” each player holds out their fist for rock, flat hand for paper, or their index and middle finger for scissors. Rock crushes scissors, scissors cut paper, and paper covers rock. See who wins each round!",
    },
    {
        "title":"NotePad App",
        "img":NotepadDemo,
        "priority":7,
        "sourceCode":"https://github.com/Djsmk123/notepad",
        "desc":"Notepad is a small and fast notetaking app for making notes, memos, or just any plain text content. Features: * simple interface that most of the users find easy to use. * no limits on note's length or number of notes (of course there's a limit to phone's storage) * creating and editing text notes.",
    },
    {
        "title":"BMI Calculator",
        "img":BmiCalc,
        "priority":8,
        "sourceCode":"https://github.com/Djsmk123/BmiCalCSmk",
        "desc":"We are going to make a Body Mass Index Calculator inspired by the beautiful designs made by Ruben Vaalt. It will be a multi screen app with simple functionality but full-on custom styling.",
    },
    {
        "title":"ChatsWith",
        "img":ChatsWith,
        "priority":8,
        "sourceCode":"https://github.com/Djsmk123/chatsWithV2",
        "desc":"Simple Chat Application was created to implement real time communication b/w users using Firebase and Flutter.",
    },
    
];
export default ProjectsData;