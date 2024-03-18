import React from 'react';
import myPicture from '../Assets/image/myPicture.png'
import { Container,Row, Col, Image, Accordion } from 'react-bootstrap';


function About() {
    return (
        <Container>
            <Row className="align-items-center pt-3 pb-3">
                <h2 className='text-center me-2 pt-2'>À propos de moi</h2>
                <Col xs={12} md={6} className=' mb-3 mb-md-1 pt-3'>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>WHO AM I ?</Accordion.Header>
                            <Accordion.Body>
                                Je suis <span style={{ fontSize: 15, fontWeight: 'bolder' }}>Kokou Florian</span>, <br />
                                Je suis actuellement étudiant en ingénierie informatique et réseaux. Mon parcours
                                académique m'a doté d'une solide compréhension des concepts fondamentaux de l'informatique,
                                ainsi que des compétences pratiques dans le développement logiciel et le réseaux.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>WHAT I'VE LERNED !</Accordion.Header>
                            <Accordion.Body>
                                Au fil de mes <span style={{ fontSize: 15, fontWeight: 'bolder' }}>Etudes universitaires</span>,<br />
                                j'ai acquis une expertise dans un large éventail de domaines, notamment la programmation, les bases de données,
                                la sécurité informatique, le cloud computing et la gestion des réseaux. Je suis constamment en quête de nouvelles
                                connaissances et je suis toujours ouvert aux défis qui me permettront de continuer à apprendre et à me développer en tant qu'ingénieur.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>MY EXPERIENCE !</Accordion.Header>
                            <Accordion.Body>
                                En dehors de mes études,<br />
                                je m'engage activement dans des projets personnels et extra-scolaires, où je mets en pratique mes compétences
                                en codage et en conception de systèmes. Je suis également passionné par la résolution de problèmes et j'aime
                                travailler en équipe pour trouver des solutions innovantes.<br />

                                Mon objectif est de contribuer de manière significative à l'industrie de la technologie en proposant des solutions novatrices et en relevant les défis complexes qui se présentent. Je suis convaincu que mon engagement, ma passion et mes compétences techniques me permettront de réussir dans ce domaine en constante évolution.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>MY PURPOSE !</Accordion.Header>
                            <Accordion.Body>
                                Mon <span style={{ fontSize: 15, fontWeight: 'bolder' }}>objectif</span>,<br /> 
                                C'est de contribuer de manière significative à l'industrie de la technologie en 
                                proposant des solutions novatrices et en relevant les défis complexes qui se présentent. 
                                Je suis convaincu que mon engagement, ma passion et mes compétences techniques me permettront 
                                de réussir dans ce domaine en constante évolution.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
                <Col xs={12} md={6} className="text-center">
                    <Image rounded src={myPicture} className='' alt="myPicture" style={{ maxWidth: '60%', height: 'auto' }} />
                </Col>
            </Row>
        </Container>
    )
}

export default About
