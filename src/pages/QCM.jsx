import React, { useState } from 'react';
import Button from '../components/Button';
import { players as initialPlayers, questions as allQuestions } from '../data/questions';

const QCM = () => {
    const [players, setPlayers] = useState([...initialPlayers]);
    const [currentPlayer, setCurrentPlayer] = useState(null);

    // Game State
    const [completedQuestions, setCompletedQuestions] = useState([]); // Array of indices 0-17

    // Modal State
    const [modalOpen, setModalOpen] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);

    // Feedback State (inside modal)
    const [, setSelectedAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [wrongAnswers, setWrongAnswers] = useState([]);

    const choosePlayer = () => {
        if (players.length === 0) {
            setPlayers([...initialPlayers]);
            setCompletedQuestions([]); 
            return;
        }
        const idx = Math.floor(Math.random() * players.length);
        setCurrentPlayer(players[idx]);
        setPlayers(prev => prev.filter((_, i) => i !== idx));
    };

    const handleCardClick = (index) => {
        if (!currentPlayer) return; // Should be disabled anyway, but safety check
        if (completedQuestions.includes(index)) return; // Already done

        setCurrentQuestionIndex(index);
        setModalOpen(true);
        resetQuestionState();
    };

    const resetQuestionState = () => {
        setSelectedAnswer(null);
        setIsCorrect(null);
        setWrongAnswers([]);
    };

    const handleAnswer = (option) => {
        if (isCorrect) return;

        const question = allQuestions[currentQuestionIndex];
        const correct = option === question.answer;

        if (correct) {
            setSelectedAnswer(option);
            setIsCorrect(true);

            // Success Logic
            setTimeout(() => {
                setCompletedQuestions(prev => [...prev, currentQuestionIndex]);
                setModalOpen(false);
                setCurrentPlayer(null); // Reset player to force new selection
            }, 1500); // 1.5s delay to see success animation
        } else {
            if (!wrongAnswers.includes(option)) {
                setWrongAnswers([...wrongAnswers, option]);
            }
            setSelectedAnswer(option);
            setIsCorrect(false);
        }
    };

    // Render 18 cards
    // If questions.length < 18, we might have an issue, but we assume 18 exists.
    // Safely map 0..17
    const cards = Array.from({ length: 18 }, (_, i) => i);

    return (
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center', padding: '2rem' }}>
            {/* Header / Player Selection */}
            <div className="header-controls" style={{
                background: 'rgba(255,255,255,0.1)',
                padding: '1rem',
                borderRadius: '20px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginTop:'0'}}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <h1>🎲 Jeu QCM</h1>
                    </div>

                    <div style={{ flex: 1, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                        <Button onClick={choosePlayer} disabled={!!currentPlayer} variant={currentPlayer ? 'secondary' : 'primary'}>
                            {currentPlayer ? "Joueur en cours..." : "Choisir un Joueur"}
                        </Button>
                        <p style={{ marginTop: '0.5rem', opacity: 0.8 }}>Joueurs restants : {players.length}</p>
                    </div>

                    <div style={{ minWidth: '200px', textAlign: 'right' }}>
                        {currentPlayer ? (
                            <h2 className="animate-pop" style={{ color: 'var(--accent)', margin: 0 }}>
                                Joue : <span style={{ textDecoration: 'underline' }}>{currentPlayer}</span>
                            </h2>
                        ) : (
                            <h2 style={{ opacity: 0.3, margin: 0 }}>En attente...</h2>
                        )}
                    </div>
                </div>
            </div>

            {/* Questions Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                gap: '1.5rem',
                opacity: currentPlayer ? 1 : 0.5,
                transition: 'opacity 0.3s ease'
            }}>
                {cards.map((idx) => {
                    const isCompleted = completedQuestions.includes(idx);
                    const isCardDisabled = !currentPlayer || isCompleted;

                    return (
                        <div
                            key={idx}
                            onClick={() => !isCardDisabled && handleCardClick(idx)}
                            className={`qcm-card ${isCompleted ? 'completed' : ''}`}
                            style={{
                                aspectRatio: '1',
                                background: isCompleted ? 'var(--success-bg)' : 'rgba(255, 255, 255, 0.1)',
                                border: isCompleted ? '2px solid var(--success)' : '1px solid rgba(255, 255, 255, 0.2)',
                                borderRadius: '15px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontSize: '2rem',
                                fontWeight: 'bold',
                                cursor: isCardDisabled ? 'not-allowed' : 'pointer',
                                position: 'relative',
                                overflow: 'hidden',
                                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                transform: isCardDisabled ? 'scale(0.95)' : 'scale(1)',
                                filter: (!currentPlayer && !isCompleted) ? 'grayscale(1)' : 'none',
                                boxShadow: (!isCardDisabled) ? '0 10px 20px rgba(0,0,0,0.1)' : 'none'
                            }}
                        >
                            <span style={{ zIndex: 2, color: isCompleted ? 'var(--success)' : 'inherit' }}>{idx + 1}</span>

                            {/* Hover effect overlay if active */}
                            {!isCardDisabled && (
                                <div className="card-hover-overlay" />
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Question Modal */}
            {modalOpen && currentQuestionIndex !== null && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0, 0, 0, 0.8)',
                    backdropFilter: 'blur(8px)',
                    zIndex: 1000,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '1rem'
                }}>
                    <div className="modal-content glass-card" style={{
                        width: '100%',
                        maxWidth: '600px',
                        padding: '2rem',
                        position: 'relative',
                        backgroundColor:'rgba(138, 131, 131, 0.85)',
                        border: '1px solid var(--glass-border)',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)'
                    }}>

                        <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>Question {currentQuestionIndex + 1}</h3>
                        <h2 style={{ fontSize: '1.4rem', marginBottom: '2rem', lineHeight: '1.4' }}>
                            {allQuestions[currentQuestionIndex].question}
                        </h2>

                        <div style={{ display: 'grid', gap: '1rem' }}>
                            {allQuestions[currentQuestionIndex].options.map((opt) => {
                                const isWrong = wrongAnswers.includes(opt);
                                const isRevealedCorrect = isCorrect && opt === allQuestions[currentQuestionIndex].answer;

                                let bg = 'rgba(255,255,255,0.05)';
                                let border = '1px solid rgba(255,255,255,0.1)';

                                if (isWrong) {
                                    bg = 'rgba(220, 38, 38, 0.2)';
                                    border = '1px solid #dc2626';
                                }
                                if (isRevealedCorrect) {
                                    bg = 'rgba(22, 163, 74, 0.2)';
                                    border = '1px solid #16a34a';
                                }

                                return (
                                    <button
                                        key={opt}
                                        onClick={() => handleAnswer(opt)}
                                        disabled={isCorrect} // Disable all clicking once correct
                                        style={{
                                            padding: '1rem',
                                            borderRadius: '10px',
                                            background: bg,
                                            border: border,
                                            color: 'rgba(16, 13, 36, 0.85)',
                                            textAlign: 'left',
                                            cursor: isCorrect ? 'default' : 'pointer',
                                            fontSize: '1rem',
                                            transition: 'all 0.2s ease',
                                        }}
                                        className="option-btn"
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <span>{opt}</span>
                                            {isWrong && <span>❌</span>}
                                            {isRevealedCorrect && <span>✅</span>}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        {isCorrect && (
                            <div style={{ marginTop: '1.5rem', color: '#215132ff', fontWeight: 'bold' }}>
                                Excellent ! Retour au jeu...
                            </div>
                        )}
                        {!isCorrect && wrongAnswers.length > 0 && (
                            <div style={{ marginTop: '1.5rem', color: '#760f0fff' }}>
                                Ce n'est pas la bonne réponse, réessaie !
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default QCM;
