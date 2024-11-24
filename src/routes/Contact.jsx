import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getDoc, doc} from "firebase/firestore";
import db from "../db";

import Toolbar from "../components/Toolbar";
import Button from "../components/Button";

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
            <header>
                <h1>{`${details.firstName} ${details.lastName}`}</h1>
                <Toolbar>
                    <Link to="edit" aria-label="Edit contact"> 
                        <i className="fa-regular fa-pen-to-square" aria-hidden="true"></i> 
                    </Link>
                    <Button label="delete contact"> 
                        <i className="fa-solid fa-trash" aria-hidden="true"></i> 
                    </Button>
                </Toolbar>
            </header>
            <main>
                <table>
                    <tbody>
                        <tr> 
                            <th>First Name:</th> 
                            <td>{details.firstName}</td> 
                        </tr>
                        <tr> 
                            <th>Last Name:</th>
                            <td>{details.lastName}</td> 
                        </tr>
                        <tr> 
                            <th>Email:</th>
                            <td>{details.email}</td> 
                        </tr>
                        <tr> 
                            <th>Phone:</th> 
                            <td>{details.firstName}</td> 
                        </tr>
                        <tr> 
                            <th>Address:</th> 
                            <td>
                                <span> {details.address} </span>
                                <span> {details.city} </span>
                                <span> {details.prov} </span>
                                <span> {details.postalCode} </span>                        
                            </td> 
                        </tr>
                    </tbody>            
                </table>
            </main>
        </article>
    );
}

export default Contact;