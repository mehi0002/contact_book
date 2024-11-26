function ContactDetails ({details}){

    return(
        <address className="details">
            <ul>
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
                    <div> 
                        <span> {details.address} </span>
                        <span> {`${details.city} ${details.prov}`} </span>
                        <span> {details.postalCode} </span>            
                    </div>
                </li>
            </ul>
                                   
        </address>
    );
}

export default ContactDetails;