export const getGifs = async(category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=wFT9d2n4eWsSTQsvZsOVJac6MyxoId2A&q=${category}&limit=25&offset=0&rating=g&lang=en`
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map(image => ({
    id: image.id,
    title: image.title,
    url: image.images.downsized_medium.url
  }))
  return gifs;
}