
function Button (props){

    return(
        <button aria-label='props.label'> 
            {props.children}
        </button>
    )
}

export default Button;