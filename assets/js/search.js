const SEARCH_API =
  " https://striveschool-api.herokuapp.com/api/deezer/";

    
    document.getElementById('input').addEventListener('input',()=>{
        let static =document.getElementById('static')
        let dynamic =document.getElementById('dynamic')
        console.log(static)
        let searchWord=document.getElementById('input').value;
        if(searchWord!=''){
            static.classList.add('d-none')
            dynamic.classList.remove('d-none')
        }
    let searchKey= `search?q={${searchWord}}`
    console.log(searchKey)
        fetch(SEARCH_API+searchKey)
          .then((response) => {
            return response.json();
          })
          .then((events) => {
              console.log(events)
            events.foreach(ev=>{
                console.log(ev)
            })
             });  
})
  
/*
        let searchId= new URLSearchParams(window.location.search).get("q");

        let searchKey2= `search?q={${searchId}}` 
        document.getElementById('href').addEventListener('click',()=>{
        fetch(SEARCH_API+searchKey2)
        .then((response) => {
        return response.json();
        })
        .then((events) => {
        console.log(events)
        events.forEach(music=>{
            console.log(music)
        })
        });
        })
        */