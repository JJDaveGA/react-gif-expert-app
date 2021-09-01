import React, {useState} from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategory}) => {
  
  const [inputValue, setInputVale] = useState('');

  const handleInputChange = (e) => {
    setInputVale(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategory(categories => [inputValue, ...categories]);
      setInputVale('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange= {handleInputChange}
      />
    </form>
  );
}

AddCategory.propTypes = {
  setCategory: PropTypes.func.isRequired
}

export default AddCategory;

