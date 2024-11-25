import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getDoc, doc, deleteDoc} from "firebase/firestore";
import db from "../db";

import SiteHeader from "../components/SiteHeader";
import ContactDetails from "../components/ContactDetails";

function Contact(){
    const [details, setDetails] = useState([]);
    const params = useParams();
    const navigate = useNavigate();

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

    function deleteContact(){
        deleteDoc( doc(db, "contacts", details.id) )
        .then(() => navigate("/"));
    }

    return(
        <article>
            <SiteHeader title={`${details.firstName} ${details.lastName}`} back="/">
                <Link to="edit" aria-label="Edit contact"> 
                    <i className="fa-regular fa-pen-to-square" aria-hidden="true"></i> 
                </Link>
                <button aria-label="Delete contact" onClick={deleteContact}> 
                    <i className="fa-solid fa-trash" aria-hidden="true"></i> 
                </button>
            </SiteHeader>
            <main>
                <ContactDetails details={details} />
            </main>
        </article>
    );
}

export default Contact;