/* Home/main view. Lists the names of all the contacts.
   Options to view a contact's details, or create a new contact */

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { query, collection, onSnapshot, orderBy } from 'firebase/firestore';
import db from '../db';

import AppHeader from '../components/AppHeader';
import SearchBar from '../components/SearchBar';

function Contacts(){

    /*** States ***/
    const [contactList, setContactList] = useState([]);
    const [search, setSearch] = useState('');

    /*** Initialization ***/
    useEffect( () => {
        const q = query( collection(db, 'contacts'), orderBy('lastName') );

        // Get the contact names from firebase, ordered by last name
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
    
    /*** Handlers ***/
    function updateSearchHandler(s){        // updating the search bar/state
        setSearch(s);
    }

    /*** Build ***/
    return (
        <article id="app">
            
            <AppHeader title="Contact Book">                                            {/* Header */}                                             
                <Link className="icon" to="new_contact" aria-label='Add new contact'>   {/* Add New Contact */}    
                    <i className="fa-solid fa-plus" aria-hidden="true"></i> 
                </Link>
            </AppHeader>

            <main>
                <article>                                                                   
                    <header>                                                            {/*Search Bar */}
                        <SearchBar search={search} onChange={updateSearchHandler}></SearchBar> 
                    </header>

                    <main>                                                                                                                             
                        <ul id="contactList" className="table">                         {/* Contact list */}
                            {   
                                contactList.filter( contact =>                          /* Filter by search bar value */
                                    contact.firstName.toLowerCase().includes(search.toLowerCase()) ||
                                    contact.lastName.toLowerCase().includes(search.toLowerCase()) 
                                )
                                .map(contact =>                                         /*Generate list of contact names*/
                                    <li key={contact.id}>
                                        <Link to={`contact/${contact.id}`}> 
                                            {`${contact.firstName} ${contact.lastName}`} 
                                        </Link>
                                    </li>
                                )
                            }
                        </ul>
                    </main>
                </article>
            </main>
        </article>
      );
}

export default Contacts;