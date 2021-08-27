'use strict'
const $ = _ => document.querySelector(_);
const $$ = _ => document.querySelectorAll(_);



let weatherNowURL = `https://api.openweathermap.org/data/2.5/forecast?q=Каменское&units=metric&appid=a174f834c69eee3b72537c60e7312512`
async function getWeather() {
    const response = await fetch(weatherNowURL)
    const data = await response.json()
    console.log(data);

    const morningData = data.list.filter((reading, ind) => reading.dt_txt.includes("21:00:00"))
    const serialNumberDay = morningData.map((reading, ind) => new Date(reading.dt_txt).getDay())

    let dateNew = new Date().getDay()
    console.log(dateNew);

    let pizdeDay = null
    if (serialNumberDay[0] == dateNew) {
        serialNumberDay.slice(1)
        pizdeDay = serialNumberDay
        console.log(pizdeDay);
    }

    for (let i = 0; i < data.list.length; i++) {

        if (pizdeDay[i] == 4) {
            let date = new Date(morningData[serialNumberDay.indexOf(4)].dt_txt)
            console.log(date);
            let weekday = date.getDay();
            let options = { weekday: 'long' };
            $('.day__1').innerHTML = new Intl.DateTimeFormat('ru-RU', options).format(date)
            $('.temp').innerHTML = Math.floor(data.list[serialNumberDay.indexOf(4)].main.temp)
            $('.humidity').innerHTML = data.list[serialNumberDay.indexOf(4)].main.humidity + '%'
            $('.descriptionWeather').innerHTML = data.list[serialNumberDay.indexOf(4)].weather[0].description
            $('.windSpeed').innerHTML = data.list[serialNumberDay.indexOf(4)].wind.speed
        }



    }

    console.log(serialNumberDay);
    console.log(morningData);

}
getWeather()