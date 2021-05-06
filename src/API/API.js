import axios from 'axios';


export async function getCityInfo (cityname) {
        const url = `https://us1.locationiq.com/v1/search.php?key=pk.d36871f015649f915282f374cff76628&q=${cityname}&format=json`;
        const req = await axios.get(url);
    return req.data[0];
}

export async function getWeatherInfo (cityname,cityInfo)  {
    cityname = cityname.toLowerCase();
    const url = `https://city-explorer-api-react.herokuapp.com/weather?searchQuery=${cityname}&lat=${cityInfo.lat}&lon=${cityInfo.lon}`;
    const req = await axios.get(url);
    const threeDays =[req.data[0],req.data[1],req.data[2]];
    return threeDays;

}


export async function getMoviesInfo (cityname)  {
    cityname = cityname.toLowerCase();
    const url = `https://city-explorer-api-react.herokuapp.com/movies?searchQuery=${cityname}`;
    const req = await axios.get(url);
    const moviesData =req.data;
    return moviesData;

}



