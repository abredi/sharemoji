import API_KEY from "../key";
const APIModule = () => {
  const get = async (uri = 'gifs/translate', query = null) => {
    let url = `https://api.giphy.com/v1/${uri}?api_key=${API_KEY}&limit=15`;
    if (query !== null) {
      url += `&q=${query}`;
    }
    const response = await fetch(url, { mode: 'cors' });
    return response.json();
  }

  return { get };
};

export { APIModule as default };