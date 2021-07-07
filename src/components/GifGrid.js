import React, { useState, useEffect} from 'react'

const GifGrid = ({nameGif})=>{
  const [imagesData, setImagesData] = useState([]);
  /**
   * En esta sección se ejecuta  getGifs pero useEffect condifiona a que se ejecute solo una vez cuandp se renderiza el componente
   * a pesar de que el useState renderice todo de nuevo 
  */

  const getGifs = async()=>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(nameGif)}&api_key=OgaHLZjb4ksTgCizuGQR4I3p3EvMnrBs&limit=10`;
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
  useEffect(()=>{
    getGifs();
  },[])
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