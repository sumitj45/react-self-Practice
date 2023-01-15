import React from 'react'

import ContactCard from './ContactCard';

const ContactList = (props) => {
    console.log(props);
    const renderContactList = props.contacts.map((contact) => {
        return (
            //  <ContactCard contact={contact}></ContactCard>
            <
            div className = 'card' >
            <
            div className = 'card-body' >
            <
            div className = 'card-title' > < h5 > { contact.name } < /h5></div >
            <
            div > { contact.email } < /div> <
            /div>

            <
            /div>
        );
    })
    return ( <
        div > { renderContactList } <
        /div>
    )
}
export default ContactList;