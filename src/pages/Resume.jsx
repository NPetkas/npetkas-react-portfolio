import resume from '../pdfs/npresume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faReact, faHtml5, faCss3Alt, faNodeJs  } from '@fortawesome/free-brands-svg-icons';


const Resume = () => {
  // creating a button for a resume to be downloaded and adding list of languages I am proficient in
    return (
      <div className="res-container">
        <h2>Resume</h2>
        <a href={resume} download className="resume-link">
          Downloadable Resume
        </a>
        <h3>Proficiencies:</h3>
        <ul className="proficiencies-list">

        <div>HTML
          <FontAwesomeIcon icon={faHtml5} size="2xl" style={{color: "#000000",}} />
          </div>
          <div>CSS
          <FontAwesomeIcon icon={faCss3Alt} size="2xl" style={{color: "#000000",}} />
          </div>
          <div>Bootstrap</div>
          <div>JavaScript
          <FontAwesomeIcon icon={faJs} size="2xl" style={{color: "#000000",}} />
          </div>
          <div>MongoDB</div>
          <div>React
          <FontAwesomeIcon icon={faReact} size="2xl" style={{color: "#000000",}} />
          </div>
          <div>Node.js
          <FontAwesomeIcon icon={faNodeJs} size="2xl" style={{color: "#000000",}} />
          </div>
          <div>Express.js
          <FontAwesomeIcon icon={faNodeJs} size="2xl" style={{color: "#000000",}} />
          </div>
          <div>RESTful API</div>
          <div>MySQL * NoSQL * GraphQL</div>
        </ul>
      </div>
    );
  };
  
  export default Resume;