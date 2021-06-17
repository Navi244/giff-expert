import React, { useState, useEffect} from 'react'

const GifGrid = ()=>{

  const [imagesData, setImagesData] = useState([]);

  /**
   * En esta sección se ejecuta  getGifs pero useEffect condifiona a que se ejecute solo una vez cuandp se renderiza el componente
   * a pesar de que el useState renderice todo de nuevo 
  */
  useEffect(()=>{
    getGifs();
  },[])

  const getGifs = async()=>{
    const url = 'https://api.giphy.com/v1/gifs/search?q=gatos&api_key=OgaHLZjb4ksTgCizuGQR4I3p3EvMnrBs&limit=10';
    const resp = await fetch(url);
    const {data} = await resp.json();
    const getResponse = data.map(img=>{
      return {
        id: img.id,
        title: img.title,
        size: {
          height: img.images.downsized_medium.height
        },
        url: img.images.downsized_medium.url
      }
    });
    setImagesData(getResponse);
  };
  
  return(
    <div className="col-4">
      {
        imagesData.map(imgData=>{
          return(imgData.id)
        })
      }
    </div>
  )
}

export default GifGrid;