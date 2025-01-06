/* Editing information for an existing contact */

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { doc, getDoc, updateDoc, deleteDoc} from "firebase/firestore";
import db from "../db.js";

import AppHeader from "../components/AppHeader.jsx";
import ContactForm from "../components/ContactForm.jsx";

function EditContact(){

    /*** Settings and Parameters ***/
    const params = useParams();
    const navigate = useNavigate();

    const backNav="/contact/" + params.id;

    /*** States ***/ 
    const [details, setDetails] = useState({
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        prov: '',
        postalCode: ''
    });

    /*** Initialization ***/
    useEffect( () => {                                                // Get existing contact info from Firebase
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
    
    /*** Handlers  ***/

    // Update state when form input changes
    function changeInputHandler(e){

        setDetails({
            ...details,
            [e.target.name]: e.target.value
        })
    }

    // Update the database when user submits form
    function updateContactHandler(){
        if(details.firstName && details.lastName) {

            updateDoc( doc(db, "contacts", details.id), {...details})
            .then(() => {
                navigate(`/contact/${details.id}`)
            })
        }
    }

    // If user cancels, go back to contact page
    function onCancelHandler(e){
        e.preventDefault();
        navigate(backNav);
    }

    /*** Build ***/
    return(
        <article id="app" data-theme="light">
            <AppHeader title={`${details.firstName} ${details.lastName}`} />
            <main>
                <ContactForm 
                    {...details}  
                    changeInput={changeInputHandler} 
                    onSubmit={updateContactHandler}
                    onCancel={onCancelHandler} 
                />
            </main>
        </article>
    );
}

export default EditContact;