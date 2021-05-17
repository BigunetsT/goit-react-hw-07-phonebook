import styles from './ContactList.module.scss';
import ContactItem from '../ContactItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getVisibleContacts from '../../helpers/getVisibleContacts';

const ContactList = ({ contacts }) => (
  <ul className={styles.contactsList}>
    {contacts.map(({ id, name, number }) => (
      <ContactItem key={id} id={id} name={name} number={number} />
    ))}
  </ul>
);
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func,
};
const mapStateToProps = state => {
  const { items, filter } = state.contacts;
  const visibleContacts = getVisibleContacts(items, filter);
  return {
    contacts: visibleContacts,
  };
};

export default connect(mapStateToProps)(ContactList);
