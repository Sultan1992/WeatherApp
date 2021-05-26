




const api = {
    key: "cc7386082dd5cb033e7fe901dfd7d821",
    base: "https://api.openweathermap.org/data/2.5/"
}
  const searchbox = document.querySelector('.search-box');
  searchbox.addEventListener('keypress', setQuery);
  
  function setQuery(evt) {
    if (evt.keyCode == 13) {
      getResults(searchbox.value);
    }
  }
  
  function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(weather => {
        return weather.json();
      }).then(displayResults);
  }
  
  function displayResults (weather) {
   
    let city = document.querySelector('.city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
  
    let now = new Date();
    let date = document.querySelector('.date');
    date.innerText = dateBuilder(now);

  

    let temp = document.querySelector(' .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
  
    let weather_elements = document.querySelector('.weather');
    weather_elements.innerText = weather.weather[0].main;
  
   
    let temperatureRange = document.querySelector('.temp-range');
    temperatureRange.innerText = `Temperature range : ${Math.round(weather.main.temp_max)} /${Math.round(weather.main.temp_min)}°c`;

  }
  function dateBuilder (listDates) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[listDates.getDay()];
    let date = listDates.getDate();
    let month = months[listDates.getMonth()];
    let year = listDates.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }
