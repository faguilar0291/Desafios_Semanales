import { ajax } from "../tools/ajax";

export const getCityWeather = async city => {
    const optionsRequest = {
        method: "GET",
        url: "https://api.openweathermap.org/data/2.5/weather",
        params: {
            q: city,
            appid: "8ab76e6e0ce5f9d0cbb10411e9bd2cf6",
            units: "metric"
        }
    };

    return await ajax(optionsRequest);
}