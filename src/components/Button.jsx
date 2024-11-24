
function Button (props){

    function onClick(e){
        e.preventDefault();
        props.onClick();
    }

    return(
        <button aria-label='props.desc' onClick="onClick"> 
            {props.children}
        </button>
    )
}

export default Button;