import React, { Component } from 'react';

import BookList from '../containers/book_list';
import BookDetail from '../containers/book-detail';
import Tiempo from './Tiempo';
import  App1 from './App1';
import Index1 from './Index1';
import { Grid, Row, Col } from 'react-bootstrap';

export default class App extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={8}>
              <BookList />
          </Col>
          <Col xs={6} md={4}>
              <BookDetail />
          </Col>
          <Col xs={6} md={4}>
        
          </Col>
          <Col xs={6} md={4}>
          <Index1 />
          </Col>
        </Row>
      </Grid>

    );
  }
}
