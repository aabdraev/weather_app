
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?`
const APP_ID = "e417df62e04d3b1b111abeab19cea714"

export const WEATHER_API = (city) => `${BASE_URL}q=${city}&appid=${APP_ID}&units=metric`