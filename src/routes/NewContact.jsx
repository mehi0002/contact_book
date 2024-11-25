import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import db from "../db";

import SiteHeader from "../components/SiteHeader";
import ContactForm from "../components/ContactForm";

function NewContact(){
    const backNav = "/";
    const navigate = useNavigate();

    // States
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
    
    function changeInputHandler(e){

        setDetails({
            ...details,
            [e.target.name]: e.target.value
        })
    }

    function addContactHandler(){

        if(details.firstName && details.lastName) {
            const c = collection(db, "contacts");

            addDoc(c, {...details})
            .then(document => {
                navigate(`/contact/${document.id}`)
            })
        }

    }

    function onCancelHandler(e){
        e.preventDefault();
        navigate(backNav);
    }

    return(
        <article>
            <SiteHeader title="Add new contact"></SiteHeader>
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