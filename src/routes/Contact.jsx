import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc} from "firebase/firestore";
import db from "../db";
import ContactDetails from "../components/ContactDetails";

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
        <>
            <h1>Contact Page</h1>
            <ContactDetails />
        </>
    );
}

export default Contact;