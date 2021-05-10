import React, { Component } from 'react'
import {CardColumns,Card,Button,Pagination} from 'react-bootstrap'
import MovieDefaultImg from'../assets/images/Movie-Default-Img.png';


class Movies extends Component {
    
    render() {


        if(this.props.showYelp){
            const yelpsCard = this.props.yelpInfo.map((yelp ,key) =>{
                return (
                    <CardYelp yelp={yelp} key={key} />
                );
            });
        return (
            <div className="movie-container">
            <Card>
            <Card.Header className="card-header-style" as="h5">Resturants Information</Card.Header>
                <Card.Body>
                    <CardColumns>
                        {yelpsCard}
                    </CardColumns>
                </Card.Body>
                <Card.Footer>
                    <PaginationBasic props={this.props} />
                </Card.Footer>
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

const CardYelp = ({yelp,key})=>{

    let src = yelp.image_url;
    if (yelp.image_url === 'https://image.tmdb.org/t/p/w500null' ){
        src = MovieDefaultImg; 
    }
    return (
        <Card key={key} border="warning" >
            <Card.Header as="h5">{yelp.name}</Card.Header>
            <Card.Body>
                <Card.Img variant="top" src={src} />
            </Card.Body>
            <Card.Footer>
                <Button  variant="outline-info" size="lg" href={yelp.url} target>Info</Button>{' '}
                <Card.Text className="float-right">
                ⭐️ : {yelp.rating}
                </Card.Text>
            </Card.Footer>
        </Card >
    );

}


const PaginationBasic = ({props}) =>{
    console.log(props)
    let active = props.active;
    let items = [];
    for (let number = 1; number <= 5; number++) {
    items.push(
        <Pagination.Item onClick={ () => props.onClickPagination(number)} key={number} active={number === active}>
        {number}
        </Pagination.Item>,
    );
    }
    return (
        <div id='pagination'>
            <Pagination >{items}</Pagination>
        </div>
    );
}

export default Movies
