import { useState} from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import './Phonebook.module.css';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactLIst/ContactList';
import shortid from 'shortid';
import Filter from '../Filter/Filter';
import s from './Phonebook.module.css';


export default function Phonebook() {
  
  const [contacts, setContacts] = useLocalStorage('contacts', 
  [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}], );  
  const [filter, setFilter] = useState('');



   const  handleSubmit = ({ name,number}) => {
     contacts.find(contact =>
       contact.name.toLowerCase().includes(name.toLowerCase())
         ? alert(`${contact.name}  already exist`)
         :addContact(name,number)
       
     )};


  const addContact = ( name, number ) => {
    
    const contact = {
      id: shortid.generate(),
      name,
      number,
    }
    console.log(contact)
    setContacts(contacts=>[contact, ...contacts])
  }
     
     
   const deleteContact = contactId => {
        setContacts(contacts.filter(contact => contact.id !== contactId)
    )
}
     
     
    
   const changeFilter = filter => setFilter(filter.toLowerCase());
 
 const  visibleContacts = () => {
        return contacts.filter(contact => contact.name.toLowerCase().includes(filter));
 }
  

    return (
        <div className={s.section}>
            <h1 className={s.title}>Phonebook</h1>
            <ContactForm onSubmit={ handleSubmit}/>

            <h2 className={s.title_contact}>Contacts</h2>
             <Filter className={s.filter_label} value={filter} onChange={changeFilter} />
            
            <ContactList contacts={visibleContacts()} onDeleteContact={deleteContact}/>
            


      </div>
    );
  
}


