// Button that opens a modal to confirm user's choice before proceeding

import { useState } from "react";
import Modal from "./Modal.jsx";

function ConfirmationButton (props){

    // *** States ***
    const [dialogOpen, setDialogOpen] = useState(false);    // dialog open or closed

    // *** Handlers ***
    function onClick(){                      // open dialog when a button is clicked
        setDialogOpen(true);
    }

    function onConfirmHandler(){             // on confirmation, run parent handler
        setDialogOpen(false);
        props.onConfirm();
    }

    function onCancelHandler(){               // if cancelled, just close dialog
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