import Nav from './Nav';

// header component that imports the nav
export default function Header() {
    return (
        <div className="header">
            <aside>Nico Petkas</aside>
            <Nav />
        </div>
    )
}