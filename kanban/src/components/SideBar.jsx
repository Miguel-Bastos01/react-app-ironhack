import { Link } from 'react-router-dom';

export function SideBar() {
    return (
        <nav>
            <ul className='nav'>
                <li>
                    <Link to="/" className="sidebar-link">Home</Link>
                </li>
                <li>
                    <Link to="/dashboard" className="sidebar-link">Dashboard</Link>
                </li>
                <li>
                    <Link to="/about" className="sidebar-link">About</Link>
                </li>
                
            </ul>
            
        </nav>
    )
}