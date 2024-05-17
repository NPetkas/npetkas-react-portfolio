import Nico from '../images/Nico.jpg'

// about me and intro introduction
export default function About() {
    return (
      <div className="pro-container">

        <h1>About Me</h1>
        <img src={Nico} alt='Nico' className='profile-pic' />
        <p>
        Versatile professional with extensive experience in the entertainment and technology sectors, 
        specializing in project management, workflow optimization, and audio engineering. 
        Proven track record of success in ensuring efficient production processes and adapting to dynamic environments.
        </p>
        
      </div>
    );
  }