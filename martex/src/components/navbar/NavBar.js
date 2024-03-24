import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
    return(
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">home</Link>
                </li>
                <li>
                    <Link to="/">about</Link>
                </li>
                <li>
                    <Link to="/">login</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
        </>
    )
};
export default NavBar;