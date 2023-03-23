
const footer_apy =
  "https://striveschool-api.herokuapp.com/api/deezer/album/363782";

const myAlbumDekstop = function () {
  fetch(footer_apy)
    .then((response) => {
      return response.json();
    })
    .then((events) => {
      events.tracks.data.forEach((music) => {
        console.log(music)
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
myAlbumDekstop()

/*

DA METTERE NEL FOOTER PARTE DEKSTOP!!!!

<footer class="footerDekstop">
          <div class="row align-items-center">
            <div class=" col-2 imgBar"> 
            </div>
            <div class=" col-8 playDekstopBar r">
              <div class="row">
                <div class="d-flex justify-content-center my-2">
                  <div class="mx-1"><i class="bi bi-shuffle"></i></div>
                  <div class="mx-1"><i class="bi bi-skip-start-fill"></i></div>
                  <div class="mx-1"id='comand'><i class="bi bi-play-fill " id="playFill"></i><i class="bi bi-pause-fill d-none" id="pause"></i></div>
                  <div class="mx-1"><i class="bi bi-skip-end-fill"></i></div>
                  <div class="mx-1"> <i class="bi bi-arrow-return-left"></i></div>
                </div>
                <div class="d-flex align-items-center justify-content-center musicBar">
                </div>
              </div>
            </div>
            <div class=" col-2 settingsBar">
              <div class="d-flex align-items-center">
                <div class="mx-1"><i class="bi bi-mic"></i></div>
                <div class="mx-1"><i class="bi bi-window-sidebar"></i></div>
                <div class="mx-1"><i class="bi bi-pc-display"></i></div>
                <div class=""><i class="bi bi-volume-down"></i></div>
                <div class="progress bar mx-1" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0"
                aria-valuemax="100">
                <div class="progress-bar w-75"></div>
              </div>
                <div class="mx-1"><i class="bi bi-fullscreen"></i></div>
              </div>
            </div>
          </div>
        </footer>
        */