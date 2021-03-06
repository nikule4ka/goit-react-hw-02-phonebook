import React from 'react';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContacts }) => (
  <ul className={s.ContactList}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} id={id} className={s.ContactList__item}>
        <p className={s.ContactList__text}>{name}:</p>
        <p>{number}</p>
        <button
          className={s.ContactList__btn}
          onClick={() => onDeleteContacts(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
