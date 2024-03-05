const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '5e860ea40emsh233e89f210b9434p145fe9jsndc9f06da3815',
        'X-RapidAPI-Host': 'tomorrow-io1.p.rapidapi.com'
    }
};

let delhi = document.querySelector('#delhi');
let usa = document.querySelector("#usa"); 
let china = document.querySelector("#china");


const getweather = (city) => {
    cityname.innerHTML = city
    fetch('https://tomorrow-io1.p.rapidapi.com/v4/weather/forecast?location=' + city, options)
        .then(response => response.json())
        .then((response) => {
            //console.log("Response from API", response.timelines.daily[0].values);
            cloudBaseAvg.innerHTML = response.timelines.daily[0].values.cloudBaseAvg;
            humidity.innerHTML = response.timelines.daily[0].values.humidityAvg;
            moonriseTime.innerHTML = response.timelines.daily[0].values.moonriseTime;
            temperature.innerHTML = response.timelines.daily[0].values.temperatureAvg;
            moonsetTime.innerHTML = response.timelines.daily[0].values.moonsetTime;
            visibility.innerHTML = response.timelines.daily[0].values.visibilityAvg;
            windSpeed.innerHTML = response.timelines.daily[0].values.windSpeedAvg;
            windDirection.innerHTML = response.timelines.daily[0].values.windDirectionAvg;
            sunriseTime.innerHTML = response.timelines.daily[0].values.sunriseTime;
        
        })
        .catch(error => console.log('Error:' + error));
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    getweather(city.value);
})

getweather("hongkong")


const getwe = (city) => {
    fetch('https://tomorrow-io1.p.rapidapi.com/v4/weather/forecast?location=' + city, options)
        .then(response => response.json())
        .then((response) => {
            //console.log("Response from API", response.timelines.daily[0].values);
            td1.innerHTML = response.timelines.daily[0].values.cloudBaseAvg;
            td2.innerHTML = response.timelines.daily[0].values.humidityAvg;
            td3.innerHTML = response.timelines.daily[0].values.moonriseTime;
            td4.innerHTML = response.timelines.daily[0].values.temperatureAvg;
            td6.innerHTML = response.timelines.daily[0].values.visibilityAvg;
            td7.innerHTML = response.timelines.daily[0].values.windSpeedAvg;
            td8.innerHTML = response.timelines.daily[0].values.windDirectionAvg;
            td9.innerHTML = response.timelines.daily[0].values.sunriseTime;
        
        })
        .catch(error => console.log('Error:' + error));
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    getwe(city.value);
})

getwe("delhi")

const getus = (city) => {
    fetch('https://tomorrow-io1.p.rapidapi.com/v4/weather/forecast?location=' + city, options)
        .then(response => response.json())
        .then((response) => {
            //console.log("Response from API", response.timelines.daily[0].values);
            td11.innerHTML = response.timelines.daily[0].values.cloudBaseAvg;
            td22.innerHTML = response.timelines.daily[0].values.humidityAvg;
            td33.innerHTML = response.timelines.daily[0].values.moonriseTime;
            td44.innerHTML = response.timelines.daily[0].values.temperatureAvg;
            td66.innerHTML = response.timelines.daily[0].values.visibilityAvg;
            td77.innerHTML = response.timelines.daily[0].values.windSpeedAvg;
            td88.innerHTML = response.timelines.daily[0].values.windDirectionAvg;
            td99.innerHTML = response.timelines.daily[0].values.sunriseTime;
        
        })
        .catch(error => console.log('Error:' + error));
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    getus(city.value);
})

getus("newyork")

const getch = (city) => {
    fetch('https://tomorrow-io1.p.rapidapi.com/v4/weather/forecast?location=' + city, options)
        .then(response => response.json())
        .then((response) => {
            //console.log("Response from API", response.timelines.daily[0].values);
            td111.innerHTML = response.timelines.daily[0].values.cloudBaseAvg;
            td222.innerHTML = response.timelines.daily[0].values.humidityAvg;
            td333.innerHTML = response.timelines.daily[0].values.moonriseTime;
            td444.innerHTML = response.timelines.daily[0].values.temperatureAvg;
            td666.innerHTML = response.timelines.daily[0].values.visibilityAvg;
            td777.innerHTML = response.timelines.daily[0].values.windSpeedAvg;
            td888.innerHTML = response.timelines.daily[0].values.windDirectionAvg;
            td999.innerHTML = response.timelines.daily[0].values.sunriseTime;
        
        })
        .catch(error => console.log('Error:' + error));
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    getch(city.value);
})

getch("shanghai")
