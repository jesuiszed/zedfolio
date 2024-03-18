import { useState } from 'react';
import { Container, Row, Col, Modal, Button, Image } from 'react-bootstrap';
import myPicture from '../Assets/image/myPicture.png';
import myCV from '../Assets/image/myCV.png';


function Home() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container className='pt-3'>
            <Row className="align-items-center">
                <Col xs={12} md={6} className="text-center">
                    <Image rounded src={myPicture} className='' alt="myPicture" style={{ maxWidth: '70%', height: 'auto' }} />
                </Col>
                <Col xs={12} md={6} className=' mb-3 mb-md-0'>
                    <p className=''>
                        <span style={{ fontSize: 20 }}>Salut</span><br />
                        <span style={{ fontSize: 50, fontWeight: 'bolder' }}>Je suis <br />Kokou Florian</span><br />
                        <span style={{ fontSize: 25 }}>Elève ingénieur en ingénierie informatique et réseau.</span>
                    </p>
                    <Button variant="success" className='me-4 pt-2 sm-pb-2'>
                        Contacts me
                    </Button>
                    <Button variant="secondary" onClick={handleShow}>
                        Check my CV
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>MY Curiculium Vitae</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className='text-center'>
                            <Image rounded src={myCV} className='' alt="myCV" style={{ maxWidth: '90%', height: '90%' }} />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="success" onClick={handleClose} href='#'>
                                Email me
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
