import React from 'react';
import { Component } from 'react';
import AddingForm from '../AddingForm/AddingForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RiContactsBookLine } from 'react-icons/ri';
import {
  ContactsSection,
  Container,
  SearchSection,
  SubTitle,
  Title,
  TitleWrapper,
  Wrapper,
} from './App.styled';

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
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
      toast.success('Contact added successfully', {
        position: 'top-right',
        autoClose: 3000,
      });
    }
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
      <Container>
        <TitleWrapper>
          <Title>Phonebook</Title> <RiContactsBookLine size={40} color="#fff" />
        </TitleWrapper>
        <Wrapper>
          <SearchSection>
            <Filter filter={filter} findContact={this.findContact}></Filter>
            <AddingForm addContact={this.addContact}></AddingForm>
          </SearchSection>
          <ContactsSection>
            <SubTitle>Contacts</SubTitle>
            <ContactList
              newList={newList}
              removeContact={this.removeContact}
            ></ContactList>
            <ToastContainer />
          </ContactsSection>
        </Wrapper>
      </Container>
    );
  }
}
