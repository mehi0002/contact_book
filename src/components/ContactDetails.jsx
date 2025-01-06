
// Displays a list of the contact's information
function ContactDetails ({details}){

    return(
        <address>
            <ul id="contactDetails" className="table">
                <li>
                    <span>Email:</span>                                 
                    <span>{details.email}</span>
                </li>
                <li>
                    <span>Phone:</span> 
                    <span>{details.phone}</span>
                </li>
                <li>
                    <span>Address:</span> 
                    <span className="multi-line"> 
                        <div> {details.address} </div>
                        <div> {`${details.city} ${details.prov}`} </div>
                        <div> {details.postalCode} </div>            
                    </span>
                </li>
            </ul>
                                   
        </address>
    );
}

export default ContactDetails;