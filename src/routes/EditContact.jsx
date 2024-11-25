import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getDoc, doc} from "firebase/firestore";
import db from "../db";

import SiteHeader from "../components/SiteHeader";
import Toolbar from "../components/Toolbar";

function EditContact(){
    const provinces = ['AB', 'BC', 'MB', 'NB', 'NL', 'NS', 'NT', 'NU', 'ON', 'PE', 'QC', 'SK', 'YT'];

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
    
    function changeHandler(e){

        setDetails({
            ...details,
            [e.target.name]: e.target.value
        })
    }

    function updateContact(e){

    }

    return(
        <article>
            <SiteHeader title="Edit"></SiteHeader>
            <main>
                <form>
                    <label htmlFor="fName">First Name</label>
                    <input type="text" id="fName" name="fName" value={details.firstName} placeholder="first name" onChange={changeHandler}></input>
                    
                    <label htmlFor="lName">Last Name</label>
                    <input type="text" id="lName" name="lName" value={details.lastName} placeholder="last name" onChange={changeHandler}></input>
                    
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={details.email} placeholder="email@provider.com" onChange={changeHandler}></input>
                    
                    <label htmlFor="phone">Phone</label>
                    <input type="text" id="phone" name="phone" value={details.phone} placeholder="(xxx)xxx-xxxx" onChange={changeHandler}></input>
                    
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" name="address" value={details.address} placeholder="123 Street Name" onChange={changeHandler}></input>
                    
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" name="city" value={details.city} placeholder="City" onChange={changeHandler}></input>
                    
                    <label htmlFor="prov">Province</label>
                    <select id="prov" name="prov" value={details.prov} onChange={changeHandler}>
                        {provinces.map((province, index) => 
                            <option key={index} value={province} aria-selected={province === details.prov ? true : false }> {province} </option>
                        )}
                    </select>

                    <label htmlFor="pCode">Postal Code</label>
                    <input type="text" id="pCode" name="pCode" value={details.postalCode} placeholder="A1A 1A1" onChange={changeHandler}></input> 
                    
                    <footer>
                        <Toolbar>
                            <button type="submit">Save</button>
                            <button>Cancel</button>
                            <button>Delete</button>
                        </Toolbar>
                    </footer>
                    
                </form>
            </main>
        </article>
    );
}

export default EditContact;