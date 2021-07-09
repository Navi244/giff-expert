import React, { useState, useEffect} from 'react'
import { getGifs } from '../helpers/gifRequest'

const GifGrid = ({nameGif})=>{
  const [imagesData, setImagesData] = useState([]);
  /**
   * En esta sección se ejecuta  getGifs pero useEffect condifiona a que se ejecute solo una vez cuandp se renderiza el componente
   * a pesar de que el useState renderice todo de nuevo 
  */

  useEffect(()=>{
    getGifs(nameGif).then(setImagesData)
  },[nameGif])

  /**
   * El corchete  que está en el useEffect es una dependecia, es decir, si queremos que por alguna razón 
   * se vuelva a ejecutar el getGifs esperamos a que nameGif cambie y se volverá a ejecutar
  */

  
  return(
    <div className="row">
      {
        imagesData.map(imgData=>{
          return(
            <div key={imgData.id} className="col-md-4">
              <p>{imgData.title}</p>
              <img src={imgData.url} width={imgData.size.height} alt={imgData.title} />
            </div>
          )
        })
      }
    </div>
  )
}

export default GifGrid;