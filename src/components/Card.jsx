import React from 'react';

const Card = ({ title, icon, onClick, className }) => {
    return (
        <div
            className={`glass-card ${className || ''}`}
            onClick={onClick}
            style={{ cursor: onClick ? 'pointer' : 'default' }}
        >
            {icon && <div className="card-icon" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{icon}</div>}
            <h3 className="card-title" style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--text-main)' }}>{title}</h3>
        </div>
    );
};

export default Card;
