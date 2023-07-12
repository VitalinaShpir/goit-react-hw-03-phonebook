import { ContactForm } from './ContactForm/ContactForm';
import { Component } from 'react';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddNewContact = newContact => {
    const { contacts } = this.state;
    console.log(newContact);
    if (contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts`);
      return;
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );

    // return contacts;
  };

  onDeleteContact = id => {
    const { contacts } = this.state;
    const result = contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: result });
  };

  setFilter = value => {
    this.setState({ filter: value });
  };
  render() {
    const { contacts, filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onFormSubmit={this.handleAddNewContact} />

        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.setFilter} />
        {contacts.length > 0 && (
          <ContactList
            contacts={this.getFilteredContacts()}
            onDeleteContact={this.onDeleteContact}
          />
        )}
        {contacts.length === 0 && <p>There is no names yet</p>}
      </div>
    );
  }
}
