const ALBUM_API =
  "https://striveschool-api.herokuapp.com/api/deezer/album/";

const myAlbumMobile = function (albumId) {
  const url = `${ALBUM_API}${albumId}`
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((events) => {
      let album = document.getElementById("albumAttack");
      album.innerHTML = `
    <div class="position-absolute">
          <a href=""><i class="bi bi-arrow-left"></i></a>
        </div>
        <div id="albumImg" class="text-center">
          <img
            src="${events.cover_medium}"
            alt=""
          />
        </div>
        <div id="albumText">
          <div class="my-2">
            <h2>${events.title}</h2>
            <div class="d-flex">
              <div>
                <img width='30px'
                  class="rounded-circle"
                  src="${events.artist.picture}"
                  alt=""
                />
              </div>
              <div class="mx-2"><h4>${events.artist.name}</h4></div>
            </div>
            <p>${events.record_type} &middot ${events.release_date}</p>
            <div class="d-flex justify-content-between">
              <div class="d-flex my-2">
                <div class="mx-2"><i class="bi bi-heart"></i></div>
                <div class="mx-2"><i class="bi bi-download"></i></div>
                <div class="mx-2">
                  <i class="bi bi-three-dots-vertical"></i>
                </div>
              </div>
              <div class="d-flex">
                <div class="mx-2"><i class="bi bi-shuffle"></i></div>
                <div class="play mx-2"><i class="bi bi-play-fill"></i></div>
              </div>
            </div>
          </div>
        </div>
          <div id="musicAlbum">
            
          </div>
    `;
      events.tracks.data.forEach((music) => {
        let musicAlbum = document.getElementById("musicAlbum");
        musicAlbum.innerHTML += `
    <div id='musicText'>
    <div class="my-2">
      <div>
         <div><h4>${music.title}</h4></div>
      </div>
      <div class="d-flex justify-content-between">
         <div><p>${music.artist.name}</p></div>
         <div class="mx-2"><i class="bi bi-three-dots-vertical"></i></div>
    </div>
    </div>
</div>`;

      });
    });
};

//VERSIONE DEKSTOP

const myAlbumDekstop = function (albumID) {
  const url = `${ALBUM_API}${albumID}`
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((events) => {
      let album = document.getElementById("albumDekstop");
      album.innerHTML = `
    <div>
    <div><img src="${events.cover_medium}" alt=""></div>
  </div>
  <div class="d-flex flex-column mx-3  ">
    <div><h4 id="album">${events.type}</h4></div>
    <div><h1>${events.title}</h1></div>
    <div class="d-flex align-items-baseline">
      <div><img src="${events.picture_small}"' class="rounded-circle" alt=""></div>
      <div class="d-flex mx-1 information">
        <b>
          <p>${events.artist.name}</p>
        </b>
        
        <p class="mx-1">&middot ${events.release_date}</p>
      </div>
    </div>
  </div>
  `;
      events.tracks.data.forEach((music, i) => {
        i++
        let musicAlbum = document.getElementById("brani");
        musicAlbum.innerHTML += `
      <div class="d-flex">
                        <div class="d-flex col-4">
                          <div>
                            <div>
                              <p>${i}</p>
                            </div>
                          </div>
                          <div class="mx-3 ">
                            <div>
                              <h4>${music.title}</h4>
                            </div>
                            <div>
                              <p> ${music.album.title}</p>
                            </div>
                          </div>
                        </div>
  
                        <div class="col-6 text-center">
                          <div>
                            <p>${music.rank}</p>
                          </div>
                        </div>
                        <div class="col-2 text-end">
                          <div>
                            <p>${music.duration}s</p>
                          </div>
                        </div>
                      </div>

      `;


        //FOOTER
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



const urlSearchParams = new URLSearchParams(window.location.search);
const albumId = urlSearchParams.get('albumId');
myAlbumMobile(albumId);
myAlbumDekstop(albumId)

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