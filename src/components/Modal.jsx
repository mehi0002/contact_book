
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
                {props.children}
                <footer>
                    <button onClick={acceptSelected}>{props.accept ? props.accept : "Ok"}</button>
                    <button onClick={rejectSelected}>{props.reject ? props.reject : "Cancel"}</button>
                </footer>
            </article>
        </dialog>
    )
}

export default Modal;