/* Viewing information from a single contact 
with Options to edit or delete */

import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getDoc, doc, deleteDoc} from "firebase/firestore";
import db from "../db";

import AppHeader from "../components/AppHeader";
import ContactDetails from "../components/ContactDetails";
import ConfirmationButton from "../components/ConfirmationButton";

function Contact(){

    /*** States and parameters ***/
    const [details, setDetails] = useState([]);
    const params = useParams();
    const navigate = useNavigate();

    /*** Initialization ***/
    useEffect( () => {                              // Retreiving the contact's document from Firebase
        getDoc( doc(db, "contacts", params.id))     
            .then(document => {
                if(document.exists()){
                    setDetails({
                        id: document.id,
                        firstName: document.data().firstName,
                        lastName: document.data().lastName,
                        email: document.data().email,
                        phone: document.data().phone,
                        address: document.data().address,
                        city: document.data().city,
                        prov: document.data().prov,
                        postalCode: document.data().postalCode
                    });
                }
            })

    }, []);

    /*** Handlers ***/ 
    function deleteContact(){
        deleteDoc( doc(db, "contacts", details.id) )
        .then(() => navigate("/"));
    }

    /****** Build ******/
    return(
        <article id="app">
            <AppHeader title={`${details.firstName} ${details.lastName}`} back="/">         {/*** Header ***/}
                
                <Link  className="icon" to="edit" aria-label="Edit contact">                {/* Edit Contact */}
                    <i className="fa-regular fa-pen-to-square" aria-hidden="true"></i> 
                </Link>

                {/* Delete Contact */}                                                                             
                <ConfirmationButton                                                         
                    className="icon"
                    label = {`delete ${details.fristName} ${details.lastName}`}
                    confirmation={`Are you sure you would like to delete ${details.firstName} ${details.lastName}?`}
                    onConfirm={deleteContact}>
                        <i className="fa-solid fa-trash" aria-hidden="true"></i>
                </ConfirmationButton>

            </AppHeader>

            {/*** Contact Details ***/}
            <main>
                <ContactDetails details={details} />
            </main>
        </article>
    );
}

export default Contact;