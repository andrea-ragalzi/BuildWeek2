const ALBUM_API =
  "https://striveschool-api.herokuapp.com/api/deezer/album/363782";

const myAlbumMobile = function () {
  fetch(ALBUM_API)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((events) => {
      console.log(events);
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
        console.log(music);
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
        let cyclic = document.getElementsByClassName('playBar')[0]
        cyclic.innerHTML = `<div class="mx-2 cyclic-text"><p >${music.title}</p></div>
    <div class="mx-2"><i class="bi bi-pc-display"></i></div>
          <div class="mx-2"><i class="bi bi-heart"></i></div>
          <div class="mx-2"><i class="bi bi-play"></i></div>`
      });
    });
};
myAlbumMobile();

//VERSIONE DEKSTOP

const myAlbumDekstop = function () {
  fetch(ALBUM_API)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((events) => {
      console.log(events);
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
      events.tracks.data.forEach((music) => {
        console.log(music);
        let musicAlbum = document.getElementById("brani");
        musicAlbum.innerHTML += `
      <div class="d-flex">
                        <div class="d-flex col-4">
                          <div>
                            <div>
                              <p>1</p>
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
      `
      });
    });
};
myAlbumDekstop()