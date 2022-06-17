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
const img = document.querySelector('img');
fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    img.src = response.url;
  });