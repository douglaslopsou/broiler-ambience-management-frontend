import React, { useState } from "react";
import api from '../services/api';

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
  Alert,
  Spinner
} from "react-bootstrap";

const Ambience = () => {
  
  const [ form, setForm ] = useState({});
  const [ errors, setErrors ] = useState({});
  const [show, setShow] = useState(false);

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value
    })
    // Check and see if errors exist, and remove them from the error object:
    if ( !!errors[field] ) setErrors({
      ...errors,
      [field]: null
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    // get our new errors
    const newErrors = findFormErrors()
    // Conditional logic:
    if ( Object.keys(newErrors).length > 0 ) {
      // We got errors!
      setErrors(newErrors)
    } else {
      // No errors! Put any logic here for the form submission!
      setShow(true);
      //alert('Thank you for your feedback!');
      //api.post('/ambience', data);
    }
  }

  const findFormErrors = () => {
    const { titulo, dataInicio, dataFim, temperatura, umidade  } = form
    const newErrors = {}
    // titulo errors
    if ( !titulo || titulo === '' ) newErrors.titulo = 'Não pode ser vazio!'
    else if ( titulo.length > 20 ) newErrors.titulo = 'Título muito longo!'

    return newErrors
  }

  return (
    <>
      <Container fluid>
      <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Ambiência</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <Form.Label>Título</Form.Label>
                        <Form.Control
                          placeholder="Título"
                          type="text"
                          onChange={ e => setField('titulo', e.target.value) }
                          isInvalid={ !!errors.titulo }
                        ></Form.Control>
                        <Form.Control.Feedback type='invalid'>
                            { errors.titulo }
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="3">
                      <Form.Group>
                        <label>Data de inicio</label>
                        <Form.Control
                          placeholder="28/05/2021"
                          type="date"
                          onChange={ e => setField('dataInicio', e.target.value) }
                          isInvalid={ !!errors.dataInicio }
                        ></Form.Control>
                        <Form.Control.Feedback type='invalid'>
                            { errors.dataInicio }
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="3">
                      <Form.Group>
                        <label>Data do fim</label>
                        <Form.Control
                          placeholder="28/05/2021"
                          type="date"
                          onChange={ e => setField('dataFim', e.target.value) }
                          isInvalid={ !!errors.dataFim }
                        ></Form.Control>
                        <Form.Control.Feedback type='invalid'>
                            { errors.dataFim }
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="3">
                      <Form.Group>
                        <label>Temperatura em °C</label>
                        <Form.Control
                          defaultValue="2"
                          placeholder="2°C"
                          type="number"
                          onChange={ e => setField('temperatura', e.target.value) }
                          isInvalid={ !!errors.temperatura }
                        ></Form.Control>
                        <Form.Control.Feedback type='invalid'>
                            { errors.temperatura }
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="3">
                      <Form.Group>
                        <label>Umidade em %</label>
                        <Form.Control
                          defaultValue="20"
                          placeholder="20%"
                          type="number"
                          onChange={ e => setField('umidade', e.target.value) }
                          isInvalid={ !!errors.umidade }
                        ></Form.Control>
                        <Form.Control.Feedback type='invalid'>
                            { errors.umidade }
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                    onClick={ handleSubmit }
                  >
                    Salvar Ambiência
                  </Button>
                  <div className="clearfix"></div>
                </Form>
                  <br/><Alert show={show} variant="success">Cadastro realizado com sucesso!</Alert>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* TABELA */}
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Ambiência</Card.Title>
                <p className="card-category">
                  Parâmetros de ambiencia por período.
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Titulo</th>
                      <th className="border-0">Data de Inicio</th>
                      <th className="border-0">Data do Fim</th>
                      <th className="border-0">Temperatura</th>
                      <th className="border-0">Umidade</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Ambiência Teste</td>
                      <td>28/05/2021</td>
                      <td>31/12/2021</td>
                      <td>20°C</td>
                      <td>40%</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Ambience;
