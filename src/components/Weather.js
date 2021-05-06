import React, { Component } from 'react'
import {CardDeck,Card} from 'react-bootstrap'
import Brokenclouds from'../assets/images/Broken-clouds.png';
import ClearSky from'../assets/images/Clear-Sky.png';
import Fewclouds from'../assets/images/Few-clouds.png';

class Weather extends Component {


    render() {

        if(this.props.showWeather){

            const weatherDays = this.props.weatherInfo.map((day ,key) =>{
                return (
                    <CardWeather day={day} key={key} />
                );
            });
        return (
            <>
                <div className="weather-container">
                    <Card>
                    <Card.Header className="card-header-style" as="h5">Weather Information</Card.Header>
                        <Card.Body>
                        <CardDeck>
                            {weatherDays}
                        </CardDeck>
                        </Card.Body>
                    </Card>

                </div>
            </>
        );
        }else{
            return (
                <>
                    <h1></h1>
                </>
            )
        }
    }
}


const CardWeather = ({day,key})=>{

    let src = Brokenclouds;
    if (day.description === 'Clear Sky'){src =ClearSky; }
    if (day.description === 'Few clouds'){src =Fewclouds; }

    return (
        <Card key={key} border="warning">
            <Card.Header as="h5">{day.date}</Card.Header>
            <Card.Img variant="top" src={src} />
            <Card.Body>
            </Card.Body>
            <Card.Footer>
                <Card.Text>
                    {day.description}
                </Card.Text>
            </Card.Footer>
        </Card >
    );

}

export default Weather
