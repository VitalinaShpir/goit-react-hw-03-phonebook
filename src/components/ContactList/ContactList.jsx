import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';
import css from './ContactList.module.css'

export const ContactList = ({contacts, onDeleteContact }) => {

  return (
    <ul className={css.contactList}>
       { contacts.map(({id, name, number}) => {
          return (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
              onDeleteContact={onDeleteContact}
            />
          );
        })}
    </ul>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
 
};
