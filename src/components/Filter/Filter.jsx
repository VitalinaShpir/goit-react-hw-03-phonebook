import PropTypes from 'prop-types';
import { BsFillSearchHeartFill } from 'react-icons/bs';
import css from './Filter.module.css';

export const Filter = ({ filter, onChange }) => {
  const handleChange = e => {
    onChange(e.target.value.toLowerCase());
  };
  return (
    <div className={css.searchBox}>
      <label className={css.searchicon}>
        <BsFillSearchHeartFill /></label>
        <input
        placeholder='Find contacts by name'
          className={css.searchInput}
          type="text"
          value={filter}
          onChange={handleChange}
        />
      
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
