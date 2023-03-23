const FOOTER_API_DESKTOP =
  "https://striveschool-api.herokuapp.com/api/deezer/album/";


const myAlbumDekstopFooter = function (albumID) {
  const url = `${FOOTER_API_DESKTOP}${albumID}`
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((events) => {
      events.tracks.data.forEach((music, i) => {

        let musicBar = document.getElementsByClassName('musicBar')[0]
        musicBar.innerHTML = `
      <span class="mx-2">0.00</span>
                  <div class="progress bar" role="progressbar" aria-label="Basic example" aria-valuenow="" aria-valuemin="0"
                    aria-valuemax="${music.duration}">
                    <div class="progress-bar "></div>
                  </div>
                  <span class="mx-2">${music.duration}</span>
      `
        let imgBar = document.getElementsByClassName('imgBar')[0]
        imgBar.innerHTML = `
          <div class="d-flex align-items-center">
                  <div class="mx-2">
                    <img class="" src="${music.album.cover}" alt="">
                  </div>
                  
                  <div class="mx-2">
                    <p>${music.title}</p>
                    <p>${music.album.title}</p>
                  </div> 
                  <div class="mx-2">
                    <i class="bi bi-heart"></i>
                  </div>
                </div>
        `
      });
      //FOOTER  
      let play = document.getElementById('playFill')
      let pause = document.getElementById('pause')
      let comando = document.getElementById('comand')
      comando.addEventListener('click', () => {
        if (pause.classList.contains('d-none')) {
          pause.classList.remove('d-none')
          play.classList.add('d-none')
        } else {
          pause.classList.add('d-none')
          play.classList.remove('d-none')
        }
      })
    });
};
myAlbumDekstopFooter(363782)