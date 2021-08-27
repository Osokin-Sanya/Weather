'use strict'
const $ = _ => document.querySelector(_);
const $$ = _ => document.querySelectorAll(_);

// Create, init params and returns elements

const create = (elementName, params) => {
    // Create empty element
    const element = document.createElement(elementName);

    // If params truthy => marge input params
    params && Object.assign(element, params);

    // Returns created element
    return element;
}


let weatherNowURL = ''
const state = {
    index: 0,
    citiName: null,
    temp: null,
    feelslike: null,
    pressure: null,
    humidity: null,
    descriptionWeather: null,
    clouds: null,
    windSpeed: null,
    windgust: null,
    precipitation: null,
    date: null

}


const inputCiti = $('.name__citi')
const buttonCiti = $('.button__citi')

buttonCiti.addEventListener('click', () => {
    weatherNowURL = `https://api.openweathermap.org/data/2.5/forecast?q=${inputCiti.value}&units=metric&appid=a174f834c69eee3b72537c60e7312512`
    async function getWeather() {
        const response = await fetch(weatherNowURL)
        const data = await response.json()
            // const serialNumberDay = data.list.map((reading, ind) => new Date(reading.dt_txt).getDay())
            // const morningData = data.list.filter((reading, ind) => reading.dt_txt.includes("00:00:00"))

        const morningData = data.list.filter((reading, ind) => reading.dt_txt.includes("12:00:00"))
        const serialNumberDay = morningData.map((reading, ind) => new Date(reading.dt_txt).getDay())

        console.log(serialNumberDay);
        let dateNew = new Date().getDay()
        console.log(morningData);
        console.log(dateNew);

        let pizdaDay = null
        if (morningData[0].dt_txt !== dateNew) {
            pizdaDay = serialNumberDay.slice()
            console.log(1);
        }

        for (let i = 0; i < data.list.length; i++) {
            // state.citiName = data.city.name
            // state.temp = Math.floor(data.list[i].main.temp)
            // state.feelslike = Math.floor(data.list[i].main.feels_like)
            // state.humidity = data.list[i].main.humidity
            // state.descriptionWeather = data.list[i].weather[0].description
            // state.clouds = data.list[i].clouds.all
            // state.windSpeed = data.list[i].wind.speed
            // state.windgust = data.list[i].wind.gust
            // state.precipitation = data.list[i].pop
            // state.date = data.list[i].dt_txt

            // const toDays = new Date(data.list[i].dt_txt).getDay()
            // console.log(toDays);


            if (pizdaDay[i] == 1) {
                let date = new Date(morningData[serialNumberDay.indexOf(1)].dt_txt)
                let weekday = date.getDay();
                let options = { weekday: 'long' };
                $('.day__1').innerHTML = new Intl.DateTimeFormat('ru-RU', options).format(date)

                $('.temp').innerHTML = Math.floor(data.list[serialNumberDay.indexOf(1)].main.temp)
                $('.feelslike').innerHTML = Math.floor(data.list[serialNumberDay.indexOf(1)].main.feels_like)
                $('.humidity').innerHTML = data.list[serialNumberDay.indexOf(1)].main.humidity
                $('.descriptionWeather').innerHTML = data.list[serialNumberDay.indexOf(1)].weather[0].description
                $('.clouds').innerHTML = data.list[serialNumberDay.indexOf(1)].clouds.all
                $('.windSpeed').innerHTML = data.list[serialNumberDay.indexOf(1)].wind.speed
                $('.precipitation').innerHTML = data.list[serialNumberDay.indexOf(1)].pop
            }
            if (pizdaDay[i] == 2) {
                let date = new Date(morningData[serialNumberDay.indexOf(2)].dt_txt)
                let weekday = date.getDay();
                let options = { weekday: 'long' };
                $('.day__2').innerHTML = new Intl.DateTimeFormat('ru-RU', options).format(date)

                $('.temp2').innerHTML = Math.floor(data.list[serialNumberDay.indexOf(2)].main.temp)
                console.log(data.list[serialNumberDay.indexOf(2)]);
                $('.feelslike2').innerHTML = Math.floor(data.list[serialNumberDay.indexOf(2)].main.feels_like)
                $('.humidity2').innerHTML = data.list[serialNumberDay.indexOf(2)].main.humidity
                $('.descriptionWeather2').innerHTML = data.list[serialNumberDay.indexOf(2)].weather[0].description
                $('.clouds2').innerHTML = data.list[serialNumberDay.indexOf(2)].clouds.all
                $('.windSpeed2').innerHTML = data.list[serialNumberDay.indexOf(2)].wind.speed
                $('.precipitation2').innerHTML = data.list[serialNumberDay.indexOf(2)].pop
            }


            if (pizdaDay[i] == 3) {
                let date = new Date(morningData[serialNumberDay.indexOf(3)].dt_txt)
                let weekday = date.getDay();
                let options = { weekday: 'long' };
                $('.day__3').innerHTML = new Intl.DateTimeFormat('ru-RU', options).format(date)


                $('.temp3').innerHTML = Math.floor(data.list[serialNumberDay.indexOf(3)].main.temp)
                $('.feelslike3').innerHTML = Math.floor(data.list[serialNumberDay.indexOf(3)].main.feels_like)
                $('.humidity3').innerHTML = data.list[serialNumberDay.indexOf(3)].main.humidity
                $('.descriptionWeather3').innerHTML = data.list[serialNumberDay.indexOf(3)].weather[0].description
                $('.clouds3').innerHTML = data.list[serialNumberDay.indexOf(3)].clouds.all
                $('.windSpeed3').innerHTML = data.list[serialNumberDay.indexOf(3)].wind.speed
                $('.precipitation3').innerHTML = data.list[serialNumberDay.indexOf(3)].pop
            }
            if (pizdaDay[i] == 4) {
                let date = new Date(morningData[serialNumberDay.indexOf(4)].dt_txt)
                let weekday = date.getDay();
                let options = { weekday: 'long' };
                $('.day__4').innerHTML = new Intl.DateTimeFormat('ru-RU', options).format(date)

                $('.temp4').innerHTML = Math.floor(morningData[serialNumberDay.indexOf(4)].main.temp)
                $('.feelslike4').innerHTML = Math.floor(morningData[serialNumberDay.indexOf(4)].main.feels_like)
                $('.humidity4').innerHTML = morningData[serialNumberDay.indexOf(4)].main.humidity
                $('.descriptionWeather4').innerHTML = morningData[serialNumberDay.indexOf(4)].weather[0].description
                $('.clouds4').innerHTML = morningData[serialNumberDay.indexOf(4)].clouds.all
                $('.windSpeed4').innerHTML = morningData[serialNumberDay.indexOf(4)].wind.speed
                $('.precipitation4').innerHTML = morningData[serialNumberDay.indexOf(4)].pop
            }
            if (pizdaDay[i] == 5) {
                let date = new Date(morningData[serialNumberDay.indexOf(5)].dt_txt)
                let weekday = date.getDay();
                let options = { weekday: 'long' };
                $('.day__5').innerHTML = new Intl.DateTimeFormat('ru-RU', options).format(date)

                $('.temp5').innerHTML = Math.floor(morningData[serialNumberDay.indexOf(5)].main.temp)
                $('.feelslike5').innerHTML = Math.floor(morningData[serialNumberDay.indexOf(5)].main.feels_like)
                $('.humidity5').innerHTML = morningData[serialNumberDay.indexOf(5)].main.humidity
                $('.descriptionWeather5').innerHTML = morningData[serialNumberDay.indexOf(5)].weather[0].description
                $('.clouds5').innerHTML = morningData[serialNumberDay.indexOf(5)].clouds.all
                $('.windSpeed5').innerHTML = morningData[serialNumberDay.indexOf(5)].wind.speed
                $('.precipitation5').innerHTML = morningData[serialNumberDay.indexOf(5)].pop
            }
            if (pizdaDay[i] == 6) {
                let date = new Date(morningData[serialNumberDay.indexOf(6)].dt_txt)
                let weekday = date.getDay();
                let options = { weekday: 'long' };
                $('.day__6').innerHTML = new Intl.DateTimeFormat('ru-RU', options).format(date)

                $('.temp6').innerHTML = Math.floor(morningData[serialNumberDay.indexOf(6)].main.temp)
                $('.feelslike6').innerHTML = Math.floor(morningData[serialNumberDay.indexOf(6)].main.feels_like)
                $('.humidity6').innerHTML = morningData[serialNumberDay.indexOf(6)].main.humidity
                $('.descriptionWeather6').innerHTML = morningData[serialNumberDay.indexOf(6)].weather[0].description
                $('.clouds6').innerHTML = morningData[serialNumberDay.indexOf(6)].clouds.all
                $('.windSpeed6').innerHTML = morningData[serialNumberDay.indexOf(6)].wind.speed
                $('.precipitation6').innerHTML = morningData[serialNumberDay.indexOf(6)].pop
            }
            if (pizdaDay[i] == 0) {
                let date = new Date(morningData[serialNumberDay.indexOf(0)].dt_txt)
                let weekday = date.getDay();
                let options = { weekday: 'long' };
                $('.day__7').innerHTML = new Intl.DateTimeFormat('ru-RU', options).format(date)

                $('.temp7').innerHTML = Math.floor(morningData[serialNumberDay.indexOf(0)].main.temp)
                $('.feelslike7').innerHTML = Math.floor(morningData[serialNumberDay.indexOf(0)].main.feels_like)
                $('.humidity7').innerHTML = morningData[serialNumberDay.indexOf(0)].main.humidity
                $('.descriptionWeather7').innerHTML = morningData[serialNumberDay.indexOf(0)].weather[0].description
                $('.clouds7').innerHTML = morningData[serialNumberDay.indexOf(0)].clouds.all
                $('.windSpeed7').innerHTML = morningData[serialNumberDay.indexOf(0)].wind.speed
                $('.precipitation7').innerHTML = morningData[serialNumberDay.indexOf(0)].pop
            }
        }


    }
    getWeather()
})

! function() {
    "use strict";

    function e() {
        var e = { skin: f.skin, pkg: f.pkg, version: l };
        /MSIE\x20(\d+\.\d+);/.test(navigator.userAgent) && parseInt(RegExp.$1, 10) < 9 && (e.ie8 = !0);
        var t = [];
        for (var n in e) {
            var o = e[n];
            o && t.push(n + "=" + o)
        }
        return t.length ? "?" + t.join("&") : ""
    }

    function t() {
        s = !0;
        var e = document.createElement("script");
        e.setAttribute("type", "text/javascript"), e.setAttribute("src", m + "/js/" + v), e.onerror = function(e) { d(e) }, document.getElementsByTagName("head")[0].appendChild(e)
    }

    function n() {
        return new Promise(function(e, t) {
            function n() { document.addEventListener ? (document.removeEventListener("DOMContentLoaded", n, !1), window.removeEventListener("load", n, !1)) : (document.detachEvent("onreadystatechange", n), window.detachEvent("onload", n)), i || (i = !0, e()) }

            function o() {
                if (!i) {
                    try { document.documentElement.doScroll("left") } catch (e) { return void setTimeout(o, 50) }
                    n()
                }
            }
            var i = !1;
            if ("loading" !== document.readyState) return n();
            if (document.addEventListener) document.addEventListener("DOMContentLoaded", n, !1), window.addEventListener("load", n, !1);
            else if (document.attachEvent) {
                document.attachEvent("onreadystatechange", n), window.attachEvent("onload", n);
                var r = !1;
                try { r = null == window.frameElement } catch (a) {}
                document.documentElement.doScroll && r && o()
            }
        })
    }

    function o() {
        var e = m + "/css/" + v,
            t = document.createElement("style");
        return t.type = "text/css", new Promise(function(n, o) {
            DG.ajax(e, {
                type: "get",
                dataType: "html",
                success: function(e) {
                    var o = document.getElementsByTagName("head")[0],
                        i = "http://maps.api.2gis.ru/2.0";
                    m !== i && (e = e.replace(new RegExp(i, "g"), m)), t.styleSheet ? (o.appendChild(t), t.styleSheet.cssText = e) : (t.appendChild(document.createTextNode(e)), o.appendChild(t)), n()
                },
                error: function() { o() }
            })
        })
    }

    function i() {
        var e = DG.config.protocol + DG.config.webApiServer + "/" + DG.config.webApiVersion + "/region/list";
        return new Promise(function(t) {
            DG.ajax(e, {
                type: DG.ajax.corsSupport ? "get" : "jsonp",
                data: { format: DG.ajax.corsSupport ? "json" : "jsonp", key: DG.config.webApiKey, fields: DG.config.regionListFields },
                timeout: DG.config.loadProjectListTimeout,
                success: function(e) {
                    var n = e.result;
                    n && n.items && n.items.length && (DG.projectsList = n.items), t()
                },
                error: function(e) { t() }
            })
        })
    }

    function r() { DG.extend(DG.config, { "protocol": "https:", "baseUrl": "//maps.api.2gis.ru/2.0", "webApiKey": "rubnkm7490", "geoclickerCatalogApiKey": "ruxlih0718" }), DG.customConfig && DG.extend(DG.config, DG.customConfig) }

    function a() { return Promise.all([o(), i(), n()]) }

    function c() { DG.ready = !0 }

    function d() { for (var e = 0, t = u.length; e < t; e++) "function" == typeof u[e] && u[e]() }
    var s = !1,
        u = [],
        l = "v3.6.6",
        m = "https://maps.api.2gis.ru/2.0",
        f = { "pkg": "full" },
        p = "true" === f.lazy,
        v = e();
    window.DG = window.DG || {}, window.DG.ready = !1, window.__dgApi__ = {
        callbacks: [
            [r, void 0],
            [a, void 0],
            [c, void 0]
        ],
        version: l
    };
    var g = window.DG.then = function(e, n) { return DG.then !== g ? DG.then(e, n) : (window.__dgApi__.callbacks.push([e, n]), p && !s && t(), n && u.push(n), this) };
    p || t()
}();

let pizdos = [{
        "name": "Алупка",
        "lat": "44.4197222",
        "lng": "34.0430556"
    },
    {
        "name": "Алушта",
        "lat": "44.6637211",
        "lng": "34.405013"
    },
    {
        "name": "Армянск",
        "lat": "46.1072222",
        "lng": "33.6933333"
    },
    {
        "name": "Бахчисарай",
        "lat": "44.7527778",
        "lng": "33.8608333"
    },
    {
        "name": "Белогорск",
        "lat": "45.0544444",
        "lng": "34.6022222"
    },
    {
        "name": "Джанкой",
        "lat": "45.7086111",
        "lng": "34.3933333"
    },
    {
        "name": "Евпатория",
        "lat": "45.2036111",
        "lng": "33.3613889"
    },
    {
        "name": "Керчь",
        "lat": "45.33786",
        "lng": "36.458401"
    },
    {
        "name": "Красноперекопск",
        "lat": "45.962849",
        "lng": "33.787121"
    },
    {
        "name": "Саки",
        "lat": "45.1336111",
        "lng": "33.5772222"
    },
    {
        "name": "Севастополь",
        "lat": "44.60000001",
        "lng": "33.533333343333"
    },
    {
        "name": "Симферополь",
        "lat": "44.9480556",
        "lng": "34.1041667"
    },
    {
        "name": "Старый Крым",
        "lat": "45.0291667",
        "lng": "35.0886111"
    },
    {
        "name": "Судак",
        "lat": "44.858799",
        "lng": "34.974979"
    },
    {
        "name": "Феодосия",
        "lat": "45.0488889",
        "lng": "35.3791667"
    },
    {
        "name": "Щёлкино",
        "lat": "45.4281023",
        "lng": "35.8165187"
    },
    {
        "name": "Ялта",
        "lat": "44.4994444",
        "lng": "34.1552778"
    }, {
        "name": "Бар",
        "lat": "49.630283",
        "lng": "27.001648"
    },
    {
        "name": "Бершадь",
        "lat": "48.368954",
        "lng": "29.5331654"
    },
    {
        "name": "Винница",
        "lat": "49.2333333",
        "lng": "28.4833333"
    },
    {
        "name": "Гайсин",
        "lat": "48.8094444",
        "lng": "29.3905556"
    },
    {
        "name": "Жмеринка",
        "lat": "49.038349",
        "lng": "28.10556"
    },
    {
        "name": "Казатин",
        "lat": "49.711769",
        "lng": "28.842859"
    },
    {
        "name": "Калиновка",
        "lat": "49.4472222",
        "lng": "28.5230556"
    },
    {
        "name": "Ладыжин",
        "lat": "48.676151",
        "lng": "29.262541"
    },
    {
        "name": "Могилёв-Подольский",
        "lat": "48.45",
        "lng": "27.8"
    },
    {
        "name": "Немиров",
        "lat": "48.9726621",
        "lng": "28.835666"
    },
    {
        "name": "Погребище",
        "lat": "49.4833333",
        "lng": "29.2666667"
    },
    {
        "name": "Тульчин",
        "lat": "48.68",
        "lng": "28.87"
    },
    {
        "name": "Хмельник",
        "lat": "49.563469",
        "lng": "27.959379"
    },
    {
        "name": "Шаргород",
        "lat": "48.73761",
        "lng": "28.08688"
    },
    {
        "name": "Ямполь",
        "lat": "49.9572775",
        "lng": "26.2290711"
    },
    {
        "name": "Берестечко",
        "lat": "50.3505636",
        "lng": "25.1007738"
    },
    {
        "name": "Владимир-Волынский",
        "lat": "50.853578",
        "lng": "24.311783"
    },
    {
        "name": "Горохов",
        "lat": "50.500622",
        "lng": "24.767559"
    },
    {
        "name": "Камень-Каширский",
        "lat": "51.6241667",
        "lng": "24.9605556"
    },
    {
        "name": "Киверцы",
        "lat": "50.833621",
        "lng": "25.460706"
    },
    {
        "name": "Ковель",
        "lat": "51.212898",
        "lng": "24.71343"
    },
    {
        "name": "Луцк",
        "lat": "50.75",
        "lng": "25.3358333"
    },
    {
        "name": "Любомль",
        "lat": "51.2230556",
        "lng": "24.0377778"
    },
    {
        "name": "Нововолынск",
        "lat": "50.7333333",
        "lng": "24.1666667"
    },
    {
        "name": "Рожище",
        "lat": "50.915901",
        "lng": "25.268551"
    },
    {
        "name": "Устилуг",
        "lat": "50.86",
        "lng": "24.15"
    },
    {
        "name": "Апостолово",
        "lat": "47.65815",
        "lng": "33.697819"
    },
    {
        "name": "Верхнеднепровск",
        "lat": "48.6561111",
        "lng": "34.3283333"
    },
    {
        "name": "Вольногорск",
        "lat": "48.4833333",
        "lng": "34.0166667"
    },
    {
        "name": "Днепродзержинск",
        "lat": "48.5166667",
        "lng": "34.6166667"
    },
    {
        "name": "Днепропетровск",
        "lat": "48.45",
        "lng": "34.9833333"
    },
    {
        "name": "Жёлтые Воды",
        "lat": "48.35",
        "lng": "33.5"
    },
    {
        "name": "Кривой Рог",
        "lat": "47.899726",
        "lng": "33.379534"
    },
    {
        "name": "Марганец",
        "lat": "47.6397222",
        "lng": "34.6363889"
    },
    {
        "name": "Никополь",
        "lat": "47.5666667",
        "lng": "34.4"
    },
    {
        "name": "Новомосковск",
        "lat": "48.6333333",
        "lng": "35.2166667"
    },
    {
        "name": "Орджоникидзе",
        "lat": "44.9643961",
        "lng": "35.3569007"
    },
    {
        "name": "Павлоград",
        "lat": "48.533939",
        "lng": "35.869282"
    },
    {
        "name": "Перещепино",
        "lat": "49.016251",
        "lng": "35.371681"
    },
    {
        "name": "Першотравенск",
        "lat": "48.3463889",
        "lng": "36.4044444"
    },
    {
        "name": "Подгородное",
        "lat": "49.5355598",
        "lng": "25.5276081"
    },
    {
        "name": "Пятихатки",
        "lat": "48.4113889",
        "lng": "33.7105556"
    },
    {
        "name": "Синельниково",
        "lat": "48.3177778",
        "lng": "35.5119444"
    },
    {
        "name": "Терновка",
        "lat": "48.5402778",
        "lng": "29.9677778"
    },

    {
        "name": "Авдеевка",
        "lat": "48.1333333",
        "lng": "37.7333333"
    },
    {
        "name": "Артёмовск",
        "lat": "48.599072",
        "lng": "37.999241"
    },
    {
        "name": "Волноваха",
        "lat": "47.596119",
        "lng": "37.490429"
    },
    {
        "name": "Горловка",
        "lat": "48.346432",
        "lng": "38.059513"
    },
    {
        "name": "Дзержинск",
        "lat": "48.4",
        "lng": "37.8333333"
    },
    {
        "name": "Дебальцево",
        "lat": "48.3333333",
        "lng": "38.4"
    },
    {
        "name": "Димитров",
        "lat": "48.32357",
        "lng": "37.291854"
    },
    {
        "name": "Доброполье",
        "lat": "48.4691324",
        "lng": "37.0871223"
    },
    {
        "name": "Докучаевск",
        "lat": "47.770821",
        "lng": "37.684361"
    },
    {
        "name": "Донецк",
        "lat": "48.0027778",
        "lng": "37.8052778"
    },
    {
        "name": "Дружковка",
        "lat": "48.6166667",
        "lng": "37.5333333"
    },
    {
        "name": "Енакиево",
        "lat": "48.2166667",
        "lng": "38.2"
    },
    {
        "name": "Ждановка",
        "lat": "48.1462985",
        "lng": "38.2540176"
    },
    {
        "name": "Зугрэс",
        "lat": "48.0166667",
        "lng": "38.2666667"
    },
    {
        "name": "Кировское",
        "lat": "48.15",
        "lng": "38.3666667"
    },
    {
        "name": "Краматорск",
        "lat": "48.736462",
        "lng": "37.57164"
    },
    {
        "name": "Красноармейск",
        "lat": "48.2827778",
        "lng": "37.1827778"
    },
    {
        "name": "Красный Лиман",
        "lat": "48.984211",
        "lng": "37.810329"
    },
    {
        "name": "Константиновка",
        "lat": "48.51545",
        "lng": "37.703629"
    },
    {
        "name": "Мариуполь",
        "lat": "47.1166667",
        "lng": "37.55"
    },
    {
        "name": "Макеевка",
        "lat": "48.076179",
        "lng": "38.068427"
    },
    {
        "name": "Новогродовка",
        "lat": "48.2045408",
        "lng": "37.336821"
    },
    {
        "name": "Селидово",
        "lat": "48.144671",
        "lng": "37.297897"
    },
    {
        "name": "Славянск",
        "lat": "48.846851",
        "lng": "37.57954"
    },
    {
        "name": "Снежное",
        "lat": "48.0282789",
        "lng": "38.7656122"
    },
    {
        "name": "Соледар",
        "lat": "48.6833333",
        "lng": "38.1"
    },
    {
        "name": "Торез",
        "lat": "48.0166667",
        "lng": "38.6333333"
    },
    {
        "name": "Угледар",
        "lat": "47.7833333",
        "lng": "37.25"
    },
    {
        "name": "Харцызск",
        "lat": "48.037411",
        "lng": "38.160301"
    },
    {
        "name": "Шахтёрск",
        "lat": "48.0333333",
        "lng": "38.4833333"
    },
    {
        "name": "Ясиноватая",
        "lat": "48.1221425",
        "lng": "37.8765944"
    },

    {
        "name": "Андрушёвка",
        "lat": "50.0166667",
        "lng": "29.0166667"
    },
    {
        "name": "Барановка",
        "lat": "50.30204",
        "lng": "27.67634"
    },
    {
        "name": "Бердичев",
        "lat": "49.903381",
        "lng": "28.599251"
    },
    {
        "name": "Житомир",
        "lat": "50.259749",
        "lng": "28.676248"
    },
    {
        "name": "Коростень",
        "lat": "50.95",
        "lng": "28.6333333"
    },
    {
        "name": "Коростышев",
        "lat": "50.316639",
        "lng": "29.06653"
    },
    {
        "name": "Малин",
        "lat": "50.77121",
        "lng": "29.25297"
    },
    {
        "name": "Новоград-Волынский",
        "lat": "50.59256",
        "lng": "27.62348"
    },
    {
        "name": "Овруч",
        "lat": "51.327251",
        "lng": "28.818979"
    },
    {
        "name": "Радомышль",
        "lat": "50.4947222",
        "lng": "29.2333333"
    },

    {
        "name": "Берегово",
        "lat": "48.2",
        "lng": "22.6333333"
    },
    {
        "name": "Виноградов",
        "lat": "48.138142",
        "lng": "23.041519"
    },
    {
        "name": "Иршава",
        "lat": "48.310911",
        "lng": "23.037711"
    },
    {
        "name": "Мукачево",
        "lat": "48.442411",
        "lng": "22.723352"
    },
    {
        "name": "Перечин",
        "lat": "48.7341667",
        "lng": "22.4741667"
    },
    {
        "name": "Рахов",
        "lat": "48.060829",
        "lng": "24.205059"
    },
    {
        "name": "Свалява",
        "lat": "48.5472222",
        "lng": "22.9861111"
    },
    {
        "name": "Тячев",
        "lat": "48.0113889",
        "lng": "23.5722222"
    },
    {
        "name": "Ужгород",
        "lat": "48.6166667",
        "lng": "22.3"
    },
    {
        "name": "Хуст",
        "lat": "48.1813889",
        "lng": "23.2977778"
    },
    {
        "name": "Чоп",
        "lat": "48.4333333",
        "lng": "22.2"
    },
    {
        "name": "Бердянск",
        "lat": "46.748581",
        "lng": "36.809502"
    },
    {
        "name": "Васильевка",
        "lat": "47.433708",
        "lng": "35.27816"
    },
    {
        "name": "Вольнянск",
        "lat": "47.9419444",
        "lng": "35.4280556"
    },
    {
        "name": "Гуляйполе",
        "lat": "47.658562",
        "lng": "36.252918"
    },
    {
        "name": "Днепрорудное",
        "lat": "47.3840983",
        "lng": "34.98121"
    },
    {
        "name": "Запорожье",
        "lat": "47.853748",
        "lng": "35.157139"
    },
    {
        "name": "Каменка-Днепровская",
        "lat": "47.488911",
        "lng": "34.400761"
    },
    {
        "name": "Мелитополь",
        "lat": "46.847839",
        "lng": "35.364979"
    },
    {
        "name": "Молочанск",
        "lat": "47.206982",
        "lng": "35.59618"
    },
    {
        "name": "Орехов",
        "lat": "47.5666667",
        "lng": "35.7833333"
    },
    {
        "name": "Пологи",
        "lat": "47.47728",
        "lng": "36.25626"
    },
    {
        "name": "Приморск",
        "lat": "46.7333333",
        "lng": "36.35"
    },
    {
        "name": "Токмак",
        "lat": "47.25",
        "lng": "35.7"
    },
    {
        "name": "Энергодар",
        "lat": "47.4979877",
        "lng": "34.6565334"
    },
    {
        "name": "Болехов",
        "lat": "49.070011",
        "lng": "23.864719"
    },
    {
        "name": "Бурштын",
        "lat": "49.263802",
        "lng": "24.634211"
    },
    {
        "name": "Галич",
        "lat": "49.1247222",
        "lng": "24.7286111"
    },
    {
        "name": "Городенка",
        "lat": "48.6675",
        "lng": "25.5002778"
    },
    {
        "name": "Долина",
        "lat": "51.79",
        "lng": "33.76"
    },
    {
        "name": "Ивано-Франковск",
        "lat": "48.9166667",
        "lng": "24.7166667"
    },
    {
        "name": "Калуш",
        "lat": "49.050465",
        "lng": "24.374117"
    },
    {
        "name": "Коломыя",
        "lat": "48.53146",
        "lng": "25.039709"
    },
    {
        "name": "Косов",
        "lat": "48.315",
        "lng": "25.0952778"
    },
    {
        "name": "Надворная",
        "lat": "48.6333333",
        "lng": "24.5833333"
    },
    {
        "name": "Рогатин",
        "lat": "49.411449",
        "lng": "24.62051"
    },
    {
        "name": "Снятын",
        "lat": "48.45",
        "lng": "25.5666667"
    },
    {
        "name": "Тысменица",
        "lat": "48.9008333",
        "lng": "24.8491667"
    },
    {
        "name": "Тлумач",
        "lat": "48.8666667",
        "lng": "25.0"
    },
    {
        "name": "Яремче",
        "lat": "48.449523",
        "lng": "24.557508"
    },

    {
        "name": "Белая Церковь",
        "lat": "49.7988889",
        "lng": "30.1152778"
    },
    {
        "name": "Березань",
        "lat": "50.3197222",
        "lng": "31.47"
    },
    {
        "name": "Богуслав",
        "lat": "49.541031",
        "lng": "30.88073"
    },
    {
        "name": "Борисполь",
        "lat": "50.350491",
        "lng": "30.960739"
    },
    {
        "name": "Боярка",
        "lat": "49.323518",
        "lng": "30.700165"
    },
    {
        "name": "Бровары",
        "lat": "50.5166667",
        "lng": "30.8166667"
    },
    {
        "name": "Буча",
        "lat": "50.5569165",
        "lng": "30.2230733"
    },
    {
        "name": "Васильков",
        "lat": "50.178959",
        "lng": "30.32715"
    },
    {
        "name": "Вишнёвое",
        "lat": "50.4377778",
        "lng": "33.3822222"
    },
    {
        "name": "Вышгород",
        "lat": "50.5833333",
        "lng": "30.5"
    },
    {
        "name": "Ирпень",
        "lat": "50.5166667",
        "lng": "30.25"
    },
    {
        "name": "Кагарлык",
        "lat": "49.85722",
        "lng": "30.82032"
    },
    {
        "name": "Киев",
        "lat": "50.584981",
        "lng": "30.235748"
    },
    {
        "name": "Мироновка",
        "lat": "49.661022",
        "lng": "30.98458"
    },
    {
        "name": "Обухов",
        "lat": "50.105728",
        "lng": "30.630699"
    },
    {
        "name": "Переяслав-Хмельницкий",
        "lat": "50.070141",
        "lng": "31.45775"
    },
    {
        "name": "Припять",
        "lat": "51.4977778",
        "lng": "24.1180556"
    },
    {
        "name": "Ржищев",
        "lat": "49.972801",
        "lng": "31.04777"
    },
    {
        "name": "Сквира",
        "lat": "49.73719",
        "lng": "29.66901"
    },
    {
        "name": "Славутич",
        "lat": "51.523777",
        "lng": "30.768559"
    },
    {
        "name": "Тараща",
        "lat": "49.56065",
        "lng": "30.510309"
    },
    {
        "name": "Тетиев",
        "lat": "49.370575",
        "lng": "29.680221"
    },
    {
        "name": "Узин",
        "lat": "49.820228",
        "lng": "30.438929"
    },
    {
        "name": "Украинка",
        "lat": "50.1530861",
        "lng": "30.7434917"
    },
    {
        "name": "Фастов",
        "lat": "50.0833333",
        "lng": "29.9166667"
    },
    {
        "name": "Чернобыль",
        "lat": "51.2666667",
        "lng": "30.2166667"
    },
    {
        "name": "Яготин",
        "lat": "50.244949",
        "lng": "31.796261"
    },
    {
        "name": "Александрия",
        "lat": "48.6666667",
        "lng": "33.1166667"
    },
    {
        "name": "Бобринец",
        "lat": "48.050861",
        "lng": "32.16589"
    },
    {
        "name": "Гайворон",
        "lat": "48.3333333",
        "lng": "29.8666667"
    },
    {
        "name": "Долинская",
        "lat": "48.1108333",
        "lng": "32.7647222"
    },
    {
        "name": "Знаменка",
        "lat": "48.7166667",
        "lng": "32.6666667"
    },
    {
        "name": "Кировоград",
        "lat": "48.508389",
        "lng": "32.264801"
    },
    {
        "name": "Малая Виска",
        "lat": "48.65",
        "lng": "31.6333333"
    },
    {
        "name": "Новомиргород",
        "lat": "48.7833333",
        "lng": "31.65"
    },
    {
        "name": "Новоукраинка",
        "lat": "48.3155556",
        "lng": "31.5269444"
    },
    {
        "name": "Светловодск",
        "lat": "49.0502778",
        "lng": "33.2419444"
    },


    {
        "name": "Александровск",
        "lat": "48.5861652",
        "lng": "39.1949396"
    },
    {
        "name": "Алмазная",
        "lat": "48.5166667",
        "lng": "38.5833333"
    },
    {
        "name": "Алчевск",
        "lat": "48.4666667",
        "lng": "38.8"
    },
    {
        "name": "Антрацит",
        "lat": "48.1166667",
        "lng": "39.0833333"
    },
    {
        "name": "Брянка",
        "lat": "48.5133333",
        "lng": "38.6430556"
    },
    {
        "name": "Вахрушево",
        "lat": "48.174579",
        "lng": "38.837224"
    },
    {
        "name": "Горное",
        "lat": "49.1805556",
        "lng": "23.7341667"
    },
    {
        "name": "Зимогорье",
        "lat": "48.5833333",
        "lng": "38.9333333"
    },
    {
        "name": "Золотое",
        "lat": "48.6928568",
        "lng": "38.5146349"
    },
    {
        "name": "Зоринск",
        "lat": "48.4131636",
        "lng": "38.6204799"
    },
    {
        "name": "Краснодон",
        "lat": "48.29607",
        "lng": "39.745239"
    },
    {
        "name": "Красный Луч",
        "lat": "48.134041",
        "lng": "38.931419"
    },
    {
        "name": "Лисичанск",
        "lat": "48.896895",
        "lng": "38.444143"
    },
    {
        "name": "Луганск",
        "lat": "48.573269",
        "lng": "39.355659"
    },
    {
        "name": "Лутугино",
        "lat": "48.4019444",
        "lng": "39.2102778"
    },
    {
        "name": "Миусинск",
        "lat": "48.07",
        "lng": "38.9"
    },
    {
        "name": "Молодогвардейск",
        "lat": "48.3444444",
        "lng": "39.6583333"
    },
    {
        "name": "Новодружеск",
        "lat": "48.9666667",
        "lng": "38.35"
    },
    {
        "name": "Новопсков",
        "lat": "49.544731",
        "lng": "39.103889"
    },
    {
        "name": "Первомайск",
        "lat": "48.05",
        "lng": "30.85"
    },
    {
        "name": "Перевальск",
        "lat": "48.4388889",
        "lng": "38.8194444"
    },
    {
        "name": "Петровское",
        "lat": "48.293331",
        "lng": "38.888614"
    },
    {
        "name": "Попасная",
        "lat": "48.6333333",
        "lng": "38.38"
    },
    {
        "name": "Приволье",
        "lat": "49.016706",
        "lng": "38.302668"
    },
    {
        "name": "Ровеньки",
        "lat": "48.0833333",
        "lng": "39.3666667"
    },
    {
        "name": "Рубежное",
        "lat": "49.0166667",
        "lng": "38.3666667"
    },
    {
        "name": "Сватово",
        "lat": "49.41011",
        "lng": "38.15258"
    },
    {
        "name": "Свердловск",
        "lat": "48.084549",
        "lng": "39.65163"
    },
    {
        "name": "Северодонецк",
        "lat": "48.950191",
        "lng": "38.497631"
    },
    {
        "name": "Старобельск",
        "lat": "49.2666667",
        "lng": "38.9166667"
    },
    {
        "name": "Стаханов",
        "lat": "48.5666667",
        "lng": "38.65"
    },
    {
        "name": "Суходольск",
        "lat": "48.3523068",
        "lng": "39.7239205"
    },
    {
        "name": "Счастье",
        "lat": "48.737247",
        "lng": "39.2311974"
    },
    {
        "name": "Теплогорск",
        "lat": "48.600487",
        "lng": "38.5920825"
    },
    {
        "name": "Червонопартизанск",
        "lat": "48.095566",
        "lng": "39.759607"
    },
    {
        "name": "Белз",
        "lat": "50.380501",
        "lng": "24.01269"
    },
    {
        "name": "Бобрка",
        "lat": "49.6331904",
        "lng": "24.2907476"
    },
    {
        "name": "Борислав",
        "lat": "49.28476",
        "lng": "23.42137"
    },
    {
        "name": "Броды",
        "lat": "50.0833333",
        "lng": "25.15"
    },
    {
        "name": "Буск",
        "lat": "49.9666667",
        "lng": "24.6333333"
    },
    {
        "name": "Великие Мосты",
        "lat": "50.24",
        "lng": "24.1394444"
    },
    {
        "name": "Глиняны",
        "lat": "49.8233333",
        "lng": "24.5166667"
    },
    {
        "name": "Городок",
        "lat": "49.1666667",
        "lng": "26.5666667"
    },
    {
        "name": "Добромиль",
        "lat": "49.5666667",
        "lng": "22.7833333"
    },
    {
        "name": "Дрогобыч",
        "lat": "49.34853",
        "lng": "23.51647"
    },
    {
        "name": "Дубляны",
        "lat": "49.8833333",
        "lng": "24.0833333"
    },
    {
        "name": "Жидачов",
        "lat": "49.3813889",
        "lng": "24.1408333"
    },
    {
        "name": "Жолква",
        "lat": "50.0666667",
        "lng": "23.9666667"
    },
    {
        "name": "Золочев",
        "lat": "49.8083333",
        "lng": "24.9011111"
    },
    {
        "name": "Каменка-Бугская",
        "lat": "50.1",
        "lng": "24.35"
    },
    {
        "name": "Львов",
        "lat": "49.85",
        "lng": "24.0166667"
    },
    {
        "name": "Мостиска",
        "lat": "49.7941667",
        "lng": "23.1525"
    },
    {
        "name": "Перемышляны",
        "lat": "49.67",
        "lng": "24.5594444"
    },
    {
        "name": "Пустомыты",
        "lat": "49.7138889",
        "lng": "23.9108333"
    },
    {
        "name": "Рава-Русская",
        "lat": "50.230431",
        "lng": "23.628309"
    },
    {
        "name": "Радехов",
        "lat": "50.2827778",
        "lng": "24.6375"
    },
    {
        "name": "Рудки",
        "lat": "49.6530556",
        "lng": "23.4880556"
    },
    {
        "name": "Самбор",
        "lat": "49.5166667",
        "lng": "23.2027778"
    },
    {
        "name": "Сколе",
        "lat": "49.036049",
        "lng": "23.51232"
    },
    {
        "name": "Сокаль",
        "lat": "50.4833333",
        "lng": "24.2833333"
    },
    {
        "name": "Старый Самбор",
        "lat": "49.4430556",
        "lng": "23.0033333"
    },
    {
        "name": "Стрый",
        "lat": "49.256171",
        "lng": "23.850306"
    },
    {
        "name": "Трускавец",
        "lat": "49.2805556",
        "lng": "23.505"
    },
    {
        "name": "Угнев",
        "lat": "50.3666667",
        "lng": "23.7444444"
    },
    {
        "name": "Хыров",
        "lat": "49.5333333",
        "lng": "22.85"
    },
    {
        "name": "Червоноград",
        "lat": "50.3833333",
        "lng": "24.2333333"
    },
    {
        "name": "Яворов",
        "lat": "49.942501",
        "lng": "23.390989"
    },
    {
        "name": "Баштанка",
        "lat": "47.404331",
        "lng": "32.445301"
    },
    {
        "name": "Вознесенск",
        "lat": "47.587711",
        "lng": "31.336"
    },
    {
        "name": "Николаев",
        "lat": "46.9666667",
        "lng": "32.0"
    },
    {
        "name": "Новая Одесса",
        "lat": "47.3166667",
        "lng": "31.7833333"
    },
    {
        "name": "Новый Буг",
        "lat": "47.6833333",
        "lng": "32.5"
    },
    {
        "name": "Очаков",
        "lat": "46.6166667",
        "lng": "31.55"
    },
    {
        "name": "Первомайск",
        "lat": "48.05",
        "lng": "30.85"
    },
    {
        "name": "Снигирёвка",
        "lat": "47.0666667",
        "lng": "32.8166667"
    },
    {
        "name": "Южноукраинск",
        "lat": "47.8166667",
        "lng": "31.1833333"
    },
    {
        "name": "Ананьев",
        "lat": "47.7173",
        "lng": "29.975639"
    },
    {
        "name": "Арциз",
        "lat": "45.99739",
        "lng": "29.431288"
    },
    {
        "name": "Балта",
        "lat": "47.9333333",
        "lng": "29.6166667"
    },
    {
        "name": "Белгород-Днестровский",
        "lat": "46.1833333",
        "lng": "30.3333333"
    },
    {
        "name": "Болград",
        "lat": "45.682701",
        "lng": "28.61935"
    },
    {
        "name": "Измаил",
        "lat": "45.3516667",
        "lng": "28.8363889"
    },
    {
        "name": "Ильичёвск",
        "lat": "46.3020534",
        "lng": "30.6517391"
    },
    {
        "name": "Килия",
        "lat": "45.45578",
        "lng": "29.273291"
    },
    {
        "name": "Кодыма",
        "lat": "48.093941",
        "lng": "29.13368"
    },
    {
        "name": "Котовск",
        "lat": "47.75",
        "lng": "29.5333333"
    },
    {
        "name": "Одесса",
        "lat": "46.4666667",
        "lng": "30.7333333"
    },
    {
        "name": "Татарбунары",
        "lat": "45.841418",
        "lng": "29.62284"
    },
    {
        "name": "Теплодар",
        "lat": "46.5",
        "lng": "30.3333333"
    },
    {
        "name": "Южное",
        "lat": "47.8173262",
        "lng": "33.5737487"
    },
    {
        "name": "Гадяч",
        "lat": "50.3666667",
        "lng": "34.0"
    },
    {
        "name": "Глобино",
        "lat": "49.3833333",
        "lng": "33.2833333"
    },
    {
        "name": "Гребёнка",
        "lat": "50.116852",
        "lng": "32.44059"
    },
    {
        "name": "Зеньков",
        "lat": "50.20955",
        "lng": "34.362345"
    },
    {
        "name": "Карловка",
        "lat": "49.45",
        "lng": "35.1333333"
    },
    {
        "name": "Кременчуг",
        "lat": "49.073521",
        "lng": "33.4231"
    },
    {
        "name": "Кобеляки",
        "lat": "49.145439",
        "lng": "34.213638"
    },
    {
        "name": "Комсомольск",
        "lat": "49.013756",
        "lng": "33.643381"
    },
    {
        "name": "Лохвица",
        "lat": "50.36319",
        "lng": "33.253288"
    },
    {
        "name": "Лубны",
        "lat": "50.0166667",
        "lng": "33.0"
    },
    {
        "name": "Миргород",
        "lat": "49.963799",
        "lng": "33.61869"
    },
    {
        "name": "Пирятин",
        "lat": "50.23975",
        "lng": "32.514309"
    },
    {
        "name": "Полтава",
        "lat": "49.59269",
        "lng": "34.551159"
    },
    {
        "name": "Хорол",
        "lat": "49.790279",
        "lng": "33.207809"
    },
    {
        "name": "Червонозаводское",
        "lat": "50.4",
        "lng": "33.4"
    },
    {
        "name": "Березне",
        "lat": "51.0",
        "lng": "26.75"
    },
    {
        "name": "Дубно",
        "lat": "50.38738",
        "lng": "25.754559"
    },
    {
        "name": "Дубровица",
        "lat": "51.571209",
        "lng": "26.56805"
    },
    {
        "name": "Здолбунов",
        "lat": "50.5166667",
        "lng": "26.25"
    },
    {
        "name": "Корец",
        "lat": "50.619129",
        "lng": "27.161869"
    },
    {
        "name": "Костополь",
        "lat": "50.8833333",
        "lng": "26.45"
    },
    {
        "name": "Кузнецовск",
        "lat": "51.3436553",
        "lng": "25.8490867"
    },
    {
        "name": "Острог",
        "lat": "50.3333333",
        "lng": "26.5166667"
    },
    {
        "name": "Радивилов",
        "lat": "50.125777",
        "lng": "25.264195"
    },
    {
        "name": "Ровно",
        "lat": "50.6166667",
        "lng": "26.25"
    },
    {
        "name": "Сарны",
        "lat": "51.3372222",
        "lng": "26.6058333"
    },
    {
        "name": "Ахтырка",
        "lat": "50.29855",
        "lng": "34.892052"
    },
    {
        "name": "Белополье",
        "lat": "51.149402",
        "lng": "34.3175225"
    },
    {
        "name": "Бурынь",
        "lat": "51.1978",
        "lng": "33.847351"
    },
    {
        "name": "Глухов",
        "lat": "51.6786111",
        "lng": "33.9113889"
    },
    {
        "name": "Кролевец",
        "lat": "51.550121",
        "lng": "33.38279"
    },
    {
        "name": "Конотоп",
        "lat": "51.237469",
        "lng": "33.21217"
    },
    {
        "name": "Лебедин",
        "lat": "48.96",
        "lng": "31.52"
    },
    {
        "name": "Путивль",
        "lat": "51.337589",
        "lng": "33.87888"
    },
    {
        "name": "Ромны",
        "lat": "50.743919",
        "lng": "33.475712"
    },
    {
        "name": "Середина-Буда",
        "lat": "52.1833333",
        "lng": "34.0333333"
    },
    {
        "name": "Сумы",
        "lat": "50.910561",
        "lng": "34.80566"
    },
    {
        "name": "Тростянец",
        "lat": "50.9599282",
        "lng": "25.55378"
    },
    {
        "name": "Шостка",
        "lat": "51.86282",
        "lng": "33.487831"
    },
    {
        "name": "Бережаны",
        "lat": "49.444191",
        "lng": "24.94486"
    },
    {
        "name": "Борщёв",
        "lat": "48.803181",
        "lng": "26.041809"
    },
    {
        "name": "Бучач",
        "lat": "49.05772",
        "lng": "25.401979"
    },
    {
        "name": "Залещики",
        "lat": "48.65",
        "lng": "25.7333333"
    },
    {
        "name": "Збараж",
        "lat": "49.6666667",
        "lng": "25.7777778"
    },
    {
        "name": "Зборов",
        "lat": "49.660696",
        "lng": "25.1434667"
    },
    {
        "name": "Кременец",
        "lat": "50.099129",
        "lng": "25.7328"
    },
    {
        "name": "Лановцы",
        "lat": "49.8659402",
        "lng": "26.0841931"
    },
    {
        "name": "Монастыриска",
        "lat": "49.0888889",
        "lng": "25.1694444"
    },
    {
        "name": "Подволочиск",
        "lat": "49.5246859",
        "lng": "26.137326"
    },
    {
        "name": "Подгайцы",
        "lat": "49.2694444",
        "lng": "25.1361111"
    },
    {
        "name": "Почаев",
        "lat": "50.0",
        "lng": "25.5083333"
    },
    {
        "name": "Скалат",
        "lat": "49.424214",
        "lng": "25.976246"
    },
    {
        "name": "Тернополь",
        "lat": "49.551361",
        "lng": "25.603979"
    },
    {
        "name": "Теребовля",
        "lat": "49.29348",
        "lng": "25.699551"
    },
    {
        "name": "Чортков",
        "lat": "49.0166667",
        "lng": "25.8"
    },
    {
        "name": "Шумск",
        "lat": "50.122577",
        "lng": "26.1149716"
    },
    {
        "name": "Балаклея",
        "lat": "49.4658333",
        "lng": "36.8677778"
    },
    {
        "name": "Барвенково",
        "lat": "48.9",
        "lng": "37.0166667"
    },
    {
        "name": "Богодухов",
        "lat": "50.1654302",
        "lng": "35.5267251"
    },
    {
        "name": "Валки",
        "lat": "49.843601",
        "lng": "35.61388"
    },
    {
        "name": "Великий Бурлук",
        "lat": "50.0455556",
        "lng": "37.3905556"
    },
    {
        "name": "Волчанск",
        "lat": "50.278519",
        "lng": "36.945171"
    },
    {
        "name": "Дергачи",
        "lat": "50.110668",
        "lng": "36.114361"
    },
    {
        "name": "Змиев",
        "lat": "49.701939",
        "lng": "36.355171"
    },
    {
        "name": "Изюм",
        "lat": "49.2127778",
        "lng": "37.2569444"
    },
    {
        "name": "Красноград",
        "lat": "49.3666667",
        "lng": "35.45"
    },
    {
        "name": "Купянск",
        "lat": "49.721901",
        "lng": "37.624329"
    },
    {
        "name": "Лозовая",
        "lat": "48.891684",
        "lng": "36.325786"
    },
    {
        "name": "Люботин",
        "lat": "49.95",
        "lng": "35.9166667"
    },
    {
        "name": "Мерефа",
        "lat": "49.8166667",
        "lng": "36.05"
    },
    {
        "name": "Первомайский",
        "lat": "49.3833333",
        "lng": "36.2166667"
    },
    {
        "name": "Харьков",
        "lat": "49.98967",
        "lng": "36.208309"
    },
    {
        "name": "Чугуев",
        "lat": "49.8355556",
        "lng": "36.6863889"
    },
    {
        "name": "Берислав",
        "lat": "46.843822",
        "lng": "33.4375"
    },
    {
        "name": "Геническ",
        "lat": "46.171638",
        "lng": "34.80777"
    },
    {
        "name": "Голая Пристань",
        "lat": "46.5166667",
        "lng": "32.5166667"
    },
    {
        "name": "Каховка",
        "lat": "46.817388",
        "lng": "33.494325"
    },
    {
        "name": "Новая Каховка",
        "lat": "46.7666667",
        "lng": "33.3666667"
    },
    {
        "name": "Скадовск",
        "lat": "46.116871",
        "lng": "32.913731"
    },
    {
        "name": "Таврийск",
        "lat": "46.7528018",
        "lng": "33.4216856"
    },
    {
        "name": "Херсон",
        "lat": "46.653368",
        "lng": "32.629424"
    },
    {
        "name": "Цюрупинск",
        "lat": "46.62",
        "lng": "32.72"
    },
    {
        "name": "Волочиск",
        "lat": "49.535179",
        "lng": "26.22331"
    },
    {
        "name": "Городок",
        "lat": "49.1666667",
        "lng": "26.5666667"
    },
    {
        "name": "Деражня",
        "lat": "49.267071",
        "lng": "27.440269"
    },
    {
        "name": "Дунаевцы",
        "lat": "48.8909743",
        "lng": "26.8546608"
    },
    {
        "name": "Изяслав",
        "lat": "50.119221",
        "lng": "26.82629"
    },
    {
        "name": "Каменец-Подольский",
        "lat": "48.6833333",
        "lng": "26.5833333"
    },
    {
        "name": "Красилов",
        "lat": "49.6519444",
        "lng": "26.9705556"
    },
    {
        "name": "Нетешин",
        "lat": "50.3374232",
        "lng": "26.6404529"
    },
    {
        "name": "Полонное",
        "lat": "50.122269",
        "lng": "27.511909"
    },
    {
        "name": "Славута",
        "lat": "49.0563905",
        "lng": "27.3944506"
    },
    {
        "name": "Староконстантинов",
        "lat": "49.7555556",
        "lng": "27.2208333"
    },
    {
        "name": "Хмельницкий",
        "lat": "49.4166667",
        "lng": "27.0"
    },
    {
        "name": "Шепетовка",
        "lat": "50.179131",
        "lng": "27.07732"
    },
    {
        "name": "Ватутино",
        "lat": "49.0166667",
        "lng": "31.0666667"
    },
    {
        "name": "Городище",
        "lat": "49.290649",
        "lng": "31.443199"
    },
    {
        "name": "Жашков",
        "lat": "49.245522",
        "lng": "30.11998"
    },
    {
        "name": "Звенигородка",
        "lat": "49.075489",
        "lng": "30.967911"
    },
    {
        "name": "Золотоноша",
        "lat": "49.674271",
        "lng": "32.040421"
    },
    {
        "name": "Каменка",
        "lat": "49.036347",
        "lng": "32.103481"
    },
    {
        "name": "Канев",
        "lat": "49.75",
        "lng": "31.4666667"
    },
    {
        "name": "Корсунь-Шевченковский",
        "lat": "49.421051",
        "lng": "31.268993"
    },
    {
        "name": "Монастырище",
        "lat": "48.9909154",
        "lng": "29.8051363"
    },
    {
        "name": "Смела",
        "lat": "49.224621",
        "lng": "31.878401"
    },
    {
        "name": "Тальное",
        "lat": "48.8833333",
        "lng": "30.7"
    },
    {
        "name": "Умань",
        "lat": "48.75",
        "lng": "30.2166667"
    },
    {
        "name": "Христиновка",
        "lat": "48.8494444",
        "lng": "29.97"
    },
    {
        "name": "Черкассы",
        "lat": "49.4333333",
        "lng": "32.0666667"
    },
    {
        "name": "Чигирин",
        "lat": "49.072498",
        "lng": "32.683578"
    },
    {
        "name": "Шпола",
        "lat": "49.00349",
        "lng": "31.385559"
    },
    {
        "name": "Бахмач",
        "lat": "51.1830556",
        "lng": "32.8297222"
    },
    {
        "name": "Бобровица",
        "lat": "50.745",
        "lng": "31.3869444"
    },
    {
        "name": "Борзна",
        "lat": "51.249451",
        "lng": "32.43034"
    },
    {
        "name": "Городня",
        "lat": "51.8905556",
        "lng": "31.5936111"
    },
    {
        "name": "Десна",
        "lat": "50.9246667",
        "lng": "30.756"
    },
    {
        "name": "Ичня",
        "lat": "50.863918",
        "lng": "32.39307"
    },
    {
        "name": "Корюковка",
        "lat": "51.7754831",
        "lng": "32.2595792"
    },
    {
        "name": "Мена",
        "lat": "51.521759",
        "lng": "32.21888"
    },
    {
        "name": "Нежин",
        "lat": "51.0380556",
        "lng": "31.8861111"
    },
    {
        "name": "Новгород-Северский",
        "lat": "52.0069896",
        "lng": "33.2537069"
    },
    {
        "name": "Носовка",
        "lat": "50.9333333",
        "lng": "31.5833333"
    },
    {
        "name": "Прилуки",
        "lat": "50.594181",
        "lng": "32.38689"
    },
    {
        "name": "Седнев",
        "lat": "51.6463023",
        "lng": "31.5616846"
    },
    {
        "name": "Семёновка",
        "lat": "52.173561",
        "lng": "32.587059"
    },
    {
        "name": "Чернигов",
        "lat": "51.503653",
        "lng": "31.293167"
    },
    {
        "name": "Щорс",
        "lat": "51.819321",
        "lng": "31.94846"
    },
    {
        "name": "Вашковцы",
        "lat": "48.38",
        "lng": "25.51"
    },
    {
        "name": "Вижница",
        "lat": "48.25",
        "lng": "25.1916667"
    },
    {
        "name": "Герца",
        "lat": "48.1485764",
        "lng": "26.2572996"
    },
    {
        "name": "Заставна",
        "lat": "48.5166667",
        "lng": "25.85"
    },
    {
        "name": "Кицмань",
        "lat": "48.4425",
        "lng": "25.7613889"
    },
    {
        "name": "Новоднестровск",
        "lat": "48.5833333",
        "lng": "27.4333333"
    },
    {
        "name": "Новоселица",
        "lat": "48.2166667",
        "lng": "26.2666667"
    },
    {
        "name": "Сокиряны",
        "lat": "48.45",
        "lng": "27.4166667"
    },
    {
        "name": "Сторожинец",
        "lat": "48.1666667",
        "lng": "25.7166667"
    },
    {
        "name": "Хотин",
        "lat": "48.5",
        "lng": "26.5"
    },
    {
        "name": "Черновцы",
        "lat": "48.3",
        "lng": "25.9333333"
    }
]