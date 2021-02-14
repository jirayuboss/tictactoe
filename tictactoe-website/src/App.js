import { Container, Row, Button, Col, Card, Spinner } from 'react-bootstrap';
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
      count: 1,
      row1: 0,
      row2: 0,
      row3: 0,
      column1: 0,
      column2: 0,
      column3: 0,
      diagonal1: 0,
      diagonal2: 0,
      winnerFound: false,
      winnerText: '',
      history: []
    };
  }

  restart() {
    this.setState({
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
      count: 1,
      row1: 0,
      row2: 0,
      row3: 0,
      column1: 0,
      column2: 0,
      column3: 0,
      diagonal1: 0,
      diagonal2: 0,
      winnerFound: false,
      winnerText: '',
      history: [],
      isReplay: false
    })
  }

  replay = async () => {
    this.setState({
      pos1: false,
      pos2: false,
      pos3: false,
      pos4: false,
      pos5: false,
      pos6: false,
      pos7: false,
      pos8: false,
      pos9: false,
      isReplay: true
    }, () => {
      this.state.history.forEach((object, index) => {
        setTimeout(() => {
          let pos = object.pos;
          let posVal = object.value;
          if (index + 1 === this.state.history.length) {
            this.setState({
              [pos]: posVal,
              isReplay: false
            })
          }
          else {
            this.setState({
              [pos]: posVal
            })
          }
        }, index * 1000);
      });
    });
  }

  checkWinner() {
    if (this.state.row1 === 3 || this.state.row2 === 3 || this.state.row3 === 3 || this.state.column1 === 3 || this.state.column2 === 3 || this.state.column3 === 3 || this.state.diagonal1 === 3 || this.state.diagonal2 === 3) {
      this.setState({
        winnerFound: true,
        show: true,
        handleClose: false,
        winnerText: 'The winner is X'
      });
    }
    else if (this.state.row1 === -3 || this.state.row2 === -3 || this.state.row3 === -3 || this.state.column1 === -3 || this.state.column2 === -3 || this.state.column3 === -3 || this.state.diagonal1 === -3 || this.state.diagonal2 === -3) {
      this.setState({
        winnerFound: true,
        show: true,
        handleClose: false,
        winnerText: 'The winner is O'
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Container>
          <h1>
            Tic Tac Toe!
          </h1>
          <Row>
            <Button disabled={this.state.winnerFound} onClick={() => {
              if (!this.state.pos1) {
                this.setState({
                  pos1: this.state.count,
                  count: this.state.count + 1
                }, () => {
                  if (this.state.pos1 % 2) {
                    this.setState({
                      row1: this.state.row1 + 1,
                      column1: this.state.column1 + 1,
                      diagonal1: this.state.diagonal1 + 1,
                      history: this.state.history.concat({ pos: "pos1", value: this.state.pos1 })
                    }, () => {
                      this.checkWinner()
                    })
                  }
                  else {
                    this.setState({
                      row1: this.state.row1 - 1,
                      column1: this.state.column1 - 1,
                      diagonal1: this.state.diagonal1 - 1,
                      history: this.state.history.concat({ pos: "pos1", value: this.state.pos1 })
                    }, () => {
                      this.checkWinner()
                    })
                  }
                });
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
                    {!!(this.state.pos1 % 2) && this.state.pos1 && <Card.Img src={window.location.origin + '/playX.png'} style={{ height: 300, alignItems: "center" }} alt="Card image" />}
                    {!(this.state.pos1 % 2) && this.state.pos1 && <Card.Img src={window.location.origin + '/playO.png'} style={{ height: 300, alignItems: "center" }} alt="Card image" />}
                  </Card.Body>
                </Card>
              </Col>
            </Button>
            <Button disabled={this.state.winnerFound} onClick={() => {
              if (!this.state.pos2) {
                this.setState({
                  pos2: this.state.count,
                  count: this.state.count + 1
                }, () => {
                  if (this.state.pos2 % 2) {
                    this.setState({
                      row1: this.state.row1 + 1,
                      column2: this.state.column2 + 1,
                      history: this.state.history.concat({ pos: "pos2", value: this.state.pos2 })
                    }, () => {
                      this.checkWinner()
                    })
                  }
                  else {
                    this.setState({
                      row1: this.state.row1 - 1,
                      column2: this.state.column2 - 1,
                      history: this.state.history.concat({ pos: "pos2", value: this.state.pos2 })
                    }, () => {
                      this.checkWinner()
                    })
                  }
                });
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
                    {!!(this.state.pos2 % 2) && this.state.pos2 && <Card.Img src={window.location.origin + '/playX.png'} style={{ height: 300, alignItems: "center" }} alt="Card image" />}
                    {!(this.state.pos2 % 2) && this.state.pos2 && <Card.Img src={window.location.origin + '/playO.png'} style={{ height: 300, alignItems: "center" }} alt="Card image" />}
                  </Card.Body>
                </Card>
              </Col>
            </Button>
            <Button disabled={this.state.winnerFound} onClick={() => {
              if (!this.state.pos3) {
                this.setState({
                  pos3: this.state.count,
                  count: this.state.count + 1
                }, () => {
                  if (this.state.pos3 % 2) {
                    this.setState({
                      row1: this.state.row1 + 1,
                      column3: this.state.column3 + 1,
                      diagonal2: this.state.diagonal2 + 1,
                      history: this.state.history.concat({ pos: "pos3", value: this.state.pos3 })
                    }, () => {
                      this.checkWinner()
                    })
                  }
                  else {
                    this.setState({
                      row1: this.state.row1 - 1,
                      column3: this.state.column3 - 1,
                      diagonal2: this.state.diagonal2 - 1,
                      history: this.state.history.concat({ pos: "pos3", value: this.state.pos3 })
                    }, () => {
                      this.checkWinner()
                    })
                  }
                });
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
                    {!!(this.state.pos3 % 2) && this.state.pos3 && <Card.Img src={window.location.origin + '/playX.png'} style={{ height: 300, alignItems: "center" }} alt="Card image" />}
                    {!(this.state.pos3 % 2) && this.state.pos3 && <Card.Img src={window.location.origin + '/playO.png'} style={{ height: 300, alignItems: "center" }} alt="Card image" />}
                  </Card.Body>
                </Card>
              </Col>
            </Button>
          </Row>
          <Row>
            <Button disabled={this.state.winnerFound} onClick={() => {
              if (!this.state.pos4) {
                this.setState({
                  pos4: this.state.count,
                  count: this.state.count + 1
                }, () => {
                  if (this.state.pos4 % 2) {
                    this.setState({
                      row2: this.state.row2 + 1,
                      column1: this.state.column1 + 1,
                      history: this.state.history.concat({ pos: "pos4", value: this.state.pos4 })
                    }, () => {
                      this.checkWinner()
                    })
                  }
                  else {
                    this.setState({
                      row2: this.state.row2 - 1,
                      column1: this.state.column1 - 1,
                      history: this.state.history.concat({ pos: "pos4", value: this.state.pos4 })
                    }, () => {
                      this.checkWinner()
                    })
                  }
                });
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
                    {!!(this.state.pos4 % 2) && this.state.pos4 && <Card.Img src={window.location.origin + '/playX.png'} style={{ height: 300, alignItems: "center" }} alt="Card image" />}
                    {!(this.state.pos4 % 2) && this.state.pos4 && <Card.Img src={window.location.origin + '/playO.png'} style={{ height: 300, alignItems: "center" }} alt="Card image" />}
                  </Card.Body>
                </Card>
              </Col>
            </Button>
            <Button disabled={this.state.winnerFound} onClick={() => {
              if (!this.state.pos5) {
                this.setState({
                  pos5: this.state.count,
                  count: this.state.count + 1
                }, () => {
                  if (this.state.pos5 % 2) {
                    this.setState({
                      row2: this.state.row2 + 1,
                      column2: this.state.column2 + 1,
                      diagonal1: this.state.diagonal1 + 1,
                      diagonal2: this.state.diagonal2 + 1,
                      history: this.state.history.concat({ pos: "pos5", value: this.state.pos5 })
                    }, () => {
                      this.checkWinner()
                    })
                  }
                  else {
                    this.setState({
                      row2: this.state.row2 - 1,
                      column2: this.state.column2 - 1,
                      diagonal1: this.state.diagonal1 - 1,
                      diagonal2: this.state.diagonal2 - 1,
                      history: this.state.history.concat({ pos: "pos5", value: this.state.pos5 })
                    }, () => {
                      this.checkWinner()
                    })
                  }
                });
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
                    {!!(this.state.pos5 % 2) && this.state.pos5 && <Card.Img src={window.location.origin + '/playX.png'} style={{ height: 300, alignItems: "center" }} alt="Card image" />}
                    {!(this.state.pos5 % 2) && this.state.pos5 && <Card.Img src={window.location.origin + '/playO.png'} style={{ height: 300, alignItems: "center" }} alt="Card image" />}
                  </Card.Body>
                </Card>
              </Col>
            </Button>
            <Button disabled={this.state.winnerFound} onClick={() => {
              if (!this.state.pos6) {
                this.setState({
                  pos6: this.state.count,
                  count: this.state.count + 1
                }, () => {
                  if (this.state.pos6 % 2) {
                    this.setState({
                      row2: this.state.row2 + 1,
                      column3: this.state.column3 + 1,
                      history: this.state.history.concat({ pos: "pos6", value: this.state.pos6 })
                    }, () => {
                      this.checkWinner()
                    })
                  }
                  else {
                    this.setState({
                      row2: this.state.row2 - 1,
                      column3: this.state.column3 - 1,
                      history: this.state.history.concat({ pos: "pos6", value: this.state.pos6 })
                    }, () => {
                      this.checkWinner()
                    })
                  }
                });
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
                    {!!(this.state.pos6 % 2) && this.state.pos6 && <Card.Img src={window.location.origin + '/playX.png'} style={{ height: 300, alignItems: "center" }} alt="Card image" />}
                    {!(this.state.pos6 % 2) && this.state.pos6 && <Card.Img src={window.location.origin + '/playO.png'} style={{ height: 300, alignItems: "center" }} alt="Card image" />}
                  </Card.Body>
                </Card>
              </Col>
            </Button>
          </Row>
          <Row>
            <Button disabled={this.state.winnerFound} onClick={() => {
              if (!this.state.pos7) {
                this.setState({
                  pos7: this.state.count,
                  count: this.state.count + 1
                }, () => {
                  if (this.state.pos7 % 2) {
                    this.setState({
                      row3: this.state.row3 + 1,
                      column1: this.state.column1 + 1,
                      diagonal2: this.state.diagonal2 + 1,
                      history: this.state.history.concat({ pos: "pos7", value: this.state.pos7 })
                    }, () => {
                      this.checkWinner()
                    })
                  }
                  else {
                    this.setState({
                      row3: this.state.row3 - 1,
                      column1: this.state.column1 - 1,
                      diagonal2: this.state.diagonal2 - 1,
                      history: this.state.history.concat({ pos: "pos7", value: this.state.pos7 })
                    }, () => {
                      this.checkWinner()
                    })
                  }
                });
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
                    {!!(this.state.pos7 % 2) && this.state.pos7 && <Card.Img src={window.location.origin + '/playX.png'} style={{ height: 300, alignItems: "center" }} alt="Card image" />}
                    {!(this.state.pos7 % 2) && this.state.pos7 && <Card.Img src={window.location.origin + '/playO.png'} style={{ height: 300, alignItems: "center" }} alt="Card image" />}
                  </Card.Body>
                </Card>
              </Col>
            </Button>
            <Button disabled={this.state.winnerFound} onClick={() => {
              if (!this.state.pos8) {
                this.setState({
                  pos8: this.state.count,
                  count: this.state.count + 1
                }, () => {
                  if (this.state.pos8 % 2) {
                    this.setState({
                      row3: this.state.row3 + 1,
                      column2: this.state.column2 + 1,
                      history: this.state.history.concat({ pos: "pos8", value: this.state.pos8 })
                    }, () => {
                      this.checkWinner()
                    })
                  }
                  else {
                    this.setState({
                      row3: this.state.row3 - 1,
                      column2: this.state.column2 - 1,
                      history: this.state.history.concat({ pos: "pos8", value: this.state.pos8 })
                    }, () => {
                      this.checkWinner()
                    })
                  }
                });
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
                    {!!(this.state.pos8 % 2) && this.state.pos8 && <Card.Img src={window.location.origin + '/playX.png'} style={{ height: 300, alignItems: "center" }} alt="Card image" />}
                    {!(this.state.pos8 % 2) && this.state.pos8 && <Card.Img src={window.location.origin + '/playO.png'} style={{ height: 300, alignItems: "center" }} alt="Card image" />}
                  </Card.Body>
                </Card>
              </Col>
            </Button>
            <Button disabled={this.state.winnerFound} onClick={() => {
              if (!this.state.pos9) {
                this.setState({
                  pos9: this.state.count,
                  count: this.state.count + 1
                }, () => {
                  if (this.state.pos9 % 2) {
                    this.setState({
                      row3: this.state.row3 + 1,
                      column3: this.state.column3 + 1,
                      diagonal1: this.state.diagonal1 + 1,
                      history: this.state.history.concat({ pos: "pos9", value: this.state.pos9 })
                    }, () => {
                      this.checkWinner()
                    })
                  }
                  else {
                    this.setState({
                      row3: this.state.row3 - 1,
                      column3: this.state.column3 - 1,
                      diagonal1: this.state.diagonal1 - 1,
                      history: this.state.history.concat({ pos: "pos9", value: this.state.pos9 })
                    }, () => {
                      this.checkWinner()
                    })
                  }
                });
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
                    {!!(this.state.pos9 % 2) && this.state.pos9 && <Card.Img src={window.location.origin + '/playX.png'} style={{ height: 300, alignItems: "center" }} alt="Card image" />}
                    {!(this.state.pos9 % 2) && this.state.pos9 && <Card.Img src={window.location.origin + '/playO.png'} style={{ height: 300, alignItems: "center" }} alt="Card image" />}
                  </Card.Body>
                </Card>
              </Col>
            </Button>
          </Row>
        </Container>
        {this.state.winnerFound &&
          <Container>
            <h2>
              {this.state.winnerText}
            </h2>
            {!this.state.isReplay && <Button variant="primary" size="lg" block onClick={() => {
              this.restart()
            }}>
              Restart
            </Button>
            }
            {this.state.isReplay && <Button variant="primary" size="lg" disabled block onClick={() => {
              this.restart()
            }}>
              Restart
            </Button>
            }
            {this.state.isReplay && <Button variant="primary" disabled>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              <span className="sr-only">Replaying...</span>
            </Button>}
            {!this.state.isReplay && <Button variant="secondary" size="lg" block async onClick={() => {
              this.replay();
            }}>
              Replay
             </Button>
            }
          </Container>
        }
      </div>
    );
  }
}

export default App;
