let apiKey = "093859991661784d3b9b7d547d246689";
let input = document.getElementById("input");
let btn1 = document.getElementById("btn1");

const W_Function = async (city) => {
  const ApiData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`
  );

  if (ApiData.status == 404) {
    alert("invalid city");
  } else {
    const data = await ApiData.json();
    console.log(data);

    document.getElementById("temp").innerHTML =
      Math.round(data.main.temp) + "°";
    document.getElementById("w-typ").innerHTML = data.weather[0].main;
    document.getElementById("cityName").innerHTML = data.name;
    document.getElementById("humidity").innerHTML = data.main.humidity + " %";
    document.getElementById("wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Haze") {
      document.getElementById("img").src = "img/haze.png";
    } else if (data.weather[0].main == "Cloudy") {
      document.getElementById("img").src = "img/cloudy.png";
    } else if (data.weather[0].main == "Rain") {
      document.getElementById("img").src = "img/rain.png";
    } else if (data.weather[0].main == "Clear") {
      document.getElementById("img").src = "img/sun.png";
    }
  }
};

btn1.addEventListener("click", () => {
  W_Function(input.value);
});

input.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    W_Function(input.value);
  }
});
