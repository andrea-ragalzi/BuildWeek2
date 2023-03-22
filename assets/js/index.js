
const createBigAlbumRef = album => {
  const albumRef = document.createElement('div');
  albumRef.innerHTML = `
  <div class='rounded'>
        <div class="d-flex">
          <div class="">
            <img id="albumCover" src="${album.cover}" alt="Album cover" />
          </div>
          <div class="mx-3">
            <div>
              <p>Playlist</p>
            </div>
            <div>
              <p id="albumTitle">${album.title}</p>
            </div>
          </div>
        </div>
        
        <div class="d-flex justify-content-between">
          <div class="d-flex my-2 ">
            <i class="bi bi-heart mx-2"></i>
            <i class="bi bi-three-dots mx-2"></i>
          </div>
          <div class="d-flex mx-3">
            <p class="mb-0 mx-2">${album.tracklist.length} brani</p>
            <i class="bi bi-play-circle-fill mx-2"></i>
          </div>
        </div>
      </div>
`;
  return albumRef;
}

const createSmallAlbumRef = album => {
  const albumRef = document.createElement('div');
  albumRef.innerHTML = `
  <div class="d-flex mx-3 my-2">
  <div>
    <img src="${album.cover_small}" />
  </div>
  <div class="mx-2">
    <p>${album.title}</p>
  </div>
</div>
  `;
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
  console.log(bigAlbums);
  bigAlbums.forEach(bigAlbum => {
    console.log(bigAlbum);
    albumsBigRef.appendChild(createBigAlbumRef(bigAlbum));
  });
}