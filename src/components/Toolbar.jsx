
/* Container that floats its contents to the right side of the page */
function Toolbar(props){
    
    return(
        <div className="toolbar">
            {props.children}
        </div>
    );
}

export default Toolbar;