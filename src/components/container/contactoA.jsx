import React from 'react'
import {Contacto} from '../../models/contacto.class'
import ContactoComponent from '../pure/contactoB'


const ContactoListComponent = props => {

    const defaultContact = new Contacto('Pedro','Morel','pedromorelperez@hotmail.com', true);

    return(
        <div>
            <div>
                Your Contact:
            </div>
            <ContactoComponent contacto={defaultContact}></ContactoComponent>
        </div>
    )
}

export default ContactoListComponent