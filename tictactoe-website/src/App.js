import { Container, Image, Row, Button, Col, Card } from 'react-bootstrap';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pic: '',
      pos1: false
    };
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Button onClick={() => {
              this.setState({
                pic: '/playO.png',
                pos1: true
              })
            }}>
              <Col xs={6} md={4}>
                <Card
                  bg="light"
                  text="light"
                  style={{ width: 300, height: 300, alignItems: "center" }}
                  className="mb-2"
                >
                  <Card.Body>
                    { this.state.pos1 && <Card.Img src={window.location.origin + this.state.pic} alt="Card image" /> }
                  </Card.Body>
                </Card>
              </Col>
            </Button>
            <Button>
              <Col xs={6} md={4}>
                <Card
                  bg="light"
                  text="light"
                  style={{ width: 300, height: 300, textAlign: "center" }}
                  className="mb-2"
                >
                  <Card.Body>
                    <Image src={window.location.origin + '/playO.png'} thumbnail />
                  </Card.Body>
                </Card>
              </Col>
            </Button>
            <Button>
              <Col xs={6} md={4}>
                <Card
                  bg="light"
                  text="light"
                  style={{ width: 300, height: 300, textAlign: "center" }}
                  className="mb-2"
                >
                  <Card.Body>
                    <Image src={window.location.origin + '/playO.png'} thumbnail />
                  </Card.Body>
                </Card>
              </Col>
            </Button>
          </Row>
          <Row>
            <Button>
              <Col xs={6} md={4}>
                <Card
                  bg="light"
                  text="light"
                  style={{ width: 300, height: 300, textAlign: "center" }}
                  className="mb-2"
                >
                  <Card.Body>
                    <Image src={window.location.origin + '/playO.png'} thumbnail />
                  </Card.Body>
                </Card>
              </Col>
            </Button>
            <Button>
              <Col xs={6} md={4}>
                <Card
                  bg="light"
                  text="light"
                  style={{ width: 300, height: 300, textAlign: "center" }}
                  className="mb-2"
                >
                  <Card.Body>
                    <Image src={window.location.origin + '/playO.png'} thumbnail />
                  </Card.Body>
                </Card>
              </Col>
            </Button>
            <Button>
              <Col xs={6} md={4}>
                <Card
                  bg="light"
                  text="light"
                  style={{ width: 300, height: 300, textAlign: "center" }}
                  className="mb-2"
                >
                  <Card.Body>
                    <Image src={window.location.origin + '/playO.png'} thumbnail />
                  </Card.Body>
                </Card>
              </Col>
            </Button>
          </Row>
          <Row>
            <Button>
              <Col xs={6} md={4}>
                <Card
                  bg="light"
                  text="light"
                  style={{ width: 300, height: 300, textAlign: "center" }}
                  className="mb-2"
                >
                  <Card.Body>
                    <Image src={window.location.origin + '/playO.png'} thumbnail />
                  </Card.Body>
                </Card>
              </Col>
            </Button>
            <Button>
              <Col xs={6} md={4}>
                <Card
                  bg="light"
                  text="light"
                  style={{ width: 300, height: 300, textAlign: "center" }}
                  className="mb-2"
                >
                  <Card.Body>
                    <Image src={window.location.origin + '/playO.png'} thumbnail />
                  </Card.Body>
                </Card>
              </Col>
            </Button>
            <Button>
              <Col xs={6} md={4}>
                <Card
                  bg="light"
                  text="light"
                  style={{ width: 300, height: 300, textAlign: "center" }}
                  className="mb-2"
                >
                  <Card.Body>
                    <Image src={window.location.origin + '/playO.png'} thumbnail />
                  </Card.Body>
                </Card>
              </Col>
            </Button>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
