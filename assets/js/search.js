const fetchSong = async (target) => {
    try {
        const url = `${URL_SEARCH}${target}`;
        console.log(url);
        let response = await fetch(url);
        if (response.ok) {
            let song = await response.json();
            return song.data;
        } else {
            console.log('There was a problem with the network response.');
            return null;
        }
    } catch (error) {
        console.error(error);
        return null;
    }
};

const getAlbums = (songs) => {
    return songs.map((song) => song.album);
};

const getArtists = (songs) => {
    return songs.map((song) => song.artist);
};

const showResults = (results) => {
    // Clear previous search results
    Array.from(dynamicContentListRef).forEach((dynamicContentRef) => {
        dynamicContentRef.innerHTML = '';
    });
    results.forEach((result) => {
        const resultRef = document.createElement('div');
        resultRef.classList.add('row', 'row-cols-2','align-items-center');
        resultRef.innerHTML = `
        <div class="row row-cols-2 justify-content-start my-2">
          <img src="${result.picture || result.cover}" alt="Image Result">
        </div>
        <div>
            <h4>${result.title || result.name}</h4>
            <p>${result.type|| result.type}</p>
        </div> 
      `;
        Array.from(dynamicContentListRef).forEach((dynamicContentRef) => {
            dynamicContentRef.appendChild(resultRef);
        });
    });
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
};

const URL_SEARCH =
    'https://striveschool-api.herokuapp.com/api/deezer/search?q=';

const searchBarRef = document.getElementById('searchBar');
const staticContentListRef = document.getElementsByClassName('staticContent');
const dynamicContentListRef = document.getElementsByClassName('dynamicContent');

searchBarRef.value = '';

searchBarRef.addEventListener('input', async () => {
    setTimeout(async () => {
        let query = searchBarRef.value.trim();
        if (!query) {
            console.log('Empty query string.');
            Array.from(staticContentListRef).forEach((staticContentRef) => {
                staticContentRef.classList.remove('d-none');
            });
            Array.from(dynamicContentListRef).forEach((dynamicContentRef) => {
                dynamicContentRef.classList.add('d-none');
                dynamicContentRef.innerHTML = '';
            });
            return;
        }
        let songs = await fetchSong(query);
        if (!songs) {
            console.log('Error fetching songs.');
            return;
        }
        Array.from(staticContentListRef).forEach((staticContentRef) => {
            staticContentRef.classList.add('d-none');
        });
        Array.from(dynamicContentListRef).forEach((dynamicContentRef) => {
            dynamicContentRef.classList.remove('d-none');
        });
        let albums = getAlbums(songs);
        let artists = getArtists(songs);
        let results = shuffleArray([...albums, ...artists]);
        console.log(results);
        showResults(results);
    }, 500);
});

const localArray = JSON.parse(localStorage.getItem('savedAlbums'));
localArray.forEach(lc=>{
    let casualList=document.getElementById('casuaList')
    casualList.classList.add('list-unstyled')
    let newLi = document.createElement('li')
    newLi.innerHTML=lc;
    casualList.appendChild(newLi)
})