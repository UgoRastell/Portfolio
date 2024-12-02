import React from 'react';
import ProjectCard from '@/components/ProjectCard';

const projects = [
    {
        title: 'Projet 1',
        description: 'Description du projet 1.',
        link: '/projects/projet-1',
    },
    {
        title: 'Projet 2',
        description: 'Description du projet 2.',
        link: '/projects/projet-2',
    },
];

const ProjectPage: React.FC = () => {
    return (
        <div>
            <h1>Mes Projets</h1>
            <div className="grid gap-4">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectPage;
