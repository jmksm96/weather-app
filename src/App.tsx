import React, {useEffect} from 'react';
import './App.css';
import Weather from "./components/weather/Weather";
import Title from "./components/title/Title";
import City from "./components/city/City";
import axios from 'axios';

const App = () => {

    useEffect(() => {
        const url = 'http://api.openweathermap.org/data/2.5/weather?q=Minsk,by&appid=4371f7ae78beacc2ff08bd322e1e0463&units=metric'
        axios.get(url).then((resp) => {
            const data = resp.data
        })
    },[])

    return (
        <div className={'App'}>
            <Title title={'Current City'}/>
            <div className={'contentBlock'}>
                <City/>
            </div>
            <div className={'contentBlock'}>
                <Weather/>
            </div>
            <Title title={'Current Weather'}/>
        </div>
    );
}

export default App;
