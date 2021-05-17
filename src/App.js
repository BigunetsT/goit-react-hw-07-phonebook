import React, { Component } from 'react';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import { connect } from 'react-redux';
import contactsOprations from './redux/contacts/contacts-operations';

import './styles.scss';

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return (
      <div className="container">
        <h1 className="title">Phonebook</h1>
        <ContactForm />
        <h2 className="title">Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOprations.fetchContacts()),
});

export default connect(null, mapDispatchToProps)(App);
