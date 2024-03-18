import React from 'react';
import { Container } from 'react-bootstrap';
import skills from '../Assets/Json/Skills.json';
import '../Assets/css/Components.css';

function Skills() {
    return (
        <Container>
            <h2 className='text-center me-2 pt-2 pb-2'>My Skills</h2>
            <div className="logos">
                <div class="logos-slide">
                    {skills.map((image, index) => (
                        <img
                            key={index}
                            src={require(`../Assets/image/${image.Image}`)}
                            alt={`Skill ${index}`}
                            className="slide"
                        />
                    ))}
                </div>
            </div>
        </Container>
    );
}
export default Skills;
