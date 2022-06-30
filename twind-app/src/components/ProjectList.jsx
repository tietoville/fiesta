import * as React from 'react';
import ProjectCard from './ProjectCard';

const ProjectList = ({ projects }) => {
    return (
        <ul className="flex flex-col">
            {projects.map(project => <ProjectCard key={project.id} project={project} />)}
        </ul>
    );
};

export default ProjectList;
