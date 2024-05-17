import Project from '../components/Project';

import socialnetwork from '../images/socialnetwork.png';
import weatherapp from "../images/weatherapp.png";
import jate from "../images/jate.png";
import employeemanager from "../images/employeemanager.png";
import flixfiend from "../images/flixfiend.png";
import yourscene from "../images/yourscene.png"


export default function Portfolio() {
    //create an array of the projects to be passed down later to the project component as props
    const projectList = [
        {
            id: 1,
            name: "Social Network Api",
            githubLink: "https://github.com/NPetkas/social-network-api",
            deployedLink: "https://drive.google.com/file/d/1xhY3TfMDLwtM30kItiw10w-RHgf_keSE/view",
            image: socialnetwork
        },
        {
            id: 2,
            name: "Weather Dashboard",
            githubLink: "https://github.com/NPetkas/weather-dashboard",
            deployedLink: "https://npetkas.github.io/weather-dashboard/",
            image: weatherapp
        },
        {
            id: 3,
            name: "J.A.T.E.",
            githubLink: "https://github.com/NPetkas/pwa-text-editor",
            deployedLink: "https://pwa-text-editor-ct24.onrender.com",
            image: jate
        },
        {
            id: 4,
            name: "Employee Manager",
            githubLink: "https://github.com/NPetkas/employee-tracker",
            deployedLink: "https://drive.google.com/file/d/1oiR2WoUZyjpDHB5k0lEZAgmWsfikbd1p/view",
            image: employeemanager
        },
        {
            id: 5,
            name: "Flix Fiend - Project 1",
            githubLink: "https://github.com/Vinsanity97/FlixFiend",
            deployedLink: "https://vinsanity97.github.io/FlixFiend/",
            image: flixfiend
        },
        {
            id: 6,
            name: "Your Scene - Project 2",
            githubLink: "https://github.com/mlofaso/your-scene-blog",
            deployedLink: "https://your-scene-blog-b514a180a1de.herokuapp.com",
            image: yourscene
        },
    ];

    return (
        <Project projectList={projectList} />
    )
}