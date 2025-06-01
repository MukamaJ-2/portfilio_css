import { Outlet,Link } from "react-router-dom";

function Layout(){
    return(
        <div>
            <nav>
                <h1>My App</h1>
                <ul>
                    <li><link to="/home">Home</link></li>
                    <li><Link to="/results">results</Link></li>
                    <li><Link to="/hobby">hobbies</Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}