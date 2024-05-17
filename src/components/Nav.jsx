import { Link, useLocation } from 'react-router-dom';


// nav bar
export default function Nav() {
    const currentPage = useLocation().pathname;

    return (

        <nav className="nav">
            <li className="nav-item">
                <Link to="/" className= {currentPage === '/' ? 'nav-link active' : 'nav-link'} >
                    About Me
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/Portfolio" className= {currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'} >
                    Portfolio
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/Resume" className= {currentPage === '/Resume' ? 'nav-link active' : 'nav-link'} >
                    Resume
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/Contact" className={ currentPage === '/Contact' ? 'nav-link active' : 'nav-link'} >
                    Contact Me
                </Link>
            </li>
        </nav>
    );
}