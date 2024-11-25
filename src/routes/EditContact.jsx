import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { doc, getDoc, updateDoc, deleteDoc} from "firebase/firestore";
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
        if(details.firstName && details.lastName) {

            updateDoc( doc(db, "contacts", details.id), {...details})
            .then(() => {
                navigate(`/contact/${details.id}`)
            })
        }
    }

    function onCancelHandler(e){
        e.preventDefault();
        navigate(backNav);
    }

    return(
        <article>
            <SiteHeader title="Edit" />
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