import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { query, collection, onSnapshot, orderBy } from 'firebase/firestore';
import db from '../db';

import AppHeader from '../components/AppHeader';
import SearchBar from '../components/SearchBar';

function Contacts(){
    // states
    const [contactList, setContactList] = useState([]);
    const [search, setSearch] = useState('');

    // Pull database snapshot
    useEffect( () => {
        const q = query( collection(db, 'contacts'), orderBy('lastName') );

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
    
    function updateSearchHandler(s){
        setSearch(s);
    }

    //build
    return (
        <article id="app">
            <AppHeader title="Contact Book">
                <Link  className="icon" to="new_contact" aria-label='Add new contact'> 
                    <i className="fa-solid fa-plus" aria-hidden="true"></i> 
                </Link>
            </AppHeader>
            <main>
                <article>
                    <header>
                        <SearchBar search={search} onChange={updateSearchHandler}></SearchBar>
                    </header>
                    <main>
                        <ul id="contactList" className="table">
                            { 
                                contactList.filter( contact => 
                                    contact.firstName.toLowerCase().includes(search.toLowerCase()) ||
                                    contact.lastName.toLowerCase().includes(search.toLowerCase()) 
                                )
                                .map(contact =>
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