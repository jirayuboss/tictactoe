import { Container, Image, Row, Button, Col, Card } from 'react-bootstrap';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pic: '',
      pos1: 0,
      pos2: 0,
      pos3: 0,
      pos4: 0,
      pos5: 0,
      pos6: 0,
      pos7: 0,
      pos8: 0,
      pos9: 0,
      count: 1,
      row1: [],
      row2: [],
      row3: []
    };
  }

  componentDidMount() {
    const intervalId = setInterval(this.timer, 500);
    this.setState({ 
      intervalId,
      row1: [(this.state.pos1 % 2), (this.state.pos2 % 2), (this.state.pos3 % 2)]
     });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Button onClick={() => {
              console.log(this.state.count)
              if (this.state.pos1 === 0){
                this.setState({
                  pos1: this.state.count,
                  count: this.state.count + 1
                })
              }
              console.log(this.state.row1)
            }}>
              <Col xs={6} md={4}>
                <Card
                  bg="light"
                  text="light"
                  style={{ width: 300, height: 300, alignItems: "center" }}
                  className="mb-2"
                >
                  <Card.Body>
                  { !!(this.state.pos1 % 2) && this.state.pos1 !== 0 && <Card.Img src={window.location.origin + '/playX.png'} style={{height: 300, alignItems: "center" }} alt="Card image" /> }
                    { !(this.state.pos1 % 2) && this.state.pos1 !== 0 && <Card.Img src={window.location.origin + '/playO.png'} style={{height: 300, alignItems: "center" }} alt="Card image" /> }
                  </Card.Body>
                </Card>
              </Col>
            </Button>
            <Button onClick={() => {
              if (this.state.pos2 === 0){
                this.setState({
                  pos2: this.state.count,
                  count: this.state.count + 1
                })
              }
            }}>
              <Col xs={6} md={4}>
                <Card
                  bg="light"
                  text="light"
                  style={{ width: 300, height: 300, alignItems: "center" }}
                  className="mb-2"
                >
                  <Card.Body>
                  { !!(this.state.pos2 % 2) && this.state.pos2 !== 0 && <Card.Img src={window.location.origin + '/playX.png'} style={{height: 300, alignItems: "center" }} alt="Card image" /> }
                    { !(this.state.pos2 % 2) && this.state.pos2 !== 0 && <Card.Img src={window.location.origin + '/playO.png'} style={{height: 300, alignItems: "center" }} alt="Card image" /> }
                  </Card.Body>
                </Card>
              </Col>
            </Button>
            <Button onClick={() => {
              console.log(this.state.count)
              if (this.state.pos3 === 0){
                this.setState({
                  pos3: this.state.count,
                  count: this.state.count + 1
                })
              }
            }}>
              <Col xs={6} md={4}>
                <Card
                  bg="light"
                  text="light"
                  style={{ width: 300, height: 300, alignItems: "center" }}
                  className="mb-2"
                >
                  <Card.Body>
                  { !!(this.state.pos3 % 2) && this.state.pos3 !== 0 && <Card.Img src={window.location.origin + '/playX.png'} style={{height: 300, alignItems: "center" }} alt="Card image" /> }
                    { !(this.state.pos3 % 2) && this.state.pos3 !== 0 && <Card.Img src={window.location.origin + '/playO.png'} style={{height: 300, alignItems: "center" }} alt="Card image" /> }
                  </Card.Body>
                </Card>
              </Col>
            </Button>
          </Row>
          <Row>
            <Button onClick={() => {
              console.log(this.state.count)
              if (this.state.pos4 === 0){
                this.setState({
                  pos4: this.state.count,
                  count: this.state.count + 1
                })
              }
            }}>
              <Col xs={6} md={4}>
                <Card
                  bg="light"
                  text="light"
                  style={{ width: 300, height: 300, alignItems: "center" }}
                  className="mb-2"
                >
                  <Card.Body>
                  { !!(this.state.pos4 % 2) && this.state.pos4 !== 0 && <Card.Img src={window.location.origin + '/playX.png'} style={{height: 300, alignItems: "center" }} alt="Card image" /> }
                    { !(this.state.pos4 % 2) && this.state.pos4 !== 0 && <Card.Img src={window.location.origin + '/playO.png'} style={{height: 300, alignItems: "center" }} alt="Card image" /> }
                  </Card.Body>
                </Card>
              </Col>
            </Button>
            <Button onClick={() => {
              console.log(this.state.count)
              if (this.state.pos5 === 0){
                this.setState({
                  pos5: this.state.count,
                  count: this.state.count + 1
                })
              }
            }}>
              <Col xs={6} md={4}>
                <Card
                  bg="light"
                  text="light"
                  style={{ width: 300, height: 300, alignItems: "center" }}
                  className="mb-2"
                >
                  <Card.Body>
                  { !!(this.state.pos5 % 2) && this.state.pos5 !== 0 && <Card.Img src={window.location.origin + '/playX.png'} style={{height: 300, alignItems: "center" }} alt="Card image" /> }
                    { !(this.state.pos5 % 2) && this.state.pos5 !== 0 && <Card.Img src={window.location.origin + '/playO.png'} style={{height: 300, alignItems: "center" }} alt="Card image" /> }
                  </Card.Body>
                </Card>
              </Col>
            </Button>
            <Button onClick={() => {
              console.log(this.state.count)
              if (this.state.pos6 === 0){
                this.setState({
                  pos6: this.state.count,
                  count: this.state.count + 1
                })
              }
            }}>
              <Col xs={6} md={4}>
                <Card
                  bg="light"
                  text="light"
                  style={{ width: 300, height: 300, alignItems: "center" }}
                  className="mb-2"
                >
                  <Card.Body>
                  { !!(this.state.pos6 % 2) && this.state.pos6 !== 0 && <Card.Img src={window.location.origin + '/playX.png'} style={{height: 300, alignItems: "center" }} alt="Card image" /> }
                    { !(this.state.pos6 % 2) && this.state.pos6 !== 0 && <Card.Img src={window.location.origin + '/playO.png'} style={{height: 300, alignItems: "center" }} alt="Card image" /> }
                  </Card.Body>
                </Card>
              </Col>
            </Button>
          </Row>
          <Row>
            <Button onClick={() => {
              console.log(this.state.count)
              if (this.state.pos7 === 0){
                this.setState({
                  pos7: this.state.count,
                  count: this.state.count + 1
                })
              }
            }}>
              <Col xs={6} md={4}>
                <Card
                  bg="light"
                  text="light"
                  style={{ width: 300, height: 300, alignItems: "center" }}
                  className="mb-2"
                >
                  <Card.Body>
                  { !!(this.state.pos7 % 2) && this.state.pos7 !== 0 && <Card.Img src={window.location.origin + '/playX.png'} style={{height: 300, alignItems: "center" }} alt="Card image" /> }
                    { !(this.state.pos7 % 2) && this.state.pos7 !== 0 && <Card.Img src={window.location.origin + '/playO.png'} style={{height: 300, alignItems: "center" }} alt="Card image" /> }
                  </Card.Body>
                </Card>
              </Col>
            </Button>
            <Button onClick={() => {
              console.log(this.state.count)
              if (this.state.pos8 === 0){
                this.setState({
                  pos8: this.state.count,
                  count: this.state.count + 1
                })
              }
            }}>
              <Col xs={6} md={4}>
                <Card
                  bg="light"
                  text="light"
                  style={{ width: 300, height: 300, alignItems: "center" }}
                  className="mb-2"
                >
                  <Card.Body>
                  { !!(this.state.pos8 % 2) && this.state.pos8 !== 0 && <Card.Img src={window.location.origin + '/playX.png'} style={{height: 300, alignItems: "center" }} alt="Card image" /> }
                    { !(this.state.pos8 % 2) && this.state.pos8 !== 0 && <Card.Img src={window.location.origin + '/playO.png'} style={{height: 300, alignItems: "center" }} alt="Card image" /> }
                  </Card.Body>
                </Card>
              </Col>
            </Button>
            <Button onClick={() => {
              console.log(this.state.count)
              if (this.state.pos9 === 0){
                this.setState({
                  pos9: this.state.count,
                  count: this.state.count + 1
                })
              }
            }}>
              <Col xs={6} md={4}>
                <Card
                  bg="light"
                  text="light"
                  style={{ width: 300, height: 300, alignItems: "center" }}
                  className="mb-2"
                >
                  <Card.Body>
                  { !!(this.state.pos9 % 2) && this.state.pos9 !== 0 && <Card.Img src={window.location.origin + '/playX.png'} style={{height: 300, alignItems: "center" }} alt="Card image" /> }
                    { !(this.state.pos9 % 2) && this.state.pos9 !== 0 && <Card.Img src={window.location.origin + '/playO.png'} style={{height: 300, alignItems: "center" }} alt="Card image" /> }
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
