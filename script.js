// Search for city 
/* var city = ""
var userFormEl = document.querySelector("#user-form");
var cityInputEl = document.querySelector("#city");

var formSearchHandler = function(event) {
    event.preventDefault();
    console.log(event);
  };

userFormEl.addEventListener("search", formSearchHandler); */

// Display Overall Weather after clicking on search button
    var displayWeather = function(event) {
      event.preventDefault()
    console.log("inside DisplayWeather Function");
    var searchCity = $("input#city").val();
    console.log(searchCity)
    $("h4#results-title").text(searchCity);
  };
  

  //$("input#city").val("Austin");


// Use weather API call    
// var apiURL https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}


// Display Temp
// Display Wind
// Display Humidity
// Display UV  
// Display 5 Day forecast for (i=0;i<5;i++)