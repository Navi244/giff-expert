import React, {useState} from "react";
import AddCategory from '../components/AddCategory';
import GifGrid from '../components/GifGrid';
import 'bootstrap/dist/css/bootstrap.css';

const Principal = ()=> {

  const [categories, setCategory] = useState(['Radiohead']);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>Mostrar gifs con peticiones</h2>
          <hr />
          <p>Ingresa el nombre del giff que quieres buscar</p>
          <AddCategory setCategory={setCategory}/>
          <GifGrid nameGif={categories} />
        </div>
      </div>
    </div>
  )
}

export default Principal; 