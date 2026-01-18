import React, { useState } from 'react';
import { agileValues } from '../data/agileValues';
import { agilePrinciples } from '../data/agilePrinciples';
import './Agile.css';

const Agile = () => {
    const [selectedValue, setSelectedValue] = useState(null);

    return (
        <div className="agile-container">
            {/* Header Section */}
            <div className="header-section">
                <div className="principles-title" style={{ margin: '0 auto', marginBottom: '1rem' }}>
                    <span className="bounce" style={{ display: 'inline-block', marginRight: '1rem' }}>✨</span>
                    4 Values Agile
                    <span className="bounce" style={{ display: 'inline-block', marginLeft: '1rem', animationDelay: '0.1s' }}>✨</span>
                </div>

                {/* 4 Values in a Linear Line */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '2rem',
                    flexWrap: 'wrap',
                    marginTop: '1.1rem',
                    marginBottom: '2rem'
                }}>
                    {agileValues.map((val, idx) => (
                        <div
                            key={idx}
                            className={`value-card ${selectedValue === val ? 'selected' : ''}`}
                            onClick={() => setSelectedValue(val)}
                            style={{
                                width: '200px',
                                height: '200px',
                                background: 'white',
                                borderRadius: '20px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                border: selectedValue === val ? '3px solid var(--primary)' : '1px solid white',
                                boxShadow: selectedValue === val ? '0 0 20px var(--primary-glow)' : 'var(--glass-shadow)',
                                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                            }}
                        >
                            <div className="card-icon" style={{ marginBottom: '1rem', height: '10%' }}>
                                <h3 className="card-title" style={{ textAlign: 'center', fontSize: '1rem' }}>{val.icon}{val.title}</h3>
                            </div>

                        </div>
                    ))}
                </div>

                {/* Detail View for Values */}
                {selectedValue && (
                    <div className="detail-view">
                        <button className="close-btn" onClick={() => setSelectedValue(null)}>✕</button>
                        <div className="detail-header">
                            <span className="detail-icon">{selectedValue.icon}</span>
                            <h2 className="detail-title">{selectedValue.title}</h2>
                        </div>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginTop: '1rem' }}>{selectedValue.definition}</p>
                    </div>
                )}
            </div>

            {/* 12 Agile Principles */}
            <div className="principles-section">
                <div className="principles-title" style={{ margin: '0 auto', marginBottom: '1rem' }}>
                    <span className="bounce" style={{ display: 'inline-block', marginRight: '1rem' }}>✨</span>
                    12 Principes Agile
                    <span className="bounce" style={{ display: 'inline-block', marginLeft: '1rem', animationDelay: '0.1s' }}>✨</span>
                </div>

                <div className="principles-grid">
                    {agilePrinciples.map((principle, idx) => (
                        <div key={idx} className="principle-card">
                            <h3 className="principle-title">
                                {principle.icon} {principle.title}
                            </h3>
                            <div className="principle-definition">
                                {principle.definition}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Agile;