import { Link } from "react-router-dom";
import Toolbar from "./Toolbar";

function AppHeader(props){
    return(
        <header id="app-header">
            <div className="actions">
                {props.back && <Link className="icon" to={props.back} aria-label="back"><i className="fa-solid fa-arrow-left" aria-hidden="true"></i></Link>}
                <Toolbar>
                    {props.children}
                </Toolbar>
            </div>
            <h1>{props.title}</h1>
        </header>
    );
}

export default AppHeader;