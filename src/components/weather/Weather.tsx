import React, {useEffect, useState} from 'react';
import axios from "axios";

type PropsType = {
    zip: string
}

const Weather = (props: PropsType) => {
    const zip = props.zip
    const url = `https://api.openweathermap.org/data/2.5/weather?q=' + ${zip} + ',by&appid=4371f7ae78beacc2ff08bd322e1e0463&units=metric`
    const [weatherData, setWeatherData] = useState(null)

    useEffect(() => {
        fetch(url).then(res => res.json()).then(json => {
            setWeatherData(json);
        });
    }, [])

    if (!weatherData) return <div>Loading</div>
    return <div>{JSON.stringify(weatherData)}</div>;
}

export default Weather