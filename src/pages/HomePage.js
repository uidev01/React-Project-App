import React from 'react';
import CarouselComponent from '../components/CarouselComponent';
import Card from 'react-bootstrap/Card';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

class HomePage extends React.Component{
  constructor(){
    super();
    
  }

  render(){
    return (
        <>
        <CarouselComponent/>  
        <Container>
            <Row>
            <Col xs lg="5">
                <Card>
                        <Card.Img variant="bottom" src="/static/images/product-1.jpg" />
                        <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                        </Card.Body>
                    </Card>
            </Col>
            <Col xs lg="7">
                <Card>
                    <Card.Img variant="top" src="/static/images/picture-2.jpg" />
                    <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            </Row> 
        </Container> 
        </>
    );
  }
};

export default HomePage;