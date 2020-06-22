import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import Sidebar from './category/Sidebar';
import Listing from './category/Listing';

class Category extends React.Component{
  constructor(){
    super();
    
  }

  render(){
    return (
        <Container fluid="true">   
          <Row>
          <Col xs lg="3">
            <Sidebar/>
          </Col>
          <Col xs lg="9">
            <Listing/>
          </Col>
          </Row>
    </Container>
    );
  }
};

export default Category;