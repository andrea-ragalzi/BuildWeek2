const createSongRef = (album) => {
    const albumRef = document.createElement('div');
    albumRef.innerHTML = `    <div class="row row-cols-3">
    <img class="img-song" src="${album.album.cover}" alt="Image Album">
    <div>
      <p id="albumTitle">${album.title}</p>
      <p id="listeners">${album.rank}</p>
    </div>
    <i class="bi bi-three-dots-vertical"></i>
  </div>`;
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

const artistId = 412;

window.onload = async () => {
    const artist = await fetchArtist(artistId);
    const tracklist = await fetchTracklist(artist.tracklist);
    coverImgRef.style.backgroundImage = `url(${artist.picture_xl})`;
    coverImgRef.style.backgroundSize = 'cover';
    artistNameRef.innerText = artist.name;
    followersNameRef.innerText = `${artist.nb_fan} ascoltatori mensili`;
    likeImgRef.setAttribute('src', artist.picture_small );
    tracklist.forEach(song => {
        albumsRef.appendChild(createSongRef(song));
    });
}
