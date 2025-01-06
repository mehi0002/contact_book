// Header structure with the page title, action items, and navigation. Option for a back link

import { Link } from "react-router-dom";
import Toolbar from "./Toolbar.jsx";

function AppHeader(props){
    return(
        <header id="app-header">
            <nav className="actions"> 

                {/* back link */}
                { props.back && 
                    <Link className="icon" to={props.back} aria-label="back">
                        <i className="fa-solid fa-arrow-left" aria-hidden="true"></i>
                    </Link>
                }

                {/* Navigation/actions */}
                <Toolbar>
                    {props.children}
                </Toolbar>
            </nav>

            {/* Page */}
            <h1>{props.title}</h1>
        </header>
    );
}

export default AppHeader;