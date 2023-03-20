# SPOTIFY CLONE 🙂

**Hints:**

    Organizzate il vostro CSS in modo da avere classi riutilizzabili per l’intero progetto e per le varie pagina.
    Usate Trello o un servizio simile per dividervi le task
    Iniziate lavorando sulle parti “comuni” e identificando alcuni “componenti” che si ripetono nell’intero sito.
    Fate commit e merge SPESSIMO!

## 1) RICHIESTE:

Pagine richieste (e relativi screen):

(le pagine si estendono in verticale, se gli screenshot non vi bastassero sentitevi liberi di usare il vostro Spotify come riferimento)

HOMEPAGE:

![Homepage](https://join.epicode.com/wp-content/uploads/2022/06/immagine_2022-10-17_003245410.png "Homepage")

ALBUM PAGE:

![Album](https://join.epicode.com/wp-content/uploads/2022/06/immagine_2022-10-17_003405925.png "Album")

ARTIST PAGE:

![Artist](https://join.epicode.com/wp-content/uploads/2022/06/immagine_2022-10-17_003505762.png "Artist")

## 2) RENDETELA DINAMICA!

Sulla homepage, mostrate una serie di album a vostra scelta (rispettando lo stile e l’UI)

💽**Album Page**

Quando l’utente clicca su un album, dovrebbe essere trasportato alla pagina corrispondente.

ATTENZIONE! NON DOVETE CREARE UNA PAGINA PER OGNI ALBUM!!!!

Create UNA pagina (album.html), e popolatela dinamicamente tramite l’id dell’album su cui avete cliccato.
SUGGERIMENTO: URLSearchParams

(come al solito, partite dalla cosa base. Create la pagina in maniera statica, poi passate alla fetch “hardcoded”, quindi su un solo album, INFINE aggiungere i search params.)

Parameter: album id

Endpoint: https://striveschool-api.herokuapp.com/api/deezer/album/{id}

Example: https://striveschool-api.herokuapp.com/api/deezer/album/75621062

👨‍🎤**Artist page**

Ovunque sulla pagina, i nomi degli artisti devono essere cliccati. Analogamento alla pagina album, quando ci si clicca devono portare l’utente in una pagina dedicata all’artista (artist.html)

ATTENZIONE! NON DOVETE CREARE UNA PAGINA PER OGNI ALBUM!!!!

Create UNA pagina (artist.html), e popolatela dinamicamente tramite l’id dell’artista su cui avete cliccato.
SUGGERIMENTO: URLSearchParams

(come al solito, partite dalla cosa base. Create la pagina in maniera statica, poi passate alla fetch “hardcoded”, quindi su un solo artista, INFINE aggiungere i search params.)

Parameter: artist id

Endpoint: https://striveschool-api.herokuapp.com/api/deezer/artist/{id}

Example: https://striveschool-api.herokuapp.com/api/deezer/artist/412

 

PLAYER:

Cliccando sulle tracce nella pagina album o artista, i dettagli della pagina devono essere mostrati sul player in basso. NON è necessaria la funzione play/pausa, ma se ci riuscite è gradita 🙂

 

🔍 Search

Cercate di creare anche una funzione di ricerca. Questo API possiede un endpoint DEDICATO!

Potete creare una pagina a parte o mostrare tutto sulla homepage.

Parametro: query

Endpoint: https://striveschool-api.herokuapp.com/api/deezer/search?q={query}

Example: https://striveschool-api.herokuapp.com/api/deezer/search?q=queen

 

Quando tutto è COMPLETO (completo in funzionalità e stile: MI RACCOMANDO, DEVE ESSERE RESPONSIVE!) potete aggiungere tutte le pagine extra che volete, anche in “freestyle”, cioè che originariamente non esistono su spotify.

Versione mobile:

![Screen Mobile 1](https://join.epicode.com/wp-content/uploads/2022/06/Screenshot_2022-10-17-00-45-17-970_com.spotify.music_-624x1387.jpg "Screen Mobile 1")

![Screen Mobile 2](https://join.epicode.com/wp-content/uploads/2022/06/Screenshot_2022-10-17-00-45-38-775_com.spotify.music_-624x1387.jpg "Screen Mobile 2")

![Screen Mobile 3](https://join.epicode.com/wp-content/uploads/2022/06/Screenshot_2022-10-17-00-46-35-783_com.spotify.music_-624x1387.jpg "Screen Mobile 3")

![Screen Mobile 4](https://join.epicode.com/wp-content/uploads/2022/06/Screenshot_2022-10-17-00-45-48-073_com.spotify.music_-624x1387.jpg "Screen Mobile 4")

