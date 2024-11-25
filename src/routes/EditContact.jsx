import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getDoc, doc} from "firebase/firestore";
import db from "../db";

import SiteHeader from "../components/SiteHeader";
import ContactForm from "../components/ContactForm";

function EditContact(){

 // States
    const params = useParams();
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

    useEffect( () => {
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
    
    function changeInputHandler(e){

        setDetails({
            ...details,
            [e.target.name]: e.target.value
        })
    }

    function updateContactHandler(){
  
    }

    return(
        <article>
            <SiteHeader title="Edit"></SiteHeader>
            <main>
                <ContactForm {...details}  changeInput={changeInputHandler} updateContact={updateContactHandler} />
            </main>
        </article>
    );
}

export default EditContact;