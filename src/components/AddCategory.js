import React, {useState} from 'react'


const AddCategory = ({categories})=>{
  const [inputValue, setInputValue] = useState(' ');
  const [allcategories, setCategories] = useState(categories);

  const handleInputChange = (event)=>{
    setInputValue(event.target.value)
  };

  const addElement = () =>{
    setCategories([...allcategories, inputValue]);
  }

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange}></input>
      <br />
      <button onClick={addElement}>Add element</button>
      <ol>
          {
            allcategories.map(category =>{
              return(
                <li key={category}>
                  {category}
                </li>
              )
            })
          }
      </ol>
    </div>
  )
};

export default AddCategory;