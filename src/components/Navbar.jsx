import React from 'react';

const Navbar = ({ currentPage, setCurrentPage }) => {
    // Concepts names are standard in English but understood in French context.
    const pages = ['Agile', 'Scrum', 'Jira', 'QCM', 'Scenarios'];

    return (
        <nav className="navbar">
            {pages.map(page => (
                <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`nav-item ${currentPage === page ? 'active' : ''}`}
                >
                    {page}
                </button>
            ))}
        </nav>
    );
};

export default Navbar;
