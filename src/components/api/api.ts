import axios from 'axios'


const instance = axios.create({
    baseURL: 'api.openweathermap.org/data/2.5/weather?q=Minsk,by&appid=4371f7ae78beacc2ff08bd322e1e0463&units=metric'
})


