import { Link } from "react-router-dom";

function SiteHeader(props){
    return(
        <header>
            {props.backNav && <Link to={props.backNav}>back</Link>}
            <h1>{props.title}</h1>
            {props.children}
        </header>
    );
}

export default SiteHeader;