const $ = _ => document.querySelector(_);
const $$ = _ => document.querySelectorAll(_);

const timeEl = $('.time');
const dateEl = $('.date');
const currentWeatherItemsEl = $('.others');


const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    let hour = time.getHours();
    hour = hour < 9 ? `0${hour}` : hour;

    let minutes = time.getMinutes();
    minutes = minutes < 9 ? `0${minutes}` : minutes;

    let s = time.getSeconds();
    s = s < 9 ? `0${s}` : s;

    timeEl.innerHTML = `${hour}:${minutes}:${s}`;
    dateEl.innerHTML = days[day] + ', ' + date + ' ' + months[month]
}, 1000);


// коoрдинаты

// function success(cor) {
//     var crd = cor.coords;
//     console.log(`Широта: ${crd.latitude}`);
//     console.log(`Долгота: ${crd.longitude}`);
// };
// navigator.geolocation.getCurrentPosition(success);


const inputCity = $('input')
const searchCity = $('button')
const cityArr = [];
const apiKey = 'a174f834c69eee3b72537c60e7312512';
const weatherForecast = $('.weather-forecast')

function weatherNow(data) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&units=metric&appid=${apiKey}`)
        .then(res => res.json()).then(currentData => {
            console.log(currentData)
            showWeatherData(data, currentData);
        })
}

function getWeatherData() {
    weatherForecast.innerHTML = ''
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${inputCity.value}&units=metric&appid=${apiKey}`)
        .then(res => res.json()).then(data => {
            console.log(data);
            weatherNow(data);
            futureWeatherData(data);

        })
}

searchCity.addEventListener('click', getWeatherData);

// In html ?
function showWeatherData(data, currentData) {
    currentWeatherItemsEl.innerHTML =
        `<div class="weather-item">
            <div>Влажность</div>
            <div>${data.list[0].main.humidity}%</div>
        </div>
        <div class="weather-item">
            <div>Давление</div>
            <div>${data.list[0].main.pressure} гПа</div>
        </div>
        <div class="weather-item">
            <div>Скорость ветра</div>
            <div>${data.list[0].wind.speed} м/с</div>
        </div>
        <div class="weather-item">
            <div>Вероятность выпадения осадков</div>
            <div>${data.list[0].pop * 100}%</div> 
        </div>`;

    $('.other').innerHTML = `
        <div class="day">
            Сейчас 
        </div>
        <div class="temp">
            ${currentData.main.temp}°C
        </div>`;
}

function futureWeatherData(data) {

    const mapCb = time => new Date(time.dt_txt).getDay();
    const morningData = data.list.filter(daytime => daytime.dt_txt.includes("12:00:00"))
    const serialNumberDay = morningData.map(mapCb)
    console.log(morningData);
    console.log(serialNumberDay);
    const morningNight = data.list.filter(nighttime => nighttime.dt_txt.includes("21:00:00"))
    console.log(morningNight);
    const serialNumberNight = morningNight.map(mapCb);


    let dateNew = new Date().getDay()
    let pizdaDay = null
    if (morningData[0].dt_txt !== dateNew) {
        pizdaDay = serialNumberDay.slice();
    }
    const formatter = new Intl.DateTimeFormat('ru-RU', { weekday: 'long' });
    for (let i = 0; i < data.list.length; i++) {
        const pizdaIndex = pizdaDay[i];
        const date = new Date(morningData[serialNumberDay.indexOf(pizdaIndex)].dt_txt);
        // $(`.d${pizdaIndex}`).style.display = 'block';
        let xx = document.createElement('div')
        xx.className = 'weather-forecast-item'
        xx.innerHTML = `
            <div class="day"> 
                ${formatter.format(date)}
            </div>
            <img src="http://openweathermap.org/img/wn/10d@2x.png" class="icon">
            <div class="temp">
            Day - ${morningData[serialNumberDay.indexOf(pizdaIndex)].main.temp} °C
            </div>
            <div class="temp">
            Night - ${morningNight[serialNumberNight.indexOf(pizdaIndex)].main.temp} °C
            </div>`;
        weatherForecast.appendChild(xx)
    }



    //     if (pizdaDay[i] == 1) {
    //         let date = new Date(morningData[serialNumberDay.indexOf(1)].dt_txt)
    //         $('.d1').style.display = 'block'
    //         $('.d1').innerHTML = `<div class="day"> ${ formatter.format(date)}</div>
    //                     <img src="http://openweathermap.org/img/wn/10d@2x.png" class="icon">
    //                     <div class="temp">Night - ${morningNight[serialNumberNight.indexOf(1)].main.temp} &#176; C</div>
    //                     <div class="temp">Day - ${morningData[serialNumberDay.indexOf(1)].main.temp}&#176; C</div>`

    //     }

    //     if (pizdaDay[i] == 2) {
    //         let date = new Date(morningData[serialNumberDay.indexOf(2)].dt_txt)
    //         let weekday = date.getDay();
    //         let options = { weekday: 'long' };

    //         $('.d2').style.display = 'block'
    //         $('.d2').innerHTML = `<div class="day"> ${ new Intl.DateTimeFormat('ru-RU', options).format(date)}</div>
    //                     <img src="http://openweathermap.org/img/wn/10d@2x.png" class="icon">
    //                     <div class="temp">Night - ${morningNight[serialNumberNight.indexOf(2)].main.temp}&#176; C</div>
    //                     <div class="temp">Day - ${morningData[serialNumberDay.indexOf(2)].main.temp}&#176; C</div>`
    //     }


    //     if (pizdaDay[i] == 3) {
    //         let date = new Date(morningData[serialNumberDay.indexOf(3)].dt_txt)
    //         let weekday = date.getDay();
    //         let options = { weekday: 'long' };


    //         $('.d3').style.display = 'block'
    //         $('.d3').innerHTML = `<div class="day"> ${ new Intl.DateTimeFormat('ru-RU', options).format(date)}</div>
    //                     <img src="http://openweathermap.org/img/wn/10d@2x.png" class="icon">
    //                     <div class="temp">Night - ${morningNight[serialNumberNight.indexOf(3)].main.temp}&#176; C</div>
    //                     <div class="temp">Day - ${morningData[serialNumberDay.indexOf(3)].main.temp}&#176; C</div>`
    //     }

    //     if (pizdaDay[i] == 4) {
    //         let date = new Date(morningData[serialNumberDay.indexOf(4)].dt_txt)
    //         let weekday = date.getDay();
    //         let options = { weekday: 'long' };

    //         $('.d4').style.display = 'block'
    //         $('.d4').innerHTML = `<div class="day"> ${ new Intl.DateTimeFormat('ru-RU', options).format(date)}</div>
    //                     <img src="http://openweathermap.org/img/wn/10d@2x.png" class="icon">
    //                     <div class="temp">Night -${morningNight[serialNumberNight.indexOf(4)].main.temp}&#176; C</div>
    //                     <div class="temp">Day - ${morningData[serialNumberDay.indexOf(4)].main.temp}&#176; C</div>`
    //     }
    //     if (pizdaDay[i] == 5) {
    //         let date = new Date(morningData[serialNumberDay.indexOf(5)].dt_txt)
    //         let weekday = date.getDay();
    //         let options = { weekday: 'long' };

    //         $('.d5').style.display = 'block'
    //         $('.d5').innerHTML = `<div class="day"> ${ new Intl.DateTimeFormat('ru-RU', options).format(date)}</div>
    //                     <img src="http://openweathermap.org/img/wn/10d@2x.png" class="icon">
    //                     <div class="temp">Night - ${morningNight[serialNumberNight.indexOf(5)].main.temp}&#176; C</div>
    //                     <div class="temp">Day - ${morningData[serialNumberDay.indexOf(5)].main.temp}&#176; C</div>`
    //     }
    //     if (pizdaDay[i] == 6) {
    //         let date = new Date(morningData[serialNumberDay.indexOf(6)].dt_txt)
    //         let weekday = date.getDay();
    //         let options = { weekday: 'long' };

    //         $('.d6').style.display = 'block'
    //         $('.d6').innerHTML = `<div class="day"> ${ new Intl.DateTimeFormat('ru-RU', options).format(date)}</div>
    //                     <img src="http://openweathermap.org/img/wn/10d@2x.png" class="icon">
    //                     <div class="temp">Night -${morningNight[serialNumberNight.indexOf(6)].main.temp}&#176; C</div>
    //                     <div class="temp">Day - ${morningData[serialNumberDay.indexOf(6)].main.temp}&#176; C</div>`
    //     }
    //     if (pizdaDay[i] == 0) {
    //         let date = new Date(morningData[serialNumberDay.indexOf(0)].dt_txt)
    //         let weekday = date.getDay();
    //         let options = { weekday: 'long' };

    //         $('.d7').style.display = 'block'
    //         $('.d7').innerHTML = `<div class="day">${ new Intl.DateTimeFormat('ru-RU', options).format(date)}</div>
    //                     <img src="http://openweathermap.org/img/wn/10d@2x.png" class="icon">
    //                     <div class="temp">Night - ${morningNight[serialNumberNight.indexOf(0)].main.temp}&#176; C</div>
    //                     <div class="temp">Day - ${morningData[serialNumberDay.indexOf(0)].main.temp}&#176; C</div>`
    //     }
    // }
}