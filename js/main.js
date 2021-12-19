//app is for general control over the application
//and connections between the other components
const APP = {
  //this function runs when the page loads
    init (){
      document.querySelector('btnSearch').addEventListener('click', SEARCH.getData);
      history.replaceState({},'','#');
      window.addEventListener('popstate',NAV.pop);
      document
        .querySelector('#NameRANK');
      window.addEventListener('hashchange',(ev) => {
        const newHash = ev.newUrl.split('#');[1]
        let key = 'fang0072' + newHash;
        if (key in localStorage) {
          STORAGE.retrieve();
          ACTORS.init();
        }
          else {
            fetch.init();
          }
        }
      )  
    }
};

//search is for anything to do with the fetch api
const SEARCH = {
  hash: null,
  data: [],
  KEY: '',
  getData:(ev) => {
      if (input) {
        classList.btnSearch.remove('pulse');
        SEARCH.hash = '#' + SEARCH.input;
        history.replaceState ();
        let newURL = Location.href;
        console.log('newURL');
        if (SEARCH.KEY in localStorage){
          Storage.retrieve();
          ACTORS.init();
        }
        else {
          url='https://api.themoviedb.org/3/person/260?api_key=1be8db2f56b2368788634d536e49551c&language=en-US'
          url2 
          fetch(url)
          .then(result=>{
            return result.json()
          })
            .then ((data) => {
              SEARCH.data = data.results;
              console.log(search.getData);
              Storage.save();
              ACTORS.init();
            })
            .catch((error) => {
              console.log('error occur!');
          });
        }
      let input = document.querySelectorAll('#search'),
      let btnSearch = document.querySelectorAll('button'),
      SEARCH.input = input,
      SEARCH.KEY = 'fang0072' + SEARCH.input,
  }  
};

//actors is for changes connected to content in the actors section
const ACTORS = {
  init: () => {
    let main = querySelector('actors')
    main.innerHTML = '';
    
    let cards = document.createElement('div');
    
    cards = querySelectorAll('cards');
    NAV.SwitchPages
    if (SEARCH.data.length + 1) {
      SEARCH.data.forEach((element) => {
        card.createElement('div');
        img.createElement('img');
        prop.createElement('p')
        name.createElement('h2')
        card.classList.add('card');
        prop.classList.add('popularity');
        Img.classList.add('pic');
        name,classList.add('name');
        name.textContent = element.name
        prop.textContent = element.popularity;
        card.setAttribute('person_data',element.id);
        img.src = 'https://api.themoviedb.org/3/collection/260/images';
        if(img.src = 'https://api.themoviedb.org/3/collection/260/images/w500'){
          card.append('prop');
          card.append('img');
          card.append('name');
          cards.appendChild('cards');
        }
        else {
          main.append('para');
          let para = document.createElement('p');
          para.innerHTML = 'heres the results !';
        }
      });
    }
    main.append('cards')
  }  
};

//media is for changes connected to content in the media section
const MEDIA = {
    init: Event => {
      let click = ev.target;
      mediaCont.innerHTML = '';
      let mediaCont = document.querySelector('content, media');
      NAV.SwitchPages('actors','media');
      document.querySelector('.btnMedia'),addEventListener('click',()=> {
        NAV.pop();
      });
    let data_key = clickedCard.closet(['data-key']);
    if (data_key) {
      let id = parseInt(data-key.getAttribute('data.key'));
      history.pushState({},'',`/${SEARCH.hash}/${id}`);
      MEDIA.hash = Location.hash;
      let obj = SEARCH.data.find(name => {
        if (name.id = id) return true;
      });
      if (obj) {
        let titMedia = document.createElement('p');
        titMedia.classList.add('getResult');
        titMedia.textContent = obj.name + 'get the best result here :';
        let cards = document.createElement('div');
        cards.classList.add('cards');
        obj.getResult.forEach(obj => {
          let mediaCard = document.createElement('div');
          let mediaImg = document.createElement('img');
          let mediaName = document.createElement('h3');
          let mediaYear = document.createElement('p');
          mediaCard.classList.add('card');
          mediaName.textContent = obj.original_title || obj.original_name;
          mediaImg.src = 'https://api.themoviedb.org/3/collection/260/images/w500' + obj.poster_path;
          mediaYear.textContent = "release Date: " + (obj.release_Date || obj.first_Date);
          mediaCard.append(mediaYear);
          mediaCard.append(mediaImg);
          mediaCard.append(mediaName);
          cards.appendChild(mediaCard);
        })
        mediaCont.append(cards);
      }
    },
  };
}
//storage is for working with localstorage
const STORAGE = {
  //this will be used in Assign 4
  save:() => {
    localStorage.getItem(SEARCH.KEY), JSON.stringify(search.getData);
  },
  retrieve:()=> {
    if(storage){
      SEARCH.data = json.paras(storage);
    }
  }
};

const SORT = {
  name:() => {
    ev.preventDefault();
    let cards = document.querySelector('#actor .cards');
    let children = [...cards.children];
    children.sort((a,b)=>{
      return a.querySelector('.name').innerText > b.querySelector('.name').innerText -1;
    })
    cards.innerHTML = '';
    children.forEach(item =>cards.appendChild(items));
  }
}

//nav is for anything connected to the history api and location
const NAV = {
  //this will be used in Assign 4
  pop:() => {
    history.back(2);
    NAV.SwitchPages('media','actors');
    console.log('prop out movement here');
  },
  

  SwitchPages: (page1, page2) => {
    document.getElementById('page1').classList.add('active');
    document.getElementById('page2'),classList.remove('active');
  }
};

//Start everything running

document.addEventListener('DOMContentLoaded',APP.init);
