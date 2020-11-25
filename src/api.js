import API_KEY from "../key";
const APIModule = () => {
  const get = () => {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=cats`, { mode: 'cors' })
      .then(function (response) {
        console.log(response.json());
      });
  }

  return { get };
};

export { APIModule as default };