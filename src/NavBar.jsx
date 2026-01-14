import { Link } from 'react-router-dom'
import './NavBar.css'

function NavigationBar() {
    return(
        <>
            <nav>
                <h1 id = "name">
                    Zoey Zhu
                </h1>
                <div>
                    <ol id = "navButtons">
                        <li> 
                            <Link to="/"> Home </Link>
                        </li>
                        <li> 
                            <Link to="/projects"> Projects </Link>
                        </li>
                        <li> 
                            <Link to="/fun"> Fun </Link>
                        </li>
                    </ol>
                </div>
            </nav>
        </>
    )
}

export default NavigationBar