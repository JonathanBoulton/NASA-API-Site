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
fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    APOD.src = response.url;
  });

// NASA image search feature including query search bar, search button, and 'next' button
let inum = 0 
const sImage = document.getElementById('sImage');
const imageSearch = {
  fetchImage: function (input) {
  fetch('https://images-api.nasa.gov/search?q='
  + input
  + '&media_type=image')
  .then((data) => data.json())
  .then((info) => sImage.src = info.collection.items[inum].links[0].href);
  },
  search: function () {
    this.fetchImage(document.querySelector('.search-bar').value)
  }
};
document
  .querySelector('.search-button')
  .addEventListener('click', function (){
    imageSearch.search();
  })