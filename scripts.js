const img = document.querySelector('img');
fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    img.src = response.url;
  });