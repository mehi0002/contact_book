import { Link } from "react-router-dom";
import Toolbar from "./Toolbar";

function SiteHeader(props){
    return(
        <header id="site-header">
            <div>
                {props.back && <Link className="icon" to={props.back} aria-label="back"><i class="fa-solid fa-arrow-left" aria-hidden="true"></i></Link>}
                <Toolbar>
                    {props.children}
                </Toolbar>
            </div>
            <h1>{props.title}</h1>
        </header>
    );
}

export default SiteHeader;