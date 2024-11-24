import { Link } from "react-router-dom";
import Toolbar from "./Toolbar";

function SiteHeader(props){
    return(
        <header className="site-header">
            {props.back && <Link to={props.back}>back</Link>}
            <h1>{props.title}</h1>
            <Toolbar>
                {props.children}
            </Toolbar>
        </header>
    );
}

export default SiteHeader;