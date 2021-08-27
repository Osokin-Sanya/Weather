const $ = _ => document.querySelector(_);
const $$ = _ => document.querySelectorAll(_);

const timeEl = $('.time');
const dateEl = $('.date');

const inputCity = $('input')
const searchCity = $('button')
const cityArr = [];
const apiKey = 'a174f834c69eee3b72537c60e7312512';
const apiKeyGoogle = 'AIzaSyA9cDBy-G8_-k4u21Rc35MekdOhwbtUmxE';
const weatherForecast = $('.weather-forecast')

const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

setInterval(() => {
    let time = new Date();
    let month = time.getMonth();
    let date = time.getDate();
    let day = time.getDay();
    let hour = time.getHours();
    hour = hour < 9 ? `0${hour}` : hour;
    let minutes = time.getMinutes();
    minutes = minutes < 9 ? `0${minutes}` : minutes;
    timeEl.innerHTML = `${hour}:${minutes}`;
    dateEl.innerHTML = days[day] + ', ' + date + ' ' + months[month]
}, 1000);





function weatherNow(data) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&lang=ru&units=metric&appid=${apiKey}`)
        .then(res => res.json()).then(currentData => {
            showWeatherData(data, currentData);
            currentWeather(data, currentData)
        })
        .catch(function(error) {
            if (error) {
                $('.today').style.padding = '20px 43px';
                $('.today').innerHTML = `Такого города не существует`
                if (inputCity.value == 'City-17') {
                    $('.today').innerHTML = `Добро пожаловать Доктор Фримен`
                    $('body').className = 'body-city-17'
                    $('input').className = 'input-city-17'
                    $('button').className = 'button-city-17'
                }
                if (inputCity.value == 'San-Andreas') {
                    $('.today').innerHTML = `Ah, shit, here we go again`
                    $('body').className = 'body-San-Andreas'
                    $('input').className = 'input-San-Andreas'
                    $('button').className = 'button-San-Andreas'

                }
                if (inputCity.value == 'Припять') {
                    $('.today').innerHTML = `Ты бы еще консервных банок насобирал...`
                    $('body').className = 'body-pripyat'
                    $('input').className = 'input-pripyat'
                    $('button').className = 'button-pripyat'
                }
            }
        })
}

function getWeatherData() {
    $('.buffer-zone').style.display = 'none'
    $('.current-wrapper').style.display = 'none'
    weatherForecast.innerHTML = ''
    $('.today').style.padding = '20px 43px';
    $('.today').innerHTML = `<div class="loader"></div>`

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${inputCity.value}&lang=ru&units=metric&appid=${apiKey}`)
        .then(res => res.json()).then(data => {
            console.log(data);
            weatherNow(data);
            futureWeatherData(data);
        })


}
searchCity.addEventListener('click', getWeatherData);

inputCity.addEventListener('click', () => {
    $('.buffer-zone').style.display = 'none'
})

function showWeatherData(data, currentData) {
    $('.future-forecast').style.display = 'flex'

    const Night = data.list.filter(nighttime => nighttime.dt_txt.includes("21:00:00"))
    $('.today').innerHTML = `
    <img src="http://openweathermap.org/img/wn/${currentData.weather[0].icon}@2x.png" class="icon">
    <div class="other">
    <div class="day">
    Сейчас 
    </div>
        <div class="temp">
    ${currentData.main.temp}°C
        </div>
    <div class="day">
     Ночью 
        </div>
    <div class="temp">
        ${Night[0].main.temp}°C
    </div>
    </div>`
}




function futureWeatherData(data) {
    const mapCb = time => new Date(time.dt_txt).getDay();
    const morningData = data.list.filter(daytime => daytime.dt_txt.includes("12:00:00"))
    const serialNumberDay = morningData.map(mapCb)
    const morningNight = data.list.filter(nighttime => nighttime.dt_txt.includes("21:00:00"))
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
        let xx = document.createElement('div')
        xx.className = 'weather-forecast-item'
        xx.setAttribute('data-id', pizdaIndex);
        xx.setAttribute('data-date', date);

        const today = new Date(xx.dataset.date).toISOString().slice(0, 10)
        const filterDay22 = data.list.filter(daytime => daytime.dt_txt.includes(today))

        xx.innerHTML = `
        <div class="day"> 
        ${formatter.format(date)}
        </div>
        <img src='http://openweathermap.org/img/wn/${filterDay22[i].weather[0].icon}@2x.png'>
        <div class="temp">
        День - ${morningData[serialNumberDay.indexOf(pizdaIndex)].main.temp} °C
        </div>
        <div class="temp">
        Ночь - ${morningNight[serialNumberNight.indexOf(pizdaIndex)].main.temp} °C
        </div>`;
        weatherForecast.appendChild(xx)


        xx.addEventListener('click', () => {
            $('.buffer-zone').style.display = 'flex'
            $('.current-wrapper').style.display = 'none'
            $(`.parameters-wraper`).innerHTML = ''
            for (let i = 0; i < filterDay22.length; i++) {


                // ↓
                let pr = filterDay22[i].main.pressure / 1.333 + ''
                let x = pr.substr(0, 3);
                // ↑

                $('#date-bleyt').innerHTML = today
                $('.parameters-wraper').innerHTML += `
                <div class="parameters-item parameters${i}">  
                <p class="parameters-text1 clear date${i}">${filterDay22[i].dt_txt.slice(10, 16)}</p>
                <p class="img${i} clear img"><img src='http://openweathermap.org/img/wn/${filterDay22[i].weather[0].icon}@2x.png'</p>
                <p class="parameters-text2 clear temp${i}">${filterDay22[i].weather[0].description}</p>
                <p class="parameters-text3 clear description${i}">${filterDay22[i].main.temp}℃</p>
                <p class="parameters-text4 clear feels_like${i}">${filterDay22[i].main.feels_like}℃</p>
                <p class="parameters-text5 clear pressure${i}">${x} мм рт.ст</p>
                <p class="parameters-text6 clear humidity${i}">${filterDay22[i].main.humidity}%</p>
                <p class="parameters-text7 clear speed${i}">${filterDay22[i].wind.speed}м/с</p>
                </div>`

            }
        })
    }
}

function currentWeather(data, currentData) {
    let pr = (currentData.main.pressure / 1.333).toFixed()
    $('.today').addEventListener('click', () => {
        $('.current-wrapper').style.display = 'flex'
        $('.buffer-zone').style.display = 'none'
        $('.current-temp').innerHTML = currentData.main.temp + '℃ '
        $('.description').innerHTML = currentData.weather[0].description.toUpperCase()
        $('.wind-item').innerHTML = currentData.wind.speed
        $('.pressure-item').innerHTML = pr + ' мм рт.ст.'
        $('.humidity-item').innerHTML = currentData.main.humidity + '%'
    })
}


function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;

        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });

    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }

    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function(e) {
        closeAllLists(e.target);
    });
}

/*An array containing all the country names in the world:*/



let countries = 'Алупка San-Andreas Алушта Армянск City-17 Залупенск Бахчисарай Белогорск Каменское Амогус-Сити Абобусград Владеславель Джанкой Евпатория Керчь Красноперекопск Саки Севастополь Симферополь Старый Крым Судак Феодосия Щёлкино Ялта Бар Бершадь Винница Гайсин Жмеринка Казатин Калиновка Ладыжин Могилёв-Подольский Немиров Погребище Тульчин Хмельник Шаргород Ямполь Берестечко Владимир-Волынский Горохов Камень-Каширский Киверцы Ковель Луцк Любомль Нововолынск Рожище Устилуг Апостолово Верхнеднепровск Вольногорск Днепродзержинск Днепропетровск Жёлтые Воды Кривой Рог Марганец Никополь Новомосковск Орджоникидзе Павлоград Перещепино Першотравенск Подгородное Пятихатки Синельниково Терновка Авдеевка Артёмовск Волноваха Горловка Дзержинск Дебальцево Димитров Доброполье Докучаевск Донецк Дружковка Енакиево Ждановка Зугрэс Кировское Краматорск Красноармейск Красный Лиман Константиновка Мариуполь Макеевка Новогродовка Селидово Славянск Снежное Соледар Торез Угледар Харцызск Шахтёрск Ясиноватая Андрушёвка Барановка Бердичев Житомир Коростень Коростышев Малин Новоград-Волынский Овруч Радомышль Берегово Виноградов Иршава Мукачево Перечин Рахов Свалява Тячев Ужгород Хуст Чоп Бердянск Васильевка Вольнянск Гуляйполе Днепрорудное Запорожье Каменка-Днепровская Мелитополь Молочанск Орехов Пологи Приморск Токмак Энергодар Болехов Бурштын Галич Городенка Долина Ивано-Франковск Калуш Коломыя Косов Надворная Рогатин Снятын Тысменица Тлумач Яремче Белая Церковь Березань Богуслав Борисполь Боярка Бровары Буча Васильков Вишнёвое Вышгород Ирпень Кагарлык Киев Мироновка Обухов Переяслав-Хмельницкий Припять Ржищев Сквира Славутич Тараща Тетиев Узин Украинка Фастов Чернобыль Яготин Александрия Бобринец Гайворон Долинская Знаменка Кировоград Малая Виска Новомиргород Новоукраинка Светловодск Александровск Алмазная Алчевск Антрацит Брянка Вахрушево Горное Зимогорье Золотое Зоринск Краснодон Красный Луч Лисичанск Луганск Лутугино Миусинск Молодогвардейск Новодружеск Новопсков Первомайск Перевальск Петровское Попасная Приволье Ровеньки Рубежное Сватово Свердловск Северодонецк Старобельск Стаханов Суходольск Счастье Теплогорск Червонопартизанск Белз Бобрка Борислав Броды Буск Великие Мосты Глиняны Городок Добромиль Дрогобыч Дубляны Жидачов Жолква Золочев Каменка-Бугская Львов Мостиска Перемышляны Пустомыты Рава-Русская Радехов Рудки Самбор Сколе Сокаль Старый Самбор Стрый Трускавец Угнев Хыров Червоноград Яворов Баштанка Вознесенск Николаев Новая Одесса Новый Буг Очаков Первомайск Снигирёвка Южноукраинск Ананьев Арциз Балта Белгород-Днестровский Болград Измаил Ильичёвск Килия Кодыма Котовск Одесса Татарбунары Теплодар Южное Гадяч Глобино Гребёнка Зеньков Карловка Кременчуг Кобеляки Комсомольск Лохвица Лубны Миргород Пирятин Полтава Хорол Червонозаводское Березне Дубно Дубровица Здолбунов Корец Костополь Кузнецовск Острог Радивилов Ровно Сарны Ахтырка Белополье Бурынь Глухов Кролевец Конотоп Лебедин Путивль Ромны Середина-Буда Сумы Тростянец Шостка Бережаны Борщёв Бучач Залещики Збараж Зборов Кременец Лановцы Монастыриска Подволочиск Подгайцы Почаев Скалат Тернополь Теребовля Чортков Шумск Балаклея Барвенково Богодухов Валки Великий Бурлук Волчанск Дергачи Змиев Изюм Красноград Купянск Лозовая Люботин Мерефа Первомайский Харьков Чугуев Берислав Геническ Голая Пристань Каховка Новая Каховка Скадовск Таврийск Херсон Цюрупинск Волочиск Городок Деражня Дунаевцы Изяслав Каменец-Подольский Красилов Нетешин Полонное Славута Староконстантинов Хмельницкий Шепетовка Ватутино Городище Жашков Звенигородка Золотоноша Каменка Канев Корсунь-Шевченковский Монастырище Смела Тальное Умань Христиновка Черкассы Чигирин Шпола Бахмач Бобровица Борзна Городня Десна Ичня Корюковка Мена Нежин Новгород-Северский Носовка Прилуки Седнев Семёновка Чернигов Щорс Вашковцы Вижница Герца Заставна Кицмань Новоднестровск Новоселица Сокиряны Сторожинец Хотин'.split(' ')

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("myInput"), countries);