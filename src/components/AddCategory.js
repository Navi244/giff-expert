import React, {useState} from 'react'


const AddCategory = ({setCategory})=>{
  const [inputValue, setInputValue] = useState('');
  //const [allcategories, setCategories] = useState(categories);

  // const addElement = ()=>{
    
  // };

  const handleInputChange = (e) =>{
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setCategory(inputValue);
    setInputValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange}></input>
      <br />
      {/* <button onClick={addElement}>Add element</button> */}
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
    </form>
  )
};

export default AddCategory;