import PropTypes from 'prop-types';
import styles from './ContactItem.module.scss';
import { connect } from 'react-redux';
import contactsAction from '../../redux/contacts/contacts-actions';

const ContactItem = ({ id, name, number, onDelete }) => (
  <li name={name} number={number} className={styles.contactItem}>
    {name}:<span className={styles.phoneNumber}>{number}</span>
    <button
      type="button"
      className={styles.contactDeleteBtn}
      onClick={() => onDelete(id)}
    >
      Delete
    </button>
  </li>
);
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
};
const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(contactsAction.deleteContact(id)),
});
export default connect(null, mapDispatchToProps)(ContactItem);
