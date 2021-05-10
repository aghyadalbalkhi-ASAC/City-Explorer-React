import React, { Component } from 'react'
import { CardColumns, Card,Button } from 'react-bootstrap'

class Trails extends Component {
    render() {

        if (this.props.showtrails) {
            const trailsInfo = this.props.trailsInfo.map((trail, key) => {
                if(!((trail.location.toLocaleLowerCase()).includes('israel'))){
                return (
                    <CardTrails trail={trail} key={key} />
                );
            }
            });
            return (
                <div className="trail-container">
                    <Card>
                        <Card.Header className="card-header-style" as="h5">Trails Information</Card.Header>
                        <Card.Body>
                            <div className="wrap-cards">
                                {trailsInfo}
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            )
        } else {
            return (
                <>
                    <div></div>
                </>
            )
        }
    }
}



const CardTrails = ({ trail, key }) => {

    return (
        <Card key={key} border="warning" style={{ width: '18rem' }}>
            <Card.Header as="h5">{trail.name}</Card.Header>
            <Card.Body>
                <Card.Text>
                    {trail.summary}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Button variant="outline-info" size="lg" href={trail.trails_url} target>Info</Button>{' '}
            </Card.Footer>
        </Card >
    );

}


export default Trails
