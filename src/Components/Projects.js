import React, { useState } from 'react';
import { Card, Row, Col, Button, Modal, Image, Container } from 'react-bootstrap';
import Model from '../Assets/Json/Projects.json';
//import './css/project_style.css';

function Projects() {
    const [modalShow, setModalShow] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 4;

    // Fonction pour ouvrir la modal
    const handleModalOpen = (project) => {
        setSelectedProject(project);
        setModalShow(true);
    };

    // Fonction pour fermer la modal
    const handleModalClose = () => {
        setModalShow(false);
        setSelectedProject(null);
    };

    // Calcul du premier et dernier index des données affichées
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = Model.slice(firstIndex, lastIndex);

    // Calcul du nombre total de pages
    const totalPages = Math.ceil(Model.length / recordsPerPage);

    // Gestion du changement de page
    const changePage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Pagination component
    const PaginationComponent = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }

        return (
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                        <button onClick={() => changePage(number)} className='page-link filter'>{number}</button>
                    </li>
                ))}
            </ul>
        );
    };

    //fonction main du project
    return (
        <div className='p-3' id='title3'>
            <Container>
            <h2 className='text-center me-2 pt-2 pb-2' style={{ fontSize: 40, fontWeight: 'bolder' }}>My Projects</h2>
                <Row className='gx-4 justify-content-center'>
                    {records.map((project, index) => (
                        <Col key={index} xs={12} sm={6} md={4} lg={3} className='pb-2'>
                            <Card style={{ width: 'auto' }}>
                                <Card.Body>
                                    <Card.Title>
                                        <Image
                                            src={require(`../Assets/image/${project.ImgScr}`)} alt={`Image ${index}`}
                                            roundedCircle
                                            className='m-2'
                                            style={{ width: '50px', height: '50px' }}
                                        />
                                        <span>{project.Name}</span>
                                    </Card.Title>
                                    <Card.Text>
                                        <p>{project.Description}</p>
                                    </Card.Text>
                                    <Card.Footer>
                                        <Button variant="success" className='clicked' onClick={() => handleModalOpen(project)}>Check out</Button>
                                    </Card.Footer>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <PaginationComponent />
            </Container>
            <Modal show={modalShow} onHide={handleModalClose} size="lg" centered>
                {selectedProject && (
                    <>
                        <Modal.Header closeButton className='bg-light'>
                            <Modal.Title>{selectedProject.Name}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Image
                                src={require(`../Assets/image/${selectedProject.ImgScr}`)} alt={`Image ${selectedProject.Name}`}
                                className='m-2'
                                style={{ width: '50%', height: 'auto' }}
                            />
                            <p>{selectedProject.Description}</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={handleModalClose} className='clicked'>Close</Button>
                        </Modal.Footer>
                    </>
                )}
            </Modal>
        </div>
    );
}

export default Projects;
