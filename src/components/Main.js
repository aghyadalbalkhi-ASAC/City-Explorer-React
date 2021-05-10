import React, { Component } from 'react';
import {Form,Button,Col,InputGroup,FormControl,Container} from 'react-bootstrap'
import CityLocation from './CityLocation';
import Weather from './Weather';
import Movies from './Movies';
import Header from './Header';
import Trails from './Trails';
import Yelp from './Yelp';
import {getCityInfo,getWeatherInfo,getMoviesInfo,getTrailsInfo,getYelpInfo } from '../API/API';

class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
                cityname:'',
                show :false,
                showWeather:false,
                showMovies:false,
                showtrails:false,
                showYelp:false,
                page:1,
                active:1,
                cityInfo:{},
                weatherInfo:[],
                moviesInfo:[],
                trailsInfo:[],
                yelpInfo:[]
        }
    }

    inputChange = (event) => {
        this.setState({ cityname: event.target.value });
    }

    onSubmitCity = (e) =>{
        e.preventDefault();
        this.setState({ show: true },()=>{this.getCityInfo()});

    }

    getCityInfo = () =>{
        getCityInfo(this.state.cityname).then(data =>{
            this.setState({
                cityInfo: data,
            },() =>{this.getWeatherInfo();});
        });
    }

    getWeatherInfo = () =>{
        getWeatherInfo(this.state.cityname,this.state.cityInfo).then(data =>{
            this.setState({
                weatherInfo: data,
                showWeather:true
            },()=>{this.getMoviesInfo()});
        })
    }

    getMoviesInfo = () =>{
        getMoviesInfo(this.state.cityname).then(data =>{
            this.setState({
                moviesInfo: data,
                showMovies:true
            },()=>{this.getTrailsInfo()});
        })
    }

    getTrailsInfo = () =>{
        getTrailsInfo(this.state.cityInfo).then(data =>{
            this.setState({
                trailsInfo: data,
                showtrails:true
            },()=>{this.getYelpInfo()});
        })
    }

    getYelpInfo = () =>{
        getYelpInfo(this.state.page,this.state.cityname).then(data =>{
            this.setState({
                yelpInfo: data,
                showYelp:true
            },()=>{console.log(this.state.yelpInfo)});
        })
    }

    onClickPagination = (page) =>{
        this.setState({
            page:page,
            active:page
        },()=>{this.getYelpInfo()})
    }

    render() {
    
        return (
            <>
                <div className="container">
                        <Header />
                    <br></br>
                    <div className="row justify-content-center">
                        <SearchForm inputChange={this.inputChange} onSubmitCity={this.onSubmitCity} />
                    </div>
                    <div className="row justify-content-center">
                        <CityLocation show={this.state.show} cityInfo={this.state.cityInfo} /> 
                    </div>
                    <div className="row justify-content-center">
                        <Weather  showWeather={this.state.showWeather}  weatherInfo ={this.state.weatherInfo} /> 
                    </div>
                    <div className="row justify-content-center">
                        <Movies  showMovies={this.state.showMovies}  moviesInfo ={this.state.moviesInfo} /> 
                    </div>
                    <div className="row justify-content-center">
                        <Trails  showtrails={this.state.showtrails}  trailsInfo ={this.state.trailsInfo} /> 
                    </div>
                    <div className="row justify-content-center">
                        <Yelp  showYelp={this.state.showYelp} active={this.state.active} onClickPagination={this.onClickPagination}  yelpInfo ={this.state.yelpInfo} /> 
                    </div>
                </div>
            </>
        )
    }
}


const SearchForm = (props) =>{

    return(
        <div className='form-container'>
            <Form onSubmit={props.onSubmitCity} >
                <Form.Row>
                        <Form.Label  id="form-text-color">Enter The City Name</Form.Label>
                        <InputGroup className="mb-3 justify-content-center">
                            <FormControl
                                id="cityname"
                                placeholder="Enter City Name"
                                onChange={props.inputChange}
                            />
                            <InputGroup.Append>
                                <Button type="submit" id="button-search"> Explore! </Button>
                            </InputGroup.Append>
                        </InputGroup>
                </Form.Row>
            </Form>
        </div>
    );

}

export default Main
