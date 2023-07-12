import PropTypes from 'prop-types';
import css from './ContactItem.module.css';
import { RiDeleteBinLine } from 'react-icons/ri';

const ContactItem = ({id, name, number, onDeleteContact}) => {
  return (
    <li className={css.contactListItem} >
      <span className={css.contactItem} >{name} : {number}</span>
    
      <button
      className={css.deleteBtn}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        <RiDeleteBinLine/>
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactItem