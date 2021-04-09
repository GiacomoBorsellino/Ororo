// Import elements
import "./style.css";
import background from './images/background.png';
import gps from './images/gps.png';
import hum from './images/hum.png';
import inf from './images/info.png';
import lens from './images/lens.png';
import ororo_logo from './images/ororo-logo.png';
import press from './images/press.png';
import rain from './images/rain.png';
import temp from './images/temp.png';
import visibilit from './images/visibility.png';
import win from './images/wind.png';
import x from './images/x.png';
import fetch from 'cross-fetch';

// Pannelli descrittivi
let sky = document.body.getElementsByClassName("sky")[0];
let pressure = document.body.getElementsByClassName("press")[0];
let temperature = document.body.getElementsByClassName("temp")[0];
let humidity = document.body.getElementsByClassName("hum")[0];
let wind = document.body.getElementsByClassName("wind")[0];
let visibility = document.body.getElementsByClassName("vis")[0];

// Dettagli
let no2 = document.body.getElementsByClassName("no2")[0];
let h = document.body.getElementsByClassName("h")[0];
let o3 = document.body.getElementsByClassName("o3")[0];
let pm10 = document.body.getElementsByClassName("pm10")[0];
let pm25 = document.body.getElementsByClassName("pm25")[0];

// Variabili di consumo
let buttonLens = document.body.getElementsByClassName("primer")[0]; // Pulsante di ricerca
let state = document.body.getElementsByClassName("state")[0]; // Stato dell'aria O
let description = document.body.getElementsByClassName("description")[0]; // Descrizione O

// 1) Funzione di chiamata manuale
async function checkAir() {
    
let cityName = document.getElementById("cityName").value; // Valore casella ricerca I

// Chiamata API AICQN
const response = await fetch(`/.netlify/functions/lambda?cityName=${cityName}`)
const result = await response.json()

try {
    // Iniezione details
    if (result.data.iaqi.no2) {
        no2.innerHTML = `NO<sub>2</sub>: ${result.data.iaqi.no2.v} AQI`;
    } else {
        no2.innerHTML = `NO<sub>2</sub>: Not available`;
    }
    if (result.data.iaqi.h) {
        h.innerHTML = `H: ${result.data.iaqi.h.v}`;
    } else {
        h.innerHTML = `H: Not available`;
    }            
    if (result.data.iaqi.o3) {
        o3.innerHTML = `O<sub>3</sub>: ${result.data.iaqi.o3.v} AQI`;
    } else {
        o3.innerHTML = `O<sub>3</sub>: Not available`;
    }             
    if (result.data.iaqi.pm10) {
        pm10.innerHTML = `PM<sub>10</sub>: ${result.data.iaqi.pm10.v} AQI`;
    } else {
        pm10.innerHTML = `PM<sub>10</sub>: Not available`;
    }             
    if (result.data.iaqi.pm25) {
        pm25.innerHTML = `PM<sub>2.5</sub>: ${result.data.iaqi.pm25.v} AQI`;
    } else {
        pm25.innerHTML = `PM<sub>2.5</sub>: Not available`;
    }

    // Stato dell'aria
    if (result.data.aqi < 50) {
        state.innerHTML = `Good`;                    
        state.style.backgroundColor = `#32a846`;
        description.innerHTML = `Air quality is considered satisfactory, and air pollution poses little or no risk.</br>&nbsp;`;
    } else if (result.data.aqi > 51 && result.data.aqi < 100) {
        state.innerHTML = `Moderate`;  
        state.style.backgroundColor = `#cccc1f`;
        description.innerHTML = `Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.`;
    } else if (result.data.aqi > 101 && result.data.aqi < 150) {
        state.innerHTML = `Unhealthy for S.g.`;           
        state.style.backgroundColor = `#cc781f`;
        description.innerHTML = `Members of sensitive groups may experience health effects. The general public is not likely to be affected.</br>&nbsp;`;
    } else if (result.data.aqi > 151 && result.data.aqi < 200) {
        state.innerHTML = `Unhealthy`;
        state.style.backgroundColor = `#cc1f64`;    
        description.innerHTML = `Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.</br>&nbsp;`;
    } else if (result.data.aqi > 201 && result.data.aqi < 300) {
        state.innerHTML = `Very Unhealthy`;    
        state.style.backgroundColor = `#8d1fcc`;
        description.innerHTML = `Health warnings of emergency conditions. The entire population is more likely to be affected.</br>&nbsp;`;
    } else if (result.data.aqi > 301) {
        state.innerHTML = `Hazardous`;
        state.style.backgroundColor = `#cc1f1f`;
        description.innerHTML = `Health alert: everyone may experience more serious health effects</br>&nbsp;`;
    } else if (result.data.aqi === undefined) {
        document.body.getElementsByClassName("city")[0].innerHTML = `&nbsp;`
        state.innerHTML = `Not Found`;
        state.style.backgroundColor = `white`;
        description.innerHTML = `State air quality of the city not found, if you want know the air quality of the location nearest to you, please, click the gps button.`;
    }

} catch (error) { 
    document.body.getElementsByClassName("city")[0].innerHTML = `&nbsp;`

    no2.innerHTML = `NO<sub>2</sub>: Not available`;
    h.innerHTML = `H: Not available`;
    o3.innerHTML = `O<sub>3</sub>:: Not available`;
    pm10.innerHTML = `PM<sub>10</sub>:: Not available`;
    pm25.innerHTML = `PM<sub>2.5</sub>:: Not available`;

    state.innerHTML = `Not Found`;
    state.style.backgroundColor = `white`;
    description.innerHTML = `State air quality of the city not found, if you want know the air quality 
    of the location nearest to you, please, click the gps button.`;        
}
    
    
// Chiamata API OpenWeather
const responseO = await fetch(`/.netlify/functions/alfa?cityName=${cityName}`)
const resultO = await responseO.json()

try {
    document.body.getElementsByClassName("city")[0].innerHTML = resultO.name
    if (resultO.weather[0].main) {
        sky.innerHTML = `<img src="images/rain.png" alt="rain"/>Sky:</br>${resultO.weather[0].main}`;
    } else if (resultO.weather.main) {
        sky.innerHTML = `<img src="images/rain.png" alt="rain"/>Sky:</br>${resultO.weather.main}`;
    } else if (resultO.weather) {
        sky.innerHTML = `<img src="images/rain.png" alt="rain"/>Sky:</br> Not available`;
    }
    if (resultO.main.pressure) {
        pressure.innerHTML = `<img src="images/press.png" alt="pressure"/>Pressure:</br>${resultO.main.pressure} hPa`;
    } else {
        pressure.innerHTML = `<img src="images/press.png" alt="pressure"/>Pressure:</br> Not available`;
    }       
    if (resultO.main.temp) {
        let temp = resultO.main.temp; let kelvin = 273.15; let celsius = temp - kelvin;
        temperature.innerHTML = `<img src="images/temp.png" alt="temperature"/>Temperature</br>${Math.round(celsius)} °C`;
    } else {
        temperature.innerHTML = `<img src="images/temp.png" alt="temperature"/>Temperature</br> Not available`;
    }    
    if (resultO.main.humidity) {
        humidity.innerHTML = `<img src="images/hum.png" alt="humidity"/>Humidity</br>${resultO.main.humidity} %`;
    } else {
        humidity.innerHTML = `<img src="images/hum.png" alt="humidity"/>Humidity</br> Not available`;
    }     
    if (resultO.wind.speed) {
        wind.innerHTML = `<img src="images/wind.png" alt="wind"/>Wind</br>${resultO.wind.speed} m/s`;
    } else {
        wind.innerHTML = `<img src="images/wind.png" alt="wind"/>Wind</br> Not available`;
    }       
    if (resultO.visibility) {
        visibility.innerHTML = `<img src="images/visibility.png" alt="visibility"/>Visibility</br>${resultO.visibility} m`;
    } else {
        visibility.innerHTML = `<img src="images/visibility.png" alt="visibility"/>Visibility</br> Not available`;
    }

} catch (error) {  
    sky.innerHTML = `<img src="images/rain.png" alt="rain"/>Sky:</br> Not available`;
    pressure.innerHTML = `<img src="images/press.png" alt="pressure"/>Pressure:</br> Not available`;
    temperature.innerHTML = `<img src="images/temp.png" alt="temperature"/>Temperature</br> Not available`;
    humidity.innerHTML = `<img src="images/hum.png" alt="humidity"/>Humidity</br> Not available`;
    wind.innerHTML = `<img src="images/wind.png" alt="wind"/>Wind</br> Not available`;
    visibility.innerHTML = `<img src="images/visibility.png" alt="visibility"/>Visibility</br> Not available`;
}
};

buttonLens.onclick = checkAir;

// Tasto invio
document.addEventListener('keydown', function(event) {
        if (event.code == 'Enter') {
            event.preventDefault();
            // buttonLens.click();
            checkAir();
        }
    }
);

// 2) Geolocalizzazione
let gpsButton = document.body.getElementsByClassName("gpsButton")[0]; // pulsante gps

gpsButton.onclick = function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {

                    let lat = position.coords.latitude;
                    let lon = position.coords.longitude;

                    async function geoLocation() {
                    const response = await fetch(`/.netlify/functions/theta?lon=${lon}&lat=${lat}`)
                    const result = await response.json()

                try {
                    // Iniezione details
                    if (result.data.iaqi.no2) {
                        no2.innerHTML = `NO<sub>2</sub>: ${result.data.iaqi.no2.v} AQI`;
                    } else {
                        no2.innerHTML = `NO<sub>2</sub>: Not available`;
                    }
                    if (result.data.iaqi.h) {
                        h.innerHTML = `H: ${result.data.iaqi.h.v}`;
                    } else {
                        h.innerHTML = `H: Not available`;
                    }            
                    if (result.data.iaqi.o3) {
                        o3.innerHTML = `O<sub>3</sub>: ${result.data.iaqi.o3.v} AQI`;
                    } else {
                        o3.innerHTML = `O<sub>3</sub>: Not available`;
                    }             
                    if (result.data.iaqi.pm10) {
                        pm10.innerHTML = `PM<sub>10</sub>: ${result.data.iaqi.pm10.v} AQI`;
                    } else {
                        pm10.innerHTML = `PM<sub>10</sub>: Not available`;
                    }             
                    if (result.data.iaqi.pm25) {
                        pm25.innerHTML = `PM<sub>2.5</sub>: ${result.data.iaqi.pm25.v} AQI`;
                    } else {
                        pm25.innerHTML = `PM<sub>2.5</sub>: Not available`;
                    }

                    if (result.data.aqi < 50) {
                        state.innerHTML = `Good`;                    
                        state.style.backgroundColor = `#32a846`;
                        description.innerHTML = `Air quality is considered satisfactory, and air pollution poses little or no risk.</br>&nbsp;`;
                    } else if (result.data.aqi > 51 && result.data.aqi < 100) {
                        state.innerHTML = `Moderate`;  
                        state.style.backgroundColor = `#cccc1f`;
                        description.innerHTML = `Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.`;
                    } else if (result.data.aqi > 101 && result.data.aqi < 150) {
                        state.innerHTML = `Unhealthy for S.g.`;           
                        state.style.backgroundColor = `#cc781f`;
                        description.innerHTML = `Members of sensitive groups may experience health effects. The general public is not likely to be affected.</br>&nbsp;`;
                    } else if (result.data.aqi > 151 && result.data.aqi < 200) {
                        state.innerHTML = `Unhealthy`;
                        state.style.backgroundColor = `#cc1f64`;    
                        description.innerHTML = `Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.</br>&nbsp;`;
                    } else if (result.data.aqi > 201 && result.data.aqi < 300) {
                        state.innerHTML = `Very Unhealthy`;    
                        state.style.backgroundColor = `#8d1fcc`;
                        description.innerHTML = `Health warnings of emergency conditions. The entire population is more likely to be affected.</br>&nbsp;`;
                    } else if (result.data.aqi > 301) {
                        state.innerHTML = `Hazardous`;
                        state.style.backgroundColor = `#cc1f1f`;
                        description.innerHTML = `Health alert: everyone may experience more serious health effects</br>&nbsp;`;
                    } else if (result.data.aqi === undefined) {
                        document.body.getElementsByClassName("city")[0].innerHTML = `&nbsp;`
                        state.innerHTML = `Not Found`;
                        state.style.backgroundColor = `white`;
                        description.innerHTML = `City not found, if you want know the air quality 
                        of the location nearest to you, please, click the gps button`;
                    }

                } catch (error) {               
                    no2.innerHTML = `NO<sub>2</sub>: Not available`;
                    h.innerHTML = `H: Not available`;
                    o3.innerHTML = `O<sub>3</sub>: Not available`;
                    pm10.innerHTML = `PM<sub>10</sub>: Not available`;
                    pm25.innerHTML = `PM<sub>25</sub>: Not available`;

                    document.body.getElementsByClassName("city")[0].innerHTML = `&nbsp;`
                    state.innerHTML = `Not Found`;
                    state.style.backgroundColor = `white`;
                    description.innerHTML = `State air quality of the city not found, if you want know the air quality 
                    of the location nearest to you, please, click the gps button.`;
                }
                    // Chiamata API OpenWeather
                    const responseO = await fetch(`/.netlify/functions/omega?lon=${lon}&lat=${lat}`)
                    const resultO = await responseO.json()
                    try {
                        document.body.getElementsByClassName("city")[0].innerHTML = resultO.name

                        if (resultO.weather[0].main) {
                            sky.innerHTML = `<img src="images/rain.png" alt="rain"/>Sky:</br>${resultO.weather[0].main}`;
                        } else if (resultO.weather.main) {
                            sky.innerHTML = `<img src="images/rain.png" alt="rain"/>Sky:</br>${resultO.weather.main}`;
                        } else if (resultO.weather) {
                            sky.innerHTML = `<img src="images/rain.png" alt="rain"/>Sky:</br> Not available`;
                        }
                        if (resultO.main.pressure) {
                            pressure.innerHTML = `<img src="images/press.png" alt="pressure"/>Pressure:</br>${resultO.main.pressure} hPa`;
                        } else {
                            pressure.innerHTML = `<img src="images/press.png" alt="pressure"/>Pressure:</br> Not available`;
                        }       
                        if (resultO.main.temp) {
                            let temp = resultO.main.temp; let kelvin = 273.15; let celsius = temp - kelvin;
                            temperature.innerHTML = `<img src="images/temp.png" alt="temperature"/>Temperature</br>${Math.round(celsius)} °C`;
                        } else {
                            temperature.innerHTML = `<img src="images/temp.png" alt="temperature"/>Temperature</br> Not available`;
                        }    
                        if (resultO.main.humidity) {
                            humidity.innerHTML = `<img src="images/hum.png" alt="humidity"/>Humidity</br>${resultO.main.humidity} %`;
                        } else {
                            humidity.innerHTML = `<img src="images/hum.png" alt="humidity"/>Humidity</br> Not available`;
                        }     
                        if (resultO.wind.speed) {
                            wind.innerHTML = `<img src="images/wind.png" alt="wind"/>Wind</br>${resultO.wind.speed} m/s`;
                        } else {
                            wind.innerHTML = `<img src="images/wind.png" alt="wind"/>Wind</br> Not available`;
                        }       
                        if (resultO.visibility) {
                            visibility.innerHTML = `<img src="images/visibility.png" alt="visibility"/>Visibility</br>${resultO.visibility} m`;
                        } else {
                            visibility.innerHTML = `<img src="images/visibility.png" alt="visibility"/>Visibility</br> Not available`;
                        }
                    } catch (error) {
                        sky.innerHTML = `<img src="images/rain.png" alt="rain"/>Sky:</br> Not available`;
                        pressure.innerHTML = `<img src="images/press.png" alt="pressure"/>Pressure:</br> Not available`;
                        temperature.innerHTML = `<img src="images/temp.png" alt="temperature"/>Temperature</br> Not available`;
                        humidity.innerHTML = `<img src="images/hum.png" alt="humidity"/>Humidity</br> Not available`;
                        wind.innerHTML = `<img src="images/wind.png" alt="wind"/>Wind</br> Not available`;
                        visibility.innerHTML = `<img src="images/visibility.png" alt="visibility"/>Visibility</br> Not available`;
                    }
                };
            console.log(lat, lon);
            geoLocation();
            }  
        );
    }
};

// 3) Tasto dettagli
let info = document.body.getElementsByClassName("info")[0]; // pulsante info
let exit = document.body.getElementsByClassName("exit")[0]; // pulsante exit
info.onclick = function() {
    document.body.getElementsByClassName("details")[0].style.display = "block";
}

exit.onclick = function() {
    document.body.getElementsByClassName("details")[0].style.display = "none";
}

