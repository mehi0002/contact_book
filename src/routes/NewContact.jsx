import { useState } from "react";
import SiteHeader from "../components/SiteHeader";
import ContactForm from "../components/ContactForm";

function NewContact(){

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

    function updateContactHandler(){
  
    }

    return(
        <article>
            <SiteHeader title="Add new contact"></SiteHeader>
            <main>
                <ContactForm {...details}  changeInput={changeInputHandler} updateContact={updateContactHandler} />
            </main>
        </article>
    );
}

export default NewContact;