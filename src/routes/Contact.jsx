import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getDoc, doc} from "firebase/firestore";
import db from "../db";

import Button from "../components/Button";
import SiteHeader from "../components/SiteHeader";
import ContactDetails from "../components/ContactDetails";
import ContactForm from "../components/ContactForm";

function Contact(){
    const [details, setDetails] = useState([]);
    const params = useParams();

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

    return(
        <article>
            <SiteHeader title={`${details.firstName} ${details.lastName}`} back="/">
                <Link to="edit" aria-label="Edit contact"> 
                    <i className="fa-regular fa-pen-to-square" aria-hidden="true"></i> 
                </Link>
                <Button label="Delete contact" onClick="onDeleteHandler"> 
                    <i className="fa-solid fa-trash" aria-hidden="true"></i> 
                </Button>
            </SiteHeader>
            <main>
                <ContactDetails details={details} />
            </main>
        </article>
    );
}

export default Contact;