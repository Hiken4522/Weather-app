const apiKey = 'c32586d1314263ecc52a923eba2e1f2d'
const city = document.getElementById('city')
const temp = document.getElementById('temp')
const weather = document.getElementById('weather')
const wsearch = document.getElementById('wsearch')
const humidity = document.getElementById('humidity')
const windspeed = document.getElementById('windspeed')
const wicon = document.getElementById("weathericon")
let mains = ["images/clear.png","images/clouds.png","images/drizzle.png","images/mist.png","images/rain.png","images/snow.png"]

async function getweather(){
    let cityname = wsearch.value;
    url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}`

    try{
        let response = await fetch(url);
        var data = await response.json();
        
    }catch(error){
        console.error("error in fetching weather data",error)
        return
    }
    displayweather(data)
    
}

function displayweather(data){
    city.textContent = data.name;
    let temprature = data.main.temp - 273.15
    temp.textContent = `${temprature.toFixed(2)}°C`
    // weather.textContent = data.weather[0].main
    humidity.textContent = `${data.main.humidity}%`
    let weather = data.weather[0].main
    console.log(weather)
    switch(weather){
        case "Clear":
            wicon.innerHTML = `<img src=${mains[0]} id="wicon">`
            break
        case "Mist":
            wicon.innerHTML = `<img src=${mains[3]} id="wicon">`
            break
        case "Clouds":
            wicon.innerHTML = `<img src=${mains[1]} id="wicon">`
            break
        case "Drizzle":
            wicon.innerHTML = `<img src=${mains[2]} id="wicon">`
            break
        case "rain":
            wicon.innerHTML = `<img src=${mains[4]} id="wicon">`
            break
        case "Snow":
            wicon.innerHTML = `<img src=${mains[5]} id="wicon">`
            break
    

    }
    let speed = data.wind.speed * 3.6
    windspeed.textContent = `${speed.toFixed(2)}km/h`
}
document.addEventListener('DOMContentLoaded',getweather())
