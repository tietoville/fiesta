import * as React from 'react';

const ProjectCard = ({ project }) => {
    const closeBtn = 'w-2/12 text-white font-bold bg-red-600 hover:bg-red-900';
    const openBtn = 'w-2/12 text-white font-bold bg-green-600 hover:bg-green-900';
    return (
        <li className="flex w-full my-4 p-4 border border-solid border-gray-50 rounded-md shadow-lg">
            <dl className="flex w-10/12 flex-row">
                <div className="w-4/12">
                    <dt className="mb-2">Name</dt>
                    <dd>{project.name}</dd>
                </div>
                <div className="w-4/12">
                    <dt className="mb-2">Customer name</dt>
                    <dd>{project.customer}</dd>
                </div>
                <div className="w-4/12">
                    <dt className="mb-2">Budget</dt>
                    <dd>{project.budget}</dd>
                </div>
            </dl>
            <button className={project.closed ? closeBtn : openBtn}>{project.closed ? 'Re-open' : 'Close'}</button>
        </li>
    );
};

export default ProjectCard;
