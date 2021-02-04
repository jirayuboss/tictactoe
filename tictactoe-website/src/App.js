import { Container, Image, Row, Button, Col, Card } from 'react-bootstrap';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pic: '',
      pos1: false,
      pos2: false,
      pos3: false,
      pos4: false,
      pos5: false,
      pos6: false,
      pos7: false,
      pos8: false,
      pos9: false,
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
            <Button onClick={() => {
              this.setState({
                pic: '/playO.png',
                pos2: true
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
                    { this.state.pos2 && <Card.Img src={window.location.origin + this.state.pic} alt="Card image" /> }
                  </Card.Body>
                </Card>
              </Col>
            </Button>
            <Button onClick={() => {
              this.setState({
                pic: '/playO.png',
                pos3: true
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
                    { this.state.pos3 && <Card.Img src={window.location.origin + this.state.pic} alt="Card image" /> }
                  </Card.Body>
                </Card>
              </Col>
            </Button>
          </Row>
          <Row>
            <Button onClick={() => {
              this.setState({
                pic: '/playO.png',
                pos4: true
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
                    { this.state.pos4 && <Card.Img src={window.location.origin + this.state.pic} alt="Card image" /> }
                  </Card.Body>
                </Card>
              </Col>
            </Button>
            <Button onClick={() => {
              this.setState({
                pic: '/playO.png',
                pos5: true
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
                    { this.state.pos5 && <Card.Img src={window.location.origin + this.state.pic} alt="Card image" /> }
                  </Card.Body>
                </Card>
              </Col>
            </Button>
            <Button onClick={() => {
              this.setState({
                pic: '/playO.png',
                pos6: true
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
                    { this.state.pos6 && <Card.Img src={window.location.origin + this.state.pic} alt="Card image" /> }
                  </Card.Body>
                </Card>
              </Col>
            </Button>
          </Row>
          <Row>
            <Button onClick={() => {
              this.setState({
                pic: '/playO.png',
                pos7: true
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
                    { this.state.pos7 && <Card.Img src={window.location.origin + this.state.pic} alt="Card image" /> }
                  </Card.Body>
                </Card>
              </Col>
            </Button>
            <Button onClick={() => {
              this.setState({
                pic: '/playO.png',
                pos8: true
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
                    { this.state.pos8 && <Card.Img src={window.location.origin + this.state.pic} alt="Card image" /> }
                  </Card.Body>
                </Card>
              </Col>
            </Button>
            <Button onClick={() => {
              this.setState({
                pic: '/playO.png',
                pos9: true
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
                    { this.state.pos9 && <Card.Img src={window.location.origin + this.state.pic} alt="Card image" /> }
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
