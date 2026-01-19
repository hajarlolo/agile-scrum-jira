import React, { useState } from 'react';
import Card from '../components/Card';
import { roles, events, artefacts, pillars } from '../data/scrumData';

const Scrum = () => {
    // Separate state for each section to allow contextual display
    const [selectedRole, setSelectedRole] = useState(null);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [selectedArtefact, setSelectedArtefact] = useState(null);
    const [selectedPillar, setSelectedPillar] = useState(null);


    // Reusable Detail Component
    const DetailSection = ({ item, onClose }) => {
        if (!item) return null;
        return (
            <div className="detail-view">
                <button className="close-btn" onClick={onClose}>✕</button>
                <div className="detail-header">
                    <span className="detail-icon">{item.icon}</span>
                    <h2 className="detail-title">{item.title}</h2>
                </div>
                <div style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6', fontSize: '1rem' }}>
                    {item.definition}
                </div>
            </div>
        );
    };

    return (
        <div style={{ paddingBottom: '4rem' }}>
            {/* 0. PILIERS DE SCRUM */}
            <section style={{ marginBottom: '4rem' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    ▪️ Les 3 piliers de Scrum
                </h2>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                    {pillars.map((pillar) => (
                        <Card
                            key={pillar.title}
                            title={pillar.title}
                            icon={pillar.icon}
                            onClick={() => setSelectedPillar(pillar)}
                            className="glass-card"
                            style={{
                                width: '200px',
                                textAlign: 'center',
                                border: selectedPillar?.title === pillar.title
                                    ? '2px solid var(--primary)'
                                    : '1px solid white'
                            }}
                        />
                    ))}
                </div>

                <DetailSection
                    item={selectedPillar}
                    onClose={() => setSelectedPillar(null)}
                />
            </section>
            {/* 1. ROLES */}
            <section style={{ marginBottom: '4rem' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>▪️ Rôles Scrum</h2>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                    {roles.map((role) => (
                        <Card
                            key={role.title}
                            title={role.title}
                            icon={role.icon}
                            onClick={() => setSelectedRole(role)}
                            className={`glass-card`}
                            style={{
                                width: '200px',
                                textAlign: 'center',
                                border: selectedRole?.title === role.title ? '2px solid var(--primary)' : '1px solid white'
                            }}
                        />
                    ))}
                </div>
                <DetailSection item={selectedRole} onClose={() => setSelectedRole(null)} />
            </section>

            {/* 2. EVENTS */}
            <section style={{ marginBottom: '4rem' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>▪️ Événements Scrum</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
                    {events.map((event) => (
                        <Card
                            key={event.title}
                            title={event.title}
                            icon={event.icon}
                            onClick={() => setSelectedEvent({
                                ...event,
                                definition: `Objectif: ${event.objective}\n\nParticipants: ${event.participants}\n\nQuand: ${event.when}`
                            })}
                            style={{
                                border: selectedEvent?.title === event.title ? '2px solid var(--primary)' : '1px solid white'
                            }}
                        />
                    ))}
                </div>
                <DetailSection item={selectedEvent} onClose={() => setSelectedEvent(null)} />
            </section>

            {/* 3. ARTEFACTS */}
            <section style={{ marginBottom: '4rem' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>▪️ Artefacts Scrum</h2>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                    {artefacts.map((art) => (
                        <Card
                            key={art.title}
                            title={art.title}
                            icon={art.icon}
                            onClick={() => setSelectedArtefact(art)}
                            style={{
                                border: selectedArtefact?.title === art.title ? '2px solid var(--primary)' : '1px solid white'
                            }}
                        />
                    ))}
                </div>
                <DetailSection item={selectedArtefact} onClose={() => setSelectedArtefact(null)} />
            </section>
        </div>
    );
};

export default Scrum;
