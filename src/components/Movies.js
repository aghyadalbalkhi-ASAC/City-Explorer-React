import React, { Component } from 'react'
import {CardColumns,Card} from 'react-bootstrap'
import MovieDefaultImg from'../assets/images/Movie-Default-Img.png';


class Movies extends Component {
    render() {
        if(this.props.showMovies){

            const MoviesCard = this.props.moviesInfo.map((movie ,key) =>{
                return (
                    <CardMovie movie={movie} key={key} />
                );
            });
        return (
            <div className="movie-container">
            <Card>
            <Card.Header className="card-header-style" as="h5">Movies Information</Card.Header>
                <Card.Body>
                    <CardColumns>
                        {MoviesCard}
                    </CardColumns>
                </Card.Body>
            </Card>

        </div>
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

const CardMovie = ({movie,key})=>{

    let src = movie.image_url;
    if (movie.image_url === 'https://image.tmdb.org/t/p/w500null' ){
        src = MovieDefaultImg; 
    }
    return (
        <Card key={key} border="warning" >
            <Card.Header as="h5">{movie.title}</Card.Header>
            <Card.Img variant="top" src={src} />
            <Card.Body>
            <Card.Text>
                    {movie.overview}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <p>{movie.released_on}</p>
            </Card.Footer>
        </Card >
    );

}

export default Movies
