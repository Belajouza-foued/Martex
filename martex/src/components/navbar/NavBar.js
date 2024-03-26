import { Link, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
const NavBar = () => {
    return(
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/about">About</Link>
                    </li>
                   
                    <li>
                        <Link to="/home">Home</Link>
                        </li>
                        <li>
                        <Link to="/login">Login</Link>
                        </li>
                    
                
            </ul>
        </nav>
        <Outlet/>
        </>
    )

};
export default NavBar;