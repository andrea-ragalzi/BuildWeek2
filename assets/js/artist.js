const createAlbumRef = (album) => {
    const albumRef = document.createElement('div');
    albumRef.innerHTML = `    <div class="row row-cols-3">
    <img src="./assets/img/ricordi.jpeg" alt="Image Album">
    <div>
      <p id="albumTitle"></p>
      <p id="listeners"></p>
    </div>
    <i class="bi bi-three-dots-vertical"></i>
  </div>`;
}

const fetchArtist = async (artistId) => {
    const url = `${URL_ARTIST}${artistId}`;
    try {
        let response = await fetch(url);
        if (response.ok) {
            let artist = await response.json();
            return artist;
        } else {
            alert('We were able to contact the server, but there was a problem');
            return null;
        }
    } catch (error) {
        alert(error);
    }
};

const fetchTracklist = async (tracklistUrl) => {
    try {
        let response = await fetch(tracklistUrl);
        if (response.ok) {
            let tracklist = await response.json();
            return tracklist;
        } else {
            alert('We were able to contact the server, but there was a problem');
            return null;
        }
    } catch (error) {
        alert(error);
    }
};


const URL_ARTIST = 'https://striveschool-api.herokuapp.com/api/deezer/artist/';

const coverImgRef = document.getElementById('coverImg');
const artistNameRef = document.getElementById('artistName');
const followersNameRef = document.getElementById('followers');
const likeImgRef = document.getElementById('likeImg');
const albumTitleRef = document.getElementById('albumTitle');
const listenersRef = document.getElementById('listeners');

const artistId = 418;

window.onload = async () => {
    const artist = await fetchArtist(artistId);
    console.log(artist);
    const tracklist = await fetchTracklist(artist.tracklist)
    console.log(tracklist);
    coverImgRef.style.backgroundImage = `url(${artist.picture_xl})`;
    coverImgRef.style.backgroundSize = 'cover';
    artistNameRef.innerText = artist.name;
    followersNameRef.innerText = `${artist.nb_fan} ascoltatori mensili`;
    likeImgRef.setAttribute('src', artist.picture_small );
    albumTitleRef.innerText = tracklist.data[0].title;
    listenersRef.innerText = tracklist.data[0].rank;
}
