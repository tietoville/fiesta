import * as React from 'react';

const Header = ({ children }) => {
    return (
        <header className="flex flex-row justify-between items-center shadow-lg px-8 py-4 bg-purple-900">
            { children }
        </header>
    );
};

export default Header;
