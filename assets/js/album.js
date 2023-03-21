const ALBUM_API =
  "https://striveschool-api.herokuapp.com/api/deezer/album/272727";

const myAlbum = function () {
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
            src="${events.cover}"
            alt=""
          />
        </div>
        <div id="albumText">
          <div class="my-2">
            <h2>${events.title}</h2>
            <div class="d-flex">
              <div>
                <img
                  class="rounded-circle"
                  src="${events.artist.picture_small}"
                  alt=""
                />
              </div>
              <div class="mx-2"><h4>Pinguini Tattici Nucleari</h4></div>
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
                <div class="play mx-2"><i class="bi bi-play-fill"> <div></div></i></div>
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
      });
    });
};
myAlbum();
