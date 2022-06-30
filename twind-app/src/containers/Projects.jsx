import * as React from 'react';
import Container from '../components/Container';
import ProjectList from '../components/ProjectList';

const PROJECTS = [
    {
        id: 1,
        name: 'Cool stuff',
        customer: 'Pöhinä Inc.',
        budget: 10000000,
        closed: false,
    },
    {
        id: 2,
        name: 'Legacy stuff',
        customer: 'Old Company',
        budget: 5500,
        closed: false,
    },
    {
        id: 3,
        name: 'Solid stuff',
        customer: 'Solid Works',
        budget: 2000000,
        closed: true,
    },
];

const Projects = () => {
    return (
        <Container>
            <h1>Your projects</h1>
            <ProjectList projects={PROJECTS} />
        </Container>
    );
};

export default Projects;
