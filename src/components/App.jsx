import React from 'react';
import { Component } from 'react';
import AddingForm from './AddingForm/AddingForm';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  addContact = newContact => {
    const oldContact = this.state.contacts.find(
      contact =>
        contact.name.toLowerCase() === newContact.name.toLowerCase() ||
        contact.number === newContact.number
    );

    if (oldContact) {
      toast.error(`${oldContact.name} already exists`, {
        autoClose: 3000,
      });
      return;
    }

    const contact = { ...newContact, id: nanoid() };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  findContact = event => {
    const searchName = event.currentTarget.value.toLowerCase();
    this.setState({ filter: searchName });
  };

  showNewList = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  removeContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const newList = this.showNewList();

    return (
      <div>
        <h1>Phonebook</h1>
        <AddingForm addContact={this.addContact}></AddingForm>
        <h2>Contacts</h2>
        <Filter filter={filter} findContact={this.findContact}></Filter>
        <ContactList
          newList={newList}
          removeContact={this.removeContact}
        ></ContactList>
        <ToastContainer />
      </div>
    );
  }
}
