const createSongRef = (album,i) => {
    const albumRef = document.createElement('div');
    albumRef.innerHTML = `
    <div class="d-flex align-items-center justify-content-between mx-3 my-3">
    <div class="d-flex align-items-center">
      <div>
        <div>${i}</div>
      </div>
      <div class="mx-3">
        <img src="${album.album.cover}" alt="Image Album">
      </div>
      <div class="mx-3">
        <p id="albumTitle">${album.title}</p>
        <p id="listeners">${album.rank}</p>
      </div>
    </div>
    <div>
      <i class="bi bi-three-dots-vertical"></i>
    </div>
  </div>
  `;
  return albumRef;
}

const fetchArtist = async (artistId) => {
    const url = `${URL_ARTIST}${artistId}`;
    try {
        let response = await fetch(url);
        if (response.ok) {
            let artist = await response.json();
            return artist;
        } else {
            console.log('We were able to contact the server, but there was a problem');
            return null;
        }
    } catch (error) {
        console.logrt(error);
    }
};

const fetchTracklist = async (tracklistUrl) => {
    try {
        let response = await fetch(tracklistUrl);
        if (response.ok) {
            let tracklist = await response.json();
            return tracklist.data;
        } else {
            console.log('We were able to contact the server, but there was a problem');
            return null;
        }
    } catch (error) {
        console.log(error);
    }
};


const URL_ARTIST = 'https://striveschool-api.herokuapp.com/api/deezer/artist/';

const coverImgRef = document.getElementById('coverImg');
const artistNameRef = document.getElementById('artistName');
const followersNameRef = document.getElementById('followers');
const likeImgRef = document.getElementById('likeImg');
const albumTitleRef = document.getElementById('albumTitle');
const listenersRef = document.getElementById('listeners');
const albumsRef = document.getElementById('tracklist');


const urlSearchParams = new URLSearchParams(window.location.search);
const artistId = urlSearchParams.get('artistId');

window.onload = async () => {
    const artist = await fetchArtist(artistId);
    const tracklist = await fetchTracklist(artist.tracklist);
    coverImgRef.style.backgroundImage = `url(${artist.picture_xl})`;
    coverImgRef.style.backgroundSize = 'cover';
    artistNameRef.innerText = artist.name;
    followersNameRef.innerText = `${artist.nb_fan} ascoltatori mensili`;
    likeImgRef.setAttribute('src', artist.picture_small );
    tracklist.forEach((song,i) => {
        i++
        albumsRef.appendChild(createSongRef(song,i));
    });
}
const localArray = JSON.parse(localStorage.getItem('savedAlbums'));
console.log(localArray)
localArray.forEach(lc=>{
    console.log(lc)
    let casualList=document.getElementById('casuaList')
    casualList.classList.add('list-unstyled')
    let newLi = document.createElement('li')
    newLi.innerHTML=lc;
    casualList.appendChild(newLi)
})
