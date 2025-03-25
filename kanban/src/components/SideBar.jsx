import { Link } from 'react-router-dom';

export function SideBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/" className="home--link">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="about--link">About</Link>
                </li>
            </ul>
        </nav>
    )
}