import React from 'react'
import trash from '../images/trash.png'


const ContactCard = (props) => {

    const { id, name, email } = props.contact;
    return ( <
        div className = 'card' >
        <
        div className = 'card-body' >
        <
        div className = 'card-title' > < h5 > { name } < /h5></div >
        <
        div > { email } < /div> <
        /div> <
        img src = { trash }
        /> <
        /div>

    )
}
export default ContactCard;