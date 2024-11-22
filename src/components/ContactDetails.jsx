import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc} from "firebase/firestore";
import db from "../db";

function ContactDetails (){

    return(
        <article>
            <h2>Contact Details</h2>
        </article>
    )
}

export default ContactDetails;