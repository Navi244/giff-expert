import React, {useState} from 'react'


const AddCategory = ({setCategory})=>{
  const [inputValue, setInputValue] = useState('');
  //const [allcategories, setCategories] = useState(categories);

  const addElement = ()=>{
    setCategory(inputValue)
  };

  const handleInputChange = (e) =>{
    setInputValue(e.target.value);
  }

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange}></input>
      <br />
      <button onClick={addElement}>Add element</button>
      {/* <ol>
          {
            allcategories.map(category =>{
              return(
                <li key={category}>
                  {category}
                </li>
              )
            })
          }
      </ol> */}
    </div>
  )
};

export default AddCategory;