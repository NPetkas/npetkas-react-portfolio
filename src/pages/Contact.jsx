import { useState } from "react";
import { validateEmail } from "../utils/helpers";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// contact page
export default function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  {/* function for input change */}
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'name') {
      setName(value);
    } else {
      setMessage(value);
    }
  };

  // Form submit function
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // email and input validation 
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!name) {
      setErrorMessage('Name is required.');
      return;
    }
    if (!message) {
      setErrorMessage('Message is required.');
      return;
    }

    // Reset form fields and error message on successful form submission
    setEmail('');
    setName('');
    setMessage('');
    setErrorMessage('');
  };

  //  jsx form and contact information
  return (
    <div className="con-container text-center">
      <form className="contact-form" onSubmit={handleFormSubmit}>
        <input
          value={email}
          name='email'
          onChange={handleInputChange}
          type='email'
          placeholder='Email'
        />
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
        />
        <button type="submit" className="btn-submit">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      <div>
        <h3>Email: nicopetkas@gmail.com</h3>
        <div className="contact-icon">
        <a
                    href="https://github.com/NPetkas"
                    className="github-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} size="2xl" style={{color: "#000000",}} />
                </a>
    
                <a
                    href="https://www.linkedin.com/in/nico-petkas-464769286/"
                    className="linkedIn-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faLinkedin} size="2xl" style={{color: "#000000",}}/>
                </a>
        </div>
      </div>
    </div>
  );
}