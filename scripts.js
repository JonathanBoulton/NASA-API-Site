//Sticky header functionality
window.onscroll = function() {myFunction()};
let header = document.getElementById("myHeader");
let sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
// Astrology picture of the day 
const APOD = document.getElementById('APOD');
fetch('https://api.nasa.gov/planetary/apod?api_key=Q16WKNVz9PgTSPrqI3kuQ7uc5hwQ0Rpvy5tNE1Ot')
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    APOD.src = response.url;
    document.querySelector('.apodTitle').innerText = response.title
    document.querySelector('.apodCopyright').innerText = response.copyright
    document.querySelector('.apodExplanation').innerText = response.explanation
  });

// NASA image search feature including query search bar, search button, and 'next' button
let inum = 0 
document
  .querySelector('.next-image')
  .addEventListener('click', function(){
    inum++
    imageSearch.search();
    return inum;
  }
)
const sImage = document.getElementById('sImage');
const imageSearch = {
  fetchImage: function (input) {
  fetch('https://images-api.nasa.gov/search?q='
  + input
  + '&media_type=image')
  .then((data) => data.json())
  .then((info) => {
  sImage.src = info.collection.items[inum].links[0].href
  document.querySelector('.isearch-title').innerText = info.collection.items[inum].data[0].title
  });
  },
  search: function () {
    this.fetchImage(document.querySelector('.search-bar').value)
  }
};
document
  .querySelector('.search-button')
  .addEventListener('click', function (){
    inum = 0
    imageSearch.search();
  })

