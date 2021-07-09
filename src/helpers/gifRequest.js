export const getGifs = async(nameGif)=>{
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

    return getResponse;
  };