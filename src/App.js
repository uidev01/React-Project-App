import React from 'react';
import HomePage from './pages/HomePage';
import Category from './pages/Category';
import Header from './components/Header';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class App extends React.Component{
  constructor(){
    super();
    
  }

  render(){
    return (
      
      <Container fluid="true">
        <Router>
          <Row>
            <Col><Header/></Col>
          </Row>    
          <Row>
            <Col>
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/categories" component={Category} />
              </Switch>
            </Col>
          </Row>
        </Router>
    </Container>      
    );
  }
};

export default App;