import { Link, useLocation } from 'react-router-dom'
import './NavBarV.css'

function NavigationBar() {
    const location = useLocation();
    
    const isActive = (path) => {
        return location.pathname === path;
    };

    return(
        <>
            <nav>
                <h1 id = "name">
                    Zoey Zhu
                </h1>
                <div>
                    <ol id = "navButtons">
                        <li> 
                            <Link to="/" className={isActive('/') ? 'active' : ''}> Home </Link>
                        </li>
                        <li> 
                            <Link to="/projects" className={isActive('/projects') ? 'active' : ''}> Projects </Link>
                        </li>
                        <li> 
                            <Link to="/fun" className={isActive('/fun') ? 'active' : ''}> Fun </Link>
                        </li>
                        <li>
                            <Link to="/contact" className={isActive('/contact') ? 'active' : ''}> Contact </Link>
                        </li>
                    </ol>
                </div>
            </nav>
        </>
    )
}

export default NavigationBar