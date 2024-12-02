import React from 'react';
import Link from 'next/link';

interface ProjectProps {
    title: string;
    description: string;
    link: string;
}


const ProjectCard: React.FC<ProjectProps> = ({ title, description, link }) => (
    <div className="bg-white text-black rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="mb-4">{description}</p>
        <Link href={link} title="En savoir plus" className="text-blue-500 hover:underline">
            En savoir plus
        </Link>
    </div>
);

export default ProjectCard;
