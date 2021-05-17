import { combineReducers } from 'redux';
//import types from './contacts-types';
import actions from './contacts-actions';
import { createReducer } from '@reduxjs/toolkit';

const itemsReducer = createReducer(
  [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  {
    [actions.addContact]: (state, { payload }) =>
      state
        .map(item => item.name.toLocaleLowerCase())
        .includes(payload.name.toLocaleLowerCase())
        ? alert(`${payload.name} is already in contacts.`)
        : [...state, payload],
    [actions.deleteContact]: (state, { payload }) =>
      state.filter(contact => contact.id !== payload),
  },
);

// const itemsReducer = (
//   state = [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   { type, payload },
// ) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];

//     case types.DELETE:
//       return state.filter(contact => contact.id !== payload);

//     default:
//       return state;
//   }
// };
const filterReducer = createReducer('', {
  [actions.filterContact]: (_, { payload }) => payload,
});
// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default contactsReducer;
