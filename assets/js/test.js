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


URL_ARTIST = 'https://striveschool-api.herokuapp.com/api/deezer/artist/';

const artistId = 4149;

window.onload = async () => {
    const artist = await fetchArtist(artistId);
    console.log(artist);
    const tracklist = await fetchTracklist(artist.tracklist)
    console.log(tracklist);
}
