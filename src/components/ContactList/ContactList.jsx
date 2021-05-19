import styles from './ContactList.module.scss';
import ContactItem from '../ContactItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsSelectors from '../../redux/contacts/contacts-selectors';

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
const mapStateToProps = state => ({
  contacts: contactsSelectors.getVisibleContacts(state),
});

export default connect(mapStateToProps)(ContactList);
