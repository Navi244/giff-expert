import React from "react";
import AddCategory from '../components/AddCategory';
import GifGrid from '../components/GifGrid';
import 'bootstrap/dist/css/bootstrap.css';

const Principal = ()=> {

  const elements = [];

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>Mostrar gifs con peticiones</h2>
          <hr />
          <p>Ingresa el nombre del giff que quieres buscar</p>
          <GifGrid />
          <AddCategory categories={elements}/>
        </div>
      </div>
    </div>
  )
}

export default Principal; 