import React from 'react';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import services from '../Assets/Json/Services.json';
import Skills from './Skills';

function Services() {
    return (
        <Container>
            <h2 className='text-center me-2 pt-2 pb-2'>My Services</h2>
            <Row className="justify-content-center">
                {services.map(service => (
                    <Col key={service.Id} xs={12} sm={6} md={4} lg={3} className='pb-3'>
                        <Card className='pb-2'>
                            <Card.Header>
                                <Image
                                    rounded
                                    src={require(`../Assets/image/${service.Image}`)}
                                    style={{ maxWidth: '25%', height: '25%' }}
                                    alt={`Image ${service.Id}`}
                                />
                                <Card.Title style={{ fontSize: 15, fontWeight: 'bolder' }}>
                                    {service.Title}
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                {service.Description}
                                <Card.Text>
                                    {service.Description}
                                </Card.Text>
                                <Button variant="success" href='/Projects'>Check my projects</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>       
            {/*J'ai directement importé les Skills dans la partie services*/}
            <Skills/>
        </Container>
    )
}

export default Services;
