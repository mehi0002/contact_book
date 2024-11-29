import { useState } from "react";
import Modal from "./Modal";

function ConfirmationButton (props){
    const [dialogOpen, setDialogOpen] = useState(false); 

    function onClick(){
        setDialogOpen(true);
    }

    function onConfirmHandler(){
        setDialogOpen(false);
        props.onConfirm();
    }

    function onCancelHandler(){
        setDialogOpen(false);
    }

    return(
        <>
            <button className={props.className} aria-label='props.label' onClick={onClick}> 
                {props.children}
            </button>
            <Modal 
                onAccept={onConfirmHandler}
                onReject={onCancelHandler}
                open={dialogOpen}
            >
                {props.confirmation}
            </Modal>
        </>
    )
}

export default ConfirmationButton;