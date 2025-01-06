
/* basic modal with options to either accept of reject.
   custom message and button descriptions can be passed in by parent */ 
function Modal(props){

    function acceptSelected(){
        props.onAccept();
    }

    function rejectSelected(){
        props.onReject();
    }

    return(
        <dialog open={props.open}>
            <article>
                {props.children ? props.children : "Are you sure?"}
                <footer>
                    <button onClick={acceptSelected}>{props.accept ? props.accept : "Ok"}</button>
                    <button onClick={rejectSelected}>{props.reject ? props.reject : "Cancel"}</button>
                </footer>
            </article>
        </dialog>
    )
}

export default Modal;