const apiKey = "0e17c34b7492c86084ab12f8b4928543";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Naples";

const weatherIcon = document.querySelector(".weather-icon");

async function CheckWeatherNaples()
{
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds")
    {
        weatherIcon.src = "img/weatherAPI/clouds.png";
    }
    else if(data.weather[0].main == "Clear")
    {
        weatherIcon.src = "img/weatherAPI/clear.png";
    }
    else if(data.weather[0].main == "Rain")
    {
        weatherIcon.src = "img/weatherAPI/rain.png";
    }
    else if(data.weather[0].main == "Drizzle")
    {
        weatherIcon.src = "img/weatherAPI/drizzle.png";
    }
}
CheckWeatherNaples();