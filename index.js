const apiKey ="40918fb4da30b717fc978a1c519f698d";

const apiURL = " https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const boxSearch = document.querySelector(".container__weather input");
const btnSearch = document.querySelector(".container__weather button");
const weatherIcon = document.querySelector(".weather__icon");


async function weatherCheck (city) {
  const response = await fetch(apiURL + city + `&appid=${apiKey}`);
  const dataAll = await response.json();

  document.querySelector(".place").innerHTML = dataAll.name;
  document.querySelector(".degree").innerHTML = Math.round(dataAll.main.temp)+ "℃";
  document.querySelector(".humidity").innerHTML = dataAll.main.humidity + "%";
  document.querySelector(".wind").innerHTML = dataAll.wind.speed + " Km/h";

  if (dataAll.weather[0].main==="Clouds"){
    weatherIcon.src="images/clouds.png";
  } else if (dataAll.weather[0].main==="Clear"){
    weatherIcon.src="images/clear.png";
  } else if (dataAll.weather[0].main === "Drizzle"){
    weather.src="images/drizzle.png";
  } else if (dataAll.weather[0].main ==="Snow"){
    weatherIcon.src="images/snow.png";
  } else if (dataAll.weather[0].main==="Rain"){
    weatherIcon.src="images/rain.png";
  }
  else if (dataAll.weather[0].main==="Mist"){
    weatherIcon.src="images/rain.png";
  }


  document.querySelector(".weather__content").style.display 
  ="block";

}
btnSearch.addEventListener("click", function () {
  weatherCheck(boxSearch.value);
});

