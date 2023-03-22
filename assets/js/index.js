
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

const fetchAlbum = async (albumId) => {
  const url = `${URL_ALBUM}${albumId}`;
  try {
    let response = await fetch(url);
    if (response.ok) {
      let album = await response.json();
      if (album.record_type === "album") {
        console.log(album);
        return album;
      } else {
        console.log(`The object with id ${albumId} is not an album`);
        return null;
      }
    } else {
      console.log('We were able to contact the server, but there was a problem');
      return null;
    }
  } catch (error) {
    alert(error);
    return null;
  }
};


async function createAlbumsRef() {
  const albumPromises = [];
  const albums = [];

  // Create album elements for all albums
  for (let i = 0; i < ALBUMS_NR; i++) {
    const albumId = randomInt(...ALBUM_ID_RANGE);
    const album = await fetchAlbum(albumId);
    const albumPromise = album;
    albumPromises.push(albumPromise);
  }

  try {
    const albumsData = await Promise.all(albumPromises);

    // Create album elements and add to `albums` array
    albumsData.forEach((album, index) => {
      if (album && album.id) { // verify that album is not null and has an id property
        const albumRef = createAlbumRef(album);
        albums.push(albumRef);
      }
    });

    // Randomly assign albums to `albums1` or `albums2` until each container has `ALBUMS_NR / 2` album elements
    while (albums.length <= ALBUMS_NR) {
      const album = albums.pop();
      const container = Math.random() < 0.5 ? albums1Ref : albums2Ref;

      if (container.children.length < ALBUMS_NR / 2) {
        container.appendChild(album);
      } else {
        albums.unshift(album);
      }
    }

  } catch (error) {
    console.log(error);
  }
}


const randomInt = (min, max) => {
  return Math.floor(Math.random(Date.now()) * (max - min + 1)) + min;
};


const URL_ALBUM = 'https://striveschool-api.herokuapp.com/api/deezer/album/';
const ALBUM_ID_RANGE = [40000, 50000];
const ALBUMS_NR = 6;


const albums1Ref = document.getElementById('albums1');
const albums2Ref = document.getElementById('albums2');

window.onload = async () => {
  createAlbumsRef();
}