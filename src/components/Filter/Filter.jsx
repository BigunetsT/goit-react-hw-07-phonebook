import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.scss';
import { connect } from 'react-redux';
import * as contactsAction from '../../redux/contacts/contacts-actions';

const Filter = ({ value, onChange }) => {
  return (
    <div className={styles.filter}>
      <label className={styles.label}>
        Find contacts by name
        <input
          type="text"
          className={styles.input}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
const mapStateToProps = state => ({
  value: state.contacts.filter,
});
const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactsAction.filterContact(e.target.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
