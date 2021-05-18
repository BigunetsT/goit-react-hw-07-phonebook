import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactError,
  addContactRequest,
  addContactSuccess,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  filterContact,
  fetchContactSuccess,
} from './contacts-actions';

const itemsReducer = createReducer([], {
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
  [fetchContactSuccess]: (_, { payload }) => payload,
});

const filterReducer = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default contactsReducer;
