import React from 'react';
import ContactsForm from '../ContactsForm';
Contacts.propTypes = {
    
};

function Contacts(props) {
    const handleSubmit = (values)=>{
        console.log('Form:', values)
    }
    return (
        <div>
            <ContactsForm onSubmit={handleSubmit}/>
        </div>
    );
}

export default Contacts;