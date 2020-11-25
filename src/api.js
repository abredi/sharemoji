import API_KEY from "../key";
const APIModule = () => {
  const get = async () => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=cats&limit=5`, { mode: 'cors' });
    return response.json();
  }

  return { get };
};

export { APIModule as default };