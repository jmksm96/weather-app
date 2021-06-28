import React, {useState} from 'react';
import './App.css';
import Weather from "./components/weather/Weather";


type PlacesType = {
    name: string
    zip: string
}
const places: Array<PlacesType> = [
    {name: 'Minsk', zip: '220004'},
    {name: 'Kiev', zip: '01001'},
    {name: 'Moscow', zip: '101000'}
]

const App = () => {
    const [activePlace, setActivePlace] = useState<number>(0)


    return (
        <div className={'App'}>
            <div className={'contentBlock'}>

                {places.map((place, index) => (
                    <button key={index} onClick={() => setActivePlace(index)}>
                        {place.name}
                    </button>)
                )}
                <Weather zip={places[activePlace].zip}/>
            </div>
        </div>
    );
}

export default App;
