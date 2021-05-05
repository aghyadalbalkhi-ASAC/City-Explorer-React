import axios from 'axios';


export async function getCityInfo (cityname) {
        const url = `https://us1.locationiq.com/v1/search.php?key=pk.d36871f015649f915282f374cff76628&q=${cityname}&format=json`;
        const req = await axios.get(url);   
    return req.data[0];
}

export async function getWeatherInfo  (cityname,cityInfo)  {
    cityname = cityname.toLowerCase();
    const url = `https://city-explorer-api-react.herokuapp.com/weather?searchQuery=${cityname}&lat=${cityInfo.lat}&lon=${cityInfo.lat}`;
    const req = await axios.get(url);
    console.log(req.data[0])
    return req.data[0];

}


