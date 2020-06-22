import React from 'react';
import Card from 'react-bootstrap/Card';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem'

class Listing extends React.Component{
  constructor(){
    super();
    
  }

  render(){
    return (
        <>
        <Container>
            <Row>
                <Col xs="6" md="4">
                    <Card>
                        <Card.Img variant="top" src="/static/images/product-1.jpg" />
                        <Card.Body>
                            <Card.Title>Product 1</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Cras justo odio</ListGroupItem>
                            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem>Vestibulum at eros</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Add to Cart</Card.Link>
                            <Card.Link href="#">Quick View</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs="6" md="4">
                    <Card>
                        <Card.Img variant="top" src="/static/images/product-1.jpg" />
                        <Card.Body>
                            <Card.Title>Product 2</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Cras justo odio</ListGroupItem>
                            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem>Vestibulum at eros</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Add to Cart</Card.Link>
                            <Card.Link href="#">Quick View</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs="6" md="4">
                    <Card>
                        <Card.Img variant="top" src="/static/images/product-1.jpg" />
                        <Card.Body>
                            <Card.Title>Product 3</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Cras justo odio</ListGroupItem>
                            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem>Vestibulum at eros</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Add to Cart</Card.Link>
                            <Card.Link href="#">Quick View</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row> 
        </Container> 
        </>
    );
  }
};

export default Listing;