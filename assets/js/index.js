
const createBigAlbumRef = album => {
  const albumRef = document.createElement('div');
  albumRef.innerHTML = `
  <div class="row row-cols-2">
  <img id="albumCover" src="${album.cover_big}" alt="Album cover" />
  <div>
    <p>Playlist</p>
    <p id="albumTitle">${album.title}</p>
  </div>
</div>
<div class="row">
  <div class="row row-cols-2 justify-content-between">
    <div>
      <i class="bi bi-heart"></i>
      <i class="bi bi-three-dots"></i>
    </div>
    <div class="align-items-center d-flex">
      <p class="mb-0">${album.tracklist.length} brani</p>
      <i class="bi bi-play-circle-fill"></i>
    </div>
  </div>
</div>
`;
  return albumRef;
}

const createSmallAlbumRef = album => {
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

const URL_SEARCH =
  'https://striveschool-api.herokuapp.com/api/deezer/search?q=';
const ALBUM_ID_RANGE = [40000, 50000];
const ALBUMS_NR = 6;

const albumsSmall1Ref = document.getElementById('albumsSmall1');
const albumsSmall2Ref = document.getElementById('albumsSmall2');
const albumsBigRef = document.getElementById('albumsBig');
const albumsRef = document.getElementsByClassName('album-class');

window.onload = async () => {
  let search_results = await fetchSong('rock');
  search_results = shuffleArray(search_results);
  const smallAalbums =
    search_results.slice(0, 6).map(search_result => search_result.album);
  for (let index = 0; index < ALBUMS_NR; index++) {
    const smallAlbum = smallAalbums[index];
    if (index < ALBUMS_NR / 2) {
      albumsSmall1Ref.appendChild(createSmallAlbumRef(smallAlbum));
    }
    else {
      albumsSmall2Ref.appendChild(createSmallAlbumRef(smallAlbum));
    }
  }
  const bigAlbums =
    search_results.slice(6).map(search_result => search_result.album);
  bigAlbums.forEach(bigAlbum => {
    albumsBigRef.appendChild(createBigAlbumRef(bigAlbum));
  });
  Array.from(albumsRef).forEach(albumRef => {
    console.log(albumRef);
    albumRef.addEventListener('click', () => {
      console.log('Album clicked:', albumRef);
    });
  });
}