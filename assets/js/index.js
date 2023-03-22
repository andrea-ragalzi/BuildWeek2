
const createAlbumRef = (album) => {
  const albumRef = document.createElement('div');
  albumRef.innerHTML = `<div>
    <img src="${album.cover_small}" />
    <p>${album.title}</p>
  </div>
</div>
</div>`;
  return albumRef;
}

const fetchSong = async (target) => {
  try {
    const url = `${URL_SEARCH}${target}`
    let response = await fetch(url);
    if (response.ok) {
      let song = await response.json();
      return song.data;
    } else {
      console.log('We were able to contact the server, but there was a problem');
      return null;
    }
  } catch (error) {
    console(error);
  }
};


const randomInt = (min, max) => {
  return Math.floor(Math.random(Date.now()) * (max - min + 1)) + min;
};

const shuffleArray = (arr) => {
  /*
  Fisher-Yates shuffle algorithm
  */
  const date = new Date();
  const seed = date.getMilliseconds() / 1000;
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(seed * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}



const URL_SEARCH = 'https://striveschool-api.herokuapp.com/api/deezer/search?q=';
const ALBUM_ID_RANGE = [40000, 50000];
const SONGS_NR = 6;


const albums1Ref = document.getElementById('albums1');
const albums2Ref = document.getElementById('albums2');

window.onload = async () => {
  const search_results = await fetchSong('rock');
  console.log(search_results );
  let albums = search_results.map(search_result => search_result.album);
  console.log(albums);
}