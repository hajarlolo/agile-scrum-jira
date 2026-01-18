import React, { useState } from 'react';
import { jiraIntro, jiraLifecycle, jiraReports, jiraWhy, jiraDefinitions } from '../data/jiraData';
import Card from '../components/Card';

const Jira = () => {
    const [selectedStep, setSelectedStep] = useState(null);
    const [selectedReport, setSelectedReport] = useState(null);

    return (
        <div className="jira-container">
            {/* 1. Intro Section */}
            <section style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1>{jiraIntro.title}</h1>
                <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                    {jiraIntro.description}
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                    {jiraIntro.keyPoints.map((point, idx) => (
                        <div key={idx} className="glass-card" style={{ padding: '1rem 2rem' }}>
                            ✅ {point}
                        </div>
                    ))}
                </div>
            </section>

            {/* 2. Lifecycle Timeline */}
            <section style={{ marginBottom: '4rem' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>🏗️ Cycle de Vie d'un Projet Jira</h2>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    position: 'relative',
                    flexWrap: 'wrap',
                    gap: '1rem'
                }}>
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '0',
                        right: '0',
                        height: '4px',
                        background: 'rgba(0,0,0,0.1)',
                        zIndex: 0,
                        transform: 'translateY(-50%)',
                        display: window.innerWidth < 768 ? 'none' : 'block'
                    }} />

                    {jiraLifecycle.map((step) => (
                        <div
                            key={step.id}
                            style={{ position: 'relative', zIndex: 1, textAlign: 'center', cursor: 'pointer' }}
                            onClick={() => setSelectedStep(step)}
                        >
                            <div style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                background: step.color,
                                border: selectedStep?.id === step.id ? '4px solid white' : 'none',
                                boxShadow: selectedStep?.id === step.id ? '0 0 0 4px var(--primary)' : '0 4px 6px rgba(0,0,0,0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1rem',
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '1.5rem',
                                transition: 'all 0.3s'
                            }}>
                                {step.id}
                            </div>
                            <h4 style={{ color: step.color }}>{step.step}</h4>
                        </div>
                    ))}
                </div>

                {/* Lifecycle Detail View */}
                {selectedStep && (
                    <div className="detail-view">
                        <button className="close-btn" onClick={() => setSelectedStep(null)}>✕</button>
                        <h3 style={{ color: selectedStep.color, marginBottom: '0.5rem', fontSize: '1.5rem' }}>
                            {selectedStep.id}. {selectedStep.step}
                        </h3>
                        <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>{selectedStep.description}</p>
                        <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-muted)' }}>
                            {selectedStep.details.map((detail, i) => (
                                <li key={i} style={{ marginBottom: '0.5rem' }}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </section>

            {/* 3. Definitions Section */}
            <section style={{ marginBottom: '4rem' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>📖 DÉFINITIONS ESSENTIELLES JIRA</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                    {jiraDefinitions.map((def, idx) => (
                        <div key={idx} className="glass-card">
                            <h3 style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span>{def.icon}</span> {def.title}
                            </h3>
                            <p style={{ fontSize: '0.95rem' }}>{def.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. Why Jira */}
            <section className="glass-card" style={{ textAlign: 'center', background: 'white', marginBottom: '4rem' }}>
                <h2>🔍 {jiraWhy.title}</h2>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', margin: '2rem 0' }}>
                    {jiraWhy.points.map((p, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ color: '#4ade80' }}>✔</span> {p}
                        </div>
                    ))}
                </div>
                <blockquote style={{
                    fontSize: '1.5rem',
                    fontStyle: 'italic',
                    color: 'var(--primary)',
                    borderLeft: '4px solid var(--primary)',
                    margin: '0 auto',
                    padding: '1rem 2rem',
                    maxWidth: '800px',
                    background: 'var(--bg-dark)'
                }}>
                    "{jiraWhy.quote}"
                </blockquote>
            </section>

            {/* 5. Reports Section */}
            <section style={{ marginBottom: '4rem' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>📊 Rapports Jira Essentiels</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {jiraReports.map((report, idx) => (
                        <Card
                            key={idx}
                            title={report.title}
                            icon={report.icon}
                            onClick={() => setSelectedReport(report)}
                            className="text-center"
                            style={{
                                border: selectedReport?.title === report.title ? '2px solid var(--primary)' : '1px solid white'
                            }}
                        />
                    ))}
                </div>
                {/* Reports Detail View (Inline) */}
                {selectedReport && (
                    <div className="detail-view">
                        <button className="close-btn" onClick={() => setSelectedReport(null)}>✕</button>
                        <div className="detail-header">
                            <span className="detail-icon">{selectedReport.icon}</span>
                            <h2 className="detail-title">{selectedReport.title}</h2>
                        </div>
                        <div>
                            <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Définition</h4>
                            <p style={{ marginBottom: '1.5rem' }}>{selectedReport.definition}</p>

                            <h4 style={{ color: 'var(--secondary)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Usage</h4>
                            <p>{selectedReport.usage}</p>
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
};

export default Jira;
