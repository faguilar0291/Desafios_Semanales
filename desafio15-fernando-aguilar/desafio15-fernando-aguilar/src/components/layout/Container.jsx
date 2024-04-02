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
    //const [ message, setMessage] = useState(null);

    useEffect( () => {
        (async () => {
            setCities(await getCities());
        })();
    }, []);

    const handleCities = async e => e.currentTarget.value && setWeather(await getCityWeather(e.currentTarget.value));

    //Intente usar el handleMessage para obtener el dato de la temperatura cuando este apareciera
    // y así mostrar un mensaje según la temperatura pero no he logrado hacerlo funcionar

    //prueba 1

    // const handleMessage = ( (e) => {
    //     if (e > 30) {
    //         setMessage("Hace mucho calor! 🥵");
    //     } else if (e < 10) {
    //         setMessage("Hace mucho frio! 🥶");
    //     } else {
    //         setMessage(null);
    //     }
    //})

    //prueba 2 no puedo obtener el valor cuando se renderiza la temperatura

    //const handleMessage = e => e.currentTarget.value && console.log(e.currentTarget.value);

    return (
        <Box className="container">
            <h2 className="container__title">Clima actual por ciudad</h2>
            <ClimaCiudad>
                <select name="city-select" onChange={handleCities}>
                    <option value="">Elige una ciudad</option>
                    {cities.map( city => <option key={city.id} value={city.name}>{city.name}</option>)}
                </select>
                <Box>
                    
                    {/* opción de renderizado 1
                    {weather && (
                        <h2>Temperatura actual: <span onChange={handleMessage} value={weather.main.temp}>{weather.main.temp + '°C'}</span></h2>
                    )} */}
                    {weather && (
                        <h2>Temperatura actual: {weather.main.temp + '°C'}</h2>
                    )}
                    
                    {/* opción de renderizado 1
                    {message && (
                        <h2>{message}</h2>
                    )} */}
                    
                    {/* Esta opción de renderizado si me funciona pero no hago uso de una variable de estado */}
                    {weather && weather.main.temp > 30 && (
                        <h2>Hace mucho calor! 🥵</h2>
                    )}
                    {weather && weather.main.temp < 10 && (
                        <h2>Hace mucho frio! 🥶</h2>
                    )}
                </Box>
            </ClimaCiudad>
        </Box>
    )
}