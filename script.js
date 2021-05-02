// Search for city 
var city = ""
var userFormEl = document.querySelector("#user-form");
var cityInputEl = document.querySelector("#city");

var formSearchHandler = function(event) {
    event.preventDefault();
    console.log(event);
  };

userFormEl.addEventListener("search", formSearchHandler);

// Display Overall Weather after clicking on search button
var displayWeather = function(searchCity) {
    console.log(searchCity);
  };

    function displayWeather(event){
    event.preventDefault();
    if(searchCity.val().trim()!==""){
        city=searchCity.val().trim();
        currentWeather(city);
    }

// Use weather API call    
    function currentWeather ()
// var apiURL https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
}  

// Display Temp
// Display Wind
// Display Humidity
// Display UV  
// Display 5 Day forecast for (i=0;i<5;i++)