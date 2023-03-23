const SEARCH_API =
  " https://striveschool-api.herokuapp.com/api/deezer/search?q={pop}";

const searchFunction = function () {
  fetch(SEARCH_API)
    .then((response) => {
      return response.json();
    })
    .then((events) => {
        console.log(events)
        
      });

};
searchFunction()