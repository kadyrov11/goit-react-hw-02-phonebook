import { Component } from 'react';

import Section from './components/Section'
import Form from './components/Form'
import ContactList from './components/ContactList';
import Filter from './components/Filter'

import shortid from 'shortid'

class App extends Component {
  state = {
    contacts: [
      { id: shortid.generate(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: shortid.generate(), name: 'Hermione Kline', number: '443-89-12' },
      { id: shortid.generate(), name: 'Eden Clements', number: '645-17-79' },
      { id: shortid.generate(), name: 'Annie Copeland', number: '227-91-26' }
    ],
    filter: ''
  }

  addContact = ({ name, number }) => {
    const newContact = {
      id: shortid.generate(),
      name: name,
      number: number
    }
        
    this.setState(({ contacts }) => {
      const alreadyInContacts = contacts.find(({ name }) => name.toLowerCase() === newContact.name.toLowerCase())
      if (alreadyInContacts) {
        alert(`${newContact.name} is already in contacts`)
        return {
          contacts
        }
      }
      return {
        contacts: [...contacts, newContact]
      }
    })
  }

  changeFilter = ({target}) => {
    this.setState({
      filter: target.value
    })
  }

  onDelete = (idx) => {
    this.setState(({ contacts }) => {
      const newList = [...contacts];
      newList.splice(idx, 1);
      // const result = newList.filter((_, index)=> index !== idx);
      return { contacts: newList }
    }
    )};

          
  
  render() {
    const { contacts, filter } = this.state
    const {addContact, changeFilter, onDelete} = this

    const FILTER = filter.toLowerCase()

    const filteredContacts = contacts.filter(({ name, number }) => name.toLowerCase().includes(FILTER) || number.includes(FILTER))


    return (
      <>
      <Section title="PhoneBook">
        <Form onSubmit={addContact}/>
      </Section>
        <Section title="Contacts">
          {contacts.length > 0 ?
          <>
          <Filter label='Find contact by name or number :' value={filter} onChange={changeFilter}/>
            <ContactList contacts={filteredContacts} onClick={onDelete} />
            </> : <p style={{
              fontSize: '25px',
              textAlign: 'center',
              color:'orange',
          }}>There is no contact</p>}
      </Section>
      </>
    )
  }
}

export default App;