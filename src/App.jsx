import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Agile from './pages/Agile';
import Scrum from './pages/Scrum';
import QCM from './pages/QCM';
import Scenarios from './pages/Scenarios';
import Jira from './pages/Jira';

function App() {
    const [currentPage, setCurrentPage] = useState('Agile');

    const renderPage = () => {
        switch (currentPage) {
            case 'Agile': return <Agile />;
            case 'Scrum': return <Scrum />;
            case 'QCM': return <QCM />;
            case 'Scenarios': return <Scenarios />;
            case 'Jira': return <Jira />;
            default: return <Agile />;
        }
    }

    return (
        <div className="app-container">
            <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <main className="main-content">
                {renderPage()}
            </main>
        </div>
    );
}

export default App;
