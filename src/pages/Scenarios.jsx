import React, { useState } from 'react';
import { scenarios } from '../data/scenarios';
import Button from '../components/Button';

const Scenarios = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [steps, setSteps] = useState(shuffle(scenarios[0]?.steps || []));
    const [status, setStatus] = useState(null); // 'idle', 'correct', 'wrong'

    // Mélange aléatoire des étapes
    function shuffle(array) {
        return [...array]
            .map((value) => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
    }

    // Déplacer une étape vers le haut ou le bas
    const moveStep = (from, to) => {
        const newSteps = [...steps];
        [newSteps[from], newSteps[to]] = [newSteps[to], newSteps[from]];
        setSteps(newSteps);
        setStatus(null); // Reset status on move
    };

    // Vérifier si l’ordre est correct
    const checkOrder = () => {
        const correctSteps = scenarios[currentIndex].steps;
        const isCorrect = steps.every((step, i) => step === correctSteps[i]);
        if (isCorrect) {
            setStatus('correct');
        } else {
            setStatus('wrong');
        }
    };

    // Passer au scénario suivant
    const nextScenario = () => {
        const nextIndex = (currentIndex + 1) % scenarios.length;
        setCurrentIndex(nextIndex);
        setSteps(shuffle(scenarios[nextIndex].steps));
        setStatus(null);
    };

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ marginBottom: '2rem' }}>
                🧩 {scenarios[currentIndex]?.title}
            </h1>

            <p style={{ textAlign: 'center', marginBottom: '2rem', fontStyle: 'italic' }}>
                Réorganisez les étapes ci-dessous pour correspondre au processus correct.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="glass-card"
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '1rem 1.5rem',
                            // Visual Feedback logic
                            background: status === 'correct' ? 'var(--success-bg)' : (status === 'wrong' ? 'var(--error-bg)' : undefined),
                            borderColor: status === 'correct' ? 'var(--success)' : (status === 'wrong' ? 'var(--error)' : undefined),
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <span style={{ fontSize: '1.1rem' }}>{step}</span>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            {index > 0 && (
                                <button
                                    onClick={() => moveStep(index, index - 1)}
                                    style={arrowBtnStyle}
                                >▲</button>
                            )}
                            {index < steps.length - 1 && (
                                <button
                                    onClick={() => moveStep(index, index + 1)}
                                    style={arrowBtnStyle}
                                >▼</button>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <div>
                    <Button onClick={checkOrder} variant="primary">
                        Vérifier l'Ordre
                    </Button>
                    <span style={{ display: 'inline-block', width: '20px' }}></span>
                    <Button onClick={nextScenario}>
                        Scénario Suivant
                    </Button>
                </div>

                {status === 'correct' && <h3 style={{ color: 'var(--success)' }}>✅ Ordre Parfait !</h3>}
                {status === 'wrong' && <h3 style={{ color: 'var(--error)' }}>❌ Incorrect, essayez encore.</h3>}
            </div>
        </div>
    );
};

const arrowBtnStyle = {
    background: 'rgba(0,0,0,0.1)',
    border: 'none',
    color: 'var(--text-main)',
    borderRadius: '5px',
    width: '30px',
    height: '30px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background 0.2s'
};

export default Scenarios;
