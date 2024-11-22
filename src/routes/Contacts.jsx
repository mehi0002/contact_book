import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { query, collection, onSnapshot } from 'firebase/firestore';
import db from '../db';

import Header from '../components/SiteHeader';
import SearchBar from '../components/SearchBar';

function Contacts(){
    // states
    const [contactList, setContactList] = useState([]);

    // Pull database snapshot
    useEffect( () => {
        const q = query( collection(db, 'contacts') );

        const snapShot = onSnapshot(q, (querySnapshot) => {
            const data = [];
            querySnapshot.forEach( (doc) => data.push({
                id: doc.id,
                firstName: doc.data().firstName,
                lastName: doc.data().lastName,
            }));

            setContactList(data);
        })
    }, []);
    

    //build
    return (
        <article>
            <Header title="Contact Book">
                <Link to="new_contact" aria-label='Add new contact'> <i className="fa-solid fa-plus" aria-hidden="true"></i> </Link>
            </Header>
            <main>
                <article>
                    <header>
                        <SearchBar></SearchBar>
                    </header>
                    <main>
                        <ul>
                            { contactList.map(contact =>
                                <li key={contact.id}>
                                    <Link to={`contact/${contact.id}`}> 
                                        {`${contact.firstName} ${contact.lastName}`} 
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </main>
                </article>

            </main>

    
        </article>
      );
}

export default Contacts;