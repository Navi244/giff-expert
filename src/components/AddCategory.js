import React, {useState} from 'react'



const AddCategory = ()=>{
  const [inputValue, setInputValue] = useState('hola mundo');

  const handleInputChange = (event)=>{
    setInputValue(event.target.value)
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange}></input>
    </div>
  )
};

export default AddCategory;