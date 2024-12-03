// Form to add a new contact

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import db from "../db";

import AppHeader from "../components/AppHeader";
import ContactForm from "../components/ContactForm";

function NewContact(){

    /*** Settings and Parameters */
    const backNav = "/";
    const navigate = useNavigate();

    /*** States ***/
    const [details, setDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        prov: '',
        postalCode: ''
    });
    
    /*** Handlers ***/

    // Update state when form input changes
    function changeInputHandler(e){

        setDetails({
            ...details,
            [e.target.name]: e.target.value
        })
    }

    // Add a new contact to the database
    function addContactHandler(){

        if(details.firstName && details.lastName) {
            const c = collection(db, "contacts");

            addDoc(c, {...details})
            .then(document => {
                navigate(`/contact/${document.id}`)
            })
        }

    }

    // If user cancels, go back to home
    function onCancelHandler(e){
        e.preventDefault();
        navigate(backNav);
    }

    return(
        <article  id="app" data-theme="light">
            <AppHeader title="Add New Contact"/>
            <main>
                <ContactForm 
                    {...details}  
                    changeInput={changeInputHandler} 
                    onSubmit={addContactHandler}
                    onCancel={onCancelHandler} 
                />
            </main>
        </article>
    );
}

export default NewContact;