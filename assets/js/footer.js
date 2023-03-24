const FOOTER_API_MOBILE =
  "https://striveschool-api.herokuapp.com/api/deezer/album/363782";

const homeButtonsRef = document.getElementsByClassName('bi-house-door');
const searchButtonsRef = document.getElementsByClassName('bi-search');


Array.from(homeButtonsRef).forEach(homeButtonRef => {
  homeButtonRef.addEventListener('click', event => {
    event.preventDefault();
    window.location = './index.html';
  });
});

Array.from(searchButtonsRef).forEach(searchButtonRef => {
  searchButtonRef.addEventListener('click', event => {
    event.preventDefault();
    window.location = './search.html';
  });
});


const MyFooterMobile = function () {
  fetch(FOOTER_API_MOBILE)
    .then((response) => {
      return response.json();
    })
    .then((events) => {
      events.tracks.data.forEach((music) => {
        let cyclic = document.getElementsByClassName('playBar')[0]
        cyclic.innerHTML = `<div class="mx-2 cyclic-text"><p >${music.title}</p></div>
    <div class="mx-2"><i class="bi bi-pc-display"></i></div>
          <div class="mx-2"><i class="bi bi-heart"></i></div>
          <div class="mx-2"><i class="bi bi-play"></i></div>`
      });
    });
};

MyFooterMobile()

/*

DA INSERIRE NEL FOOTER!!!!
    <footer class="albumFooter p-2">
    <div>
      <div class="playBar d-flex justify-content-end pt-3 rounded">
      </div>
    </div>
    <div>
      <div class="d-flex justify-content-between pt-2">
        <div class="mx-3 d-flex flex-column align-items-center">
          <i class="bi bi-house-door"></i>
          <p>Home</p>
        </div>
        <div class="mx-3 d-flex flex-column align-items-center">
          <i class="bi bi-search"></i>
          <p>Cerca</p>
        </div>
        <div class="mx-3 d-flex flex-column align-items-center">
          <i class="bi bi-collection"></i>
          <p>La tua libreria</p>
        </div>
      </div>
    </div>
  </footer>
  */