import React from "react";
import ChartistGraph from "react-chartist";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

function Dashboard() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="4" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-explore-2 text-danger"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Temperatura Atual</p>
                      <Card.Title as="h4">20 °C</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-calendar-alt mr-1"></i>
                  Leitura: 28/05/2021 17:00:00
                </div>
                <br></br>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Atualizar  dados agora
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="4" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-explore-2 text-info"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Umidade Atual</p>
                      <Card.Title as="h4">30%</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-calendar-alt mr-1"></i>
                  Leitura: 28/05/2021 17:00:00
                </div>
                <br></br>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Atualizar  dados agora
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="4" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-vector text-success"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">BAM-Controller</p>
                      <Card.Title as="h4">Nivel 1</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-calendar-alt mr-1"></i>
                  Leitura: 28/05/2021 17:00:00
                </div>
                <br></br>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Atualizar  dados agora
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Temperatura</Card.Title>
                <p className="card-category">24 Horas</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartHours">
                  <ChartistGraph
                    data={{
                      labels: [
                        "9:00AM",
                        "12:00AM",
                        "3:00PM",
                        "6:00PM",
                        "9:00PM",
                        "12:00PM",
                        "3:00AM",
                        "6:00AM",
                      ],
                      series: [
                        [25, 24, 27, 20, 20, 22, 21, 22],
                        [20, 20, 20, 20, 20, 20, 20, 20],
                        [22, 22, 22, 22, 22, 22, 22, 22],
                        
                      ],
                    }}
                    type="Line"
                    options={{
                      low: 10,
                      high: 50,
                      showArea: false,
                      height: "295px",
                      axisX: {
                        showGrid: true,
                      },
                      lineSmooth: false,
                      showLine: true,
                      showPoint: false,
                      fullWidth: true,
                      chartPadding: {
                        right: 50,
                      },
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          axisX: {
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  Temperatura Captada <i className="fas fa-circle text-danger"></i>
                  Temperatura Ideal do período<i className="fas fa-circle text-warning"></i>
                  Temperatura Máxima do período
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-history"></i>
                  Dados de 28/05/2021 17:00:00
                </div>
              </Card.Footer>
            </Card>
          </Col>
          
          {/* UMIDADE */}

          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Umidade</Card.Title>
                <p className="card-category">24 Horas</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartHours">
                  <ChartistGraph
                    data={{
                      labels: [
                        "01:00AM",
                        "06:00AM",
                        "12:00PM",
                        "18:00PM",
                        "00:00PM",
                        "12:00PM",
                      ],
                      series: [
                        [20, 30, 40, 17, 29, 50],
                      ],
                    }}
                    type="Line"
                    options={{
                      low: 0,
                      high: 100,
                      showArea: true,
                      height: "295px",
                      axisX: {
                        showGrid: true,
                      },
                      lineSmooth: true,
                      showLine: true,
                      showPoint: true,
                      fullWidth: true,
                      chartPadding: {
                        right: 50,
                      },
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          axisX: {
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  % Umidade Captada
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-history"></i>
                  Dados de 28/05/2021 17:00:00
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Logs do sistema</Card.Title>
                <p className="card-category">Ultimas informações registradas pelos dispositivos.</p>
              </Card.Header>
              <Card.Body>
                <Form.Group>
                  <label>Logs</label>
                  <Form.Control
                    cols="80"
                    defaultValue=""
                    placeholder=""
                    rows="4"
                    disabled
                    as="textarea"
                    value="Leitura: 28/05/2021 17:00:00"
                  ></Form.Control>
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md="12">
            
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
