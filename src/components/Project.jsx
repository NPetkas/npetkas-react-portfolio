import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

// project component for each of the projects on the portfolio page
const Project = (props) => {
    return (
        <div className='port-container'>
            {props.projectList.map(item => (
                <div className="project-card" key={item.id}>
                    {/* for each project we get a name, image and links to deployed and github pages */}
                    <h2>{item.name}</h2>
                    <div>
                        <img src={item.image} alt={item.name} className="img-background" />
                        <a href={item.deployedLink} target="_blank" rel="noopener noreferrer" role="button" className="project-link">
                            {/* adding fontawesome icons to the link for styling */}
                            <FontAwesomeIcon icon={faLink} /> Deploy
                        </a>
                        <a href={item.githubLink} target="_blank" rel="noopener noreferrer" role="button" className="project-link">
                            {/* adding fontawesome icon to the link for styling */}
                            <FontAwesomeIcon icon={faGithub} /> GitHub
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Project;