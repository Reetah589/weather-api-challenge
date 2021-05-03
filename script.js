var apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid=d948d1cec05d2c04d0b91795d866a1b9"
var geoApiUrl = "http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid=b9d948d1cec05d2c04d0b91795d866a1"


// Display Overall Weather after clicking on search button
    var displayWeather = function(event) {
      event.preventDefault()
    console.log("inside DisplayWeather Function");
    var searchCity = $("input#city").val();
    console.log(searchCity)
    $("h4#results-title").text(searchCity + " weather");
    $.ajax({
      url: "http://api.openweathermap.org/geo/1.0/direct",    
      data: {
        appid : "d948d1cec05d2c04d0b91795d866a1b9",
        q: searchCity
      }
    }).done(function(responseData) {
      console.log(responseData) 
      $.ajax ({
        url: "https://api.openweathermap.org/data/2.5/onecall",
        data: {
          appid : "d948d1cec05d2c04d0b91795d866a1b9",
          lat: responseData[0].lat, 
          lon: responseData[0].lon,
        }
      }).done(function(responseData) {
      console.log(responseData)
      })
    }).error(function(error){
      console.log(error)
    })
  };





  //$("input#city").val("Austin");




// Display Temp
// Display Wind
// Display Humidity
// Display UV  
// Display 5 Day forecast for (i=0;i<5;i++)