import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getDoc, doc} from "firebase/firestore";
import db from "../db";

import SiteHeader from "../components/SiteHeader";
import ContactForm from "../components/ContactForm";

function EditContact(){
    const params = useParams();

    const backNav="/contact/" + params.id;
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

    function onCancelHandler(e){
        e.preventDefault();
        navigate(backNav);
    }

    function deleteContact(){

    }

    return(
        <article>
            <SiteHeader title="Edit">
                <button onClick={deleteContact}>Delete</button>
            </SiteHeader>
            <main>
                <ContactForm 
                    {...details}  
                    changeInput={changeInputHandler} 
                    updateContact={updateContactHandler}
                    onCancel={onCancelHandler} 
                />
            </main>
        </article>
    );
}

export default EditContact;