import * as React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const linkClasses = 'text-white px-4 py-2 focus:bg-purple-600 focus:outline-none focus:ring-white hover:bg-purple-600 hover:cursor-pointer';

    return (
        <nav>
            <ul className="flex flex-row">
                <li>
                    <Link className={linkClasses} to="/">Dashboard</Link>
                </li>
                <li>
                    <Link className={linkClasses} to="/projects">Projects</Link>
                </li>
            </ul>
        </nav>
    )
};

export default Navigation;
