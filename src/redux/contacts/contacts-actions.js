//import types from './contacts-types';
import { v4 as uuidv4 } from 'uuid';
import editNumber from '../../helpers/edit-number';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add', ({ name, number }) => ({
  payload: {
    id: uuidv4(),
    name,
    number: editNumber(number),
  },
}));
const deleteContact = createAction('contacts/delete');
const filterContact = createAction('contacts/filter');

// const addContact = ({ name, number }) => {
//   return {
//     type: types.ADD,
//     payload: {
//       id: uuidv4(),
//       name,
//       number: editNumber(number),
//     },
//   };
// };

// const deleteContact = id => {
//   return {
//     type: types.DELETE,
//     payload: id,
//   };
// };

// const filterContact = value => {
//   return {
//     type: types.FILTER,
//     payload: value,
//   };
// };

export default { addContact, deleteContact, filterContact };
