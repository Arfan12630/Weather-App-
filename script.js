window.addEventListener("load", fetchingResults);
function fetchingResults() {
  let long;
  let lat;

  var location = document.getElementById("city");
  var condition = document.getElementById("conditions");
  var temperature = document.getElementById("temperature");
  var humidity = document.getElementById("humidity");
  var localtime = document.getElementById("date");
  var photos = document.getElementById("images");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      //Fetching results with API call

      fetch(
        `https://api.weatherapi.com/v1/current.json?key=84800926fc3e447399e164051212608&q=${long},${lat}`
      )
        .then(function (response) {
          console.log(response); 
          return response.json();
        })
        .then(function (weather) {
          //const temperature = data.current;
          const { temp_c } = weather.current;

          // localtime.innerText = data.current.last_updated.text;
          temperature.innerText = temp_c + "c";
          humidity.innerText = weather.current.humidity;
          condition.innerText = weather.current.condition.text;
          location.innerText = weather.location.name.text;
        });
    });
  }
}
