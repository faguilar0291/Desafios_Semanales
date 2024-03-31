import "../layout/container.scss";
import  { useEffect, useState } from 'react'
import { Box } from "@mui/material";
import ClimaCiudad from "./ClimaCiudad";
import { getCities } from "../../services/cities";
import { getCityWeather } from "../../services/weather";

//51:34

export default function Container( ) {

    const [ cities, setCities] = useState([]);
    const [ weather, setWeather] = useState(null);

    useEffect( () => {
        (async () => {
            setCities(await getCities());
        })();
    }, []);


    const handleCities = async e => e.currentTarget.value && setWeather(await getCityWeather(e.currentTarget.value))

    console.log(weather);

    return (
        <Box className="container">
            <h2 className="container__title">Clima actual por ciudad</h2>
            <ClimaCiudad>
                <label>Elige una ciudad para saber el clima</label>
                <select name="city-select" onChange={handleCities}>
                    <option value="">Elige una ciudad</option>
                    {cities.map( city => <option key={city.id} value={city.name}>{city.name}</option>)}
                </select>
                <Box>
                    <h2>Temperatura actual: {weather.main.temp}</h2>
                </Box>
            </ClimaCiudad>
        </Box>
    )
}